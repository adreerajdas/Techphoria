import React from 'react';
import Image from 'next/image';
import { TiltCard } from './TiltCard';
import { AcademicCapIcon, SparklesIcon } from './Icons';

// LinkedIn Icon Component
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white hover:text-cyan-400 transition-colors duration-200"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// Instagram Icon Component
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white hover:text-pink-500 transition-colors duration-200"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// GitHub Icon Component
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white hover:text-gray-300 transition-colors duration-200"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const Organizers = () => {
  const organizers = [
    { 
      name: 'Debashis Hati', 
      role: 'HOD, CST Department', 
      description: 'Head of Computer Science & Technology Department, Technique Polytechnic Institute.', 
      avatar: '👨‍🏫', 
      photo: '/team/debashis-hati.jpg',
      color: 'from-blue-500 to-cyan-500',
      linkedin: 'https://www.linkedin.com/in/debasish-hati-79597b22a?utm_source=share_via&utm_content=profile&utm_medium=member_android'
    },
    { 
      name: 'Adreeraj Das', 
      role: 'Administration & Website', 
      description: 'Lead organizer handling website development and overall event administration and coordination.', 
      avatar: '👨‍💻',
      photo: '/team/adreeraj-das.jpg',
      color: 'from-purple-500 to-pink-500',
      linkedin: 'https://www.linkedin.com/in/adreerajdas/',
      instagram: 'https://www.instagram.com/addreeraj/',
      github: 'https://github.com/adreerajdas'
    },
    { 
      name: 'Arka Putatunda', 
      role: 'Competition Management', 
      description: 'Key team member responsible for question sets and student coordination for smooth execution.', 
      avatar: '🧑‍💻',
      photo: '/team/arka-putatunda.jpg',
      color: 'from-red-500 to-orange-500',
      linkedin: 'https://www.linkedin.com/in/arka-putatunda-4532122b7/',
      github: 'https://github.com/arkaputatundaofficial'
    },
    { 
      name: 'Sayan Das', 
      role: 'Designer & Event Organizer', 
      description: 'The creative mind behind the visual identity and design, also contributing to event organization.', 
      avatar: '🎨',
      photo: '/team/sayan-das.jpg',
      color: 'from-indigo-500 to-violet-500',
      linkedin: 'https://www.linkedin.com/in/sayan-das-5937b3343/',
      instagram: 'https://www.instagram.com/sayandas.neel/',
      github: 'https://github.com/sayan-das940'
    }
  ];

  return (
    <section id="organizers" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0"><div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[size:80px_80px] animate-[slide_15s_linear_infinite]"></div></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Organizers</span></h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Meet the dedicated team behind TechPhoria Season 3</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {organizers.map((organizer, index) => (
            <TiltCard key={index} className="group">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-between transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                
                <div className="flex-grow text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{organizer.name}</h3>
                  <div className="text-cyan-400 text-sm font-semibold mb-4 uppercase tracking-wider">{organizer.role}</div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{organizer.description}</p>
                </div>

                <div className="mt-auto">
                  <div className="relative w-36 h-36 mx-auto">
                    <div className={`w-36 h-36 rounded-full bg-gradient-to-r ${organizer.color} flex items-center justify-center text-4xl overflow-hidden relative z-10 transform group-hover:scale-105 transition-transform duration-300`}>
                      {organizer.photo ? (
                        <Image
                          src={organizer.photo}
                          alt={organizer.name}
                          className="w-full h-full rounded-full object-cover"
                          width={144}
                          height={144}
                        />
                      ) : (
                        <span>{organizer.avatar}</span>
                      )}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 group-hover:scale-110"></div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <div className="flex justify-center space-x-4 mt-2">
                    {organizer.linkedin && (
                      <a href={organizer.linkedin} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                        <LinkedInIcon />
                      </a>
                    )}
                    {organizer.instagram && (
                      <a href={organizer.instagram} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                        <InstagramIcon />
                      </a>
                    )}
                    {organizer.github && (
                      <a href={organizer.github} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/30">
            <SparklesIcon />
            <span className="text-cyan-400 font-semibold">Organized by CST Department, Technique Polytechnic Institute</span>
          </div>
        </div>
      </div>
    </section>
  );
};