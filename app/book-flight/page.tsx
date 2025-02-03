"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { Youtube } from "lucide-react"

export default function BookFlight() {
  const passengerPlanes = [
    "Boeing 737-500",
    "Boeing 757-200",
    "ATR-42",
    "Cessna 152",
    "All Passenger Planes", // Added option for all planes
  ]

  const [selectedPlane, setSelectedPlane] = useState<string>(passengerPlanes[0])

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Vayu Airlines
          </Link>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="default"
              className="bg-red-600 hover:bg-red-700 w-full sm:w-auto text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
              onClick={() => window.open("https://www.youtube.com/@VayuAirlines", "_blank")}
            >
              <Youtube className="mr-2 w-4 h-4 sm:w-5 sm:h-5" /> Subscribe Now
            </Button>
            <Link href="/book-flight" className="w-full sm:w-auto">
              <Button
                variant="default"
                className="bg-yellow-500 hover:bg-yellow-600 text-black w-full text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
              >
                Book a flight!
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Book a Flight</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6">
              Here's how it works: Bring tickets for up to 10 players (fictional tickets), comment on our YouTube
              videos, and add my Roblox profile:{" "}
              <Link
                href="https://www.roblox.com/users/2558041496/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                @Ah00vCaptainJack
              </Link>
              . Then, just join me in my private server, and voila!
            </p>
            <div className="space-y-4 mb-8">
              <p>1. Prepare your fictional tickets (up to 10 players).</p>
              <p>2. Comment on our YouTube videos.</p>
              <p>3. Add the Roblox profile linked above.</p>
              <p>4. Join the private server when invited.</p>
              <p>5. Enjoy your Vayu Airlines flight experience!</p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Choose your aircraft:</h3>
              <Link href="/select-aircraft">
                <Button className="w-full">Select Aircraft</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2025 Vayu Airlines. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

