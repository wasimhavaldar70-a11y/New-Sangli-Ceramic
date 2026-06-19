'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const brands = [
  { id: 'kajaria', name: 'Kajaria', description: 'India\'s No.1 Tile Company, offering an extensive range of ceramic, polished vitrified, and glazed vitrified tiles.', logo: 'Kajaria', products: 120 },
  { id: 'somany', name: 'Somany', description: 'Known for innovation and design excellence, Somany brings you the finest selection of floor and wall tiles.', logo: 'Somany', products: 85 },
  { id: 'kohler', name: 'Kohler', description: 'Global leader in kitchen and bath products, Kohler delivers bold design and uncompromising quality.', logo: 'Kohler', products: 45 },
  { id: 'jaquar', name: 'Jaquar', description: 'Complete bathroom solutions offering premium faucets, sanitaryware, and wellness products.', logo: 'Jaquar', products: 60 },
  { id: 'cera', name: 'CERA', description: 'Contemporary sanitaryware and tiles designed to reflect your style and elevate your lifestyle.', logo: 'CERA', products: 75 },
  { id: 'hindware', name: 'Hindware', description: 'Pioneers in sanitaryware, bringing innovative technology and stunning aesthetics to modern bathrooms.', logo: 'Hindware', products: 50 },
]

export default function BrandsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="py-20 bg-white text-center border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Our Partner Brands</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We exclusively partner with industry leaders to bring you unparalleled quality, design, and durability.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full"
            >
              <div className="h-32 flex items-center justify-center bg-gray-50 rounded-2xl mb-6">
                {/* Text placeholder for logo */}
                <span className="text-4xl font-extrabold text-gray-400 tracking-tighter">
                  {brand.logo}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{brand.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{brand.description}</p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                <span className="text-sm font-medium text-gray-500">{brand.products}+ Products</span>
                <Link 
                  href={`/products?brand=${brand.id}`}
                  className="text-primary font-semibold hover:text-primary/80 flex items-center transition-colors"
                >
                  View Collection <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
