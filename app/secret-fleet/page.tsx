import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SecretFleet() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/select-aircraft" className="text-white hover:text-sky-200 flex items-center">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Back</span>
          </Link>
          <h1 className="text-xl font-bold">Secret Fleet</h1>
          <div className="w-5" />
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-12">One of these two are coming...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/luqa-malta-july-hifly-airbus-h-mip-landing-painting-hi-fly-colors-aviation-cosmetics-acm-ex-v-skc-singapore-120608634-cYi0QaW0fqYtrWt5DETDSvTT9RhDU4.webp"
              alt="Airbus A380"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold">Airbus A380</h3>
              <p className="text-gray-600">The world's largest passenger aircraft</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://drive.google.com/file/d/1kTWaKR8tC8dKqRheyjCasFSOJZ9hqDo4/view?usp=drive_link"
              alt="Boeing 747"
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold">Boeing 747</h3>
              <p className="text-gray-600">The Queen of the Skies</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

