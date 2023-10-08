'use client'
import { format } from 'date-fns'
import { motion } from 'framer-motion'
import Link from 'next/link'

const PostItem = ({ post, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 5 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.25, delay: delay }}
      viewport={{ once: true }}
      className="group my-4 flex w-full justify-between gap-4"
    >
      <Link href={'/blog/' + post.slug}>
        <h2 className="text grow cursor-default group-hover:text-blue-600">
          {post.title}
        </h2>
      </Link>
      <div className="flex shrink-0 items-center justify-end gap-2 text-primary/30">
        <p className="text-xs font-medium">
          {post.tags.map((tag, index) => (
            <span key={index}>#{tag.value} </span>
          ))}
        </p>
        <p className="text-xs">{format(post.date, 'yyyy-MM-dd')}</p>
      </div>
    </motion.div>
  )
}

export default PostItem
