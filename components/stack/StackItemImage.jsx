'use client'
import { stackImageLoader } from '@/lib/stack-image-loader'
import Image from 'next/image'

const StackItemImage = ({ item }) => {
  return (
    <div className="h-14 w-14 shrink-0 drop-shadow md:h-16 md:w-16">
      <Image
        alt={item.name}
        height={160}
        width={160}
        src={item.icon_url}
        loader={stackImageLoader}
        placeholder="blur"
        blurDataURL={item.icon_url_blur}
        className="object-contain"
      ></Image>
    </div>
  )
}

export default StackItemImage
