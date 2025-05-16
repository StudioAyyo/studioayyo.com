// src/app/opengraph-image/route.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          // Brand gradient: primary → secondary
          background: 'linear-gradient(135deg, #8700FF 0%, #5C07A0 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: 80,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          StudioAyyo
        </h1>

        <p
          style={{
            fontSize: 48,
            margin: '20px 0 0',
            color: '#FFD966',  // accent color
            fontWeight: 500,
          }}
        >
          Coming Soon
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

