import { sanityClient } from '@/lib/sanity/client'
import { useNextSanityImage } from 'next-sanity-image'

export const useSanityImageProps = image => {
  return useNextSanityImage(sanityClient, image)
}
