'use client'
import { NotionRenderer } from 'react-notion-x'

import { useTheme } from 'next-themes'
import wordsCounter from 'word-counting'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useRef } from 'react'

import 'react-notion-x/src/styles.css'
import './notion-style-override.css'
// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(m => m.Code)
)
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(m => m.Collection)
)

const PostContent = ({
  recordMap,
  setGetReadMinsCompleted,
  setReadMins,
  className
}) => {
  const { resolvedTheme } = useTheme()
  const ref = useRef(null)

  useEffect(() => {
    // Calculate Readmins
    if (ref.current) {
      const totalWords = wordsCounter(ref.current.innerHTML, {
        isHtml: true
      }).wordsCount

      const readMins = Math.ceil(totalWords / 130)

      setReadMins(readMins)
      setGetReadMinsCompleted(true)
    }
  }, [setGetReadMinsCompleted, setReadMins])

  return (
    <div className="mx-auto mt-4 md:mt-8" ref={ref}>
      <NotionRenderer
        className={className}
        components={{
          Code,
          Collection,
          nextImage: Image,
          nextLink: Link
        }}
        previewImages={true}
        disableHeader={true}
        recordMap={recordMap}
        darkMode={resolvedTheme === 'dark'}
      />
    </div>
  )
}

export default PostContent
