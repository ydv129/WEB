import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="text-center py-16 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent">
      <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
        Your Ultimate PDF & Image Toolkit
      </h2>
      <p className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
        Transform, organize, and enhance your documents and images with our comprehensive collection of 35+ powerful tools - all in your browser, completely free!
      </p>
      <div className="flex justify-center gap-8 lg:gap-16 flex-wrap">
        <div className="text-center">
          <span className="block text-3xl lg:text-4xl font-bold text-cyan-400 drop-shadow-lg">35+</span>
          <span className="block text-gray-400 text-sm mt-1">Tools Available</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl lg:text-4xl font-bold text-cyan-400 drop-shadow-lg">100%</span>
          <span className="block text-gray-400 text-sm mt-1">Browser-Based</span>
        </div>
        <div className="text-center">
          <span className="block text-3xl lg:text-4xl font-bold text-cyan-400 drop-shadow-lg">0</span>
          <span className="block text-gray-400 text-sm mt-1">Cost Forever</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;