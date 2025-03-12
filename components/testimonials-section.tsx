"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    quote:
      "Working with SOLD WANTED.COM was an absolute pleasure. They helped me find my dream home within my budget and made the entire process stress-free.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Property Seller",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    quote:
      "I was amazed at how quickly my property sold! Their marketing strategy and professional photography made all the difference. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Williams",
    role: "Real Estate Investor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    quote:
      "As an investor, I appreciate their deep market knowledge and ability to find properties with great potential. They've helped me build a profitable portfolio.",
    rating: 4,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-slate-50 rounded-lg p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 flex flex-col items-center">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonials[currentIndex].rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>

              <div className="md:w-3/4">
                <blockquote className="text-lg italic text-gray-600 mb-4">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="font-semibold">{testimonials[currentIndex].name}</div>
                <div className="text-gray-500">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-slate-800" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-slate-800" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-slate-800" />
          </button>
        </div>
      </div>
    </section>
  )
}

