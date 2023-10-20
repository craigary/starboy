import { getCoverImagePath } from '@/lib/pocket-casts'
import { pocketCastsClient } from '@/lib/pocket-casts/client'
import { getPreviewImage } from '@/lib/preview-image'
import pMap from 'p-map'

const getPodcastCoverImage = async item => {
  const uuid = item.uuid
  const coverImgUrl = getCoverImagePath(uuid)
  const { dataURIBase64: coverImgBlur } = await getPreviewImage(
    coverImgUrl,
    { cacheKey: uuid },
    480
  )
  return { ...item, coverImgUrl, coverImgBlur }
}

export async function getPodcasts() {
  await pocketCastsClient.login()
  const { podcasts: fetchedPodcasts } = await pocketCastsClient.getList()

  return await pMap(fetchedPodcasts, getPodcastCoverImage, {
    concurrency: 10
  })
}
