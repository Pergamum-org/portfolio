import { getCssText } from '@/styles'
import { stylesGlobalCss } from '@/styles/global'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--fonts-default' })

export const metadata: Metadata = {
  title: 'Portifolio - Freelancer',
  description: '',
}

stylesGlobalCss()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={inter.variable} >{children}</body>
    </html>
  )
}
