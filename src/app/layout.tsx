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
  metadataBase: new URL('https://studioayyo.com'),
  openGraph: {
    images: '/public/open.png',
  },
  twitter: {
    images: '/public/twitter.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="app-root">{children}</body>
    </html>
  )
}
