import Card from '@/components/bento/card/Card'
import ClockCard from '@/components/bento/clock/Clock'
import CornerCard from '@/components/bento/corner/Corner'
import Github from '@/components/bento/github/Github'
import LabCard from '@/components/bento/lab/Lab'
import MapCard from '@/components/bento/map/MapCard'
import MusicCardAlt from '@/components/bento/music/MusicCardAlt'
import NavigationCard from '@/components/bento/navigation-card/NavigationCard'
import NotionCertified from '@/components/bento/notion-certified/NotionCertified'
import PostsCard from '@/components/bento/post/Posts'
import ProjectCard from '@/components/bento/project/Project'
import SocialCard from '@/components/bento/social/SocialCard'
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
    <div className="grid grid-cols-4 pt-14 md:mb-14 md:grid-cols-6 md:pt-20">
      <div className="col-span-4 md:col-span-6">
        <WelcomeCard />
      </div>
      <div className="col-span-4 grid grid-cols-2 sm:grid-cols-4 md:col-span-6 md:grid-cols-2 min-[960px]:grid-cols-4">
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
            className=" text-amber-600 opacity-60 md:text-base lg:text-xl"
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
      <div className="col-span-4 md:col-span-6">
        <Card className="p-3">
          <h2 className="w-fit bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-lg font-medium text-transparent">
            More links...
          </h2>
        </Card>
      </div>
      <div className="col-span-4 sm:col-span-2">
        <ProjectCard delay={0.25} />
      </div>
      <div className="col-span-4 sm:col-span-2">
        <PostsCard delay={0.25} />
      </div>
      <div className="col-span-4 sm:col-span-2">
        <SocialCard delay={0.25} />
      </div>
      <div className="col-span-4 md:col-span-6">
        <Card className="p-3">
          <h2 className="w-fit bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-lg font-medium text-transparent">
            Bento Box...
          </h2>
        </Card>
      </div>
      <div className="col-span-4 grid grid-cols-3 md:col-span-6 lg:col-span-3">
        <div className="flex flex-col">
          <NotionCertified />
          <ClockCard delay={0.25} />
        </div>
        <div className="col-span-2 grid">
          <MapCard
            delay={0.25}
            token={mapToken}
            locationInfo={existingLocationInfo}
          />
        </div>
        <div className="col-span-3">
          <TechStackCard delay={0.625} />
        </div>
      </div>
      <div className="col-span-4 grid grid-cols-3 md:col-span-6 lg:col-span-3">
        <div className="col-span-3 flex h-full flex-col">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <MusicCardAlt delay={0.5} />
            </div>
            <Github delay={0.75} />
          </div>
          <div className="grid h-full grid-cols-2">
            <div className="col-span-1 flex h-full flex-col">
              <LabCard />
            </div>
            <div className="col-span-1 grid h-full grid-cols-1 grid-rows-4">
              <div className="row-span-1">
                <SocialLinkCard />
              </div>
              <div className="row-span-2">
                <StatisticsCard />
              </div>
              <div className="row-span-1">
                <CornerCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bento
