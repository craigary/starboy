import { getPostRss } from '@/lib/notion-next/get-post-rss'
import { toXML } from 'jstoxml'

export const revalidate = 60
export const runtime = 'edge'
const websiteUrl = process.env.WEBSITE_URL

export async function GET() {
  const rawData = await getPostRss()
  const modified = rawData.map(item => {
    return {
      title: item.title,
      description: item.summary,
      link: `${websiteUrl}/blog/${item.slug}`,
      guid: item.id,
      content: item.content
    }
  })

  const rssStructure = {
    _name: 'rss',
    _attrs: {
      version: '2.0'
    },
    _content: {
      channel: modified
    }
  }

  const rssConfig = {
    indent: '    '
  }

  const rss = toXML(rssStructure, rssConfig)

  return new Response(rss, {
    headers: {
      'Content-Type': 'text/xml'
    }
  })
}
