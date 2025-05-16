// src/app/opengraph-image/route.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const colors = {
  primary: '#8700FF',
  secondary: '#5c07a0',
  foreground: '#FFFFFF',
  accent: '#FFD966',
  muted: '#F5F3FF'
}

async function loadInterFont() {
  // Direct URLs from Google Fonts API response
  const fontData = await Promise.all([
    fetch('https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2').then((res) => res.arrayBuffer()),
    fetch('https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2').then((res) => res.arrayBuffer())
  ])

  return {
    interMedium: fontData[0],
    interBold: fontData[1]
  }
}

export async function GET() {
  const { interMedium, interBold } = await loadInterFont()

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
          fontFamily: 'Inter',
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: 150,
            height: 150,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
            backgroundColor: colors.accent,
            borderRadius: '50%',
            fontSize: 80,
            fontWeight: 700,
            transform: 'rotate(15deg)',
          }}
        >
          A
        </div>
        
        {/* Title */}
        <h1 style={{
          fontSize: 96,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.1,
          letterSpacing: '-0.05em',
          textShadow: `2px 2px 4px ${colors.secondary}`
        }}>
          StudioAyyo
        </h1>
        
        {/* Subtitle */}
        <p style={{
          fontSize: 48,
          marginTop: 40,
          fontWeight: 500,
          color: colors.accent,
          opacity: 0.95,
        }}>
          Coming Soon
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: interBold,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: interMedium,
          weight: 500,
          style: 'normal',
        }
      ],
    }
  )
}
