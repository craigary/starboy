import { sanityClient } from '@/lib/sanity/client'

const getTechStack = () => {
  return sanityClient.fetch(`*[_type == "techStack"]`)
}

export { getTechStack }
