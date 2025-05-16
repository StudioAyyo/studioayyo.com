// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Base URL for your site so relative URLs work in metadata:
export const metadataBase = new URL('https://studioayyo.com');

export const metadata: Metadata = {
  metadataBase,
  title: 'StudioAyyo – Coming Soon',
  description: 'Wait till we cook something fresh!',
  openGraph: {
    title: 'StudioAyyo – Coming Soon',
    description: 'Wait till we cook something fresh!',
    url: '/',    // will resolve to https://studioayyo.com/
    siteName: 'StudioAyyo',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'StudioAyyo Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudioAyyo – Coming Soon',
    description: 'Wait till we cook something fresh!',
    images: ['/twitter-image'],
    creator: '@studioayyo',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="app-root">
        {children}
      </body>
    </html>
  );
}

