import { notionFetchClient } from '@/lib/notion-next/client'

const databaseId = process.env.NOTION_SOCIAL_PAGE

const getLatestSocialPosts = async () => {
  const data = await notionFetchClient(`/databases/${databaseId}/query`, {
    method: 'POST',
    body: {
      sorts: [
        {
          property: 'Date',
          direction: 'descending'
        }
      ]
    }
  })

  const { properties } = data[0]

  const { URL, Source, Date, Name, Handle } = properties

  return {
    link: URL.url,
    source: Source.select.name,
    date: Date.date.start,
    title: Name.title[0].plain_text,
    handle: Handle.rich_text[0].plain_text
  }
}
export { getLatestSocialPosts }
