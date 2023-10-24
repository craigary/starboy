import Heading from '@/components/Heading'
import WiderContainer from '@/components/container/WideContainer'
import PodcastList from '@/components/podcast/PodcastList'
import { generateMetaData } from '@/lib/metadata'
import { getPodcasts } from '@/lib/pocket-casts/get-podcasts'
import { SiApplepodcasts } from '@icons-pack/react-simple-icons'

const pathName = '/podcasts'
export const metadata = generateMetaData(pathName)

export const revalidate = 3600

const PodcastPage = async () => {
  const podcasts = await getPodcasts()
  return (
    <WiderContainer>
      <Heading title="Podcasts" className="relative">
        <SiApplepodcasts
          className="absolute -right-[10%] top-0 opacity-5"
          size="80%"
        />
        <p className="leading-6 md:w-3/4 md:leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          magnam vero est aperiam dolores. Officia ab a, atque voluptatum odit
          possimus exercitationem necessitatibus quam praesentium eligendi
          dolorem ea! Quas, nesciunt?
        </p>
      </Heading>
      <PodcastList podcasts={podcasts} />
    </WiderContainer>
  )
}

export default PodcastPage
