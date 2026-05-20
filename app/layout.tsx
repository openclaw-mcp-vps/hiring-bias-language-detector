import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hiring Bias Language Detector — Write Inclusive Job Descriptions',
  description: 'Scan job postings for gender, age, and cultural bias. Get inclusive alternatives instantly to attract more diverse candidates.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4ed4456c-046c-48ca-8a35-90a3bb9e67b4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
