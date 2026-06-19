'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send, CheckCircle2, Package, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const MOCK_PRODUCTS: any = {
  'statuario-marble': { id: '1', name: 'Statuario Marble', slug: 'statuario-marble', price: 120, description: 'Premium imported Statuario marble with beautiful grey veining. Perfect for luxurious living room floors and feature walls. Highly durable and polished to perfection.', category_id: 'floor-tiles', categories: { name: 'Floor Tiles' }, brands: { name: 'Kajaria' }, image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1000&q=80' },
  'matte-black-ceramic': { id: '2', name: 'Matte Black Ceramic', slug: 'matte-black-ceramic', price: 85, description: 'Sleek and modern matte black ceramic tiles for contemporary spaces. Excellent moisture resistance, making it ideal for bathroom walls.', category_id: 'wall-tiles', categories: { name: 'Wall Tiles' }, brands: { name: 'Somany' }, image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1000&q=80' },
}

export default function ProductDetailsClient({ initialProduct, slug }: { initialProduct: any, slug: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const product = initialProduct || MOCK_PRODUCTS[slug]

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="text-primary hover:underline">Return to Products</Link>
      </div>
    )
  }

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
    }, 1500)
  }

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(`Hi, I'm interested in ${product.name} (Slug: ${product.slug}). Please provide more details.`)}`

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Breadcrumb & Back */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/products" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden bg-gray-100 aspect-square relative border border-gray-100 shadow-sm">
              <img 
                src={product.image || 'https://via.placeholder.com/1000'} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail placeholder for gallery array if it existed */}
            <div className="flex gap-4 mt-4">
              <div className="w-24 h-24 rounded-xl bg-gray-200 overflow-hidden border-2 border-primary">
                <img src={product.image} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
              <Package className="w-4 h-4" />
              <span>{product.categories?.name || 'Category'}</span>
              <span>•</span>
              <Tag className="w-4 h-4" />
              <span>{product.brands?.name || 'Brand'}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="text-3xl font-light text-gray-900 mb-8">
              ₹{product.price} <span className="text-lg text-gray-500 font-normal">/ sq.ft</span>
            </div>

            <div className="prose prose-lg text-gray-600 mb-10">
              <p>{product.description || 'Premium quality material with exceptional durability and finish.'}</p>
            </div>

            <div className="border-t border-gray-100 pt-10 mt-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send an Inquiry</h3>
              
              {submitSuccess ? (
                <div className="bg-green-50 text-green-800 p-6 rounded-2xl flex items-center">
                  <CheckCircle2 className="w-6 h-6 mr-3 text-green-600" />
                  <div>
                    <h4 className="font-semibold">Inquiry Sent Successfully!</h4>
                    <p className="text-sm mt-1">Our team will get back to you shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquiry} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                    <input required type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <textarea required placeholder="Message / Quantity required" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"></textarea>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 bg-gray-900 text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5 mr-2" /> Request Quote</>}
                    </button>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Us
                    </a>
                  </div>
                </form>
              )}
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  )
}
