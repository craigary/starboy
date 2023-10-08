import Card from '@/components/bento/card/Card'
import ArtworkImg from '@/components/bento/music/ArtworkImg'
import { getNowPlaying } from '@/lib/apple-music/get-now-playing'
import { Button, IconButton } from '@radix-ui/themes'
import { IconMusic, IconPlayerPlayFilled } from '@tabler/icons-react'
import Link from 'next/link'

const MusicCard = async ({ delay }) => {
  const result = await getNowPlaying()
  const recentPlayed = []
  if (result.status === 'success') {
    recentPlayed.push(...result.data.data.slice(0, 4))
  }

  return (
    <Card
      delay={delay}
      className="relative aspect-square h-auto w-full rounded-lg p-3 grayscale transition-all hover:grayscale-0"
    >
      <div className="group relative z-20 flex h-full w-full flex-col">
        <IconMusic
          size="14"
          className="absolute right-3 top-3"
          style={{
            color: '#' + recentPlayed[0].attributes.artwork.textColor3
          }}
        />
        <div
          className="transation-all flex h-2/5 w-full gap-3 rounded-t-lg p-3 opacity-50 delay-75 group-hover:opacity-100"
          style={{
            color: '#' + recentPlayed[0].attributes.artwork.textColor3,
            backgroundColor: '#' + recentPlayed[0].attributes.artwork.bgColor
          }}
        >
          <div className="relative aspect-square h-full w-auto overflow-hidden rounded">
            <ArtworkImg
              artwork={recentPlayed[0].attributes.artwork}
              name={recentPlayed[0].attributes.name}
            />
          </div>
          <div>
            <p className="origin-left scale-75 text-xs uppercase">
              Now Playing
            </p>
            <p className="text-sm font-medium">
              {recentPlayed[0].attributes.name}
            </p>
            <p className="mb-2 text-xs font-light">
              {recentPlayed[0].attributes.artistName}
            </p>
            <Button
              size="1"
              color="gray"
              radius="full"
              variant="soft"
              asChild
              style={{
                color: '#' + recentPlayed[0].attributes.artwork.textColor3
              }}
            >
              <Link
                href={`https://music.apple.com${recentPlayed[0].href}`}
                target="_blank"
              >
                <IconPlayerPlayFilled size="14" />
                Play
              </Link>
            </Button>
          </div>
        </div>
        <div
          className="flex h-3/5 w-full flex-col gap-y-2 rounded-b-lg p-3 opacity-50 transition-all group-hover:opacity-100"
          style={{
            color: '#' + recentPlayed[0].attributes.artwork.textColor3,
            backgroundColor:
              '#' + recentPlayed[0].attributes.artwork.bgColor + 'ee'
          }}
        >
          <p className="origin-top-left scale-75 text-xs uppercase">
            Recently Played
          </p>
          <div className="flex grow flex-col gap-2">
            {recentPlayed.slice(1).map(item => {
              return (
                <div
                  key={item.id}
                  className="flex h-1/3 w-full items-center gap-x-2"
                >
                  <div className="relative aspect-square h-full shrink-0 overflow-hidden rounded">
                    <ArtworkImg
                      artwork={item.attributes.artwork}
                      name={item.attributes.name}
                    />
                  </div>
                  <div className="flex w-full grow items-center justify-between">
                    <div className="">
                      <p className="max-w-[24ch] truncate text-xs font-medium">
                        {item.attributes.name}
                      </p>
                      {item.attributes?.artistName && (
                        <p className="max-w-[24ch] truncate text-xs font-light">
                          {item.attributes.artistName}
                        </p>
                      )}
                    </div>
                    <IconButton
                      size="1"
                      color="gray"
                      radius="full"
                      variant="soft"
                      style={{
                        color:
                          '#' + recentPlayed[0].attributes.artwork.textColor3,
                        flexShrink: 0
                      }}
                      asChild
                    >
                      <Link
                        href={`https://music.apple.com${item.href}`}
                        target="_blank"
                      >
                        <IconPlayerPlayFilled size="14" />
                      </Link>
                    </IconButton>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default MusicCard
