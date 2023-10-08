import { getAllPages } from '@/lib/notion/get-all-pages'
import { getPreviewImage } from '@/lib/preview-image'
import pMap from 'p-map'

const databaseId = process.env.NOTION_STACK_PAGE
const viewId = process.env.NOTION_STACK_PAGE_VIEW

const getStackInfo = async () => {
  const data = await getAllPages(databaseId, viewId, true)

  // Generate Icon Cache
  const imageResponse = await pMap(
    data,
    async item => {
      const cacheKey = item.id
      const response = await getPreviewImage(
        item.icon_url + '&width=512',
        { cacheKey },
        512
      )
      return { ...item, icon_url_blur: response.dataURIBase64 }
    },
    {
      concurrency: 8
    }
  )

  return imageResponse
}

export { getStackInfo }
