export const getNowPlaying = async () => {
  const appleMusicApiEndPoint = process.env.APPLE_MUSIC_API_ENDPOINT || ''
  const appleMusicDevToken = process.env.APPLE_MUSIC_DEV_TOKEN || ''
  const appleMusicUserToken = process.env.APPLE_MUSIC_USER_TOKEN || ''

  try {
    const response = await fetch(
      appleMusicApiEndPoint + '/v1/me/recent/played/tracks',
      {
        headers: {
          Authorization: 'Bearer ' + appleMusicDevToken,
          'Music-User-Token': appleMusicUserToken,
          origin: 'https://music.apple.com'
        },
        cache: 'no-store'
      }
    )

    const data = await response.json()
    return { status: 'success', data }
  } catch (error) {
    console.log(error)
    // await upstashClient.hset('apple-music', { has_error: 1 })
    return { status: 'error', message: JSON.stringify(error) }
  }
}
