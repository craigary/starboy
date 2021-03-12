import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  return (
    <article key={post.id} className="mb-6 md:mb-8">
      <header className="flex flex-col justify-between md:flex-row ">
        <Link href={`${BLOG.path}/${post.Slug}`}>
          <h2 className="font-sans text-lg md:text-xl font-medium mb-2">
            <a>{post.Title}</a>
          </h2>
        </Link>
        <time className="flex-shrink-0 text-gray-600">{formatDate(post.Date, BLOG.lang)}</time>
      </header>
      <main>
        <p className="hidden md:block text-gray-700 leading-7">{post.Description}</p>
      </main>
    </article>
  )
}

export default BlogPost
