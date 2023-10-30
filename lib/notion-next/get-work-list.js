import { notionFetchClient } from '@/lib/notion-next/client'
import { notionImageUrlParser } from '@/lib/notion-next/notion-image-parser'
import { getPreviewImage } from '@/lib/preview-image'
import pMap from 'p-map'
const databaseId = process.env.NOTION_PROJECT_ID

const getWorkList = async () => {
  const data = await notionFetchClient(`/databases/${databaseId}/query`, {
    method: 'POST'
  })

  // // Modify raw data, filter out books without cover
  const modifiedData = data.reduce((acc, item) => {
    const { Description, Image, Name } = item.properties

    const hasImage = !!Image.files?.[0]
    if (hasImage) {
      const res = notionImageUrlParser(Image.files?.[0]?.file.url, item.id)
      const newItem = {
        id: item.id,
        description: Description.rich_text?.[0]?.plain_text ?? null,
        image: res,
        name: Name.title[0]?.plain_text ?? null
      }

      acc.push(newItem)
    }

    return acc
  }, [])

  const getBlurImageData = async project => {
    const key = project.id

    const imageUrl = project.image.url

    const { dataURIBase64, aspectRatio } = await getPreviewImage(
      imageUrl,
      { cacheKey: key },
      512
    )

    project.image.blur = dataURIBase64
    project.image.aspectRatio = aspectRatio

    return project
  }

  const dataWithImagesBlur = await pMap(modifiedData, getBlurImageData, {
    concurrency: 20
  })

  return dataWithImagesBlur
}

export { getWorkList }
