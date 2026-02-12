import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Schedule = () => {
  

  const instructions = [
    {
      icon: '📅',
      title: 'Competition Schedule',
      content: 'The competition will start on 07.11.2025 at 12 noon.'
    },
    {
      icon: '👥',
      title: 'Registration',
      content: 'Ensure you have completed registration before the competition starts. Only registered participants are eligible.'
    },
    {
      icon: '💻',
      title: 'Platform - Rounds',
      content: 'The competition will be conducted on Google Meet, Google Form, HackerRank Links on Website & Whatsapp Group'
    },
    {
      icon: '🔑',
      title: 'Accessing the Competition',
      content: 'Log in to your account on the competition platform and click the competition link to enter.'
    },
    {
      icon: '⏱️',
      title: 'Competition Duration',
      content: '90 minutes to complete all coding challenges. Manage your time effectively to attempt all challenges.'
    },
    {
      icon: '⚙️',
      title: 'Coding Languages & Tools',
      content: 'Supported languages: C, C++, Python, Java. Ensure you are familiar with the syntax and features.'
    },
    {
      icon: '🎯',
      title: 'Challenge Types',
      content: 'Challenges covering various difficulty levels (easy to advanced). Read problem statements carefully.'
    },
    {
      icon: '📤',
      title: 'Submission Guidelines',
      content: 'Select answers to solve problems. Submit before timeout - late submissions will not be considered.'
    },
    {
      icon: '📊',
      title: 'Evaluation Process',
      content: 'Responses evaluated manually by experts based on predefined test questions. Ensure answers handle different scenarios correctly.'
    },
    {
      icon: '💬',
      title: 'Communication',
      content: 'Any queries or issues during competition can be addressed through the chat feature on the website.'
    }
  ];

  

  interface InstructionCardProps {
    instruction: {
      icon: string;
      title: string;
      content: string;
    };
    index: number;
  }

  

  const InstructionCard: React.FC<InstructionCardProps> = ({ instruction, index }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`p-6 bg-gradient-to-br from-gray-900/80 to-black rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-700 ease-out group hover:scale-105
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex items-start space-x-4">
          <div className="text-2xl flex-shrink-0">{instruction.icon}</div>
          <div>
            <h4 className="text-lg font-bold text-white mb-2">{instruction.title}</h4>
            <p className="text-white/60 text-sm leading-relaxed">{instruction.content}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="schedule" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Competition Guidelines
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Participant guidelines, rules, notes and reminders for the competition.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                Competition Guidelines
              </span>
            </h3>
            <div className="grid gap-4">
              {instructions.map((instruction, index) => (
                <InstructionCard key={index} instruction={instruction} index={index} />
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-amber-900/20 to-red-900/20 rounded-xl border border-amber-500/20">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-amber-400 mr-2">💻</span>
                Technical Requirement
              </h4>
              <p className="text-white/60 text-sm">
                <strong>Note:</strong> Make sure you have a Desktop or Laptop computer because this is an Online Coding Contest. Mobile devices are not recommended for the competition.
              </p>
            </div>

            <div className="mt-4 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl border border-red-500/20">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-red-400 mr-2">⚠️</span>
                Critical Reminders
              </h4>
              <ul className="text-white/60 text-sm space-y-2">
                <li>• Ensure stable internet connection throughout the competition</li>
                <li>• Late submissions will NOT be considered for evaluation</li>
                <li>• Use the chat feature for any queries during competition</li>
                <li>• Familiarize yourself with your chosen programming language syntax</li>
                <li>• Read problem statements carefully before starting to code</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};