'use client'
import { notionImageLoader } from '@/lib/notion-next/notion-image-loader'
import Image from 'next/image'

const MyServiceIcon = ({ item }) => {
  return (
    <div className="h-14 w-14 shrink-0 drop-shadow md:h-16 md:w-16">
      <Image
        alt={item.name}
        height={160}
        width={160}
        src={item.icon.url}
        loader={notionImageLoader}
        placeholder="blur"
        blurDataURL={item.icon.blur}
        className="object-contain"
      ></Image>
    </div>
  )
}

export default MyServiceIcon
