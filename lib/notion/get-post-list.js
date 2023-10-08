import { getAllPages } from '@/lib/notion/get-all-pages'

const databaseId = process.env.NOTION_BLOG_PAGE
const viewId = process.env.NOTION_BLOG_PAGE_VIEW

const getAllPosts = async () => {
  return await getAllPages(databaseId, viewId)
}

const getPostsCategoryByDate = async () => {
  const data = await getAllPosts()
  const categoryByDate = data.reduce((acc, cur) => {
    const date = new Date(cur.date)
    const year = date.getFullYear()

    const category = acc.find(c => c.year === year)
    if (category) {
      category.posts.push(cur)
    } else {
      acc.push({ year, posts: [cur] })
    }
    return acc
  }, [])
  return categoryByDate
}

const getAllPageSlug = async () => {
  const result = await getAllPosts()
  return result.map(post => ({ slug: post.slug }))
}

export { getAllPageSlug, getAllPosts, getPostsCategoryByDate }
