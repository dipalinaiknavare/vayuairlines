"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CampaignSection() {
  const [searchCode, setSearchCode] = useState("")
  const [unlockedPlane, setUnlockedPlane] = useState<string | null>(null)

  const handleSearch = () => {
    const code = searchCode.toUpperCase().trim()
    if (code === "SKY12") {
      setUnlockedPlane("second")
    } else if (code === "TAIL07") {
      setUnlockedPlane("third")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  if (unlockedPlane === "second") {
    return (
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-600 mb-4">Congrats.. unlocked the second plane!</h2>
          <p className="text-xl text-gray-700">This plane comes out on August, 15, 2025.</p>
          <Button onClick={() => setUnlockedPlane(null)} className="mt-6" variant="outline">
            Back to Campaign
          </Button>
        </div>
      </section>
    )
  }

  if (unlockedPlane === "third") {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Congrats.. unlocked the third and last plane!</h2>
          <p className="text-xl text-gray-700">This plane comes out on August 18 2025.</p>
          <Button onClick={() => setUnlockedPlane(null)} className="mt-6" variant="outline">
            Back to Campaign
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/campaign-bg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Top Banner */}
        <div className="flex justify-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 border border-white/30">
            <p className="text-white text-lg font-medium text-center">
              Nature and its Kind, 3 planes, one campaign. Find out which comes out next with codes.
            </p>
          </div>
        </div>

        {/* Bottom Right Search Bar */}
        <div className="flex justify-end">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/30 flex items-center gap-2 min-w-[300px]">
            <Input
              type="text"
              placeholder="Enter code..."
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              onKeyPress={handleKeyPress}
              className="bg-transparent border-none text-white placeholder:text-white/70 focus:ring-0 focus:outline-none"
            />
            <Button
              onClick={handleSearch}
              size="sm"
              className="bg-white/30 hover:bg-white/40 text-white border-none rounded-full p-2"
            >
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
