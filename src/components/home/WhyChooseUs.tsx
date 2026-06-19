'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Tags, ThumbsUp, Users, PackageOpen, Zap } from 'lucide-react'

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Premium Quality',
    description: 'We source only the highest grade materials to ensure durability and lasting beauty.'
  },
  {
    icon: <ThumbsUp className="w-8 h-8 text-primary" />,
    title: 'Trusted Brands',
    description: 'Partnered with global leaders like Kohler, Kajaria, and Somany.'
  },
  {
    icon: <Tags className="w-8 h-8 text-primary" />,
    title: 'Affordable Pricing',
    description: 'Luxury designs at competitive prices with transparent cost structures.'
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Professional Guidance',
    description: 'Our experts help you choose the perfect products for your specific needs.'
  },
  {
    icon: <PackageOpen className="w-8 h-8 text-primary" />,
    title: 'Large Collection',
    description: 'Thousands of designs spanning modern, classic, and contemporary aesthetics.'
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Fast Service',
    description: 'Prompt delivery and exceptional customer support from inquiry to installation.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4"
          >
            Why Choose Sangali Ceramica?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Experience the perfect blend of quality, aesthetics, and service. We bring your dream spaces to life with our unparalleled collection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
