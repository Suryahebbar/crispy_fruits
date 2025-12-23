'use client';

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription logic here
    setEmail('');
  };

  return (
    <section className="relative py-28 px-6 sm:px-10 lg:px-16 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-lg scale-105 newsletter-bg"
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-bold text-white mb-4 leading-[1.2] tracking-wide font-heading">
          Get Your Healthy Snacking Inspiration
          <span className="block">Straight to Your Inbox</span>
        </h2>
        
        {/* Subheading */}
        <p className="text-[16px] sm:text-[16px] text-gray-200 mb-8 max-w-2xl mx-auto leading-[1.75] font-body">
          Subscribe for exclusive recipes, health tips, and special offers
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition-all duration-300 text-[15px] font-body"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-black hover:bg-opacity-90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap text-[15px] tracking-wide font-body"
            >
              Subscribe Now
            </button>
          </div>
        </form>

        {/* Privacy Text */}
        <p className="text-[14px] text-gray-300 mt-6 leading-[1.6] font-body">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
