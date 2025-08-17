"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white hover:bg-white/20">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-green-600 to-blue-600 border-t border-white/20 z-50">
          <div className="flex flex-col space-y-2 p-4">
            <Link
              href="#news"
              className="text-white hover:text-sky-200 py-2 px-3 rounded hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              News
            </Link>
            <Link
              href="#passenger-fleet"
              className="text-white hover:text-sky-200 py-2 px-3 rounded hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Passenger Fleet
            </Link>
            <Link
              href="#cargo-fleet"
              className="text-white hover:text-sky-200 py-2 px-3 rounded hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              Cargo Fleet
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-sky-200 py-2 px-3 rounded hover:bg-white/10"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Button
              variant="secondary"
              size="sm"
              className="flex items-center justify-start mt-2"
              onClick={() => setIsOpen(false)}
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
