import { workersClient } from '@/lib/workers-kv/client'

const handleRequest = async (url, config, responseType = 'json') => {
  const res = await fetch(url, config)
  if (res.ok) {
    const data = await res[responseType]()
    res.data = data
    return res
  } else {
    return res
  }
}

const getUpstreamConfig = async appleMusicConfig => {
  const { user_token_url, dev_token_url } = appleMusicConfig
  const [user_token, dev_token] = await Promise.all([
    fetch(user_token_url).then(res => res.text()),
    fetch(dev_token_url).then(res => res.text())
  ])

  // Update the config to upstash

  await workersClient.write('apple-music', {
    ...appleMusicConfig,
    user_token,
    dev_token
  })
  return { appleMusicConfig, user_token, dev_token }
}

export const getNowPlaying = async () => {
  let appleMusicConfig = await workersClient.read('apple-music')

  if (!appleMusicConfig?.dev_token || !appleMusicConfig?.user_token) {
    // Fetch the dev token and user token from the gist
    appleMusicConfig = await getUpstreamConfig(appleMusicConfig)
  }

  const appleMusicApiEndPoint = appleMusicConfig.api_endpoint
  let appleMusicUserToken = appleMusicConfig.user_token
  let appleMusicDevToken = appleMusicConfig.dev_token
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
