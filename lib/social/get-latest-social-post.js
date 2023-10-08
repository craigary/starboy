const userId = process.env.TWITTER_USER_ID
const bearerToken = process.env.TWITTER_API_TOKEN

import { parse } from 'rss-to-json'

const getLatestSocialPost = async () => {
  return await parse('https://rsshub.app/threads/craigaryhart')
}

export default getLatestSocialPost
