import { getCoverImagePath } from '@/lib/pocket-casts'
import { pocketCastsClient } from '@/lib/pocket-casts/client'
import { getPreviewImage } from '@/lib/preview-image'
import pMap from 'p-map'

const getPodcastCoverImage = async item => {
  const uuid = item.uuid
  const { blurBase, coverImgUrl } = getCoverImagePath(uuid)
  const { dataURIBase64: coverImgBlur } = await getPreviewImage(
    blurBase,
    { cacheKey: uuid },
    200
  )

  return { ...item, coverImgUrl, coverImgBlur }
}

export async function getPodcasts() {
  await pocketCastsClient.login()
  const { folders, podcasts } = await pocketCastsClient.getList()
  const folderIds = folders.map(folder => folder.folderUuid)
  const filteredPodcasts = podcasts.filter(
    item => !folderIds.includes(item.folderUuid)
  )

  return await pMap(filteredPodcasts, getPodcastCoverImage, {
    concurrency: 20
  })
}
