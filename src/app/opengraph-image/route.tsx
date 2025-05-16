// src/app/opengraph-image/route.tsx
import { ImageResponse } from 'next/og'

// 1. Keep only the allowed exports
export const runtime = 'edge'

// 2. Remove `export const size` and `export const contentType`
// 3. Define a GET handler that returns your image, passing width/height inline
export async function GET(request: Request) {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #000000, #333333)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          color: 'white',
          padding: '40px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 72, marginBottom: 24, fontWeight: 'bold' }}>
          StudioAyyo
        </div>
        <div style={{ fontSize: 48, opacity: 0.9 }}>
          Coming Soon
        </div>
        <div style={{ fontSize: 32, opacity: 0.7, marginTop: 16 }}>
          Wait till we cook something fresh!
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // contentType defaults to 'image/png'
    }
  )
}

