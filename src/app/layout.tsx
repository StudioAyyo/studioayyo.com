import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'StudioAyyo - Coming Soon',
  description: 'Wait till we cook something fresh!',
  openGraph: {
    title: 'StudioAyyo - Coming Soon',
    description: 'Wait till we cook something fresh!',
    url: 'https://studioayyo.com',
    siteName: 'StudioAyyo',
    images: [
      {
        url: 'https://studioayyo.com/opengraph-image.jpg', // This will be replaced by your dynamic image
        width: 1200,
        height: 630,
        alt: 'StudioAyyo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StudioAyyo - Coming Soon',
    description: 'Wait till we cook something fresh!',
    images: ['https://studioayyo.com/twitter-image.jpg'], // This will be replaced by your dynamic image
    creator: '@studioayyo', // Replace with your Twitter handle if available
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
