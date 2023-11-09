import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './Components/Header'

export const metadata: Metadata = {
  title: 'Pertel Veículos',
  description: 'Pertel Veículos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-zinc-900">
        {children}
      </body>
    </html>
  )
}
