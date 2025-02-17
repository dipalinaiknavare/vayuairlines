"use client"

import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const regions = [
  { name: "Americas", href: "#" },
  { name: "Europe", href: "#" },
  { name: "Africa", href: "#" },
  { name: "Middle East", href: "#" },
  { name: "Asia + Pacific", href: "#" },
]

export function ExploreDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="font-bold">
          <Globe className="mr-2 h-4 w-4" />
          Explore
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[600px] p-0">
        <div className="relative">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hartono-creative-studio-1gW-pzeXX2E-unsplash.jpg-7RnQSq6NoA3Z47VHFssuyBPmDPMOHw.jpeg"
            alt="World Map"
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="grid grid-cols-2 gap-4">
              {regions.map((region) => (
                <DropdownMenuItem key={region.name} className="font-bold text-white hover:text-blue-200">
                  <a href={region.href} className="w-full">
                    {region.name}
                  </a>
                </DropdownMenuItem>
              ))}
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

