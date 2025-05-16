// src/app/opengraph-image/route.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Define colors based on your CSS styles
const colors = {
  primary: '#8700FF',
  secondary: '#5c07a0',
  foreground: '#FFFFFF',
  accent: '#FFD966',
  muted: '#F5F3FF'
}

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: colors.foreground,
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* Logo representation */}
        <div
          style={{
            width: 150,
            height: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            color: colors.accent,
            fontSize: 80,
            fontWeight: 'bold',
            transform: 'rotate(5deg)',
          }}
        >
          A
        </div>
        <h1
          style={{
            fontSize: 80,
            fontWeight: 500,
            margin: 0,
            lineHeight: 1.1,
            color: colors.foreground,
            letterSpacing: '-0.05em',
          }}
        >
          StudioAyyo
        </h1>
        <p
          style={{
            fontSize: 48,
            margin: '20px 0 0',
            color: colors.accent,
            fontWeight: 300,
            opacity: 0.9,
          }}
        >
          Coming Soon
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      // Use a font that's similar to Inter
      fonts: [
        {
          name: 'Inter',
          data: await fetch(
            new URL('https://rsms.me/inter/font-files/Inter-Regular.woff', import.meta.url)
          ).then((res) => res.arrayBuffer()),
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: await fetch(
            new URL('https://rsms.me/inter/font-files/Inter-Medium.woff', import.meta.url)
          ).then((res) => res.arrayBuffer()),
          weight: 500,
          style: 'normal',
        }
      ],
    }
  )
}
