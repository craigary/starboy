import { getMdFromNotion } from '@/lib/notion-next/get-md-from-notion'
import { getBlogPostMeta } from '@/lib/notion-next/get-post-list'
import { marked } from 'marked'

const renderer = {
  image(href, title, text) {
    console.log({ href, title, text })
    return `<img src="${href}" alt="${title ? title : ''}"></img>`
  }
}

marked.use({ renderer })

const getAllPostDetails = async post => {
  const { source } = await getMdFromNotion(post.id)
  return {
    ...post,
    content: marked.parse(source)
  }
}

export const getPostRss = async () => {
  const postCount = 5
  const allPostMeta = await getBlogPostMeta()
  const posts = allPostMeta.slice(0, postCount)
  const promise = await Promise.allSettled(posts.map(getAllPostDetails))
  const content = promise.map(p => p.value)
  return content
}
