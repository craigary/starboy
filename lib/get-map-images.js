export const getMapImages = currentCoordinate => {
  const mapProperties = {
    width: 1000,
    height: 1000,
    zoom: process.env.MAP_ZOOM_LEVEL,
    accessToken: process.env.MAPBOX_ACCESS_TOKEN
  }

  let [long, lat] = currentCoordinate.split('&')

  long = parseFloat(long).toFixed(4)
  lat = parseFloat(lat).toFixed(4)

  const lightMapImageUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/${long},${lat},${mapProperties.zoom},0/${mapProperties.width}x${mapProperties.height}@2x?access_token=${mapProperties.accessToken}`
  const darkMapImageUrl = `https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/${long},${lat},${mapProperties.zoom},0/${mapProperties.width}x${mapProperties.height}@2x?access_token=${mapProperties.accessToken}`

  return { light: lightMapImageUrl, dark: darkMapImageUrl }
}
