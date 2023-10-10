'use client'
import Heading from '@/components/Heading'
import Container from '@/components/container/Container'
import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

const GuestPage = () => {
  const { resolvedTheme } = useTheme()

  return (
    <Container>
      <Heading title="Guestbook" className="relative">
        <p className="mb-4 w-full leading-6 md:w-3/4 md:leading-8">
          来都来了，留个言吧！留言可能会被展示在首页。
        </p>
      </Heading>
      <Giscus
        id="comments"
        repo="craigary/starboy-comments"
        repoId="R_kgDOKeY5og"
        category="Announcements"
        categoryId="DIC_kwDOKeY5os4CaASA"
        mapping="pathname"
        reactionsEnabled="0"
        emitMetadata="0"
        inputPosition="top"
        theme={resolvedTheme}
        lang="en"
        loading="lazy"
      ></Giscus>
    </Container>
  )
}

export default GuestPage
