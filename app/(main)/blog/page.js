import PostList from '@/components/post/PostList'
import { getPostsCategoryByDate } from '@/lib/notion/get-post-list'

const BlogPage = async () => {
  const data = await getPostsCategoryByDate()
  return <PostList postList={data} />
}

export default BlogPage
