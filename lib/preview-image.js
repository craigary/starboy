import { workersClient } from '@/lib/workers-kv/client'
// import { getPageImageUrls, normalizeUrl } from 'notion-utils'
import { getPlaiceholder } from 'plaiceholder'
import { cache } from 'react'

// export const getPreviewImageMap = async (recordMap, maxImageWidth = 1600) => {
//   const urls = getPageImageUrls(recordMap, { mapImageUrl: defaultMapImageUrl })

//   const previewImagesMap = Object.fromEntries(
//     await pMap(
//       urls,
//       async url => {
//         const cacheKey = normalizeUrl(url)
//         return [
//           cacheKey,
//           await getPreviewImage(url, { cacheKey }, maxImageWidth)
//         ]
//       },
//       {
//         concurrency: 8
//       }
//     )
//   )
//   return previewImagesMap
// }

export const createPreviewImage = async (
  url,
  { cacheKey },
  maxImageWidth = 1600
) => {
  try {
    try {
      const cachedPreviewImage = await workersClient.read(cacheKey)
      if (cachedPreviewImage) {
        return cachedPreviewImage
      }
    } catch (err) {
      // ignore redis errors
      console.warn(`redis error get "${cacheKey}"`, err.message)
    }

    const buffer = await fetch(url).then(async res =>
      Buffer.from(await res.arrayBuffer())
    )

    const {
      metadata: { height, width },
      ...plaiceholder
    } = await getPlaiceholder(buffer, { size: 10 })

    const result = {
      ...plaiceholder,
      img: { url, height, width }
    }

    if (width > maxImageWidth) {
      result.img.width = maxImageWidth
      result.img.height = Math.round((height / width) * maxImageWidth)
    }

    console.log('lqip', { ...result.metadata, url, cacheKey })

    // generate Image Width

    const previewImage = {
      originalWidth: result.img.width,
      originalHeight: result.img.height,
      aspectRatio: Math.round((height / width) * 10000) / 10000,
      dataURIBase64: result.base64
    }

    try {
      await workersClient.write(cacheKey, previewImage)
      // Expire for 72 hours
      // await upstashClient.expire(cacheKey, 259200)
    } catch (err) {
      // ignore redis errors
      console.warn(`redis error set ${cacheKey}`, err.message)
    }

    return previewImage
    // return {}
  } catch (err) {
    console.warn('failed to create preview image', url, err.message)
    return null
  }
}

export const getPreviewImage = cache(createPreviewImage)
