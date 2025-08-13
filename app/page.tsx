"use client"

import Link from "next/link"
import { Plane, Youtube, GamepadIcon as GameController, Search, Filter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import CampaignSection from "@/components/campaign-section"

export default function Home() {
  const passengerFleet = [
    {
      name: "Boeing 737-500",
      status: "Active",
      details: "Our primary short-haul aircraft",
    },
    {
      name: "Boeing 757-200",
      status: "Active",
      details: "Medium-haul workhorse",
    },
    {
      name: "ATR-42",
      status: "Active",
      details: "Regional connector",
    },
    {
      name: "Cessna 152",
      status: "Active",
      details: "Training and short-range flights",
    },
  ]

  const cargoFleet = [
    {
      name: "Boeing 757-200F",
      status: "Active",
      details: "Primary cargo aircraft",
    },
    {
      name: "ATR-42F",
      status: "Inactive",
      details: "Regional cargo (not currently in service)",
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
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Plane className="mr-2" /> Vayu Airlines
          </Link>
          <div className="flex items-center space-x-6">
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
            <Button variant="secondary" className="flex items-center">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-green-500">
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Welcome to Vayu Airlines</h1>
            <p className="text-xl mb-8">Experience aviation across platforms - from model planes to virtual worlds</p>
            <div className="flex justify-center gap-4">
              <Button variant="default" className="bg-red-600 hover:bg-red-700">
                <Youtube className="mr-2" /> Subscribe Now
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                <GameController className="mr-2" /> Play Now
              </Button>
              <Link href="/book-flight">
                <Button variant="default" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Book a flight!
                </Button>
              </Link>
            </div>
          </div>
          <div
            className="absolute inset-0 bg-black/10 z-0"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fillOpacity="0.05" fillRule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
            }}
          ></div>
        </section>

        <CampaignSection />

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
              <Button variant="outline" className="flex items-center bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Sort by type
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {passengerFleet.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center flex-wrap gap-2">
                    <span>{model.name}</span>
                    <span className="text-sm px-2 py-1 rounded bg-green-100 text-green-700">{model.status}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{model.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="cargo-fleet" className="py-16 container mx-auto px-4 bg-gray-50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-blue-600">Cargo Fleet</h2>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Sort by type
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cargoFleet.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
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
              and @KiwiIncRoblox.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-8">
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
          <p>© 2025 Vayu Airlines. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
