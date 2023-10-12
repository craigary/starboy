'use client'
import { useSanityImageProps } from '@/lib/hooks/use-sanity-image-props'
import Image from 'next/image'

const ImageBlock = ({
  image,
  alt = '',
  sizes = '(max-width: 800px) 100vw, 800px',
  fill
}) => {
  const imageProps = useSanityImageProps(image)
  const altText = image?.alt || alt

  if (!fill) {
    return (
      <Image
        alt={altText}
        src={imageProps.src}
        loader={imageProps.loader}
        blurDataURL={image.asset.metadata.lqip}
        sizes={sizes}
        width={800}
        height={800 / image.asset.metadata.dimensions.aspectRatio}
        style={{
          objectFit: 'cover',
          aspectRatio: image.asset.metadata.dimensions.aspectRatio,
          height: 'auto'
        }}
        className="rounded-lg"
        placeholder="blur"
      />
    )
  } else {
    return (
      <Image
        alt={altText}
        src={imageProps.src}
        loader={imageProps.loader}
        blurDataURL={image.asset.metadata.lqip}
        sizes={sizes}
        fill
        style={{ objectFit: 'cover' }}
        placeholder="blur"
      />
    )
  }
}

export default ImageBlock
