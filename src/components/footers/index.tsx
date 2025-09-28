import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import HeaderLogo from "@/assets/opf-logo.png";

const index = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Logo */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <Image src={HeaderLogo} alt="Logo" className="w-10 h-10 rounded-full" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6">{"Quick Link's"}</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Why Choose Us', 'Contact Us'].map(link => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h4 className="font-bold text-lg mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">contact@drattaraquafeed.com</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">+91-8750778845</p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Village Dohki, Charkhi Dadri, Haryana :- 124507</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Dr. Attar Aqua Feed. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
  )
}

export default index