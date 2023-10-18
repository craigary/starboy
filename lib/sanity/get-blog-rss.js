import { groq, sanityClient } from '@/lib/sanity/client'
export const getBlogRss = async (limit = 5, fullContent = false) => {
  const queryWithoutFullContent = groq`*[_type == "post"] | order(publishedAt desc, _createdAt desc) [0...${limit}]{
    _createdAt,
    _updatedAt,
    _id,
    title,
    "slug":slug.current,
    publishedAt,
    tags[]->{title, "slug":slug.current, _id},
    summary}`

  const queryWithFullContent = groq`*[_type == "post"] | order(publishedAt desc, _createdAt desc) [0...${limit}]{
    _createdAt,
    _updatedAt,
    _id,
    title,
    "slug":slug.current,
    publishedAt,
    "content": content[]{
      ...,
      ...select(
         _type == "image" => {
            ...,
            "asset": asset->
          }
        )
      },
    tags[]->{title, "slug":slug.current, _id},
    summary}`

  const res = await sanityClient.fetch(
    fullContent ? queryWithFullContent : queryWithoutFullContent,
    {
      next: {
        revalidate: 60
      }
    }
  )

  return res
}
