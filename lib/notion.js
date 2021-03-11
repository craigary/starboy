import BLOG from '@/blog.config'
export async function getAllPosts () {
  const response = await fetch(`${BLOG.notionApiEndPoint}/table/${BLOG.notionPageId}`)
  return await response.json()
}

export async function getPostBlocks (id) {
  const response = await fetch(`${BLOG.notionApiEndPoint}/page/${id}`)
  return await response.json()
}
