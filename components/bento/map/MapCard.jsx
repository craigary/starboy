import Card from '@/components/bento/card/Card'
import MapImg from '@/components/bento/map/MapImg'
import { upstashClient } from '@/lib/upstash/client'

const MapCard = async ({ delay }) => {
  const existingLocationInfo = await upstashClient.hgetall('current-location')

  const lightImageId = existingLocationInfo['light-image-id']
  const darkImageId = existingLocationInfo['dark-image-id']

  const region = existingLocationInfo.region
  const state = existingLocationInfo.state
  return (
    <Card className="p-3" delay={delay}>
      <div className="group relative h-full w-full overflow-hidden rounded-lg border">
        <div
          className="absolute inset-0 z-10 from-transparent via-muted/40 to-blue-400/20"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--tw-gradient-stops))'
          }}
        ></div>
        <div className="absolute inset-0 left-1/2 top-1/2 z-20 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full drop-shadow">
          <div className="relative z-10 h-full w-full rounded-full bg-background p-1">
            <div className="h-full w-full rounded-full bg-blue-400"></div>
            <div className="absolute inset-0 h-full w-full animate-ping rounded-full bg-blue-500"></div>
          </div>
        </div>
        <div className="relative z-0 h-full w-full">
          <MapImg
            imageId={darkImageId}
            className="hidden rounded-lg transition-all duration-500 group-hover:scale-125 dark:block"
          />
          <MapImg
            imageId={lightImageId}
            className="block rounded-lg opacity-50 transition-all duration-500 group-hover:scale-125 dark:hidden"
          />
          <div className="absolute bottom-3 left-3 z-30 rounded-md border bg-background/90 px-2 py-1">
            {state}, {region}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default MapCard
