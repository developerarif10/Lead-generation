"use client"

import { useState } from "react"
import { Bed, Bath, Maximize, MapPin, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Family Home",
    address: "123 Main Street, Anytown",
    price: "$450,000",
    beds: 4,
    baths: 3,
    sqft: 2200,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    type: "For Sale",
    featured: true,
  },
  {
    id: 2,
    title: "Downtown Apartment",
    address: "456 Urban Ave, Cityville",
    price: "$1,800/mo",
    beds: 2,
    baths: 2,
    sqft: 1100,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    type: "For Rent",
    featured: true,
  },
  {
    id: 3,
    title: "Luxury Waterfront Villa",
    address: "789 Ocean Drive, Beachside",
    price: "$1,250,000",
    beds: 5,
    baths: 4.5,
    sqft: 3800,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop",
    type: "For Sale",
    featured: true,
  },
]

export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property) => (
        <div
          key={property.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="relative">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 left-0 bg-slate-800 text-white text-sm font-medium px-3 py-1">
              {property.type}
            </div>
            <button
              onClick={() => toggleFavorite(property.id)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            >
              <Heart
                size={18}
                className={favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-400"}
              />
            </button>
          </div>

          <div className="p-4">
            <h3 className="text-xl font-semibold mb-1">{property.title}</h3>
            <div className="flex items-center text-gray-500 mb-2">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{property.address}</span>
            </div>
            <p className="text-slate-800 font-bold text-xl mb-3">{property.price}</p>

            <div className="flex justify-between text-gray-600 border-t border-gray-100 pt-3">
              <div className="flex items-center">
                <Bed size={18} className="mr-1" />
                <span>{property.beds} Beds</span>
              </div>
              <div className="flex items-center">
                <Bath size={18} className="mr-1" />
                <span>{property.baths} Baths</span>
              </div>
              <div className="flex items-center">
                <Maximize size={18} className="mr-1" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>
          </div>

          <div className="px-4 pb-4">
            <Link
              href={`/properties/${property.id}`}
              className="block w-full text-center bg-slate-800 hover:bg-slate-700 text-white py-2 rounded-md transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

