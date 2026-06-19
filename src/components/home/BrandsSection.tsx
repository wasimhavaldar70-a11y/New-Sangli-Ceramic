'use client'

import { motion } from 'framer-motion'
import Image from 'next/link' // using simple text for now, but in production we'd use images

const brands = [
  { id: 1, name: 'Kajaria', logo: 'Kajaria' },
  { id: 2, name: 'Somany', logo: 'Somany' },
  { id: 3, name: 'Kohler', logo: 'Kohler' },
  { id: 4, name: 'Jaquar', logo: 'Jaquar' },
  { id: 5, name: 'CERA', logo: 'CERA' },
  { id: 6, name: 'Hindware', logo: 'Hindware' },
]

export default function BrandsSection() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">Trusted By</p>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Our Premium Partners</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              {/* In a real app, use next/image. For now, text representation */}
              <span className="text-2xl md:text-4xl font-extrabold text-gray-400 hover:text-gray-900 tracking-tighter">
                {brand.logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
