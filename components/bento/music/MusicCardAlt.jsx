import Card from '@/components/bento/card/Card'
import ArtworkImg from '@/components/bento/music/ArtworkImg'
import { getNowPlaying } from '@/lib/apple-music/get-now-playing'
import { cn } from '@/lib/utils'
import { Button } from '@radix-ui/themes'
import { IconMusic, IconPlayerPlayFilled } from '@tabler/icons-react'
import Link from 'next/link'

const MusicCardAlt = async ({ delay, className }) => {
  const result = await getNowPlaying()
  let recentPlayed = null
  if (result.status === 'success') {
    recentPlayed = result.data.data[0]
  }

  return (
    <Card
      delay={delay}
      className={cn(
        'relative aspect-[2/1] h-auto w-full rounded-lg p-3 transition-all',
        className
      )}
    >
      <div
        className="transation-all group relative z-20 flex h-full w-full gap-3 rounded-lg px-3 delay-75"
        style={{
          color: '#' + recentPlayed.attributes.artwork.textColor3,
          backgroundColor: '#' + recentPlayed.attributes.artwork.bgColor
        }}
      >
        <div className="relative my-3 aspect-square h-auto w-auto shrink-0 overflow-hidden rounded-lg lg:hidden xl:block">
          <ArtworkImg
            artwork={recentPlayed.attributes.artwork}
            name={recentPlayed.attributes.name}
          />
        </div>
        <div className="flex grow flex-col items-end justify-between py-3">
          <IconMusic
            size="14"
            style={{
              color: '#' + recentPlayed.attributes.artwork.textColor3
            }}
          />
          <div className="flex w-full flex-col">
            <p className="origin-left scale-75 text-xs uppercase">
              Now Playing
            </p>
            <p className="text-sm font-medium">
              {recentPlayed.attributes.name}
              {recentPlayed.attributes?.contentRating === 'explicit' && ' 🅴'}
            </p>
            <p className="mb-2 text-xs font-light">
              {recentPlayed.attributes.artistName}
            </p>
            <Button
              size="1"
              color="gray"
              radius="full"
              variant="soft"
              asChild
              className="w-fit"
              style={{
                color: '#' + recentPlayed.attributes.artwork.textColor3
              }}
            >
              <Link
                href={`https://music.apple.com${recentPlayed.href}`}
                target="_blank"
              >
                <IconPlayerPlayFilled size="14" />
                Play
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default MusicCardAlt
