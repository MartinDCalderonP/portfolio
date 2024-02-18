import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Martín Calderón | Portfolio',
  description: "Martín Calderón's portfolio. Full Stack Developer"
}

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang='en'>
      <link rel='shortcut icon' href='/favicon-32x32.png' type='image/x-icon' />
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  )
}

export default RootLayout
