'use client'

import ImageBlock from '@/components/post/ImageBlock'
import { cn } from '@/lib/utils'
import { PortableText } from '@portabletext/react'

import Lowlight from 'react-lowlight'

// Load any languages you want to use
// (see https://github.com/highlightjs/highlight.js/tree/main/src/languages)
import CodeBlock from '@/components/post/CodeBlock'
import javascript from 'highlight.js/lib/languages/javascript'

// Then register them with lowlight
Lowlight.registerLanguage('js', javascript)

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      return <ImageBlock image={value} />
    },
    code: data => {
      return <CodeBlock data={data} />
    }
  }
}

const PostContent = ({ content, className }) => {
  return (
    <div
      className={cn(
        'prose-sm mx-auto mt-4  dark:prose-invert md:mt-8',
        className
      )}
    >
      <PortableText value={content} components={myPortableTextComponents} />
    </div>
  )
}

export default PostContent
