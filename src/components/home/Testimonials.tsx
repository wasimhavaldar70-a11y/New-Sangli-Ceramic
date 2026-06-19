'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rahul Deshmukh',
    role: 'Homeowner',
    content: 'Sangali Ceramica provided an outstanding selection of tiles for our new home. The quality and finish are just premium, and the staff was extremely helpful.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Patil',
    role: 'Interior Designer',
    content: 'As an interior designer, I always recommend Sangali Ceramica to my clients. Their collection of Kohler sanitaryware and Kajaria tiles is unmatched in the city.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Kulkarni',
    role: 'Architect',
    content: 'Excellent service and timely delivery. The large format tiles we ordered for a commercial project turned out beautifully. Highly recommended!',
    rating: 4,
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Hear from those who have transformed their spaces with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Quote className="absolute top-0 left-0 w-24 h-24 text-gray-800 -translate-x-8 -translate-y-8 z-0" />
          
          <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8 md:p-12 rounded-3xl min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonials[current].rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                <p className="text-xl md:text-3xl text-gray-200 leading-relaxed font-light italic mb-8">
                  "{testimonials[current].content}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-white">{testimonials[current].name}</h4>
                  <p className="text-primary">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
