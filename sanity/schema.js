import techStack from '@/sanity/schemas/tech-stack'
import author from './schemas/author'
import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import work from './schemas/work'

export const schema = {
  types: [work, techStack, post, author, category, blockContent]
}
