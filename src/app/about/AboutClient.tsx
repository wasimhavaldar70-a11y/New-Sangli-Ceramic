'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function AboutClient() {
  const timeline = [
    { year: '2010', title: 'The Beginning', desc: 'Started as a small tiles shop in Sangli.' },
    { year: '2015', title: 'Expansion', desc: 'Opened our first premium showroom.' },
    { year: '2020', title: 'Going Digital', desc: 'Launched online catalog and expanded delivery.' },
    { year: '2026', title: 'Market Leaders', desc: 'Recognized as the top premium tiles showroom in the region.' },
  ]

  return (
    <div className="bg-gray-50 pb-24">
      {/* Hero */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light"
          >
            Redefining luxury living spaces with world-class ceramics and sanitaryware.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To provide our customers with an unparalleled selection of premium tiles and sanitaryware, coupled with expert guidance and exceptional service, helping them create spaces that inspire.
              </p>
              <ul className="space-y-4">
                {['Curated premium collections', 'Expert design consultation', 'Transparent pricing', 'End-to-end support'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-primary mr-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white p-10 rounded-3xl shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the most trusted and preferred destination for architectural ceramics and bathroom solutions in Maharashtra, known for our commitment to quality, innovation, and customer delight.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Milestones that shaped Sangali Ceramica.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block w-5/12" />
                  
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 shrink-0 mb-4 md:mb-0 border-4 border-white shadow-sm">
                    {item.year.substring(2)}
                  </div>
                  
                  <div className={`w-full md:w-5/12 bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                    <h3 className="text-2xl font-bold text-primary mb-2">{item.year}</h3>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
