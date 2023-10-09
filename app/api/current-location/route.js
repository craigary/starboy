import { upstashClient } from '@/lib/upstash/client'
import { NextResponse } from 'next/server'

export async function POST(req) {
  const authorization = req.headers.get('Authorization')

  if (!authorization || authorization !== '123456') {
    return NextResponse.json(
      { message: 'unauthorized', success: false },
      { status: 401 }
    )
  }

  let { long, lat } = await req.json()

  if (!long || !lat) {
    return NextResponse.json(
      { message: 'Longitude / latitude required', success: false },
      { status: 401 }
    )
  }

  try {
    long = parseFloat(long).toFixed(4)
    lat = parseFloat(lat).toFixed(4)

    // Get region and state

    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
    )

    const locationData = await response.json()

    let region
    let state
    let centerCoordinate

    locationData.features.forEach(item => {
      // country is region,
      if (item.id.includes('country')) {
        region = item.text
      }
      // region is state
      if (item.id.includes('region')) {
        state = item.text
      }
      // place is city
      if (item.id.includes('place')) {
        centerCoordinate = item.center
      }
    })

    // Update location info
    await upstashClient.hset('current-location', {
      coordinate: centerCoordinate.join('&'),
      region,
      state
    })

    return NextResponse.json(
      { message: 'Successfully updated!', success: true },
      { status: 200 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: `There's an error when updating location`, success: false },
      { status: 500 }
    )
  }
}
