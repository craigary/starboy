import { notionClient } from '@/lib/notion/client'
import { getAllPosts } from '@/lib/notion/get-post-list'
import { getPreviewImageMap } from '@/lib/preview-image'

const getPostContent = async slug => {
  if (!slug) return null
  const allPosts = await getAllPosts()
  const pageData = allPosts.filter(page => page.slug === slug)

  if (!pageData) return null

  const pageBlockId = pageData[0].id
  const recordMap = await notionClient.getPage(pageBlockId)

  const previewImageMap = await getPreviewImageMap(recordMap, 1600)
  recordMap.preview_images = previewImageMap

  return { post: pageData[0], recordMap }
}

export { getPostContent }
