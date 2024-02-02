import Heading from '@/components/Heading'
import Line from '@/components/annotations/Line'
import Container from '@/components/container/Container'
import PodcastList from '@/components/podcast/PodcastList'
import { generateMetaData } from '@/lib/metadata'
// import { getPodcasts } from '@/lib/pocket-casts/get-podcasts'
import { getPodcasts } from '@/lib/podcast'
import {
  SiPocketcasts,
  SiPodcastindexHex
} from '@icons-pack/react-simple-icons'
import { IconBrandApplePodcast } from '@tabler/icons-react'

const pathName = '/podcasts'
export const metadata = generateMetaData(pathName)

export const revalidate = 3600

const PodcastPage = async () => {
  // const podcasts = await getPodcasts()
  const podcasts = await getPodcasts()
  return (
    <Container>
      <Heading title="Podcasts" className="relative">
        <IconBrandApplePodcast
          className="absolute -right-[10%] top-0 opacity-5"
          size="70%"
        />
        <div className="space-y-3 leading-6 tracking-[0.015em] md:w-3/4 md:leading-8">
          <div>
            Radio plays an important part in my life. Ever since I was young, I
            enjoyed listening to the radio. It makes me feel old saying this, I
            really fascinated the magic sound coming from this tiny little
            machine.
          </div>
          <div>
            And now the podcasts are the new radio. I started listening to
            podcasts in middle school when I got my first iPod shuffle. Podcasts
            have become an important way for me to get information, fall asleep,
            or simply have some background noise.
          </div>
          <div>
            Here are all the podcasts I have subscribed through{' '}
            <div className="group inline-flex cursor-default items-center align-bottom">
              <SiPocketcasts
                className="mr-1 inline-block h-5 w-5"
                color={SiPodcastindexHex}
              />
              <span className="relative">
                Pocket Casts
                <Line className="absolute bottom-1 left-0 -z-10 h-2/5 w-full scale-105 bg-[#F43E37] opacity-50 transition-all group-hover:h-3/4 " />
              </span>
            </div>
          </div>
        </div>
      </Heading>
      <PodcastList podcasts={podcasts} />
    </Container>
  )
}

export default PodcastPage
