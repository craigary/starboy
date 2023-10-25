'use client'
import { notionImageLoader } from '@/lib/image-loader/notion'
import { unsplashImageLoader } from '@/lib/image-loader/unsplash'
import { wordpressImageLoader } from '@/lib/image-loader/wp'
import Image from 'next/image'

const ImageBlock = props => {
  const loaderMap = new Map()
  loaderMap.set('notion', notionImageLoader)
  loaderMap.set('external-optimized', wordpressImageLoader)
  loaderMap.set('unsplash', unsplashImageLoader)

  if (
    (props.type === 'notion' ||
      props.type === 'external-optimized' ||
      props.type === 'unsplash') &&
    props.dataURIBase64
  ) {
    return (
      <Image
        alt={props.alt}
        src={props.src}
        loader={loaderMap.get(props.type)}
        blurDataURL={props.dataURIBase64}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
        style={{
          width: '100%',
          height: 'auto'
        }}
        width={500}
        height={500 * props.aspectRatio}
        placeholder="blur"
      />
    )
  }

  return (
    <Image
      alt={props.alt}
      src={props.src}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
      style={{
        width: '100%',
        height: 'auto'
      }}
      width={500}
      height={300}
      unoptimized
    />
  )
}

export default ImageBlock
