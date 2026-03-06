import type { Metadata } from 'next'
import '../globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Rafid — Graphic Designer Dubai',
  description: 'Graphic Designer based in Dubai. Brand identity, print design, packaging and digital design.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
