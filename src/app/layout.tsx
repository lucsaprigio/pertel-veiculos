import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pertel Veículos',
  description: 'Pertel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-b from-white to-red-200 ${roboto.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
