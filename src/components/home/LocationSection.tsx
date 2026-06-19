'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function LocationSection() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-[400px] md:h-[500px] bg-gray-200 rounded-3xl overflow-hidden shadow-md"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79122396105!2d74.50022378393527!3d16.84074218206272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc122e2393d252b%3A0xc3f6e80b4352bbd9!2sSangli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Visit Our Showroom</h2>
              <p className="text-lg text-gray-600">
                Experience our extensive collection in person. Our experts are ready to assist you in selecting the perfect materials for your project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Showroom Address</h4>
                  <p className="text-gray-600 mt-1">123 Ceramic Market Road,<br />Sangli, Maharashtra 416416, India</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Contact Number</h4>
                  <p className="text-gray-600 mt-1">+91 98765 43210</p>
                  <p className="text-gray-600">+91 98765 43211</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/contact"
                className="flex-1 bg-primary text-primary-foreground px-6 py-4 rounded-xl text-center font-medium hover:bg-primary/90 transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Inquiry</span>
              </Link>
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 text-white px-6 py-4 rounded-xl text-center font-medium hover:bg-green-600 transition-all flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
