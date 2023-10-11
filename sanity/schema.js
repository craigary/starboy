import techStack from '@/sanity/schemas/tech-stack'
import author from './schemas/author'
import blockContent from './schemas/blockContent'
import post from './schemas/post'
import tag from './schemas/tag'
import work from './schemas/work'

export const schema = {
  types: [work, techStack, post, author, tag, blockContent]
}
