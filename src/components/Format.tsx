import React from 'react';
import { TiltCard } from './TiltCard';

export const Format = () => {
  const contestStages = [
    {
      icon: '🧠',
      title: 'MCQ Round',
      description: 'Test your fundamental knowledge and logic with a comprehensive set of technical questions.',
      details: [
        'Total MCQs: 50 Questions',
        'Scoring: 2 Marks per MCQ',
        'Total Section Marks: 100',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '💻',
      title: 'Coding Round',
      description: 'Implement algorithms and solve complex problems using your preferred language.',
      details: [
        'Total Programs: 10 Problems',
        'Scoring: 10 Marks per Program',
        'C, C++, Java, or Python',
      ],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: '⏱️',
      title: 'The Challenge',
      description: 'A race against time to maximize your score across both sections of the event.',
      details: [
        'Total Duration: 1.5 Hours',
        'Full Marks: 200 Total',
        'Ranked by speed & accuracy',
      ],
      color: 'from-orange-400 to-red-500',
    },
  ];

  const keyframes = `
    @keyframes text-gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <section id="formats" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <style>{keyframes}</style>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%,transparent_100%)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-[size:200%_auto] animate-[text-gradient_3s_ease_infinite]">
              Contest Format
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            1.5 Hours. 200 Marks. One Champion.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
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
                        <svg className="w-4 h-4 mr-3 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Additional Detailed Info Section */}
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          <p className="text-white/80 text-center leading-relaxed italic">
            "Round 1 will consist of <span className="text-cyan-400 font-semibold">50 MCQs</span> carrying 2 marks each and <span className="text-purple-400 font-semibold">10 Programming questions</span> carrying 10 marks each, making a total of 200 marks. The questions will cover various difficulty levels ranging from easy to advanced. Participants are advised to read all problem statements carefully before attempting the questions."
          </p>
        </div>
      </div>
    </section>
  );
};