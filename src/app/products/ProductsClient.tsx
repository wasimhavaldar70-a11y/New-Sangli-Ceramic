'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Filter, Search } from 'lucide-react'

// Mock data fallback if DB is empty
const MOCK_PRODUCTS = [
  { id: '1', name: 'Statuario Marble', slug: 'statuario-marble', price: 120, category_id: 'floor-tiles', categories: { name: 'Floor Tiles' }, brands: { name: 'Kajaria' }, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&q=80' },
  { id: '2', name: 'Matte Black Ceramic', slug: 'matte-black-ceramic', price: 85, category_id: 'wall-tiles', categories: { name: 'Wall Tiles' }, brands: { name: 'Somany' }, image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=500&q=80' },
  { id: '3', name: 'Kohler Washbasin', slug: 'kohler-washbasin', price: 4500, category_id: 'sanitaryware', categories: { name: 'Sanitaryware' }, brands: { name: 'Kohler' }, image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80' },
  { id: '4', name: 'Wooden Finish Plank', slug: 'wooden-finish-plank', price: 150, category_id: 'floor-tiles', categories: { name: 'Floor Tiles' }, brands: { name: 'Kajaria' }, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&q=80' },
]

export default function ProductsClient({ initialProducts, initialCategory, initialBrand }: any) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all')

  const products = initialProducts.length > 0 ? initialProducts : MOCK_PRODUCTS

  const filteredProducts = products.filter((product: any) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category_id === selectedCategory || product.categories?.name.toLowerCase().includes(selectedCategory.replace('-', ' '))
    return matchesSearch && matchesCategory
  })

  const categories = ['all', 'floor-tiles', 'wall-tiles', 'bathroom-tiles', 'sanitaryware']

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
            <p className="text-gray-600">Browse our extensive collection of premium surfaces and fixtures.</p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </div>
            
            <div className="relative w-full sm:w-48">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer"
              >
                {categories.map(c => (
                  <option key={c} value={c}>{c === 'all' ? 'All Categories' : c.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product: any, idx: number) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link href={`/products/${product.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <img 
                      src={product.image || 'https://via.placeholder.com/500'} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                      {product.categories?.name || 'Category'}
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                      <p className="text-sm text-gray-500 mb-4">{product.brands?.name || 'Brand'}</p>
                    </div>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-lg font-bold text-gray-900">₹{product.price || 'Ask Price'}</span>
                      <span className="text-primary text-sm font-medium">View Details &rarr;</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('all') }}
              className="mt-6 text-primary font-medium hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
