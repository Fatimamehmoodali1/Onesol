import './globals.css'
import '../styles/responsive.css';
import { karla } from 'next/font/google'

const karla = karla({ subsets: ['karla'] })

export const metadata = {
  title: 'Onesol',
  description: 'Onesol Website',
}

import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
