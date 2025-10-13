import React from 'react';

export const Footer = () => (
  <footer className="bg-gradient-to-t from-black to-gray-900 py-12 border-t border-white/10 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.01)_50%,transparent_75%,transparent_100%)] bg-[size:50px_50px] animate-[slide_10s_linear_infinite]"></div>
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center">
        <div className="flex justify-center items-center space-x-2 mb-6">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
          <h3 className="text-2xl font-bold text-white">TechPhoria <span className="text-cyan-400">S2</span></h3>
        </div>
        <p className="text-white/60 mb-6 max-w-md mx-auto">An Individual Coding Competition<br />Organized by CST Department, Technique Polytechnic Institute</p>
        <div className="flex justify-center space-x-6 mb-6">{['Twitter', 'Discord', 'LinkedIn', 'Instagram'].map((platform) => (<a key={platform} href="#" className="text-white/40 hover:text-cyan-400 transition-colors duration-300 hover:scale-110 transform">{platform}</a>))}</div>
        <div className="text-white/40 text-sm">© 2025 TechPhoria Season 2. All rights reserved. | Crafted with ❤️ by Adree</div>
      </div>
    </div>
  </footer>
);
