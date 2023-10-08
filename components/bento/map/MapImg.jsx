'use client'
import { cn } from '@/lib/utils'
import { CldImage } from 'next-cloudinary'

const MapImg = ({ imageId, className }) => {
  return (
    <CldImage
      src={imageId}
      width={1000}
      height={1000}
      className={cn('h-full w-full object-cover', className)}
      alt="Description of my image"
    />
  )
}

export default MapImg
