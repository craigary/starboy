import { groq, sanityClient } from '@/lib/sanity/client'

const getPostDetails = async slug => {
  const res = await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
    ...,
      "content": content[]{
...,
...select(
        _type == "image" => {
          ...,
          "asset": asset->
        }
      )
      },
        "numberOfCharacters": length(pt::text(content)),
  // assumes 5 characters as mean word length
  // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
  "estimatedWordCount": round(length(pt::text(content)) / 5),
  // Words per minute: 180
  "estimatedReadingTime": round(length(pt::text(content)) / 5 / 180 )

    }`,
    { slug },
    {
      next: {
        revalidate: 60
      }
    }
  )
  return res
}

export { getPostDetails }
