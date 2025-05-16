// src/app/layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'StudioAyyo – Coming Soon',
  description: 'Wait till we cook something fresh!',
  openGraph: {
    title: 'StudioAyyo – Coming Soon',
    description: 'Wait till we cook something fresh!',
    metadataBase: new URL('https://studioayyo.com'),
    siteName: 'StudioAyyo',
    images: [
      {
        url: '/opengraph-image',    // your Edge route
        width: 1200,
        height: 630,
        alt: 'StudioAyyo – Coming Soon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudioAyyo – Coming Soon',
    description: 'Wait till we cook something fresh!',
    images: ['/twitter-image'],    // your Edge route
    creator: '@studioayyo',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="app-root">{children}</body>
    </html>
  )
}

