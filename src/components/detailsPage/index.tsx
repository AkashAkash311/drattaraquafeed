import React from "react";

const AttarInfoSlide = () => {
  return (
    <div className="min-h-80vh flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="text-gray-900">Welcome To </span>
            <span className="text-orange-600">Dr. Attar</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-orange-600">
            Aqua Feed
          </h2>
        </div>

        {/* Description Card */}
        <div className="relative">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-white">
              <p className="text-lg md:text-xl leading-relaxed font-medium">
                Dr. Attar Aqua feed™ is manufacturer of high quality 
                shrimp feed in India. Producing a nutritionally balanced 
                shrimp feed which is{' '}
                <span className="font-semibold">Scientifically formulated</span> in 
                collaboration with{' '}
                <span className="font-semibold">ICAR-CIBA</span> to provide good growth 
                and{' '}
                <span className="font-semibold">Optimum Food Conversion Ratio (FCR)</span>.
              </p>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 opacity-10">
              <div className="w-16 h-16 rounded-full bg-white"></div>
            </div>
            <div className="absolute bottom-4 left-4 opacity-10">
              <div className="w-12 h-12 rounded-full bg-white"></div>
            </div>
            <div className="absolute top-1/2 left-8 opacity-5">
              <div className="w-24 h-24 rounded-full bg-white"></div>
            </div>
          </div>
        </div>

        {/* Additional Brand Elements */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 text-orange-600 font-semibold">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <span>Premium Quality Aquaculture Solutions</span>
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttarInfoSlide;
