import Image from 'next/image'
import Container from '../components/Container'
import { useRouter } from 'next/router'
import { NotionRenderer } from 'react-notion'
// import BLOG from '../blog.config'

const BlogLayout = ({ children, blocks, frontMatter }) => {
  const router = useRouter()
  const dateFormat = dateString => {
    const d = new Date(dateString)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return d.toLocaleDateString('en-US', options)
  }
  return (
    <Container
      layout="blog"
      title={frontMatter.title}
      description={frontMatter.description}
      // date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article>
        <h1 className="text-xl font-sans font-bold">{frontMatter.title}</h1>
        <nav className="flex mt-4 mb-2">
          <div className="flex">
            <a href="https://twitter.com/craigaryhart" className="flex">
                <Image
                  alt="Craig Hart"
                  width={24}
                  height={24}
                  src="/logo.svg"
                  className="rounded-full"
                />
              <p className="ml-2">Craig Hart</p>
            </a>
          </div>
          &nbsp;/&nbsp;
          <div className="block">
            {dateFormat(frontMatter.date)}
          </div>
        </nav>
        {children}
        <NotionRenderer blockMap={blocks} />
        <p onClick={() => router.back()} className="mt-2">
          ← Back
        </p>
      </article>
    </Container>
  )
}

export default BlogLayout
