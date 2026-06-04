import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Retailo · Operations, engineered.',
  description:
    'We design, engineer, and ship the AI, software, and platforms that run modern operations. Built by a team that operates at scale.',
  keywords:
    'AI consulting, enterprise AI, custom software engineering, supply chain platform, technology services, digital transformation',
  icons: {
    icon: '/retailo-icon.svg',
    shortcut: '/retailo-icon.svg',
    apple: '/retailo-icon.svg',
  },
  openGraph: {
    title: 'Retailo · Operations, engineered.',
    description:
      'AI, engineering, and platforms that run modern operations. Built by a team that operates at scale.',
    type: 'website',
    url: 'https://retailo.co',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
