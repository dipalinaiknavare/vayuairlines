"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookingForm } from "@/components/booking-form"

export default function BookFlight() {
  const trendingPlots = [
    {
      name: "Canyon",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Canyon-IemnAlwlwnPWYH2ATTd1rSsO44Q5Yt.png",
    },
    {
      name: "Floating Island",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Floating%20Island-BkEHmF3heav2CrHdI277mKkSQtu86z.png",
    },
    {
      name: "Airport",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Airport-DspoORKd2YnzGGhhpo9XsRnLZrJt1i.png",
    },
    {
      name: "Railways",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Railways-Zl99njXMWO1RJDOwi5C9CNdfDHZUzL.png",
    },
  ]

  return (
    <div className="min-h-screen">
      <div
        className="h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book%20a%20flight%20background-5H1kvF43fJYbnEoUC7rvJd8EyEBOLd.png")',
        }}
      />
      <div className="bg-white min-h-[50vh]">
        <header className="bg-gradient-to-r from-blue-900 to-red-900 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Vayu Airlines
            </Link>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8 -mt-32">
          <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm">
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

              <BookingForm />
            </CardContent>
          </Card>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
              Trending in <span className="border-b-2 border-red-600">Plots</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingPlots.map((plot) => (
                <Card key={plot.name} className="hover:shadow-lg transition-shadow">
                  <img
                    src={plot.image || "/placeholder.svg"}
                    alt={plot.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <CardHeader>
                    <CardTitle className="text-center">{plot.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2025 Vayu Airlines. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

