"use client"

import Link from "next/link"
import { useState } from "react"
import { Plane, Youtube, Search, Filter, ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SearchDialog } from "@/components/search-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SettingsDialog } from "@/components/settings-dialog"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [sortType, setSortType] = useState<string | null>(null)

  const passengerFleet = [
    {
      name: "Airbus A318",
      status: "Active",
      details: "Latest addition to our short-haul fleet",
      manufacturer: "Airbus",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Gi03M5g4stqam9k9VQmq0pY9mWifkU.png",
    },
    {
      name: "Boeing 737-500",
      status: "Active",
      details: "Our primary short-haul aircraft",
      manufacturer: "Boeing Commercial Airplanes",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Boeing_B737-500-VIz2V0v52AnOrg4CXjBLI0woS20MlT.jpeg",
    },
    {
      name: "Boeing 757-200",
      status: "Active",
      details: "Medium-haul workhorse",
      manufacturer: "Boeing Commercial Airplanes",
      image: "https://live.staticflickr.com/8360/8389344210_bd78fdf0b8_b.jpg",
    },
    {
      name: "ATR-42",
      status: "Active",
      details: "Regional connector",
      manufacturer: "ATR",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ATR-42.jpg-l1zHctmsoOLWg6svvYR8OkD3p07Hmz.jpeg",
    },
    {
      name: "Cessna 152",
      status: "Active",
      details: "Training and short-range flights",
      manufacturer: "Cessna Aircraft Company",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cessna%20152.jpg-KqoMxN3PiB36mGnZHNKnQszTviRxQT.jpeg",
    },
  ].sort((a, b) => {
    if (sortType === "manufacturer") {
      return a.manufacturer.localeCompare(b.manufacturer)
    } else if (sortType === "size-asc") {
      const sizeOrder = ["Cessna 152", "ATR-42", "Boeing 737-500", "Boeing 757-200", "Airbus A318"]
      return sizeOrder.indexOf(a.name) - sizeOrder.indexOf(b.name)
    } else if (sortType === "size-desc") {
      const sizeOrder = ["Boeing 757-200", "Boeing 737-500", "Airbus A318", "ATR-42", "Cessna 152"]
      return sizeOrder.indexOf(a.name) - sizeOrder.indexOf(b.name)
    }
    return 0
  })

  const cargoFleet = [
    {
      name: "Boeing 757-200F",
      status: "Active",
      details: "Primary cargo aircraft",
      manufacturer: "Boeing Commercial Airplanes",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B757-200F-xs4TUDG0S0cH9QG2j6cu5GAFbMcKGJ.webp",
    },
    {
      name: "ATR-42F",
      status: "Inactive",
      details: "Regional cargo (not currently in service)",
      manufacturer: "ATR",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ATR42.jpg-Sqoi2xJsfQDwKWixyCwanOyvzGFQtc.jpeg",
    },
  ]

  const videos = [
    {
      id: "GG6lMw2y4Po",
      title: "Vayu Airlines Video",
    },
    {
      id: "3j8RVtVTq9E",
      title: "Vayu Airlines Video",
    },
    {
      id: "r6o9SEpsjiE",
      title: "Vayu Airlines Video",
    },
  ]

  const newsItems = [
    {
      title: "Vayu Airlines Launches Cargo Operations",
      date: "2025-03-15",
      summary:
        "We're excited to announce the launch of Vayu Airlines Cargo, expanding our services to meet the growing demand for air freight. Our new Boeing 757-200F is ready to take to the skies, offering efficient and reliable cargo transportation across our network.",
      link: "#",
    },
    {
      title: "Vayu Airlines 757 Performs Successful Emergency Landing",
      date: "2025-02-28",
      summary:
        "One of our Boeing 757s successfully landed without its front gear due to a technical failure. Thanks to the exceptional skill of our pilots and crew, all passengers and crew members are safe. We're conducting a thorough investigation to ensure the highest standards of safety are maintained.",
      link: "#",
    },
    {
      title: "New Routes Announced for Summer 2025",
      date: "2025-03-10",
      summary:
        "Vayu Airlines is thrilled to announce new routes for the upcoming summer season, including exciting destinations in Southeast Asia and the Mediterranean. Stay tuned for more details and early booking offers!",
      link: "#",
    },
    {
      title: "Vayu Airlines Achieves Virtual Safety Milestone",
      date: "2025-03-05",
      summary:
        "We're proud to announce that Vayu Airlines has achieved a significant virtual safety milestone, with over 10,000 flights completed without incidents in our simulation environment. This achievement underscores our commitment to safety and excellence in virtual aviation.",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <header className="bg-gradient-to-r from-blue-900 to-red-900 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <Plane className="mr-2" /> Vayu Airlines
            </Link>
            <Link
              href="https://www.roblox.com/users/2558041496/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-sky-200 hidden md:block"
            >
              Friend me on Roblox!
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <SettingsDialog />
            <Link href="#news" className="hover:text-sky-200">
              News
            </Link>
            <Link href="#passenger-fleet" className="hover:text-sky-200">
              Passenger Fleet
            </Link>
            <Link href="#cargo-fleet" className="hover:text-sky-200">
              Cargo Fleet
            </Link>
            <Link href="#about" className="hover:text-sky-200">
              About
            </Link>
            <Button variant="secondary" className="flex items-center" onClick={() => setSearchOpen(true)}>
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-900 to-red-900 text-white p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="https://www.roblox.com/users/2558041496/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-200"
            >
              Friend me on Roblox!
            </Link>
            <Link href="#news" className="hover:text-sky-200" onClick={() => setMobileMenuOpen(false)}>
              News
            </Link>
            <Link href="#passenger-fleet" className="hover:text-sky-200" onClick={() => setMobileMenuOpen(false)}>
              Passenger Fleet
            </Link>
            <Link href="#cargo-fleet" className="hover:text-sky-200" onClick={() => setMobileMenuOpen(false)}>
              Cargo Fleet
            </Link>
            <Link href="#about" className="hover:text-sky-200" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Button
              variant="secondary"
              className="flex items-center w-full justify-center"
              onClick={() => {
                setSearchOpen(true)
                setMobileMenuOpen(false)
              }}
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </nav>
        </div>
      )}

      <SearchDialog isOpen={searchOpen} setIsOpen={setSearchOpen} />

      <main>
        <section className="relative h-[500px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-d6NWqNT8fQiJ5zRNIlNJ4PLb9QqZzT.png")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-500/30 to-red-900/30" />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Vayu Airlines</h1>
            <p className="text-xl mb-8">Experience aviation across virtual worlds</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button
                variant="default"
                className="bg-red-600 hover:bg-red-700 text-sm px-4 py-2 w-[200px] mx-auto"
                onClick={() => window.open("https://www.youtube.com/@VayuAirlines", "_blank")}
              >
                <Youtube className="mr-2 w-4 h-4" /> Subscribe Now
              </Button>
              <Link href="/book-flight" className="mx-auto">
                <Button
                  variant="default"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm px-4 py-2 w-[200px]"
                >
                  Book a flight!
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="news" className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.summary}</p>
                  <Link href={item.link} className="text-blue-600 hover:text-blue-800 flex items-center">
                    Read more <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="youtube" className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Featured Videos</h2>
            <p className="text-gray-600">Watch some of our aviation content and aircraft builds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="aspect-video rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://www.youtube.com/@VayuAirlines", "_blank")}
              className="bg-red-600 text-white hover:bg-red-700 border-none"
            >
              <Youtube className="mr-2" />
              Visit Our Channel
            </Button>
          </div>
        </section>

        <section id="passenger-fleet" className="py-16 container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-blue-600">Passenger Fleet</h2>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center"
                    onClick={() => {
                      if (sortType === "manufacturer") {
                        setSortType(null)
                      } else {
                        setSortType("manufacturer")
                      }
                    }}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    Sort by Manufacturer
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSortType("size-asc")}>Smallest to Largest</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortType("size-desc")}>Largest to Smallest</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passengerFleet.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <img
                  src={model.image || "/placeholder.svg"}
                  alt={model.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="flex justify-between items-center flex-wrap gap-2">
                    <span>{model.name}</span>
                    <span className="text-sm px-2 py-1 rounded bg-green-100 text-green-700">{model.status}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{model.details}</p>
                  <p className="text-sm text-gray-500">Manufacturer: {model.manufacturer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="cargo-fleet" className="py-16 container mx-auto px-4 bg-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-blue-600">Cargo Fleet</h2>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Sort by type
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cargoFleet.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <img
                  src={model.image || "/placeholder.svg"}
                  alt={model.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle className="flex justify-between items-center flex-wrap gap-2">
                    <span>{model.name}</span>
                    <span
                      className={`text-sm px-2 py-1 rounded ${
                        model.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {model.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{model.details}</p>
                  <p className="text-sm text-gray-500">Manufacturer: {model.manufacturer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">About Us</h2>
            <p className="text-lg text-center text-gray-700 mb-8">
              Vayu Airlines is a virtual airline experience across multiple gaming platforms, inspired by real aviation
              and @KiwiIncRoblox. Our mission is provide a realistic and immersive aviation experience for players.   
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div>
            <h3 className="font-bold text-lg mb-4">Vayu Airlines</h3>
            <p className="text-sm opacity-80">
              A virtual airline experience across multiple gaming platforms, inspired by real aviation and
              @KiwiIncRoblox.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#news" className="hover:text-sky-200">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="#youtube" className="hover:text-sky-200">
                  Featured Videos
                </Link>
              </li>
              <li>
                <Link href="#passenger-fleet" className="hover:text-sky-200">
                  Passenger Fleet
                </Link>
              </li>
              <li>
                <Link href="#cargo-fleet" className="hover:text-sky-200">
                  Cargo Fleet
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.youtube.com/@VayuAirlines"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-200"
              >
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-white/20 text-center text-sm">
          <Link
            href="https://www.roblox.com/users/2558041496/profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-200 block mb-4"
          >
            Roblox Profile
          </Link>
          <p>© 2025 Vayu Airlines. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

