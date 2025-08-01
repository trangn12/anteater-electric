import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Anteater Electric Racing',
  description: 'Official website for UCI’s Formula SAE Electric team',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
