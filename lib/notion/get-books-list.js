import { getAllPages } from '@/lib/notion/get-all-pages'

const databaseId = process.env.NOTION_BOOKS_PAGE
const viewId = process.env.NOTION_BOOKS_PAGE_VIEW

const getBooksList = async () => {
  const data = await getAllPages(databaseId, viewId, false)

  // Generate Icon Cache
  // const imageResponse = await pMap(
  //   data,
  //   async item => {
  //     const cacheKey = item.id
  //     const response = await getPreviewImage(
  //       item.cover + '&width=512',
  //       { cacheKey },
  //       512
  //     )
  //     return { ...item, icon_url_blur: response.dataURIBase64 }
  //   },
  //   {
  //     concurrency: 8
  //   }
  // )

  return data
}

export { getBooksList }
