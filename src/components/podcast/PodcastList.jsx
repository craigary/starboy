import { getPlaiceholder } from 'plaiceholder'
import PodcastItem from './PodcastItem'

const podcastList = async ({ podcasts = [] }) => {
  const modifyPodcast = async podcast => {
    const blurImgUrl = `https://static.pocketcasts.com/discover/images/130/${podcast.uuid}.jpg`
    const imgResponse = await fetch(blurImgUrl)
    const buffer = Buffer.from(await imgResponse.arrayBuffer())
    const { base64: blurImgData } = await getPlaiceholder(buffer)
    return {
      ...podcast,
      coverImgURL: `https://static.pocketcasts.com/discover/images/200/${podcast.uuid}.jpg`,
      blurImgData
    }
  }

  let podcastsWithImg = (
    await Promise.all(podcasts.map(podcast => modifyPodcast(podcast)))
  ).sort((a, b) => a.sortPosition - b.sortPosition)

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-x-4 ">
      {podcastsWithImg.map(podcast => (
        <PodcastItem key={podcast.uuid} podcast={podcast} />
      ))}
    </div>
  )
}

export default podcastList
