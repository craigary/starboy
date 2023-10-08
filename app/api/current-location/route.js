import { cloudinary } from '@/lib/cloudinary/client'
import { getMapImages } from '@/lib/get-map-images'
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
    const currentCoordinate = long + '&' + lat

    const existingLocationInfo = await upstashClient.hgetall('current-location')
    if (
      existingLocationInfo &&
      existingLocationInfo?.coordinate === currentCoordinate &&
      existingLocationInfo?.region &&
      existingLocationInfo?.state &&
      existingLocationInfo?.['light-image-id'] &&
      existingLocationInfo?.['dark-image-id']
    ) {
      return NextResponse.json(
        { message: 'Location is the same', success: true },
        { status: 200 }
      )
    } else {
      const { light: lightUrl, dark: darkUrl } = getMapImages(currentCoordinate)
      try {
        // Upload images to Cloudinary
        const uploadRes = await Promise.allSettled([
          cloudinary.uploader.upload(lightUrl, {
            secure: true,
            overwrite: true
          }),
          cloudinary.uploader.upload(darkUrl, {
            secure: true,
            overwrite: true
          })
        ])

        const uploadIds = uploadRes.map(item => item.value.public_id)

        // Get region and state
        // Example Url: https://api.mapbox.com/geocoding/v5/mapbox.places/106.5726,29.5616.json?access_token=pk.eyJ1IjoiY3JhaWdhcnkiLCJhIjoiY2xtcXEycmJlMDR2czJocW1weDJlcnRkeSJ9.BEJIC5mftNJ8O2GfHQfl6Q
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
        )

        const locationData = await response.json()

        locationData?.features[0]?.context.reverse()

        const region = locationData?.features[0]?.context[0]?.text
        const state = locationData?.features[0]?.context[1]?.text

        // Update location info
        await upstashClient.hset('current-location', {
          coordinate: currentCoordinate,
          region,
          state,
          'light-image-id': uploadIds[0],
          'dark-image-id': uploadIds[1]
        })

        return NextResponse.json(
          { message: 'Successfully updated!', success: true },
          { status: 200 }
        )
      } catch (error) {
        return NextResponse.json(
          {
            message: `There's an error when uploading image`,
            error: error,
            success: false
          },
          { status: 500 }
        )
      }
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: `There's an error when updating location`, success: false },
      { status: 500 }
    )
  }
}
