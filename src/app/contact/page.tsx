'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Server action simulation
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
    }, 1500)
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto font-light"
          >
            We'd love to hear from you. Visit our showroom or send us a message.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 pt-16">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Contact Information & Hours */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                      123 Ceramic Market Road,<br />Sangli, Maharashtra 416416, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-primary mt-1 text-sm block transition-colors">+91 98765 43210</a>
                    <a href="tel:+919876543211" className="text-gray-600 hover:text-primary mt-1 text-sm block transition-colors">+91 98765 43211</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:info@sangaliceramica.com" className="text-gray-600 hover:text-primary mt-1 text-sm block transition-colors">info@sangaliceramica.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-primary" /> Business Hours
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex justify-between border-b border-gray-50 pb-2">
                  <span>Monday - Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

              {submitSuccess ? (
                <div className="bg-green-50 text-green-800 p-8 rounded-2xl flex flex-col items-center text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Thank you!</h4>
                  <p>Your message has been sent successfully. We'll be in touch soon.</p>
                  <button 
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 text-primary font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                      <input id="name" required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="mobile" className="text-sm font-medium text-gray-700">Mobile Number</label>
                      <input id="mobile" required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50 focus:bg-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
                    <input id="email" type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all bg-gray-50 focus:bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                    <textarea id="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none bg-gray-50 focus:bg-white"></textarea>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-medium hover:bg-primary/90 transition-all flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5 mr-2" /> Send Message</>}
                    </button>
                    <a 
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-green-600 transition-all flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="h-[400px] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122283.79122396105!2d74.50022378393527!3d16.84074218206272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc122e2393d252b%3A0xc3f6e80b4352bbd9!2sSangli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
