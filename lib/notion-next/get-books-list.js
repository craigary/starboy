import { notionFetchClient } from '@/lib/notion-next/client'
import { notionImageUrlParser } from '@/lib/notion-next/notion-image-parser'
import { getPreviewImage } from '@/lib/preview-image'
import { compareDesc } from 'date-fns'
import pMap from 'p-map'

const databaseId = process.env.NOTION_BOOKS_PAGE

const getBooksList = async () => {
  const data = await notionFetchClient(`/databases/${databaseId}/query`, {
    method: 'POST',
    body: {
      filter: {
        property: 'Status',
        status: {
          does_not_equal: 'Unread'
        }
      },
      sorts: [
        {
          property: 'Status',
          direction: 'ascending'
        },
        {
          property: 'Progress',
          direction: 'ascending'
        },
        {
          property: 'Priority',
          direction: 'ascending'
        }
      ]
    }
  })

  // Modify raw data, filter out books without cover
  const modifiedData = data.reduce((acc, item) => {
    const { Note, Cover, Status, Name } = item.properties
    const hasCover = Cover.files?.[0]?.file?.url
    const newItem = {
      updatedAt: item.last_edited_time,
      id: item.id,
      note: Note.rich_text?.[0]?.plain_text ?? null,
      cover: hasCover
        ? {
            name: Cover.files?.[0].name,
            url: Cover.files?.[0]?.file?.url
          }
        : null,
      status: Status.status,
      name: Name.title[0]?.plain_text ?? null
    }

    if (newItem.cover) {
      acc.push(newItem)
    }

    return acc
  }, [])

  const sortedData = modifiedData.sort((a, b) =>
    compareDesc(new Date(a.updatedAt), new Date(b.updatedAt))
  )

  const getBlurImageData = async book => {
    const key = book.cover.name
    const { url } = notionImageUrlParser(book.cover.url, book.id)
    book.cover.url = url
    const { dataURIBase64, aspectRatio } = await getPreviewImage(
      url,
      { cacheKey: key },
      512
    )

    book.cover.blur = dataURIBase64
    book.cover.aspectRatio = aspectRatio

    return book
  }

  const dataWithImagesBlur = await pMap(sortedData, getBlurImageData, {
    concurrency: 10
  })

  return dataWithImagesBlur
}

export { getBooksList }
