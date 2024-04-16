import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const fontFamily = Roboto({
  weight: '400',
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
      <body className={fontFamily.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
