import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@radix-ui/themes/styles.css';
import { Container, Theme } from '@radix-ui/themes';
import Navbar from './Navbar/Navbar';
import AuthProvider from './auth/Provider';
import QueryClientProvider from './providers/QueryClientProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryClientProvider>
          <AuthProvider>
            <Theme accentColor='iris'>

              <Navbar />

              <Container px={{initial:"1", md:"6"}} py={"4"}>
                {children}
              </Container>
              
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
