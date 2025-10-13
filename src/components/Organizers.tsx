import React from 'react';
import { TiltCard } from './TiltCard';
import { AcademicCapIcon, SparklesIcon } from './Icons';
// Assuming you have a LinkedIn icon, either custom or from a library
// For example, if using Heroicons:
// import { FaLinkedinIn } from 'react-icons/fa'; // Example for react-icons/fa

// For this example, let's create a simple SVG for LinkedIn
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


export const Organizers = () => {
  const organizers = [
    // 1. Debashis Hati
    { 
      name: 'Debashis Hati', 
      role: 'HOD, CST Department', 
      description: 'Head of Computer Science & Technology Department, Technique Polytechnic Institute.', 
      avatar: '👨‍🏫', 
      photo: '', // Add path to photo e.g., '/organizers/debashis-hati.jpg'
      color: 'from-blue-500 to-cyan-500',
      linkedin: 'https://www.linkedin.com/in/debashis-hati-example' // ADD LINKEDIN PROFILE HERE
    },
    // 2. Trisha Mondal
    { 
      name: 'Trisha Mondal', 
      role: 'Organizer & Faculty', 
      description: 'Faculty member of the CST department and a guiding force for the event.', 
      avatar: '👩‍🏫',
      photo: '', // Add path to photo e.g., '/organizers/trisha-mondal.jpg'
      color: 'from-orange-500 to-yellow-500',
      linkedin: 'https://www.linkedin.com/in/trisha-mondal-example' // ADD LINKEDIN PROFILE HERE
    },
    // 3. Adreeraj Das
    { 
      name: 'Adreeraj Das', 
      role: 'Administration & Organizer', 
      description: 'Lead organizer, handling administration and overall event coordination for the event.', 
      avatar: '👨‍💻',
      photo: '', // Add path to photo e.g., '/organizers/adreeraj-das.jpg'
      color: 'from-purple-500 to-pink-500',
      linkedin: 'https://www.linkedin.com/in/adreeraj-das-example' // ADD LINKEDIN PROFILE HERE
    },
    // 4. Puspendu Satra
    { 
      name: 'Puspendu Satra', 
      role: 'Organizer', 
      description: 'Event manager and lead technical coordinator for all segments of TechPhoria.', 
      avatar: '👨‍🎓',
      photo: '', // Add path to photo e.g., '/organizers/puspendu-satra.jpg'
      color: 'from-green-500 to-teal-500',
      linkedin: 'https://www.linkedin.com/in/puspendu-satra-example' // ADD LINKEDIN PROFILE HERE
    },
    // 5. Arka Putatunda
    { 
      name: 'Arka Putatunda', 
      role: 'Organizer', 
      description: 'Key team member handling event logistics and student coordination for smooth execution.', 
      avatar: '🧑‍💻',
      photo: '', // Add path to photo e.g., '/organizers/arka-putatunda.jpg'
      color: 'from-red-500 to-orange-500',
      linkedin: 'https://www.linkedin.com/in/arka-putatunda-example' // ADD LINKEDIN PROFILE HERE
    },
    // 6. Sayan Das
    { 
      name: 'Sayan Das', 
      role: 'Designer', 
      description: 'The creative mind behind the visual identity and design for TechPhoria Season 2.', 
      avatar: '🎨',
      photo: '', // Add path to photo e.g., '/organizers/sayan-das.jpg'
      color: 'from-indigo-500 to-violet-500',
      linkedin: 'https://www.linkedin.com/in/sayan-das-example' // ADD LINKEDIN PROFILE HERE
    }
  ];

  return (
    <section id="organizers" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0"><div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[size:80px_80px] animate-[slide_15s_linear_infinite]"></div></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Organizers</span></h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Meet the dedicated team behind TechPhoria Season 2</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {organizers.map((organizer, index) => (
            <TiltCard key={index} className="group">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-between transition-all duration-300 group-hover:border-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                
                {/* Text Content (Name, Role, Description) */}
                <div className="flex-grow"> {/* Allows text content to take available space */}
                  <h3 className="text-4xl font-bold text-white mb-2">{organizer.name}</h3> {/* Larger name */}
                  <div className="text-cyan-400 text-xl font-semibold mb-4">{organizer.role}</div> {/* Larger role */}
                  <p className="text-white/70 text-base leading-relaxed mb-6">{organizer.description}</p>
                </div>

                {/* Avatar / Photo Section - Aligned to bottom, taking less vertical space */}
                <div className="mt-auto"> {/* Pushes avatar/photo to the bottom */}
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${organizer.color} flex items-center justify-center text-5xl mx-auto transform group-hover:scale-105 transition-transform duration-300 overflow-hidden`}>
                    {organizer.photo ? (
                      <img src={organizer.photo} alt={organizer.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <span>{organizer.avatar}</span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <div className="inline-flex items-center space-x-2 text-cyan-400 text-sm mb-4">
                    <AcademicCapIcon />
                    <span>CST Department, TPI</span>
                  </div>
                  {organizer.linkedin && (
                    <div className="flex justify-center mt-2">
                      <a 
                        href={organizer.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`${organizer.name}'s LinkedIn profile`}
                      >
                        <LinkedInIcon /> {/* Using the custom LinkedIn Icon component */}
                      </a>
                    </div>
                  )}
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