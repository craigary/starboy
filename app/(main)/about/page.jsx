import Heading from '@/components/Heading'
import Container from '@/components/container/Container'
import {
  SiApplemusic,
  SiApplemusicHex,
  SiApplepodcasts,
  SiApplepodcastsHex,
  SiNotion
} from '@icons-pack/react-simple-icons'

import BookAMeettingBtn from '@/components/about/BookAMeetingBtn'
import CronIcon from '@/components/about/CronIcon'
import EmailAddress from '@/components/about/EmailAddress'
import EmailBtn from '@/components/about/EmailBtn'
import ThingsIcon from '@/components/about/ThingsIcon'
import Line from '@/components/annotations/Line'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { getLocationInfo } from '@/lib/get-location'
import { navigation } from '@/lib/get-navigation'
import { generateMetaData } from '@/lib/metadata'
import styles from './style.module.css'

const pathName = '/about'
export const metadata = generateMetaData(pathName)

export const revalidate = 3600

const AboutPage = async () => {
  const existingLocationInfo = await getLocationInfo()
  const region = existingLocationInfo.region
  const state = existingLocationInfo.state

  const emailInitial = 'i'
  const emailDomain = 'Y3JhaWcud2Y=' // encode a string

  const { items: socialLinks } = navigation.find(item => item.id === 'social')
  return (
    <Container>
      <Heading title="About">
        <div className="w-full space-y-4 text-lg">
          <div>
            <span className="font-bold">Hi, I&apos;m Craig,</span> a web
            developer based in <span>{state}</span>, <span>{region}</span>. I
            love to create intuitive interfaces with clean, balanced designs and
            delightful user experiences through thoughtful details.
          </div>

          <div>
            I tweak my productivity systems using tools like{' '}
            <div className="group inline-flex cursor-default items-center align-bottom">
              <SiNotion className="mr-1 inline-block h-5 w-5 text-black dark:text-white" />
              <span className="relative">
                Notion
                <Line className="absolute bottom-1 left-0 -z-10 h-2/5 w-full scale-105 bg-black opacity-10 transition-all group-hover:h-3/4 dark:bg-white" />
              </span>
            </div>
            ,{' '}
            <div className="group inline-flex cursor-default items-center align-bottom">
              <ThingsIcon className="mr-1 inline-block h-5 w-5" />
              <span className="relative">
                Things
                <Line className="absolute bottom-1 left-0 -z-10 h-2/5 w-full scale-105 bg-[#2274E5] opacity-50 transition-all group-hover:h-3/4 " />
              </span>
            </div>{' '}
            and{' '}
            <div className="group inline-flex cursor-default items-center align-bottom">
              <CronIcon className="mr-1 inline-block h-5 w-5" />
              <span className="relative">
                Cron
                <Line className="absolute bottom-1 left-0 -z-10 h-2/5 w-full scale-105 bg-[#FF4700] opacity-50 transition-all group-hover:h-3/4 " />
              </span>
            </div>{' '}
            Calendar to stay organized and focused.
          </div>
          <div>
            Outside of work, I enjoy listening to country{' '}
            <div className="group inline-flex cursor-default items-center align-bottom">
              <SiApplemusic
                color={SiApplemusicHex}
                className="mr-1 inline-block h-5 w-5"
              />
              <span className="group relative">
                Music
                <Line
                  className="absolute bottom-1 left-0 -z-10 h-2/5 w-full scale-105 opacity-50 transition-all group-hover:h-3/4"
                  fill={SiApplemusicHex}
                />
              </span>
            </div>{' '}
            and{' '}
            <div className="group inline-flex cursor-default items-center align-bottom">
              <SiApplepodcasts
                color={SiApplepodcastsHex}
                className="mr-1 inline-block h-5 w-5"
              />
              <span className="relative">
                Podcasts
                <Line
                  className="absolute bottom-1 left-0 -z-10 h-2/5 w-full scale-105 opacity-50 transition-all group-hover:h-3/4"
                  fill={SiApplepodcastsHex}
                />
              </span>
            </div>{' '}
            as well as reading mystery fiction novels.
          </div>
          <div>
            I am also a proud
            <span className={styles.juventus_label}>Juventino</span>.
          </div>
        </div>
      </Heading>
      <div className="border-b pb-6 md:pb-8">
        <h2 className="mb-2 w-fit bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-lg font-semibold text-transparent  md:mb-6 md:text-xl">
          About this site:
        </h2>
        <div>
          <p className="mb-6 tracking-[0.015em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            saepe enim pariatur, harum quae nulla necessitatibus cum nostrum
            iure nihil voluptates nisi voluptate illum similique fugit est atque
            vero numquam.
          </p>
          <p className="mb-6 tracking-[0.015em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            saepe enim pariatur, harum quae nulla necessitatibus cum nostrum
            iure nihil voluptates nisi voluptate illum similique fugit est atque
            vero numquam.
          </p>
          <p className="mb-6 tracking-[0.015em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            saepe enim pariatur, harum quae nulla necessitatibus cum nostrum
            iure nihil voluptates nisi voluptate illum similique fugit est atque
            vero numquam.
          </p>
          <p className="mb-6 tracking-[0.015em]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            saepe enim pariatur, harum quae nulla necessitatibus cum nostrum
            iure nihil voluptates nisi voluptate illum similique fugit est atque
            vero numquam.
          </p>
        </div>
      </div>
      <div className="py-6 md:py-8">
        <h2 className="w-fit bg-gradient-to-r from-primary/60 to-primary bg-clip-text text-lg font-semibold text-transparent  md:text-xl">
          Keep Connected:
        </h2>
        <div>
          <div className="flex items-center justify-between border-b py-6">
            <div>
              <p>Email</p>
              <EmailAddress initial={emailInitial} domain={emailDomain} />
            </div>
            <div>
              <EmailBtn initial={emailInitial} domain={emailDomain} />
            </div>
          </div>
          <div className="flex items-center justify-between border-b py-6">
            <div>
              <p>Book a time</p>
              <p className="text-sm text-primary/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <BookAMeettingBtn />
            </div>
          </div>
          <div className="flex items-center justify-between py-6">
            <div>
              <p>Stay in touch</p>
              <p className="text-sm text-primary/60">
                find me on X and threads.
              </p>
            </div>
            <div>
              <ul className="flex space-x-2">
                {socialLinks.map(item => {
                  const Icon = item.icon
                  return (
                    <li key={item.id} className="z-10">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          {/* <IconButton
                            aria-label={item.name + ' icon'}
                            size="1"
                            variant="ghost"
                            className="group"
                            asChild
                          >
                            <a href={item.link} target="_blank">
                              <Icon size="24" stroke="1.5" />
                            </a>
                          </IconButton> */}

                          <Button
                            aria-label={item.name + ' icon'}
                            asChild
                            className="flex h-7 w-7 items-center justify-center bg-transparent p-0"
                            variant="soft"
                          >
                            <a href={item.link} target="_blank">
                              <Icon size="24" stroke="1.5" />
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AboutPage
