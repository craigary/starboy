import { getPostDetails } from '@/lib/sanity/get-post-details'
import { ImageResponse } from 'next/server'
// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

export default async function Image({ params }) {
  const imageDataRes = fetch(
    new URL('../../../../../assets/og/og-bg.png', import.meta.url)
  ).then(res => {
    return res.arrayBuffer()
  })

  const fontData = fetch(
    new URL('../../../../../assets/Manrope-ExtraBold.ttf', import.meta.url)
  ).then(res => res.arrayBuffer())

  const { slug } = params
  const postRes = getPostDetails(slug)

  const [imageData, post] = await Promise.all([imageDataRes, postRes])

  const desc = post?.desc?.slice(0, 200)
  const title = post?.title?.slice(0, 200)

  return new ImageResponse(
    (
      <div
        style={{
          color: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          alt=""
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          src={imageData}
        ></img>
        <h1
          style={{
            fontSize: 80,
            textAlign: 'center',
            fontFamily: '"Manrope"',

            backgroundImage:
              'linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1))',
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent'
          }}
        >
          {title}
        </h1>
        {desc && (
          <p
            style={{
              color: '#ffffff',
              opacity: '0.5',
              marginTop: '-1rem'
            }}
          >
            {desc}
          </p>
        )}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Manrope',
          data: await fontData,
          style: 'normal'
        }
      ]
    }
  )
}
