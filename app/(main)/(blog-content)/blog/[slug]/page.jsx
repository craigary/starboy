import Container from '@/components/container/Container'
import PostImageComponent from '@/components/post/PostImageComponent'
import '@/components/post/code-highlighting.css'
import { getMdFromNotion } from '@/lib/notion-next/get-md-from-notion'
import { getBlogPostMeta } from '@/lib/notion-next/get-post-list'
import { IconArrowUpLeft } from '@tabler/icons-react'
import { compileMDX } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { Suspense } from 'react'
import rehypeHighlight from 'rehype-highlight'

export const revalidate = 360

export async function generateMetadata({ params }) {
  // read route params
  const { slug } = params
  const post = await getBlogPostMeta(slug)
  return {
    metadataBase: new URL(process.env.WEBSITE_URL),
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `${process.env.WEBSITE_URL}/blog/${slug}`,
      siteName: 'Craig Hart',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date ?? post.createdAt
    }
  }
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const metas = await getBlogPostMeta()
  return metas.map(i => ({ slug: i.slug }))
}

const PostDetails = async ({ params }) => {
  const { slug } = params

  const post = await getBlogPostMeta(slug)

  const { source, words } = await getMdFromNotion(post.id)
  const readingTime = Math.ceil(words / 200)

  const { content } = await compileMDX({
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight]
      }
    },
    source,
    components: {
      img: props => {
        return <PostImageComponent {...props} />
      }
      // code: props => {
      //   return <code>hi</code>
      // }
    }
  })

  return (
    <Container className="max-w-2xl">
      <div className="relative pb-8 pt-16 md:pb-12 md:pt-28">
        <Link href="/blog" className="cursor-nw-resize">
          <p className="absolute left-0 top-4 inline-flex items-center text-sm text-primary/60 md:top-14">
            <IconArrowUpLeft size="14" className="mr-2" />
            Back
          </p>
        </Link>
        <h1 className="mb-4 w-fit bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-lg font-semibold text-transparent md:mb-6 md:text-xl">
          {post.title}
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-sm text-primary/60">
            {post.date ?? post.createdAt}
          </p>
          <Suspense
            fallback={<p className="text-sm text-primary/60">Calculating...</p>}
          >
            <p className="text-sm text-primary/60">
              {readingTime} {readingTime > 1 ? 'mins' : 'min'} to read
            </p>
          </Suspense>
        </div>
      </div>
      <div className="prose relative mx-auto mt-4 max-w-none whitespace-normal tracking-wide dark:prose-invert prose-pre:max-w-full prose-pre:overflow-x-auto prose-pre:whitespace-pre-wrap prose-pre:bg-transparent prose-pre:p-0 md:mt-8">
        <Suspense fallback={<>Loading...</>}>{content}</Suspense>
      </div>
    </Container>
  )
}

export default PostDetails
