import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Anker - Tattoo und Piercing Studio in Freiburg',
    template: '%s | Anker - Tattoo und Piercing Studio in Freiburg',
  
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
      <body className=''>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}