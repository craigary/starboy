import BlogLayout from '@/layouts/blog'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

const BlogPost = ({ post, blocks }) => {
  if (!post) return null
  return <BlogLayout blocks={blocks} frontMatter={post}>
    </BlogLayout>
}

export async function getStaticPaths () {
  let posts = await getAllPosts()
  posts = posts.filter(post => post.Status === 'Published' && post.Type === 'Post')
  return {
    paths: posts.map((row) => `${BLOG.path}/${row.Slug}`),
    fallback: true
  }
}

export async function getStaticProps ({ params: { slug } }) {
  let posts = await getAllPosts()
  posts = posts.filter(post => post.Status === 'Published' && post.Type === 'Post')
  const post = posts.find((t) => t.Slug === slug)
  const blocks = await getPostBlocks(post.id)
  return {
    props: { blocks, post },
    revalidate: 1
  }
}

export default BlogPost
