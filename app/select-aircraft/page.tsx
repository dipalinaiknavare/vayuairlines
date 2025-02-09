"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function SelectAircraft() {
  const passengerPlanes = [
    {
      name: "Boeing 737-500",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Boeing_B737-500-VIz2V0v52AnOrg4CXjBLI0woS20MlT.jpeg",
    },
    {
      name: "Boeing 757-200",
      image: "https://live.staticflickr.com/8360/8389344210_bd78fdf0b8_b.jpg",
    },
    {
      name: "ATR-42",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ATR-42.jpg-l1zHctmsoOLWg6svvYR8OkD3p07Hmz.jpeg",
    },
    {
      name: "Cessna 152",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cessna%20152.jpg-KqoMxN3PiB36mGnZHNKnQszTviRxQT.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/book-flight" className="text-white hover:text-sky-200 flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Back to Booking</span>
          </Link>
          <h1 className="text-xl font-bold">Select Aircraft</h1>
          <Link href="/secret-fleet" className="text-white/10 hover:text-white/20">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M5 8h14M7 4h10M12 4v16M7 20h10M5 16h14M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3" />
            </svg>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {passengerPlanes.map((plane) => (
            <Card key={plane.name} className="hover:shadow-lg transition-shadow">
              <img
                src={plane.image || "/placeholder.svg"}
                alt={plane.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="text-center">{plane.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Link href="/book-flight">
                  <Button className="bg-blue-600 hover:bg-blue-700">Select Aircraft</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

