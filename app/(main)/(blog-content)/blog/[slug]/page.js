import Container from '@/components/container/Container'
import PostWrapper from '@/components/post/PostWrapper'
import { getBlogAllSlugs } from '@/lib/sanity/get-blog-posts'
import { getPostDetails } from '@/lib/sanity/get-post-details'

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return await getBlogAllSlugs()
}

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = params

  const post = await getPostDetails(slug)

  return {
    title: post.title
  }
}

const PostDetails = async ({ params }) => {
  const { slug } = params
  const post = await getPostDetails(slug)

  return (
    <Container className="max-w-2xl">
      <PostWrapper post={post} />
    </Container>
  )
}

export default PostDetails
