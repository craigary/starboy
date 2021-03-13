import Container from '@/components/Container'
import SearchBox from '@/components/SearchBox'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import Tags from '@/components/Tags'

const SearchLayout = ({ tags, posts }) => {
  return (
    <Container>
      <Tags tags={tags} />
    </Container>
  )
}

export default SearchLayout
