import Heading from '@/components/Heading'
import Container from '@/components/container/Container'
import PostList from '@/components/post/PostList'
import { generateMetaData } from '@/lib/metadata'
import { getPostList } from '@/lib/notion-next/get-post-list'
import { IconWritingSign } from '@tabler/icons-react'

const pathName = '/blog'
export const metadata = generateMetaData(pathName)

export const revalidate = 60

const BlogPage = async () => {
  const data = await getPostList()
  return (
    <Container>
      <Heading title="Blog" className="relative">
        <IconWritingSign
          className="absolute -right-[10%] top-0 opacity-5"
          size="80%"
          stroke={1}
        />

        <div className="space-y-3 leading-6 tracking-[0.015em] md:w-3/4 md:leading-8">
          <p>This is the place where I put my long form hot takes 😈</p>
          <p>I promise I will write more in the future.</p>
        </div>
      </Heading>
      <PostList postList={data} />
    </Container>
  )
}

export default BlogPage
