import { getPreviewImage } from '@/lib/preview-image'
import crypto from 'crypto'
import { parseHTML } from 'linkedom'
import pMap from 'p-map'

const OVERCAST_LOGIN_ENDPOINT = 'https://overcast.fm/login'
const OVERCAST_EMAIL = process.env.OVERCAST_EMAIL
const OVERCAST_PASS = process.env.OVERCAST_PASS

const PODCAST_INDEX_ENDPOINT = `https://api.podcastindex.org/api/1.0/podcasts/byitunesid`
const PODCAST_INDEX_KEY = process.env.PODCAST_INDEX_KEY
const PODCAST_INDEX_SECRET = process.env.PODCAST_INDEX_SECRET

export const getOvercastList = async () => {
  const formData = new FormData()
  formData.append('then', 'podcasts')
  formData.append('email', OVERCAST_EMAIL)
  formData.append('password', OVERCAST_PASS)

  const res = await fetch(OVERCAST_LOGIN_ENDPOINT, {
    method: 'POST',
    redirect: 'manual',
    body: formData
  })
  const headerCookie = res.headers.getSetCookie()[0]
  const cookie = headerCookie.split(';')[0]

  const listRes = await fetch('https://overcast.fm/podcasts', {
    headers: {
      Cookie: cookie
    }
  })

  const listHtml = await listRes.text()
  const { document } = parseHTML(listHtml)
  const feedList = document.querySelectorAll('a.feedcell') ?? []

  const filteredList = feedList.filter(item => {
    const href = item.getAttribute('href')
    return href.startsWith('/itunes')
  })

  return filteredList.map(item => {
    const href = item.getAttribute('href')

    const itunesId = href.split('/')[1].replace('itunes', '')

    const lqip = item.querySelector('img').getAttribute('src')
    const title = item.querySelector('.title').textContent
    return {
      itunesId,
      lqip,
      title
    }
  })
}

const generateSha1 = str => {
  const shasum = crypto.createHash('sha1')
  shasum.update(str)
  return shasum.digest('hex')
}

const fetchPodcastInfo = async id => {
  const apiHeaderTime = Math.floor(Date.now() / 1000) //console.log(`apiHeaderTime=[${apiHeaderTime}]`);
  const headers = {
    'X-Auth-Date': apiHeaderTime,
    'X-Auth-Key': PODCAST_INDEX_KEY,
    'User-Agent': 'SuperPodcastPlayer/1.8',
    Authorization: generateSha1(
      PODCAST_INDEX_KEY + PODCAST_INDEX_SECRET + apiHeaderTime
    )
  }
  const res = await fetch(PODCAST_INDEX_ENDPOINT + '?id=' + id + '&pretty', {
    headers
  })
  const { feed } = await res.json()
  if (Array.isArray(feed)) {
    return null
  }
  return feed
}

const processPodcast = async podcast => {
  // 1. Process image url
  const url = podcast.lqip
  const imgRes = getPreviewImage(
    url,
    { cacheKey: 'itunes' + podcast.itunesId },
    512
  )

  const podcastRes = fetchPodcastInfo(podcast.itunesId)
  const data = await Promise.all([imgRes, podcastRes])
  const { dataURIBase64 } = data[0]

  return { coverImgBlur: dataURIBase64, ...data[1] }
}

export const getPodcasts = async () => {
  const podcastList = await getOvercastList()

  const details = await pMap(podcastList, processPodcast, {
    concurrency: 20
  })

  return details
}
