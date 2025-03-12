import Link from "next/link"
import { Home, Store, Gavel, FileText, Search, ArrowRight } from "lucide-react"

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Open Homes */}
          <div className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-slate-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Home size={28} className="text-slate-800" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Open Homes</h3>
            <p className="text-gray-600 mb-4">
              Browse our schedule of open homes and find the perfect property to visit this weekend.
            </p>
            <Link
              href="/open-homes"
              className="text-slate-800 font-medium hover:text-slate-600 inline-flex items-center gap-1"
            >
              View Open Homes <ArrowRight size={16} />
            </Link>
          </div>

          {/* Shops to Rent */}
          <div className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-slate-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Store size={28} className="text-slate-800" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Shops to Rent</h3>
            <p className="text-gray-600 mb-4">
              Find commercial properties and retail spaces available for rent in prime locations.
            </p>
            <Link
              href="/commercial-rentals"
              className="text-slate-800 font-medium hover:text-slate-600 inline-flex items-center gap-1"
            >
              Browse Shops <ArrowRight size={16} />
            </Link>
          </div>

          {/* Weekly Auctions */}
          <div className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-slate-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Gavel size={28} className="text-slate-800" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Weekly Auctions</h3>
            <p className="text-gray-600 mb-4">
              Participate in our weekly property auctions and find great deals on residential and commercial properties.
            </p>
            <Link
              href="/auctions"
              className="text-slate-800 font-medium hover:text-slate-600 inline-flex items-center gap-1"
            >
              View Auctions <ArrowRight size={16} />
            </Link>
          </div>

          {/* Test Your Home */}
          <div className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-slate-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Search size={28} className="text-slate-800" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Test Your Home Value</h3>
            <p className="text-gray-600 mb-4">
              Get a free, no-obligation valuation of your property from our expert team.
            </p>
            <Link
              href="/home-valuation"
              className="text-slate-800 font-medium hover:text-slate-600 inline-flex items-center gap-1"
            >
              Get Valuation <ArrowRight size={16} />
            </Link>
          </div>

          {/* Free Real Estate Classifieds */}
          <div className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-slate-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <FileText size={28} className="text-slate-800" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Free Classifieds</h3>
            <p className="text-gray-600 mb-4">
              Post your property listing for free and reach thousands of potential buyers and renters.
            </p>
            <Link
              href="/classifieds"
              className="text-slate-800 font-medium hover:text-slate-600 inline-flex items-center gap-1"
            >
              Post Listing <ArrowRight size={16} />
            </Link>
          </div>

          {/* Real Estate Signs */}
          <div className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="bg-slate-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-800"
              >
                <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                <path d="M3 16c0 2 2 3 4 3s4-1 4-3-2-3-4-3-4 1-4 3z" />
                <path d="M13 13c0 2 2 3 4 3s4-1 4-3-2-3-4-3-4 1-4 3z" />
                <path d="M9.7 17.2a4 4 0 0 1-2.3-4.1" />
                <path d="M14.3 13.1a4 4 0 0 1 2.3-4" />
                <path d="M7 10h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Real Estate Signs</h3>
            <p className="text-gray-600 mb-4">
              Professional signage solutions for real estate agents and property owners.
            </p>
            <Link
              href="/signs"
              className="text-slate-800 font-medium hover:text-slate-600 inline-flex items-center gap-1"
            >
              View Options <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

