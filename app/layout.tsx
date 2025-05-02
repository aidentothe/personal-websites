import type { Metadata } from 'next'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
export const metadata = {
  title: {
    default: "Aiden Huang | Portfolio",
    template: "%s | Aiden Huang",
  },
  description: "Welcome to Aiden Huang's interactive portfolio.",
}
