'use client'

import { LngLat, Map, Marker } from 'mapbox-gl'

import Card from '@/components/bento/card/Card'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useTheme } from 'next-themes'
import { forwardRef, useEffect, useRef, useState } from 'react'

const MarkerComponent = forwardRef(function MarkerComponent(props, ref) {
  return (
    <div
      className="marker mapboxgl-marker mapboxgl-marker-anchor-center pointer-events-auto h-[28px] w-[28px] translate-x-1/2 translate-y-1/2 opacity-100"
      role="img"
      ref={ref}
    >
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-3 w-3 animate-[marker-pulse_4s_ease-out_infinite] rounded-full bg-[#679BFF] opacity-20"></div>
        <div className="styles_marker__Mzm27 relative flex h-full w-full items-center justify-center rounded-full bg-white shadow-lg">
          <div className="absolute inset-[3px] rounded-full bg-[#679BFF]"></div>
          <div className="styles_marker-border__fxi6v absolute inset-[3px] rounded-full"></div>
          <div className="absolute inset-[5px] rounded-full bg-[#679BFF]"></div>
        </div>
      </div>
    </div>
  )
})

const MapCard = ({ delay, locationInfo }) => {
  const { resolvedTheme } = useTheme()
  const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

  const mapEl = useRef(null)
  const map = useRef(null)
  const markerRef = useRef(null)

  const [zoom, setZoom] = useState(11.5)

  const [lat, setLat] = useState(Number(locationInfo.coordinate.split('&')[1]))
  const [lng, setLng] = useState(Number(locationInfo.coordinate.split('&')[0]))

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new Map({
      container: mapEl.current,
      center: [lng, lat],
      zoom: zoom,
      accessToken,
      compact: true
    })

    const el = document.createElement('div')
    el.className = 'rounded-full'
    const markerCoords = new LngLat(lng, lat)

    new Marker(markerRef.current).setLngLat(markerCoords).addTo(map.current)

    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4))
      setLat(map.current.getCenter().lat.toFixed(4))
      setZoom(map.current.getZoom().toFixed(2))
    })
  })

  useEffect(() => {
    if (!map.current) return
    if (resolvedTheme === 'dark') {
      map.current.setStyle('mapbox://styles/mapbox/dark-v11')
    } else {
      map.current.setStyle('mapbox://styles/mapbox/streets-v12')
    }
  }, [resolvedTheme])

  return (
    <Card className="h-full min-h-[20rem] p-3" delay={delay}>
      <div className="group relative h-full w-full overflow-hidden rounded-md border">
        <div className="absolute bottom-3 left-3 z-30 flex items-center justify-center rounded-md border bg-background/60 px-2 py-1">
          <div className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></div>
          <p>
            {locationInfo.state}, {locationInfo.region}
          </p>
        </div>
        <MarkerComponent ref={markerRef} />
        <div className="h-full w-full" ref={mapEl}></div>
      </div>
    </Card>
  )
}

export default MapCard
