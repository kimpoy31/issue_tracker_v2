import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css';
import { Container, Theme } from '@radix-ui/themes';
import Navbar from './Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Theme accentColor='iris'>

          <Navbar />

          <div className='px-1 md:px-16'>
            {children}
          </div>
          
        </Theme>
      </body>
    </html>
  )
}
