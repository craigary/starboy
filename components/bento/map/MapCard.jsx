'use client'
import Card from '@/components/bento/card/Card'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN

const MapCard = ({ delay, token, locationInfo }) => {
  const { resolvedTheme } = useTheme()
  const mapEl = useRef(null)
  const map = useRef(null)
  const [zoom, setZoom] = useState(10)

  const [lat, setLat] = useState(Number(locationInfo.coordinate.split('&')[1]))
  const [lng, setLng] = useState(Number(locationInfo.coordinate.split('&')[0]))

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapEl.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
      compact: true
    })

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  // useEffect(() => {
  //   ;(async () => {
  //     await getMapKitAsync(token)

  //     mapkit.init({
  //       authorizationCallback: function (done) {
  //         done(token)
  //       },
  //       language: 'en-US'
  //     })

  //     const lat = Number(locationInfo.coordinate.split('&')[1])
  //     const long = Number(locationInfo.coordinate.split('&')[0])
  //     mapInstance.current && mapInstance.current.destroy()
  //     mapInstance.current = new mapkit.Map(mapEl.current, {
  //       mapType:
  //         resolvedTheme === 'dark'
  //           ? mapkit.Map.MapTypes.MutedStandard
  //           : mapkit.Map.MapTypes.Standard,
  //       showsPointsOfInterest: false,
  //       isRotationEnabled: false,
  //       isZoomEnabled: true,
  //       showsZoomControl: false,
  //       showsScale: mapkit.FeatureVisibility.Hidden,
  //       showsMapTypeControl: false,
  //       region: new mapkit.CoordinateRegion(
  //         new mapkit.Coordinate(lat, long),
  //         new mapkit.CoordinateSpan(0.3, 0.3)
  //       ),
  //       colorScheme:
  //         resolvedTheme === 'dark'
  //           ? mapkit.Map.ColorSchemes.Dark
  //           : mapkit.Map.ColorSchemes.Light
  //     })
  //   })()
  // }, [locationInfo.coordinate, resolvedTheme, token])

  return (
    <Card className="h-full min-h-[20rem] p-3" delay={delay}>
      <div className="group relative h-full w-full overflow-hidden rounded border">
        <div className="absolute bottom-3 left-3 z-30 flex items-center justify-center rounded-md border bg-background/60 px-2 py-1">
          <div className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></div>
          <p>
            {locationInfo.state}, {locationInfo.region}
          </p>
        </div>
        <div className="h-full w-full" ref={mapEl}></div>
      </div>
    </Card>
  )
}

export default MapCard
