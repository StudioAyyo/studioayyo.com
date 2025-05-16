// app/twitter-image.tsx
import { ImageResponse } from 'next/og';
 
// Route segment config
export const runtime = 'edge';
 
// Image metadata
export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';
 
// Image generation
export default async function Image() {
  // Load Inter font
  const interRegular = fetch(
    new URL('https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-400-normal.woff', import.meta.url)
  ).then((res) => res.arrayBuffer());
  
  const interBold = fetch(
    new URL('https://cdn.jsdelivr.net/npm/@fontsource/inter/files/inter-latin-700-normal.woff', import.meta.url)
  ).then((res) => res.arrayBuffer());

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
          fontFamily: 'Inter',
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
      fonts: [
        {
          name: 'Inter',
          data: await interRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter',
          data: await interBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
