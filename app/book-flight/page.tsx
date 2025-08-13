import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookFlight() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Vayu Airlines
          </Link>
          <Link href="/">
            <Button variant="outline" className="text-white border-white hover:bg-white/20">
              Back to Home
            </Button>
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Book a Flight</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-6">
              Here's how it works: Bring tickets for up to 10 players (fictional tickets) and add my Roblox username,
              which is @KiwiIncRoblox. Then, just join me in my private server, and voila!
            </p>
            <div className="space-y-4">
              <p>1. Prepare your fictional tickets (up to 10 players).</p>
              <p>2. Add the Roblox username: @KiwiIncRoblox</p>
              <p>3. Join the private server when invited.</p>
              <p>4. Enjoy your Vayu Airlines flight experience!</p>
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
