import "./globals.css"
import { Space_Grotesk } from "next/font/google"
import type React from "react"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "Vayu Airlines - A Plane Crazy Fictional Airline",
  description:
    "Explore the world of Vayu Airlines, a fictional airline inspired by aviation enthusiasm and @KiwiIncRoblox. Watch our YouTube videos and learn about our virtual fleet!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.className} antialiased`}>{children}</body>
    </html>
  )
}



import './globals.css'