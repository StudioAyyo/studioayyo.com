// src/app/twitter-image/route.tsx
import { ImageResponse } from 'next/og'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export const runtime = 'edge'

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
          fontFamily: inter.style.fontFamily,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
            backgroundColor: colors.accent,
            borderRadius: '50%',
            fontSize: 64,
            fontWeight: 700,
            transform: 'rotate(15deg)',
          }}
        >
          A
        </div>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: '-0.05em',
            textShadow: `2px 2px 4px ${colors.secondary}`
          }}
        >
          StudioAyyo
        </h1>
        <p
          style={{
            fontSize: 36,
            marginTop: 32,
            fontWeight: 500,
            color: colors.accent,
            opacity: 0.95,
          }}
        >
          Coming Soon
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'Inter',
          data: await inter.fetchFontBuffer('700'),
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: await inter.fetchFontBuffer('500'),
          weight: 500,
          style: 'normal',
        }
      ],
    }
  )
}
