import PodcastItem from './PodcastItem'

const PodcastList = ({ podcasts = [] }) => {
  return (
    <div className="grid grid-cols-3 gap-x-4 sm:grid-cols-4">
      {podcasts.map(podcast => (
        <PodcastItem key={podcast.uuid} podcast={podcast} />
      ))}
    </div>
  )
}

export default PodcastList
