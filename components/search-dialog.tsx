"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchResult {
  title: string
  link: string
  category: string
}

export function SearchDialog({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (open: boolean) => void }) {
  const [searchQuery, setSearchQuery] = useState("")

  const searchResults: SearchResult[] = [
    { title: "Book a Flight", link: "/book-flight", category: "Services" },
    { title: "Passenger Fleet", link: "#passenger-fleet", category: "Fleet" },
    { title: "Cargo Fleet", link: "#cargo-fleet", category: "Fleet" },
    { title: "Latest News", link: "#news", category: "News" },
    { title: "About Us", link: "#about", category: "Company" },
    { title: "YouTube Channel", link: "https://www.youtube.com/@VayuAirlines", category: "Social" },
  ].filter(
    (result) =>
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] bg-blue-600 text-white">
        <DialogHeader>
          <DialogTitle>Search Vayu Airlines</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-8 bg-blue-700 border-blue-500 text-white placeholder:text-blue-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="mt-4 space-y-2">
          {searchResults.map((result, index) => (
            <a
              key={index}
              href={result.link}
              className="block p-2 hover:bg-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              <div className="font-medium">{result.title}</div>
              <div className="text-sm text-blue-200">{result.category}</div>
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

