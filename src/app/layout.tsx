'use client'

import { Navbar } from '@/components/ui/navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="mx-auto max-w-screen-xl px-2 py-2">{children}</main>
      </body>
    </html>
  )
}
