import { getAllPosts, getAllTags } from '@/lib/notion'
import SearchLayout from '@/layouts/search'

export default function Tag ({ tags, posts, currentTag }) {
  return (
    <SearchLayout tags={tags} posts={posts} currentTag={currentTag}/>
  )
}

export async function getStaticProps ({ params }) {
  const currentTag = params.tag
  let posts = await getAllPosts()
  posts = posts.filter(
    post => post.Status === 'Published' && post.Type === 'Post'
  )
  const tags = await getAllTags()
  const filteredPosts = posts.filter(post => post && post.Tags.includes(currentTag))
  return {
    props: {
      tags,
      posts: filteredPosts,
      currentTag
    }
  }
}

export async function getStaticPaths () {
  const tags = await getAllTags()
  return {
    paths: Object.keys(tags).map(tag => ({ params: { tag } })),
    fallback: true
  }
}
