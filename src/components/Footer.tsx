import React from 'react';

export const Footer = () => (
  <footer id="footer" className="bg-gradient-to-t from-black to-gray-900 py-12 border-t border-white/10 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.01)_50%,transparent_75%,transparent_100%)] bg-[size:50px_50px] animate-[slide_10s_linear_infinite]"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <h3 className="text-2xl font-bold text-white">TechPhoria <span className="text-cyan-400">Session 2025-26</span></h3>
        </div>
        
        <p className="text-white/60 mb-6 max-w-md mx-auto">
          An Individual Coding Competition<br />Organized by CST Department, Technique Polytechnic Institute
        </p>
        
        {/* Contact Information Section */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <a 
            href="mailto:techphorias3@gmail.com" 
            className="text-white/60 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2"
          >
            {/* You can add an email icon here if you want */}
            <span>Email us: techphorias2@gmail.com</span>
          </a>
          <span className="hidden sm:block text-white/30">|</span>
          <a 
            href="tel:+919802066376" 
            className="text-white/60 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2"
          >
            {/* You can add a phone icon here if you want */}
            <span>Contact: +91 9802066376</span>
          </a>
        </div>

          <div className="text-white/40 text-sm">
          © 2025 TechPhoria. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
);