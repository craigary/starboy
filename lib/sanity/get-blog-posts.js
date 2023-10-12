import { groq, sanityClient } from '@/lib/sanity/client'

const getBlogPosts = async limit => {
  const queryWithLimitedNumber = groq`*[_type == "post"] | order(publishedAt desc, _createdAt desc) [0...${limit}]{
    _createdAt,
    _updatedAt,
    _id,
    title,
    "slug":slug.current,
    publishedAt,
    tags[]->{title, "slug":slug.current, _id},
    summary}`

  const queryAll = groq`*[_type == "post"] | order(publishedAt desc, _createdAt desc){
    _createdAt,
    _updatedAt,
    _id,
    title,
    "slug":slug.current,
    publishedAt,
    tags[]->{title, "slug":slug.current, _id},
    summary}`

  const res = await sanityClient.fetch(
    limit ? queryWithLimitedNumber : queryAll,
    {
      next: {
        revalidate: 60
      }
    }
  )

  if (limit) return res

  const categoryByDate = res.reduce((acc, cur) => {
    const date = new Date(cur.publishedAt || cur._createdAt)
    const year = date.getFullYear()

    const category = acc.find(c => c.year === year)
    if (category) {
      category.posts.push(cur)
    } else {
      acc.push({ year, posts: [cur] })
    }
    return acc
  }, [])

  return categoryByDate
}

const getBlogAllSlugs = async () => {
  const queryAll = groq`*[_type == "post"] | order(publishedAt desc, _createdAt desc){"slug":slug.current}`
  return await sanityClient.fetch(queryAll, {
    next: {
      revalidate: 60
    }
  })
}

export { getBlogAllSlugs, getBlogPosts }
