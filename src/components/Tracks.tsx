import React from 'react';
import { TiltCard } from './TiltCard';

export const Tracks = () => {
  const tracks = [
    { icon: '💻', title: 'Algorithm Challenges', description: 'Solve complex problems with efficient algorithms and optimal solutions.', color: 'from-cyan-500 to-blue-500' },
    { icon: '🧩', title: 'Data Structures', description: 'Implement and manipulate various data structures to solve problems.', color: 'from-purple-500 to-pink-500' },
    { icon: '🔍', title: 'Problem Solving', description: 'Apply logical thinking and analytical skills to overcome coding challenges.', color: 'from-green-500 to-teal-500' },
    { icon: '⚡', title: 'Code Optimization', description: 'Write clean, efficient code that performs well under constraints.', color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <section id="tracks" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%,transparent_100%)] bg-[size:64px_64px]"></div>
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute w-3 h-3 border border-cyan-400/20 rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `spin ${10 + Math.random() * 20}s linear ${Math.random() * 5}s infinite` }} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Competition Format</span></h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Three intense levels of coding challenges to test your skills</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tracks.map((track, index) => (
            <TiltCard key={index} className="group">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-white/10 h-full transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 group-hover:scale-105">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${track.color} flex items-center justify-center text-xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>{track.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{track.title}</h3>
                <p className="text-white/60 leading-relaxed">{track.description}</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-cyan-400 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">Level {index + 1} →</div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
