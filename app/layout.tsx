import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SaaS Landing Page',
  description: 'A modern SaaS landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-surface-primary text-text-primary">
        {children}
      </body>
    </html>
  )
}
