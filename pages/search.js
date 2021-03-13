import SearchLayout from '@/layouts/search'
import { getAllPosts, getAllTags } from '@/lib/notion'
export async function getStaticProps () {
  let posts = await getAllPosts()
  posts = posts.filter(
    post => post.Status === 'Published' && post.Type === 'Post'
  )
  console.log(posts)
  const tags = await getAllTags()
  return {
    props: {
      tags,
      posts
    }
  }
}
const search = ({ tags, posts }) => {
  return <SearchLayout tags={tags} posts={posts} />
}
export default search
