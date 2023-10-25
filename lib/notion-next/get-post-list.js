import { notionFetchClient } from '@/lib/notion-next/client'
import { cache } from 'react'

const databaseId = process.env.NOTION_BLOG_ID
const getAllPosts = cache(async () => {
  const data = await notionFetchClient(`/databases/${databaseId}/query`, {
    method: 'POST',
    body: {
      filter: {
        property: 'status',
        status: {
          equals: 'Published'
        }
      },
      sorts: [
        {
          property: 'date',
          direction: 'descending'
        },
        {
          property: 'created time',
          direction: 'descending'
        }
      ]
    }
  })

  return data.reduce((acc, item) => {
    const {
      slug,
      tags,
      summary,
      title,
      date,
      'created time': createdAt,
      'updated time': updatedAt
    } = item.properties

    const newItem = {
      id: item.id,
      date: date?.date?.start,
      slug: slug?.rich_text[0]?.plain_text,
      createdAt: createdAt.created_time,
      updatedAt: updatedAt.last_edited_time,
      tags: tags?.multi_select,
      summary: summary.rich_text[0]?.plain_text,
      title: title.title[0]?.plain_text
    }

    if (newItem.slug) {
      acc.push(newItem)
    }
    return acc
  }, [])
})

const getPostList = cache(async () => {
  const posts = await getAllPosts()
  return posts.reduce((acc, item) => {
    const date = new Date(item.date || item.createdAt)
    const year = date.getFullYear()

    const category = acc.find(c => c.year === year)
    if (category) {
      category.posts.push(item)
    } else {
      acc.push({ year, posts: [item] })
    }

    return acc
  }, [])
})
const getBlogPostMeta = cache(async slug => {
  if (!slug) {
    return await getAllPosts()
  }
  const allPosts = await getAllPosts()
  return allPosts.find(post => post.slug === slug)
})

export { getBlogPostMeta, getPostList }
