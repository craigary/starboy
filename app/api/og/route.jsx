import { ImageResponse } from 'next/server'
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)

    // ?title=<title>
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'https://craig.wf/'

    const imageData = await fetch(new URL('./og-bg.png', import.meta.url)).then(
      res => {
        return res.arrayBuffer()
      }
    )

    const fontRes = await fetch(
      new URL('../../../assets/Manrope-ExtraBold.ttf', import.meta.url)
    )
    const fontData = await fontRes.arrayBuffer()

    return new ImageResponse(
      (
        <div
          style={{
            color: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
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

          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              fontSize: 80,
              textAlign: 'center',
              fontFamily: '"Manrope"',
              justifyContent: 'center',
              textWrap: 'balanced',
              alignItems: 'center',
              padding: '50px 200px'
            }}
          >
            <p
              style={{
                color: 'white',
                textWrap: 'balance',
                lineHeight: '6rem',
                fontFamily: '"Manrope"',
                backgroundImage:
                  'linear-gradient(184deg, #FFF -51.59%, #E9A728 73.55%, #C85300 124.93%)',
                backgroundClip: 'text',
                '-webkit-background-clip': 'text',
                color: 'transparent'
              }}
            >
              {title}
            </p>
          </div>
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
