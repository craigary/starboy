'use client'
import Card from '@/components/bento/card/Card'
import { useTheme } from 'next-themes'
import { useEffect, useRef } from 'react'
// import { upstashClient } from '@/lib/upstash/client'

const getMapKitAsync = async () => {
  if (!window.mapkit || window.mapkit.loadedLibraries.length === 0) {
    await new Promise(resolve => {
      window.initMapKit = resolve
    })
    delete window.initMapKit
  }
}

const MapCard = ({ delay, token, locationInfo }) => {
  const { resolvedTheme } = useTheme()
  const mapEl = useRef(null)

  const mapInstance = useRef(null)

  useEffect(() => {
    ;(async () => {
      await getMapKitAsync(token)

      mapkit.init({
        authorizationCallback: function (done) {
          done(token)
        },
        language: 'en-US'
      })

      const lat = Number(locationInfo.coordinate.split('&')[1])
      const long = Number(locationInfo.coordinate.split('&')[0])
      mapInstance.current && mapInstance.current.destroy()
      mapInstance.current = new mapkit.Map(mapEl.current, {
        mapType:
          resolvedTheme === 'dark'
            ? mapkit.Map.MapTypes.MutedStandard
            : mapkit.Map.MapTypes.Standard,
        showsPointsOfInterest: false,
        isRotationEnabled: false,
        isZoomEnabled: true,
        showsZoomControl: false,
        showsScale: mapkit.FeatureVisibility.Hidden,
        showsMapTypeControl: false,
        region: new mapkit.CoordinateRegion(
          new mapkit.Coordinate(lat, long),
          new mapkit.CoordinateSpan(0.3, 0.3)
        ),
        colorScheme:
          resolvedTheme === 'dark'
            ? mapkit.Map.ColorSchemes.Dark
            : mapkit.Map.ColorSchemes.Light
      })
    })()
  }, [locationInfo.coordinate, resolvedTheme, token])

  return (
    <Card className="p-3" delay={delay}>
      <div className="relative h-full w-full overflow-hidden rounded border">
        <div className="absolute bottom-3 left-3 z-30 flex items-center justify-center rounded-md border bg-background/60 px-2 py-1">
          <div className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></div>
          <p>
            {locationInfo.state}, {locationInfo.region}
          </p>
        </div>
        <div className="h-full w-full scale-125" ref={mapEl}></div>
      </div>
      {/* <div className="group relative h-full w-full overflow-hidden rounded-lg border">
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
      </div> */}
    </Card>
  )
}

export default MapCard
