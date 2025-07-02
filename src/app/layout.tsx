import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Anker - Tattoo and Piercing Studio in Freiburg',
    template: '%s | Anker - Tattoo and Piercing Studio in Freiburg',
  
  },
  description: 'Dein neues Tattoo oder Piercing in Freiburg? Bei uns bist du goldrichtig! Professionelle Beratung - Top-Künstler - Kurze Wartezeiten',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="AnkerFr" />
      <body>{children}</body>
    </html>
  )
}