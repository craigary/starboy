'use client'
import { useSanityImageProps } from '@/lib/hooks/use-sanity-image-props'
import { motion } from 'framer-motion'
import Image from 'next/image'
const WorkItem = ({ item, delay }) => {
  let imageProps
  imageProps = useSanityImageProps(item.image)

  return (
    <motion.div
      initial={{ opacity: 0.05, translateY: 5 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.25, delay: delay }}
      viewport={{ once: true }}
      className="flex flex-col overflow-hidden rounded-lg border shadow-none transition-all hover:shadow-lg"
    >
      <div
        className="relative flex aspect-video h-full items-center justify-center border-b"
        style={{
          backgroundColor: 'var(--color-page-background)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cccccc' fill-opacity='0.12'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        {item.image ? (
          <Image
            alt={item.title}
            src={imageProps.src}
            loader={imageProps.loader}
            blurDataURL={item.image.asset.metadata.lqip}
            sizes={'200px'}
            fill
            style={{
              objectFit: 'contain',
              aspectRatio: item.image.asset.metadata.dimensions.aspectRatio
            }}
            className="scale-50 rounded-lg"
            placeholder="blur"
          />
        ) : (
          <p className="text-lg">{item.title}</p>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm">{item.title}</p>
        <p className="text-sm">{item.description}</p>
      </div>
    </motion.div>
  )
}

export default WorkItem
