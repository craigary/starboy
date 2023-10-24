import Card from '@/components/bento/card/Card'
import MapComponent from '@/components/bento/map/Map'
import { upstashClient } from '@/lib/upstash/client'

const MapCard = async ({ delay }) => {
  const existingLocationInfo = await upstashClient.hgetall('current-location')
  return (
    <Card className="h-full min-h-[20rem] p-3" delay={delay}>
      <div className="group relative h-full w-full overflow-hidden rounded-md border">
        <MapComponent locationInfo={existingLocationInfo} />
      </div>
    </Card>
  )
}

export default MapCard
