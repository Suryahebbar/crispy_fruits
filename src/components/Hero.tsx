'use client';

import React, { useEffect, useState } from 'react';

// Background slideshow images (direct Unsplash CDN URLs) - fruit focused
const heroImages = [
  'https://images.unsplash.com/photo-1645291787981-fbb3094ae87b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  'https://plus.unsplash.com/premium_photo-1723629871940-b8bbdf40ec43?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  'https://images.unsplash.com/photo-1620589537410-be8f708dd12e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1661836990173-97481f67f85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  'https://images.unsplash.com/photo-1614061811858-dde54a522f5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
  'https://plus.unsplash.com/premium_photo-1668677227454-213252229b73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1579293676449-9f0f5dead43f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Advance slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      // Change image halfway through the fade
      setTimeout(() => {
        setPreviousImageIndex(currentImageIndex);
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 350); // Half way through the 700ms fade
      // Reset fade state after transition completes
      setTimeout(() => {
        setIsFading(false);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section
      className="relative min-h-screen flex items-center py-28 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background image layers */}
      {/* Previous image - fades out */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 blur-sm ${isFading ? 'opacity-0' : 'opacity-100'}`}
        style={{
          '--bg-image': `url(${heroImages[previousImageIndex]})`,
          backgroundImage: 'var(--bg-image)',
        } as React.CSSProperties}
      />
      {/* Current image - fades in */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 blur-sm ${isFading ? 'opacity-100' : 'opacity-0'}`}
        style={{
          '--bg-image': `url(${heroImages[currentImageIndex]})`,
          backgroundImage: 'var(--bg-image)',
        } as React.CSSProperties}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-bold text-white leading-[1.15] tracking-wide font-heading">
                Discover Nature's{' '}
                <span className="text-gray-300">Crunchy Treasures</span>
              </h1>
              <p className="text-[16px] text-gray-200 leading-[1.75] max-w-md font-body">
                From premium almonds to exotic dried berries, explore our collection of handpicked dry fruits that bring health and flavor to your daily routine. Sustainably sourced, naturally delicious.
              </p>
            </div>
            
            <button className="bg-black text-white px-8 py-4 rounded-full text-[15px] font-semibold tracking-wide hover:bg-opacity-90 transition-all duration-300 font-body shadow-lg hover:shadow-xl">
              Shop Now
            </button>
          </div>

          {/* Right Column - Image Grid (Asymmetric Layout) */}
          <div className="relative h-[440px]">
            {/* Large card - Left (full height) - Almonds */}
            <div className="absolute left-0 top-0 w-[48%] h-full">
              <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600189020840-e9918c25269d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Premium Almonds"
                  className="w-full h-full object-cover brightness-[0.98]"
                />
              </div>
            </div>

            {/* Top Right card - Half height with gap - Pistachios */}
            <div className="absolute right-0 top-0 w-[48%] h-[210px]">
              <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579282940892-6152e6e80c52?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Pistachios in Bowl"
                  className="w-full h-full object-cover brightness-[0.98]"
                />
              </div>
            </div>

            {/* Bottom Right card - Half height with gap - Walnuts */}
            <div className="absolute right-0 bottom-0 w-[48%] h-[210px]">
              <div className="w-full h-full bg-gray-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1726771517475-e7acdd34cd8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shelled Walnuts"
                  className="w-full h-full object-cover brightness-[0.98]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;