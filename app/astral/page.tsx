"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AstralPage() {
  return (
    <div className="min-h-screen">
      <div
        className="h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Airbus%20Beluga-QBIL3tKYieNm9QKjtyNY7DMk6h6u6l.png")',
        }}
      />
      <div className="bg-white min-h-[50vh]">
        <header className="bg-gradient-to-r from-blue-900 to-red-900 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center text-blue-600">
              <ArrowLeft className="w-5 h-5 mr-2 text-blue-600" />
              Back to Home
            </Link>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8 -mt-32">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-6 text-blue-600">The Airbus Beluga Is Finally Here!</h1>
            <div className="prose max-w-none text-blue-600">
              <p className="text-lg mb-6">
                ... with some tweaks. The Beluga ASTRAL, which ASTRAL stands for: Advanced Specialized Transporter for
                Rapid Aerial Logistics. Has, instead of double bogie landing gears, it has tandem wheels?
              </p>
              <p className="text-lg mb-6">
                Tandem wheels are used on cargo aircraft, whether small or not. Are landing gears pretty much in a line.
                They require less space to be in the aircraft. And the most notable tandem gear is the ones of the side
                of the AN-225.
              </p>
              <p className="text-lg mb-6">
                The ASTRAL has 8 wheels of these tandem gears. (including both side gears). The third engine on the
                ASTRAL is there because the aircraft is used to load extremely heavy loads. (for example 30 meters of
                the a380 fuselage).
              </p>
              <p className="text-lg mb-6">
                Because of that, the beluga obviously needs some more extra thrust. Which is why we and airbus added a
                third engine to the aircraft. Besides, it also features a pretty long red and blue line on the sides.
                With of course the Vayu Airlines text on the top right.
              </p>
              <p className="text-lg">
                Now, ive already uploaded a premiere for the beluga. And you should totally watch it, Who knows? It
                already might be out by now.
              </p>
            </div>
            <div className="mt-8">
              <Button
                className="bg-red-600 hover:bg-red-700"
                onClick={() => window.open("https://www.youtube.com/@VayuAirlines", "_blank")}
              >
                Watch on YouTube
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

