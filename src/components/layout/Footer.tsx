import Link from 'next/link'
import { MapPin, Phone, Mail, Globe, Share2, MessageSquare } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              SANGALI <span className="font-light text-primary">CERAMICA</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium tiles, sanitaryware, and modern bathroom solutions to transform your spaces into luxurious sanctuaries.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
                <span className="sr-only">Website</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="sr-only">Social</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
                <span className="sr-only">Message</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Gallery', 'Brands', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Categories</h4>
            <ul className="space-y-3">
              {['Floor Tiles', 'Wall Tiles', 'Bathroom Tiles', 'Outdoor Tiles', 'Kitchen Tiles', 'Sanitaryware'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/products?category=${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  123 Ceramic Market Road,<br />
                  Sangli, Maharashtra 416416,<br />
                  India
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@sangaliceramica.com" className="hover:text-white transition-colors">
                  info@sangaliceramica.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Sangali Ceramica. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
