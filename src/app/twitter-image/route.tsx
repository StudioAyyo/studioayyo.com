// src/app/twitter-image/route.tsx
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
  // Direct URLs from Google Fonts
  const [mediumFont, boldFont] = await Promise.all([
    fetch('https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5nw.woff2').then((res) => res.arrayBuffer()),
    fetch('https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2').then((res) => res.arrayBuffer())
  ])

  return { mediumFont, boldFont }
}

export async function GET() {
  const { mediumFont, boldFont } = await loadInterFont()

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
        {/* Logo - Smaller for Twitter */}
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
        
        {/* Title - Adjusted Size */}
        <h1 style={{
          fontSize: 72,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.1,
          letterSpacing: '-0.05em',
          textShadow: `2px 2px 4px ${colors.secondary}`
        }}>
          StudioAyyo
        </h1>
        
        {/* Subtitle - Smaller */}
        <p style={{
          fontSize: 36,
          marginTop: 32,
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
      height: 600, // Twitter-specific aspect ratio
      fonts: [
        {
          name: 'Inter',
          data: boldFont,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: mediumFont,
          weight: 500,
          style: 'normal',
        }
      ],
    }
  )
}
