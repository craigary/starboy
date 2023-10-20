import PostContent from '@/components/post/PostContent'
import { IconArrowUpLeft } from '@tabler/icons-react'
import Link from 'next/link'

const PostWrapper = ({ post }) => {
  return (
    <>
      <div className="relative pb-8 pt-16 md:pb-12 md:pt-28">
        <Link href="/blog">
          <p className="absolute left-0 top-4 inline-flex items-center text-sm text-primary/60 md:top-14">
            <IconArrowUpLeft size="14" className="mr-2" />
            Back
          </p>
        </Link>
        <h1 className="mb-4 w-fit bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-lg font-semibold text-transparent md:mb-6">
          {post.title}
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-sm text-primary/60">{post.publishedAt}</p>
          <p className="text-sm text-primary/60">
            {post.estimatedReadingTime}{' '}
            {post.estimatedReadingTime > 1 ? 'mins' : 'min'} to read
          </p>
        </div>
      </div>

      <PostContent content={post.content} />
    </>
  )
}

export default PostWrapper
