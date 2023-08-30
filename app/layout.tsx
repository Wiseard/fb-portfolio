import './globals.css'
import type { Metadata } from 'next'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'
import Main from './components/Containers/Main'

export const metadata: Metadata = {
  title: 'Florent Baleinier - Portfolio',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'portfolio',
    'web developer',
    'front end',
    'react',
    'nextjs',
    'javascript',
    'typescript',
    'html',
    'css',
  ],
  description:
    'Front-end developer and Web Designer. I design and code beautifully simple things focused on the customer.',
  authors: [{ name: 'Florent Baleinier' }],
  creator: 'Florent Baleinier',
  publisher: 'Florent Baleinier',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Florent Baleinier - Portfolio',
    description:
      'Front-end developer and Web Designer. I design and code beautifully simple things focused on the customer.',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Main>
        <Modal />
        <div className="grid main-container">
          <Sidebar />
          {children}
        </div>
      </Main>
    </html>
  )
}
