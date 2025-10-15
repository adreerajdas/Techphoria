import React from 'react';
import { TiltCard } from './TiltCard'; // Assuming TiltCard is in the same directory

export const Format = () => {
  const contestStages = [
    {
      icon: '💻',
      title: 'Part 1: Coding Round',
      description: 'The initial phase where participants tackle a series of challenges to prove their coding prowess.',
      details: [
        'Maximum Marks: 75',
        'Scoring is based on passed test cases.',
        'Highest score per challenge is considered.',
      ],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: '🏆',
      title: 'Part 2: The Finalist Quiz',
      description: 'A high-stakes live quiz for the elite contenders who have proven their skills in the coding round.',
      details: [
        'Eligibility: Top 20 Participants',
        'Maximum Marks: 25',
        'Format: LIVE On-Camera Quiz.',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🏅',
      title: 'Grand Prizes Await',
      description: 'The ultimate reward for exceptional performance and mastery in the competition!',
      details: [
        'Top 3 Finalists will receive prizes.',
        'Recognizing outstanding coding and quiz skills.',
        'Be among the best to win!',
      ],
      color: 'from-yellow-400 to-orange-500',
    },
  ];

  // --- NEW: Define animation keyframes as a string ---
  const keyframes = `
    @keyframes text-gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <section id="formats" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* --- NEW: Inject the keyframes into a style tag --- */}
      <style>{keyframes}</style>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%,transparent_100%)] bg-[size:64px_64px]"></div>
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 border border-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `spin ${10 + Math.random() * 20}s linear ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {/* --- MODIFIED: Added classes to the span for the animation --- */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-[size:200%_auto] animate-[text-gradient_3s_ease_infinite]">
              Contest Format
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A multi-stage challenge culminating in recognition for the ultimate coding champions.
          </p>
        </div>

        {/* Contest Stages & Prizes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contestStages.map((stage) => (
            <TiltCard key={stage.title} className="group">
              <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-white/10 h-full transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/10 group-hover:scale-105 flex flex-col">
                <div className="flex-grow">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stage.color} flex items-center justify-center text-2xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stage.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{stage.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-4">{stage.description}</p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <ul className="space-y-2 text-white/80">
                    {stage.details.map((detail) => (
                      <li key={detail} className="flex items-center">
                        <svg className="w-4 h-4 mr-3 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};