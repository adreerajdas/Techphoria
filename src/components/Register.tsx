import React from 'react';

export const Register = () => (
  <section id="register" className="py-20 bg-black relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
    <div className="absolute inset-0">{[...Array(15)].map((_, i) => (<div key={i} className="absolute w-1 h-1 bg-cyan-400/40 rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `twinkle ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`, }} />))}</div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Ready to Code?</span></h2>
        <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">Register now for this exciting individual coding competition. Test your skills against the best!</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">{[
          { label: 'Competition Type', value: 'Individual' },
          { label: 'Duration', value: '3 Hours' },
          { label: 'Registration Deadline', value: 'Nov 5' },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2 hover:scale-110 transition-transform duration-300">{stat.value}</div>
            <div className="text-white/60">{stat.label}</div>
          </div>
        ))}</div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScNdEUSOSkX66hEg0W1IT3NtMTxRzqhVU8FWb5PhjPhAXLWEg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-lg"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a href="#register" className="text-cyan-300/80 hover:text-cyan-400 transition-colors text-sm font-medium mt-2 sm:mt-0">Guidelines</a>
        </div>

        <p className="text-white/40 mt-8 text-sm">Registration closes on November 5, 2025 • Individual participation only</p>
      </div>
    </div>
  </section>
);