import FeaturedProperties from "@/components/featured-properties";
import LeadCaptureForm from "@/components/lead-capture-form";
import ServicesGrid from "@/components/services-grid";
import TestimonialsSection from "@/components/testimonials-section";
import {
  ArrowRight,
  FileText,
  Gavel,
  Home,
  Mail,
  MapPin,
  Phone,
  Store,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find Your Dream Property Today
            </h1>
            <p className="text-xl mb-8">
              Your trusted partner in real estate - connecting buyers, sellers,
              and renters with their perfect match.
            </p>
            <LeadCaptureForm className="bg-white p-6 rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid />

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Properties
          </h2>
          <FeaturedProperties />
          <div className="mt-10 text-center">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              View All Properties <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Weekly Auctions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Weekly Auctions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Don't miss our exclusive weekly property auctions. Register now
                to get notified about upcoming auctions and secure your dream
                property at competitive prices.
              </p>
              <div className="bg-slate-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Next Auction: March 16, 2025
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <MapPin size={18} className="text-slate-700" /> 123 Main
                    Street, Anytown
                  </li>
                  <li className="flex items-center gap-2">
                    <Home size={18} className="text-slate-700" /> 15 Properties
                    Available
                  </li>
                  <li className="flex items-center gap-2">
                    <Gavel size={18} className="text-slate-700" /> Starting at
                    $250,000
                  </li>
                </ul>
                <button className="w-full bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-md transition-colors">
                  Register for Auction
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=2070&auto=format&fit=crop"
                alt="Property auction"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Real Estate Classifieds */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Free Real Estate Classifieds
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-10">
            List your property for free or browse our extensive database of
            listings. Our classifieds section connects buyers and sellers
            directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Post a Listing</h3>
              <p className="text-gray-600 mb-4">
                List your property for free and reach thousands of potential
                buyers.
              </p>
              <Link
                href="/post-listing"
                className="text-slate-800 font-medium hover:text-slate-600 inline-flex items-center gap-1"
              >
                Post Now <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Browse Listings</h3>
              <p className="text-gray-600 mb-4">
                Search through our extensive database of properties for sale and
                rent.
              </p>
              <Link
                href="/browse-listings"
                className="text-slate-800 font-medium hover:text-slate-600 inline-flex items-center gap-1"
              >
                Browse Now <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Featured Listings</h3>
              <p className="text-gray-600 mb-4">
                Upgrade your listing to get more visibility and faster results.
              </p>
              <Link
                href="/featured-listings"
                className="text-slate-800 font-medium hover:text-slate-600 inline-flex items-center gap-1"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <LeadCaptureForm
              title="Get Notified About New Listings"
              subtitle="Be the first to know when new properties matching your criteria become available."
              buttonText="Subscribe to Alerts"
              className="bg-white p-6 rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Test Your Home Value */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop"
                alt="Home valuation"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Test Your Home Value</h2>
              <p className="text-lg text-gray-600 mb-6">
                Curious about your property's worth in today's market? Get a
                free, no-obligation home valuation from our expert team.
              </p>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="Enter your property address"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="bedrooms"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Bedrooms
                    </label>
                    <select
                      id="bedrooms"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="bathrooms"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Bathrooms
                    </label>
                    <select
                      id="bathrooms"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                    placeholder="Where should we send your valuation?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-md transition-colors font-medium"
                >
                  Get Free Valuation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Real Estate Signs */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Real Estate Signs & Marketing
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto mb-10">
            Professional signage and marketing materials for real estate
            professionals. Boost your visibility and attract more clients with
            our custom solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-slate-700 p-6 rounded-lg">
              <Tag size={40} className="mb-4 text-slate-300" />
              <h3 className="text-xl font-semibold mb-3">For Sale Signs</h3>
              <p className="text-slate-300 mb-4">
                High-quality, weather-resistant signs that get your listings
                noticed.
              </p>
              <Link
                href="/for-sale-signs"
                className="text-white font-medium hover:text-slate-300 inline-flex items-center gap-1"
              >
                View Options <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <Store size={40} className="mb-4 text-slate-300" />
              <h3 className="text-xl font-semibold mb-3">Commercial Signs</h3>
              <p className="text-slate-300 mb-4">
                Custom signage solutions for commercial properties and
                businesses.
              </p>
              <Link
                href="/commercial-signs"
                className="text-white font-medium hover:text-slate-300 inline-flex items-center gap-1"
              >
                View Options <ArrowRight size={16} />
              </Link>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg">
              <FileText size={40} className="mb-4 text-slate-300" />
              <h3 className="text-xl font-semibold mb-3">
                Marketing Materials
              </h3>
              <p className="text-slate-300 mb-4">
                Brochures, flyers, and digital assets to market your properties
                effectively.
              </p>
              <Link
                href="/marketing-materials"
                className="text-white font-medium hover:text-slate-300 inline-flex items-center gap-1"
              >
                View Options <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/signs"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-slate-800 px-6 py-3 rounded-md transition-colors"
            >
              Explore All Signage Options <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're buying, selling, or renting, our team of experts is
              here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-md transition-colors font-medium"
              >
                Contact Us
              </Link>
              <Link
                href="/properties"
                className="bg-white hover:bg-gray-100 text-slate-800 border border-slate-300 px-6 py-3 rounded-md transition-colors font-medium"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SOLD WANTED.COM</h3>
              <p className="text-slate-300 mb-4">
                Your trusted partner in real estate since 2005.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-white hover:text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-slate-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/properties"
                    className="text-slate-300 hover:text-white"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/auctions"
                    className="text-slate-300 hover:text-white"
                  >
                    Auctions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/classifieds"
                    className="text-slate-300 hover:text-white"
                  >
                    Classifieds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/valuation"
                    className="text-slate-300 hover:text-white"
                  >
                    Home Valuation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signs"
                    className="text-slate-300 hover:text-white"
                  >
                    Real Estate Signs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog"
                    className="text-slate-300 hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-slate-300 hover:text-white"
                  >
                    Buyer's Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-slate-300 hover:text-white"
                  >
                    Seller's Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/market-reports"
                    className="text-slate-300 hover:text-white"
                  >
                    Market Reports
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-slate-300 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 text-slate-300" />
                  <span className="text-slate-300">
                    123 Real Estate Ave, Suite 100
                    <br />
                    Anytown, ST 12345
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-slate-300" />
                  <a
                    href="tel:+11234567890"
                    className="text-slate-300 hover:text-white"
                  >
                    (123) 456-7890
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-slate-300" />
                  <a
                    href="mailto:info@soldwanted.com"
                    className="text-slate-300 hover:text-white"
                  >
                    info@soldwanted.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} SOLD WANTED.COM. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
