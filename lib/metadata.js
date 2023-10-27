import { navigation } from '@/lib/get-navigation'
import { createHmac } from 'crypto'

export function getToken(title, desc) {
  const hmac = createHmac('sha256', process.env.OG_IMAGE_SECRET)
  hmac.update(JSON.stringify({ title, desc }))
  const token = hmac.digest('hex')
  return token
}

export const generateMetaData = path => {
  const nav = navigation
    .map(i => i.items)
    .flat()
    .find(item => item.link === path)

  const title = path === '/' ? 'Craig Hart' : nav?.name + ' · Craig Hart'
  const desc = nav?.description

  const ogTitle = path === '/' ? 'CRAIG.wf' : nav?.name
  const ogDesc = nav?.description ?? ''
  const ogToken = getToken(ogTitle, ogDesc)

  return {
    title: title,
    description: desc,
    generator: 'Next.js',
    authors: { name: 'Craig Hart', url: process.env.WEBSITE_URL },
    creator: 'Craig Hart',
    metadataBase: new URL(process.env.WEBSITE_URL),
    openGraph: {
      title: title,
      siteName: 'Craig Hart',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${process.env.WEBSITE_URL}/api/og?title=${ogTitle}&desc=${ogDesc}&token=${ogToken}`,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    }
  }
}
