import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Organizers', href: '#organizers' },
    { name: 'Register', href: '#register' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hover:bg-purple-500/10 ${
      scrolled ? 'bg-black/30 backdrop-blur-2xl border-b border-purple-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* --- CHANGE START --- */}
            <a href="#home">
              <img 
                src="/images/logo.png" 
                alt="TechPhoria Logo" 
                className="h-8 w-auto object-contain"
              />
            </a>
            {/* --- CHANGE END --- */}
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-purple-500 transition-all duration-300 font-medium text-sm uppercase tracking-wider hover:tracking-widest"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-white/80 hover:text-purple-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-400/20 pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-purple-400 transition-colors font-medium text-sm uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};