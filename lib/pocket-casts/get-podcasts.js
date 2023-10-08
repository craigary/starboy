import { getCoverImagePath } from '@/lib/pocket-casts'
import { pocketCastsClient } from '@/lib/pocket-casts/client'

export async function getPodcasts() {
  await pocketCastsClient.login()
  const { podcasts: fetchedPodcasts } = await pocketCastsClient.getList()
  return fetchedPodcasts.map(podcast => {
    return { ...podcast, coverImgUrl: getCoverImagePath(podcast.uuid) }
  })
}
