import avatar from '@/assets/avatar.png'
import Card from '@/components/bento/card/Card'
import { upstashClient } from '@/lib/upstash/client'
import { SiNotion } from '@icons-pack/react-simple-icons'
import Image from 'next/image'

const WelcomeCard = async ({ delay }) => {
  const existingLocationInfo = await upstashClient.hgetall('current-location')

  const region = existingLocationInfo.region
  const state = existingLocationInfo.state

  return (
    <Card
      delay={delay}
      className="h-full"
      borderStyle={{ backgroundColor: `hsl(var(--border) / 0.3)` }}
    >
      <div className="relative z-10 flex h-full w-full flex-col justify-center space-y-4 px-4 py-6 text-lg !leading-[2rem] md:pb-16 md:pt-10 lg:w-3/4 lg:text-xl">
        <Image
          height={48}
          alt="Craig Hart"
          width={48}
          src={avatar.src}
          priority
          className="rounded-full"
        />

        <div>
          <span className="font-bold">Hi, I&apos;m Craig,</span> a web developer
          based in <span>{state}</span>, <span>{region}</span>. I love to create
          intuitive interfaces with clean, balanced designs and delightful user
          experiences through thoughtful details.
        </div>
        <div>
          I craft my productivity systems using tools like{' '}
          <div className="group inline-flex cursor-default items-center align-bottom">
            <SiNotion className="mr-1 inline-block h-5 w-5" />
            <span className="transition-all">Notion</span>
          </div>
          , Things 3 and Cron Calendar to stay organized and focused.
        </div>
      </div>
    </Card>
  )
}

export default WelcomeCard
