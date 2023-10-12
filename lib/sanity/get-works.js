import { groq, sanityClient } from '@/lib/sanity/client'

const getAllWorks = () => {
  return sanityClient.fetch(
    groq`*[_type == "work"]{
    ...,
    image{asset->{...,metadata}},
  }`,
    {
      next: {
        revalidate: 60
      }
    }
  )
}

export { getAllWorks }
