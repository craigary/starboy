'use client'
import GiscusComponent from '@giscus/react'
import { useTheme } from 'next-themes'

const Giscus = () => {
  const { resolvedTheme } = useTheme()
  return (
    <GiscusComponent
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
    ></GiscusComponent>
  )
}

export default Giscus
