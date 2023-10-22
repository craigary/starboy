import { ImageResponse } from 'next/og'
import { NextResponse } from 'next/server'

export const runtime = 'edge'

const ogSecret = process.env.OG_IMAGE_SECRET

const key = crypto.subtle.importKey(
  'raw',
  new TextEncoder().encode(ogSecret),
  { name: 'HMAC', hash: { name: 'SHA-256' } },
  false,
  ['sign']
)

function toHex(arrayBuffer) {
  return Array.prototype.map
    .call(new Uint8Array(arrayBuffer), n => n.toString(16).padStart(2, '0'))
    .join('')
}

const fontData = async () => {
  const res = await fetch(
    new URL('../../../assets/Manrope-ExtraBold.ttf', import.meta.url)
  )
  return res.arrayBuffer()
}

export async function GET(req) {
  const { searchParams } = new URL(req.url)

  const title = searchParams.get('title')
  const desc = searchParams.get('desc') ?? ''
  const token = searchParams.get('token')

  if (!token || !title) {
    return new NextResponse('Invalid token or title', { status: 401 })
  }

  const verifyToken = toHex(
    await crypto.subtle.sign(
      'HMAC',
      await key,
      new TextEncoder().encode(JSON.stringify({ title, desc }))
    )
  )

  if (token !== verifyToken) {
    return new Response('Invalid token.', { status: 401 })
  }

  const imageData = await fetch(
    new URL('../../../assets/og/og-bg.png', import.meta.url)
  ).then(res => {
    return res.arrayBuffer()
  })

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
            padding: '50px 200px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h1
            style={{
              fontSize: 80,
              textAlign: 'center',
              fontFamily: '"Manrope", sans-serif',
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
                marginTop: '-1rem',
                textAlign: 'center',
                textWrap: 'balance'
              }}
            >
              {desc}
            </p>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Manrope',
          data: await fontData(),
          style: 'normal'
        }
      ]
    }
  )
}
