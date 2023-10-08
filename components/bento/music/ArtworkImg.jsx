'use client'
import Image from 'next/image'

const appleMusicArtworkLoader = ({ src, width, quality }) => {
  // Example URL src ='https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9e/d7/b1/9ed7b186-11e7-f9d8-64f9-87ea16f22703/16UMGIM21561.rgb.jpg/{w}x{h}bb.jpg'

  return src.replace('{w}', width).replace('{h}', width)
}
const ArtworkImg = ({ artwork, name }) => {
  return (
    <Image
      alt={name}
      loader={appleMusicArtworkLoader}
      src={artwork.url}
      fill
      sizes="300px"
      className="h-full w-full object-contain"
    ></Image>
  )
}

export default ArtworkImg
