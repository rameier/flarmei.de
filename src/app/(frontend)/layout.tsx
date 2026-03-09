import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/global.css'

export const metadata: Metadata = {
  title: {
    template: '%s - flarmei.de',
    default: 'flarmei.de',
  },
  description: 'Persönlicher Blog und digitale Visitenkarte von Ralf Meier.',
}

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
