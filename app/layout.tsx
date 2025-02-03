import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Vayu Airlines - A Plane Crazy Fictional Airline",
  description:
    "Explore the world of Vayu Airlines, a fictional airline inspired by aviation enthusiasm and @KiwiIncRoblox. Watch our YouTube videos and learn about our virtual fleet!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

