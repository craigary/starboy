import PodcastList from '@/components/podcast/PodcastList'
import PocketCasts from '@/utils/pocket-casts'

export const revalidate = 3600 // revalidate every hour

export const metadata = {
  title: 'Podcast'
}

const PodcastPage = async ({}) => {
  const pocketcasts = new PocketCasts(
    process.env.POCKET_CASTS_EMAIL,
    process.env.POCKET_CASTS_PASSWORD
  )
  await pocketcasts.login()
  const res = await pocketcasts.getList()
  const podcasts = res.podcasts

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4">
      <h2 className="text-2xl ">Hello from podcast</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque rem
        pariatur blanditiis perferendis doloremque tempora nesciunt laboriosam quidem
        libero veniam sunt sapiente odit, suscipit quaerat, quae modi id earum.
      </p>
      <hr className="my-4" />
      <PodcastList podcasts={podcasts} />
    </div>
  )
}

export default PodcastPage
