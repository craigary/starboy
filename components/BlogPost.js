import Link from 'next/link'
import BLOG from '@/blog.config'

const BlogPost = ({ post }) => {
  return (
    <article key={post.id} className="mb-4 md:mb-8">
      <header className="flex flex-col justify-between md:flex-row ">
        <Link href={`${BLOG.path}/${post.slug}`}>
          <h2 className="text-xl font-sans font-bold">
            <a>{post.title}</a>
          </h2>
        </Link>
        <time>{post.date}</time>
      </header>
      <main>
        <p className="hidden md:block">{post.Description}</p>
      </main>
    </article>
  )
}

export default BlogPost
