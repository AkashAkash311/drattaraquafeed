"use client"
import React from 'react'

import HeaderLogo from "@/assets/opf-logo.png";
import Image from 'next/image';

const index = () => {
  return (
    <header
      className="sticky top-0 z-50 shadow-lg backdrop-blur-md bg-gradient-to-br     from-white/30 to-white/10 border-b border-white/20"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(200,220,255,0.15) 100%)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)"
        // borderRadius: "0 0 24px 24px"
      }}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br rounded-full flex items-center justify-center">
                <Image src={HeaderLogo} alt="Logo" className="w-10 h-10 rounded-full" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Dr. Attar Aqua Feed</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-orange-600 transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default index