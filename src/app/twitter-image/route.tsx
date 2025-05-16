// src/app/twitter-image/route.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--foreground)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <img
          src="/public/ayyo-logo.png"
          alt="StudioAyyo Logo"
          style={{
            width: 150,
            height: 'auto',
            marginBottom: 20,
          }}
        />
        <h1
          style={{
            fontSize: 80,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.1,
            color: 'var(--foreground)',
          }}
        >
          StudioAyyo
        </h1>

        <p
          style={{
            fontSize: 48,
            margin: '20px 0 0',
            color: 'var(--accent)',
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
