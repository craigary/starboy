import ImageBlock from '@/components/post/ImageBlock'
import { notionImageUrlParser } from '@/lib/notion-next/notion-image-parser'
import { createPreviewImage } from '@/lib/preview-image'
import { Suspense } from 'react'

const PostImageComponent = async props => {
  const { url, type } = notionImageUrlParser(props.src, props.alt)
  if (type === 'error') return null

  const cacheKey = props.alt
  let res = {}
  if (['notion', 'external-optimized', 'unsplash'].includes(type)) {
    const previewImgRes = await createPreviewImage(url, { cacheKey }, 800)
    res = { ...previewImgRes }
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ImageBlock {...res} type={type} src={url} alt={props.title ?? ''} />
    </Suspense>
  )
}

export default PostImageComponent
