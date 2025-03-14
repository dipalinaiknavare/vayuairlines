"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Youtube, Search, Filter, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SearchDialog } from "@/components/search-dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SettingsDialog } from "@/components/settings-dialog"
import { ExploreDropdown } from "@/components/explore-dropdown"

const cities = [
  {
    name: "Paris",
    code: "PAR",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paris.jpg-Xm5ve4sn10FoRsU4Ac9cmN9zEy03N7.jpeg",
  },
  {
    name: "New Delhi",
    code: "DEL",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mumbai.jpg-iL1v9aWhyn3lG1NofVGeUqRnPsKkko.jpeg",
  },
  {
    name: "Dubai",
    code: "DXB",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dubai.jpg-cunhDzgSGZK1IQRBbeUOwEUs4rhKFu.jpeg",
  },
  {
    name: "Rome",
    code: "ROM",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rome.jpg-HhBE1QB8J9lqVN7cbgRVUeuTsuaoa3.jpeg",
  },
  {
    name: "Tokyo",
    code: "TYO",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tokyo.jpg-QdatIAdNx86ZoJ4LHdnOrMFPbxUXdP.jpeg",
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [sortType, setSortType] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const latestVideos = [
    {
      id: { videoId: "nIF66_8jav0" },
      snippet: { title: "THE AIRBUS BELUGA IS HERE! | Roblox Plane Crazy" },
    },
    {
      id: { videoId: "o7B0rT2dlH8" },
      snippet: { title: "The Boeing 757 is FINALLY here! | Vayu Airlines (Roblox Plane Crazy)" },
    },
    {
      id: { videoId: "l4xCgvkfKaE" },
      snippet: { title: "Vayu Airlines Latest Update" },
    },
  ]

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
      name: "Airbus Beluga ASTRAL",
      status: "Active",
      details: "Advanced Specialized Transporter for Rapid Aerial Logistics",
      manufacturer: "Airbus",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Airbus%20Beluga-QBIL3tKYieNm9QKjtyNY7DMk6h6u6l.png",
    },
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <header
        className={`bg-gradient-to-r from-blue-900 to-red-900 text-white p-4 sticky-header ${isScrolled ? "scrolled" : ""}`}
      >
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In_My_Opinion-removebg-preview-kwVussEttXWayhpzAty62eE9lJi4tn.png"
                alt="Vayu Airlines"
                className="h-12 w-auto mr-2"
              />
              Vayu Airlines
            </Link>
            <Link
              href="https://www.roblox.com/users/2558041496/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-sky-200 hidden md:block font-bold"
            >
              Friend me on Roblox!
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <SettingsDialog />
            <Link href="#passenger-fleet" className="hover:text-sky-200 font-bold">
              Passenger Fleet
            </Link>
            <Link href="#cargo-fleet" className="hover:text-sky-200 font-bold">
              Cargo Fleet
            </Link>
            <Link href="#about" className="hover:text-sky-200 font-bold">
              About
            </Link>
            <ExploreDropdown />
            <Button variant="secondary" className="flex items-center font-bold" onClick={() => setSearchOpen(true)}>
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
              className="hover:text-sky-200 font-bold"
            >
              Friend me on Roblox!
            </Link>
            <Link href="#news" className="hover:text-sky-200 font-bold" onClick={() => setMobileMenuOpen(false)}>
              News
            </Link>
            <Link
              href="#passenger-fleet"
              className="hover:text-sky-200 font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Passenger Fleet
            </Link>
            <Link href="#cargo-fleet" className="hover:text-sky-200 font-bold" onClick={() => setMobileMenuOpen(false)}>
              Cargo Fleet
            </Link>
            <Link href="#about" className="hover:text-sky-200 font-bold" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Button
              variant="secondary"
              className="flex items-center w-full justify-center font-bold"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 welcome-text">Welcome to Vayu Airlines</h1>
            <p className="text-xl font-bold mb-8">Experience aviation across virtual worlds</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button
                variant="default"
                className="bg-red-600 hover:bg-red-700 text-sm px-4 py-2 w-[200px] mx-auto font-bold"
                onClick={() => window.open("https://www.youtube.com/@VayuAirlines", "_blank")}
              >
                <Youtube className="mr-2 w-4 h-4" /> Subscribe Now
              </Button>
              <Link href="/book-flight" className="mx-auto">
                <Button
                  variant="default"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm px-4 py-2 w-[200px] font-bold"
                >
                  Book a flight!
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="relative py-16">
          <div className="container mx-auto px-4">
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-red-600">Outside of Plane Crazy Island</h3>
              <div className="valentine-cities">
                {cities.map((city) => (
                  <div key={city.name} className="flex flex-col items-center">
                    <div className="city-circle group">
                      <img src={city.image || "/placeholder.svg"} alt={city.name} />
                    </div>
                    <span className="city-name text-red-600">{city.code}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="youtube" className="py-16 container mx-auto px-4">
          <div className="text-center mb-8">
            <a
              href="https://www.youtube.com/@vayuairlines"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-red-600 hover:underline"
            >
              Visit Our YouTube Channel
            </a>
          </div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Featured Videos</h2>
            <p className="text-gray-600 font-bold">Watch some of our aviation content and aircraft builds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestVideos.map((video) => (
              <div key={video.id.videoId} className="aspect-video rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  title={video.snippet.title}
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
              className="bg-red-600 text-white hover:bg-red-700 border-none font-bold"
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
                    className="flex items-center font-bold"
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
                    <span className="text-black">{model.name}</span>
                    <span className="text-sm px-2 py-1 rounded bg-green-100 text-green-700">{model.status}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-bold">
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
              <Button variant="outline" className="flex items-center font-bold">
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
                    <span className="text-black">{model.name}</span>
                    <span
                      className={`text-sm px-2 py-1 rounded ${
                        model.status === "Active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {model.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-bold">
                  <p className="text-gray-600">{model.details}</p>
                  <p className="text-sm text-gray-500">Manufacturer: {model.manufacturer}</p>
                  {model.name === "Airbus Beluga ASTRAL" && (
                    <Link href="/astral">
                      <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">About Us</h2>
            <p className="text-lg font-bold text-center text-gray-700 mb-8">
              Vayu Airlines is a virtual airline experience across multiple gaming platforms, inspired by real aviation
              and @KiwiIncRoblox. Our mission is provide a relasitic and immersive avaition expeirnce for players.  
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div>
            <h3 className="font-bold text-lg mb-4">Vayu Airlines</h3>
            <p className="text-sm opacity-80 font-bold">
              A virtual airline experience across multiple gaming platforms, inspired by real aviation and
              @KiwiIncRoblox.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#news" className="hover:text-sky-200 font-bold">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="#youtube" className="hover:text-sky-200 font-bold">
                  Featured Videos
                </Link>
              </li>
              <li>
                <Link href="#passenger-fleet" className="hover:text-sky-200 font-bold">
                  Passenger Fleet
                </Link>
              </li>
              <li>
                <Link href="#cargo-fleet" className="hover:text-sky-200 font-bold">
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
                className="hover:text-sky-200 font-bold"
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
            className="hover:text-sky-200 font-bold block mb-4"
          >
            Roblox Profile
          </Link>
          <p className="font-bold">© 2025 Vayu Airlines. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

