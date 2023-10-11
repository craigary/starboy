import { notionFetchClient } from '@/lib/notion-next/client'
import { notionImageUrlParser } from '@/lib/notion-next/notion-image-loader'
import { getPreviewImage } from '@/lib/preview-image'
import pMap from 'p-map'

const databaseId = process.env.NOTION_MY_SERVICES_PAGE

const getMyServices = async () => {
  const data = await notionFetchClient(`/databases/${databaseId}/query`, {
    method: 'POST'
  })

  const modifiedData = data.map(item => {
    const { platform, unit, description, link, price, name } = item.properties
    return {
      id: item.id,
      icon: item.icon.file,
      platform: platform.multi_select,
      unit: unit.select,
      description: description.rich_text?.[0]?.plain_text ?? null,
      link: link.url,
      price: price.number,
      name: name.title[0]?.plain_text ?? null
    }
  })

  const getBlurImageData = async item => {
    const key = item.id + '-icon'
    const newUrl = notionImageUrlParser(item.icon.url, item.id)

    item.icon.url = newUrl
    const { dataURIBase64, aspectRatio } = await getPreviewImage(
      newUrl,
      { cacheKey: key },
      512
    )

    item.icon.blur = dataURIBase64
    item.icon.aspectRatio = aspectRatio

    return item
  }

  const dataWithImagesBlur = await pMap(modifiedData, getBlurImageData, {
    concurrency: 10
  })

  return dataWithImagesBlur
}

export { getMyServices }
