// src/app/twitter-image/route.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

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
        <div style={{ fontSize: '72px', marginBottom: '24px', fontWeight: 'bold' }}>
          StudioAyyo
        </div>
        <div style={{ fontSize: '48px', opacity: 0.9 }}>
          Coming Soon
        </div>
        <div style={{ fontSize: '32px', opacity: 0.7, marginTop: '16px' }}>
          Wait till we cook something fresh!
        </div>
      </div>
    ),
    {
      ...size,
      headers: { 'Content-Type': contentType }
    }
  );
}

