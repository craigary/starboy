import Card from '@/components/bento/card/Card'
import ArtworkImg from '@/components/bento/music/ArtworkImg'
import { getNowPlaying } from '@/lib/apple-music/get-now-playing'
import { cn } from '@/lib/utils'

const MusicCardTiny = async ({ delay, className }) => {
  const result = await getNowPlaying()
  let recentPlayed = null
  if (result.status === 'success') {
    recentPlayed = result.data.data[0]
  }

  return (
    <Card
      delay={delay}
      className={cn(
        'relative aspect-square h-auto w-full rounded-lg p-3 grayscale transition-all hover:grayscale-0',
        className
      )}
    >
      <div
        className="transation-all group relative z-20 flex h-full w-full gap-3 rounded-lg p-2 delay-75"
        style={{
          color: '#' + recentPlayed.attributes.artwork.textColor3,
          backgroundColor: '#' + recentPlayed.attributes.artwork.bgColor
        }}
      >
        <div className="relative aspect-square h-auto w-auto shrink-0 overflow-hidden rounded-lg">
          <ArtworkImg
            artwork={recentPlayed.attributes.artwork}
            name={recentPlayed.attributes.name}
          />
        </div>
      </div>
    </Card>
  )
}

export default MusicCardTiny
