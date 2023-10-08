import Container from '@/components/container/Container'
import PostWrapper from '@/components/post/PostWrapper'
import { getPostContent } from '@/lib/notion/get-post-content'
import { getAllPageSlug } from '@/lib/notion/get-post-list'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return await getAllPageSlug()
}

const PostDetails = async ({ params }) => {
  const { slug } = params
  const { post, recordMap } = await getPostContent(slug)

  return (
    <Container>
      <PostWrapper post={post} recordMap={recordMap} />
    </Container>
  )
}

export default PostDetails
