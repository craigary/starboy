import Card from '@/components/bento/card/Card'
import CornerCard from '@/components/bento/corner/Corner'
import LabCard from '@/components/bento/lab/Lab'
import MapCard from '@/components/bento/map/MapCard'
import MusicCardAlt from '@/components/bento/music/MusicCardAlt'
import NavigationCard from '@/components/bento/navigation-card/NavigationCard'
import PostsCard from '@/components/bento/post/Posts'
import ProjectCard from '@/components/bento/project/Project'
import SocialAltCard from '@/components/bento/social/SocialAlt'
import SocialLinkCard from '@/components/bento/social/SocialLinkCard'
import StatisticsCard from '@/components/bento/statistics/Statistics'
import TechStackCard from '@/components/bento/tech-stack/Stack'
import TheBlockCard from '@/components/bento/the-block/TheBlock'
import WelcomeCard from '@/components/bento/welcome/WelcomeCard'
import { upstashClient } from '@/lib/upstash/client'

import {
  IconBookmarks,
  IconBrandApplePodcast,
  IconMessage,
  IconSwords
} from '@tabler/icons-react'

const Bento = async () => {
  const existingLocationInfo = await upstashClient.hgetall('current-location')

  return (
    <div className="grid grid-cols-12 pt-14 md:mb-14 md:grid-cols-12 md:pt-20">
      <div className="col-span-12">
        <WelcomeCard />
      </div>
      <div className="col-span-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 min-[960px]:grid-cols-4">
        <NavigationCard
          tiltColor="rgb(2 132 199)"
          href={'/books'}
          className="bg-secondary/20 transition-all hover:border-sky-600"
        >
          <p className="font-serif text-xs font-semibold sm:text-sm md:text-base lg:text-xl">
            Reading List
          </p>
          <IconBookmarks
            stroke="1.5"
            className="text-sm  text-sky-600 opacity-60 md:text-base lg:text-xl"
          />
        </NavigationCard>
        <NavigationCard
          href={'/uses'}
          tiltColor="rgb(245 158 11)"
          className="bg-secondary/20 transition-all hover:border-amber-500"
        >
          <p className="font-serif text-xs font-semibold sm:text-sm md:text-base lg:text-xl">
            Tools & Craft
          </p>
          <IconSwords
            stroke="1.5"
            className="text-sm text-amber-600 opacity-60 md:text-base lg:text-xl"
          />
        </NavigationCard>
        <NavigationCard
          href={'/podcasts'}
          tiltColor="rgb(192 132 252)"
          className="bg-secondary/20 transition-all hover:border-purple-400"
        >
          <p className="font-serif text-xs font-semibold sm:text-sm md:text-base lg:text-xl">
            Podcasts
          </p>
          <IconBrandApplePodcast
            stroke="1.5"
            className="text-sm text-purple-400 opacity-60 md:text-base lg:text-xl"
          />
        </NavigationCard>
        <NavigationCard
          href={'/guestbook'}
          tiltColor="rgb(248 113 113)"
          className="bg-secondary/20 transition-all hover:border-red-400"
        >
          <p className="font-serif text-xs font-semibold sm:text-sm md:text-base lg:text-xl">
            Guestbook
          </p>
          <IconMessage
            stroke="1.5"
            className="text-sm text-red-600 opacity-60 md:text-base lg:text-xl"
          />
        </NavigationCard>
      </div>
      <div className="col-span-12">
        <Card className="p-3">
          <h2 className="w-fit bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-lg font-medium text-transparent">
            {/* More links... */}
          </h2>
        </Card>
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
        <ProjectCard delay={0.25} />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
        <PostsCard delay={0.25} />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4">
        <MapCard delay={0.25} locationInfo={existingLocationInfo} />
      </div>
      <div className="col-span-12 sm:order-2 sm:col-span-6 md:col-span-12 lg:col-span-4">
        <div className="flex h-full flex-col">
          <SocialAltCard />
          <TheBlockCard />
        </div>
      </div>
      <div className="col-span-12 h-full sm:order-1 sm:col-span-6 lg:order-4 lg:col-span-4">
        <TechStackCard delay={0.25} />
      </div>
      <div className="col-span-12 sm:order-4 sm:col-span-6 md:order-3 md:col-span-6 lg:order-4 lg:col-span-4 lg:row-span-2">
        <MusicCardAlt delay={0.25} />
      </div>
      <div className="col-span-6 sm:order-3 sm:col-span-6 md:order-3 md:col-span-6 lg:col-span-4">
        <LabCard />
      </div>
      <div className="col-span-6 sm:order-3 md:order-4 md:row-span-2 lg:col-span-4">
        <StatisticsCard />
      </div>
      <div className="col-span-6 h-full sm:order-4 md:col-span-6 lg:col-span-4">
        <SocialLinkCard />
      </div>
      <div className="col-span-6 h-full sm:order-4 md:col-span-6 lg:col-span-4">
        <CornerCard />
      </div>
    </div>
  )
}

export default Bento
