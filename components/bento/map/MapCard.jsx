import Card from '@/components/bento/card/Card'
import MapComponent from '@/components/bento/map/Map'
import { getLocationInfo } from '@/lib/get-location'
import { Suspense } from 'react'

const MapCard = async ({ delay }) => {
  const existingLocationInfo = await getLocationInfo()
  return (
    <Card className="h-full min-h-[20rem] p-3" delay={delay}>
      <div className="group relative h-full w-full overflow-hidden rounded-md border">
        <Suspense fallback={<p>Loading...</p>}>
          <MapComponent locationInfo={existingLocationInfo} />
        </Suspense>
      </div>
    </Card>
  )
}

export default MapCard
