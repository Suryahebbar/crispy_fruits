import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Crispy Fruits',
  description: 'A content-driven website built with Next.js',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Crispy Fruits',
    description: 'A content-driven website built with Next.js',
    url: '/',
    siteName: 'Crispy Fruits',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-white">
        <div className="flex min-h-full flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
