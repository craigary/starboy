import { navigation } from '@/lib/get-navigation'
import { getBlogPostMeta } from '@/lib/notion-next/get-post-list'

export const revalidate = 60
export const runtime = 'edge'

const websiteUrl = process.env.WEBSITE_URL

const getStaticRoutes = async () => {
  const staticRoutes = navigation.reduce((prev, curr) => {
    if (curr.id !== 'social') {
      return [
        ...prev,
        ...curr.items.map(item => ({
          url: `${websiteUrl}${item.link}`,
          changeFrequency: item?.frequency ?? 'monthly'
        }))
      ]
    }
    return prev
  }, [])

  return staticRoutes
}

const getDynamicRoutes = async () => {
  const res = await getBlogPostMeta()
  const routes = res.map(item => ({
    url: `${websiteUrl}/blog/${item.slug}`,
    lastModified: new Date(item.updatedAt),
    changeFrequency: 'weekly'
  }))
  return routes
}

export default async function sitemap() {
  const staticRoutes = await getStaticRoutes()
  const blogRoutes = await getDynamicRoutes()
  return [...staticRoutes, ...blogRoutes]
}
