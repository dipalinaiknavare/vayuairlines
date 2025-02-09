"use client"

import { useState } from "react"
import { Calendar, Minus, Plus, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import Link from "next/link"

const locations = ["Canyon", "Floating Island", "Airport", "Railways", "Plot"]
const cabinClasses = ["Economy", "Premium Economy", "Business", "First/Suites"]

interface PassengerCount {
  adults: number
  children: number
  infants: number
}

export function BookingForm() {
  const [departDate, setDepartDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()
  const [passengers, setPassengers] = useState<PassengerCount>({
    adults: 1,
    children: 0,
    infants: 0,
  })

  const updatePassengers = (type: keyof PassengerCount, increment: boolean) => {
    setPassengers((prev) => {
      const newCount = prev[type] + (increment ? 1 : -1)
      const total = Object.values({ ...prev, [type]: newCount }).reduce((a, b) => a + b, 0)
      if (total > 11 || newCount < 0) return prev
      return { ...prev, [type]: newCount }
    })
  }

  return (
    <div className="bg-blue-900 p-6 rounded-lg shadow-lg text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="flex space-x-2">
          <Select>
            <SelectTrigger className="w-full bg-white text-blue-900 border-transparent">
              <SelectValue placeholder="From" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full bg-white text-blue-900 border-transparent">
              <SelectValue placeholder="To" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full bg-white text-blue-900 border-transparent">
                <Calendar className="mr-2 h-4 w-4" />
                {departDate ? format(departDate, "PPP") : "Depart Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent mode="single" selected={departDate} onSelect={setDepartDate} initialFocus />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full bg-white text-blue-900 border-transparent">
                <Calendar className="mr-2 h-4 w-4" />
                {returnDate ? format(returnDate, "PPP") : "Return Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select>
          <SelectTrigger className="w-full bg-white text-blue-900 border-transparent">
            <SelectValue placeholder="Select Class" />
          </SelectTrigger>
          <SelectContent>
            {cabinClasses.map((cabinClass) => (
              <SelectItem key={cabinClass} value={cabinClass}>
                {cabinClass}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="bg-blue-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Passengers</h3>
          <div className="space-y-2">
            {(["adults", "children", "infants"] as const).map((type) => (
              <div key={type} className="flex items-center justify-between">
                <span className="capitalize">{type}</span>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-8 p-0 bg-white text-blue-900 border-transparent"
                    onClick={() => updatePassengers(type, false)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{passengers[type]}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 w-8 p-0 bg-white text-blue-900 border-transparent"
                    onClick={() => updatePassengers(type, true)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link href="/select-aircraft" className="flex items-center">
          <Button className="w-full bg-white text-blue-900 border-transparent flex items-center gap-2">
            <Plane className="h-4 w-4" />
            Select Aircraft
          </Button>
        </Link>
      </div>
    </div>
  )
}

