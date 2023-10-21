/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/server'

export const runtime = 'edge'

export async function GET(request) {
  try {
    const imageData = await fetch(new URL('./og-bg.png', import.meta.url)).then(
      res => {
        return res.arrayBuffer()
      }
    )

    const fontRes = await fetch(
      new URL('../../../assets/Manrope-ExtraBold.ttf', import.meta.url)
    )
    const fontData = await fontRes.arrayBuffer()

    const { searchParams } = new URL(request.url)
    const hasTitle = searchParams.has('title')
    const hasDesc = searchParams.has('desc')
    const desc = hasDesc ? searchParams.get('desc')?.slice(0, 200) : ''
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'CRAIG.wf'

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
                'linear-gradient(to right, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.8))',
              backgroundClip: 'text',
              '-webkit-background-clip': 'text',
              color: 'transparent'
            }}
          >
            {title}
          </h1>
          {hasDesc && (
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
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Manrope',
            data: fontData,
            style: 'normal'
          }
        ]
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500
    })
  }
}
