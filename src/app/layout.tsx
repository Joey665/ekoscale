import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EkoScale — SME Growth Agency, Lagos',
  description: 'EkoScale helps Lagos SMEs grow with web, SEO, ads, and product design.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#070b14] text-white">
        <div className="min-h-screen max-w-5xl mx-auto px-6 py-12">{children}</div>
      </body>
    </html>
  )
}
