// src/app/twitter-image/route.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#8700FF',  // solid primary background
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontFamily: 'Inter, sans-serif',
          padding: '40px',
        }}
      >
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            margin: 0,
            textAlign: 'center',
          }}
        >
          StudioAyyo
        </h1>

        <p
          style={{
            fontSize: 40,
            marginTop: 16,
            color: '#FFD966',  // accent
            textAlign: 'center',
          }}
        >
          Wait till we cook something fresh!
        </p>

        {/* subtle accent line */}
        <div
          style={{
            marginTop: 32,
            width: 200,
            height: 4,
            backgroundColor: '#FFD966',
            borderRadius: 2,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}

