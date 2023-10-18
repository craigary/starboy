import { navigation } from '@/lib/get-navigation'
import { getAllBlogPostsMetas } from '@/lib/sanity/get-blog-posts'

export const revalidate = 60
export const runtime = 'edge'

const getStaticRoutes = async () => {
  const repo = 'craigary/starboy'
  const token = process.env.GITHUB_ACCESS_TOKEN

  const url = `https://api.github.com/repos/${repo}/commits`
  const data = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  const githubCommits = await data.json()
  const lastCommitDate = new Date(githubCommits[0].commit.author.date)

  const staticRoutes = navigation.reduce((prev, curr) => {
    if (curr.id !== 'social') {
      return [
        ...prev,
        ...curr.items.map(item => ({
          url: `https://craig.wf${item.link}`,
          lastModified: lastCommitDate,
          changeFrequency: item?.frequency ?? 'monthly'
        }))
      ]
    }
    return prev
  }, [])

  return staticRoutes
}

const getDynamicRoutes = async () => {
  const res = await getAllBlogPostsMetas()
  const routes = res.map(item => ({
    url: `https://craig.wf/blog/${item.slug}`,
    lastModified: new Date(item.publishedAt ?? item._createdAt),
    changeFrequency: 'weekly'
  }))
  return routes
}

export default async function sitemap() {
  const staticRoutes = await getStaticRoutes()
  const blogRoutes = await getDynamicRoutes()
  return [...staticRoutes, ...blogRoutes]
}
