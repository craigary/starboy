import { getAllPosts } from '@/lib/notion'

// Move to @/page/search.js
export async function getStaticProps (context) {
  const { tag } = context.params // Get Current Tag
  let posts = await getAllPosts()
  posts = posts.filter(post => {
    if (post.Status === 'Published' && post.Type === 'Post' && (post.Tags !== undefined)) {
      return post.Tags.includes(tag)
    }
    return false
  })
  return {
    props: {
      tag,
      posts
    } // will be passed to the page component as props
  }
}
export async function getStaticPaths () {
  let posts = await getAllPosts()
  posts = posts.filter(
    post => post.Status === 'Published' && post.Type === 'Post'
  )
  let tags = posts.map(p => p.Tags)
  tags = [...new Set([...tags.flat()])]
  tags = tags.filter(t => t)
  return {
    paths: tags.map(tag => ({ params: { tag } })),
    fallback: true
  }
}

const Tag = ({ tag }) => {
  return null
}

export default Tag
