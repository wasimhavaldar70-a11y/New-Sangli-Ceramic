'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800', category: 'Showroom' },
  { id: 2, src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800', category: 'Bathroom' },
  { id: 3, src: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800', category: 'Kitchen' },
  { id: 4, src: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800', category: 'Outdoor' },
  { id: 5, src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800', category: 'Bathroom' },
  { id: 6, src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800', category: 'Living Room' },
]

const categories = ['All', 'Showroom', 'Bathroom', 'Kitchen', 'Living Room', 'Outdoor']

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Inspiration Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections and see how our products transform spaces into luxurious sanctuaries.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 pt-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-2xl overflow-hidden bg-gray-100 cursor-pointer aspect-square sm:aspect-auto sm:h-80"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Gallery Preview" 
              className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
