'use client';

import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    // { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'About Us', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-[22px] font-bold text-gray-900 font-heading tracking-wide">Crispy Fruits</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200 font-body"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-full text-[15px] font-semibold tracking-wide hover:bg-opacity-90 transition-all duration-300 font-body shadow-md hover:shadow-lg">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200 font-body"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-200 mt-2 pt-4">
                <button
                  className="p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
                <button className="bg-black text-white px-8 py-4 rounded-full text-[15px] font-semibold tracking-wide hover:bg-opacity-90 transition-all duration-300 font-body shadow-md hover:shadow-lg">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
