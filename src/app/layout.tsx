import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://bonushome.com'),
  title: {
    default: 'Bonus Home — Rapidly Deployable Housing Solutions',
    template: '%s | Bonus Home',
  },
  description:
    'Bonus Home delivers the world\'s fastest rapidly deployable modular housing — purpose-built for governments, military, humanitarian organizations, and high-net-worth investors.',
  openGraph: {
    type: 'website',
    siteName: 'Bonus Home',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.webp',
    apple: '/apple-icon.webp',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable} style={{ colorScheme: 'light' }}>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BTL1P4RRXC" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BTL1P4RRXC');
        `}</Script>
      </body>
    </html>
  )
}
