import BlogLayout from '@/layouts/blog'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

const BlogPost = ({ post, blocks }) => {
  if (!post) return null
  return <BlogLayout blocks={blocks} frontMatter={post}>
    </BlogLayout>
}

export async function getStaticPaths () {
  const table = await getAllPosts()
  return {
    paths: table.map((row) => `${BLOG.path}/${row.slug}`),
    fallback: true
  }
}

export async function getStaticProps ({ params: { slug } }) {
  const posts = await getAllPosts()
  const post = posts.find((t) => t.slug === slug)
  const blocks = await getPostBlocks(post.id)
  return {
    props: { blocks, post },
    revalidate: 1
  }
}

export default BlogPost
