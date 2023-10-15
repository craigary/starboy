import Card from '@/components/bento/card/Card'
import CornerCard from '@/components/bento/corner/Corner'
import LabCard from '@/components/bento/lab/Lab'
import MapCard from '@/components/bento/map/MapCard'
import MusicCardAlt from '@/components/bento/music/MusicCardAlt'
import MusicCardTiny from '@/components/bento/music/MusicCardTiny'
import NavigationCard from '@/components/bento/navigation-card/NavigationCard'
import PostsCard from '@/components/bento/post/Posts'
import ProjectCard from '@/components/bento/project/Project'
import QuoteCard from '@/components/bento/quote/Quote'
import SocialLinkCard from '@/components/bento/social/SocialLinkCard'
import StatisticsCard from '@/components/bento/statistics/Statistics'
import TechStackCard from '@/components/bento/tech-stack/Stack'
import WelcomeCard from '@/components/bento/welcome/WelcomeCard'
import { getMapToken } from '@/lib/get-mapkit-js-token'
import { upstashClient } from '@/lib/upstash/client'
import {
  IconBookmarks,
  IconBrandApplePodcast,
  IconMessage,
  IconSwords
} from '@tabler/icons-react'

const Bento = async () => {
  const mapToken = await getMapToken()
  const existingLocationInfo = await upstashClient.hgetall('current-location')

  return (
    <div className="grid grid-cols-12 pt-14 md:mb-14 md:grid-cols-12 md:pt-20">
      <div className="col-span-12">
        <WelcomeCard />
      </div>
      <div className="col-span-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 min-[960px]:grid-cols-4">
        <NavigationCard
          tiltColor="rgb(2 132 199)"
          className={'bg-secondary/20 transition-all hover:border-sky-600'}
        >
          <p className="font-serif text-sm font-semibold md:text-base lg:text-xl">
            Reading List
          </p>
          <IconBookmarks
            stroke="1.5"
            className="text-sky-600  opacity-60 md:text-base lg:text-xl"
          />
        </NavigationCard>
        <NavigationCard
          tiltColor="rgb(245 158 11)"
          className={'bg-secondary/20 transition-all hover:border-amber-500'}
        >
          <p className="font-serif font-semibold md:text-base lg:text-xl">
            Tools & Craft
          </p>
          <IconSwords
            stroke="1.5"
            className="text-amber-600 opacity-60 md:text-base lg:text-xl"
          />
        </NavigationCard>
        <NavigationCard
          tiltColor="rgb(192 132 252)"
          className={'bg-secondary/20 transition-all hover:border-purple-400'}
        >
          <p className="font-serif font-semibold md:text-base lg:text-xl">
            Podcasts
          </p>
          <IconBrandApplePodcast
            stroke="1.5"
            className="text-purple-400 opacity-60 md:text-base lg:text-xl"
          />
        </NavigationCard>
        <NavigationCard
          tiltColor="rgb(248 113 113)"
          className={'bg-secondary/20 transition-all hover:border-red-400'}
        >
          <p className="font-serif font-semibold md:text-base lg:text-xl">
            Guestbook
          </p>
          <IconMessage
            stroke="1.5"
            className="text-red-600 opacity-60 md:text-base lg:text-xl"
          />
        </NavigationCard>
      </div>
      <div className="col-span-12">
        <Card className="p-3">
          <h2 className="w-fit bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-lg font-medium text-transparent">
            More links...
          </h2>
        </Card>
      </div>
      <div className="col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-4">
        <ProjectCard delay={0.25} />
      </div>
      <div className="col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-4">
        <PostsCard delay={0.25} />
      </div>
      <div className="col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-4">
        <MapCard
          delay={0.25}
          token={mapToken}
          locationInfo={existingLocationInfo}
        />
      </div>
      {/* <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:order-2 lg:col-span-6 xl:col-span-3">
        <SocialCard delay={0.5} />
      </div> */}
      <div className="col-span-6 sm:col-span-3 md:col-span-4 lg:order-1 lg:col-span-4">
        {/* <div className="flex h-full flex-col">
          <NotionCertified />
          <ClockCard delay={0.25} />
        </div> */}
        <QuoteCard />
      </div>
      <div className="order-3 col-span-6 sm:col-span-3 md:col-span-8 lg:col-span-4">
        <LabCard />
      </div>

      <div className="order-5 col-span-12 sm:col-span-6 lg:col-span-3 lg:row-span-2 xl:col-span-4 xl:row-span-2">
        <MusicCardTiny delay={0.5} className="hidden lg:block xl:hidden" />
        <MusicCardAlt delay={0.5} className="lg:hidden xl:block" />
      </div>
      <div className="order-5 col-span-6 row-span-3 h-full sm:order-4 sm:col-span-6 sm:row-span-1  lg:order-4 lg:col-span-3 lg:row-span-2 xl:col-span-4 xl:row-span-1">
        {/* <LabCard /> */}
        <TechStackCard delay={0.625} />
      </div>
      <div className="order-5 col-span-6 sm:row-span-2 lg:col-span-3 lg:row-span-2 xl:col-span-4">
        <StatisticsCard />
      </div>
      <div className="order-5 col-span-6 h-full md:col-span-6 lg:col-span-3 xl:col-span-4 ">
        <SocialLinkCard />
      </div>
      <div className="order-5 col-span-6 h-full md:col-span-6 lg:col-span-3 xl:col-span-4">
        <CornerCard />
      </div>
    </div>
  )
}

export default Bento
