import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Daniele Leonzi — Video Editor & Videomaker',
  description:
    'Portfolio di Daniele Leonzi, Video Editor e Videomaker. Montaggio, storytelling e post-produzione video per aziende, eventi, concerti e contenuti social.',
  keywords: [
    'Daniele Leonzi',
    'Video Editor',
    'Videomaker',
    'Content Creator',
    'montaggio video',
    'post-produzione',
    'motion graphics',
    'color correction',
  ],
  authors: [{ name: 'Daniele Leonzi' }],
  openGraph: {
    title: 'Daniele Leonzi — Video Editor & Videomaker',
    description:
      'Trasformo idee e riprese in contenuti coinvolgenti attraverso montaggio, storytelling e attenzione ai dettagli.',
    type: 'website',
    locale: 'it_IT',
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#0B0B0B',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{__html:'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);'}} />
      </head>
      <body className="bg-[#0B0B0B] text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
