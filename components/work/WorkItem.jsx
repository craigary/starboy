'use client'
import { notionImageLoader } from '@/lib/image-loader/notion'
import { wordpressImageLoader } from '@/lib/image-loader/wp'
import { IconArrowUpRight } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
const WorkItem = ({ item, delay }) => {
  const { image } = item
  return (
    <motion.div
      initial={{ opacity: 0.05, translateY: 5 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.25, delay: delay }}
      viewport={{ once: true }}
      className="group flex flex-col overflow-hidden rounded border shadow-none transition-all hover:shadow-lg"
    >
      <div className="relative flex aspect-video h-full items-center justify-center border-b">
        {image ? (
          <Image
            alt={item.title}
            src={image.url}
            loader={
              image.type === 'notion' ? notionImageLoader : wordpressImageLoader
            }
            blurDataURL={image.blur}
            sizes={'200px'}
            fill
            style={{
              objectFit: 'contain',
              aspectRatio: image.aspectRatio
            }}
            className="scale-50 rounded dark:opacity-95 dark:invert"
            placeholder="blur"
          />
        ) : (
          <p className="text-lg">{item.name}</p>
        )}
      </div>
      <div className="relative p-4">
        <div className="absolute right-4 top-4 flex h-6 w-6 rotate-45 items-center justify-center rounded-full border border-primary/30 transition-all group-hover:rotate-0 group-hover:border-primary group-hover:bg-primary">
          <IconArrowUpRight
            size="14"
            className="transition-all group-hover:text-primary-foreground"
          />
        </div>
        <p className="text-sm font-medium">{item.name}</p>
        <p className="text-sm">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default WorkItem
