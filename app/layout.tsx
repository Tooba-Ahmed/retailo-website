import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Retailo — Retail, digitized.',
  description:
    'We build the software, AI, and technology stack behind the most ambitious retail and FMCG operations across MENAP.',
  keywords:
    'retail SaaS, FMCG, MENAP, supply chain, AI consulting, retail technology, Pakistan, Saudi Arabia, UAE',
  openGraph: {
    title: 'Retailo — Retail, digitized.',
    description:
      'Technology company transforming retail and FMCG operations across MENAP.',
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
