'use client'

import PostContent from '@/components/post/PostContent'
import { cn } from '@/lib/utils'
import { IconArrowUpLeft } from '@tabler/icons-react'
import { format } from 'date-fns'
import Link from 'next/link'
import { useState } from 'react'

const PostWrapper = ({ post, recordMap }) => {
  const [getReadMinsCompleted, setGetReadMinsCompleted] = useState(false)
  const [readMins, setReadMins] = useState(0)
  return (
    <>
      <div className="relative pb-8 pt-16 md:pb-12 md:pt-28">
        <Link href="/blog">
          <p className="absolute left-0 top-4 inline-flex items-center text-sm text-primary/60 md:top-14">
            <IconArrowUpLeft size="14" className="mr-2" />
            Back
          </p>
        </Link>
        <h1 className="mb-4 w-fit bg-gradient-to-r from-primary/80 to-primary bg-clip-text font-medium text-transparent md:mb-6">
          {post.title}
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-sm text-primary/60">
            {format(post.date, 'MMM dd, yyyy')}
          </p>
          <p
            className={cn(
              'text-sm text-primary/60 transition-all',
              getReadMinsCompleted ? 'opacity-100' : 'opacity-0'
            )}
          >
            {readMins} {readMins > 0 ? 'mins' : 'min'} to Read
          </p>
        </div>
      </div>

      <PostContent
        recordMap={recordMap}
        setGetReadMinsCompleted={setGetReadMinsCompleted}
        setReadMins={setReadMins}
        className="prose !leading-7 dark:prose-invert prose-img:my-0"
      />
    </>
  )
}

export default PostWrapper
