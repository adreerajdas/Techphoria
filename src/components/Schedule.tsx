import React from 'react';
import { useInView } from 'react-intersection-observer';

export const Schedule = () => {
  const schedule = [
    { time: '11:00 AM', title: 'Google Meet Link Shared', description: 'The link to join the event will be distributed.' },
    { time: '11:15 AM', title: 'Joining Time', description: 'Participants can start joining the Google Meet session.' },
    { time: '11:30 AM', title: 'Inauguration & Entry Closes', description: 'The welcome program begins. No entry is permitted after this time.' },
    { time: '11:45 AM', title: 'Instructions for Participants', description: 'Rules and guidelines for the competition will be explained.' },
    { time: '12:00 PM', title: 'Competition Begins', description: 'Round 1 (Coding Challenges) & Round 2 (MCQ Questions) start.' },
    { time: '01:00 PM', title: 'Competition Ends', description: 'All submissions are final and the competition concludes.' },
    { time: 'Later', title: 'Winner Announcement', description: 'Results will be announced after the evaluation process.' },
  ];

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
      title: 'Platform - Round 1',
      content: 'HackerRank (Click the "Get Started" button to begin) • 50 Coding Problems • 75 Total Marks'
    },
    {
      icon: '🔑',
      title: 'Accessing the Competition',
      content: 'Log in to your account on the competition platform and click the competition link to enter.'
    },
    {
      icon: '⏱️',
      title: 'Competition Duration',
      content: '60 minutes to complete all coding challenges. Manage your time effectively to attempt all challenges.'
    },
    {
      icon: '⚙️',
      title: 'Coding Languages & Tools',
      content: 'Supported languages: C, C++, Python, Java. Ensure you are familiar with the syntax and features.'
    },
    {
      icon: '🎯',
      title: 'Challenge Types',
      content: '50 coding challenges covering various difficulty levels (easy to advanced). Read problem statements carefully.'
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

  interface ScheduleEvent {
    time: string;
    title: string;
    description: string;
  }

  interface ScheduleItemProps {
    event: ScheduleEvent;
    index: number;
  }

  interface InstructionCardProps {
    instruction: {
      icon: string;
      title: string;
      content: string;
    };
    index: number;
  }

  const ScheduleItem: React.FC<ScheduleItemProps> = ({ event, index }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    return (
      <div
        ref={ref}
        className={`flex items-start space-x-6 p-6 bg-gradient-to-r from-gray-900/50 to-black rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-700 ease-out group hover:scale-105
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex-shrink-0 w-20 text-cyan-400 font-bold text-lg group-hover:scale-110 transition-transform duration-300">{event.time}</div>
        <div className="flex-grow">
          <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
          <p className="text-white/60">{event.description}</p>
        </div>
        <div className="flex-shrink-0 w-3 h-3 bg-cyan-400 rounded-full mt-2 group-hover:animate-pulse"></div>
      </div>
    );
  };

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Schedule & Instructions
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Complete competition timeline and guidelines for participants
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Schedule Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">
                Event Timeline
              </span>
            </h3>
            <div className="space-y-4">
              {schedule.map((event, eventIndex) => (
                <ScheduleItem key={eventIndex} event={event} index={eventIndex} />
              ))}
            </div>
          </div>

          {/* Instructions Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
                Competition Guidelines
              </span>
            </h3>
            <div className="grid gap-4">
              {instructions.map((instruction, index) => (
                <InstructionCard key={index} instruction={instruction} index={index} />
              ))}
            </div>

            {/* Important Notes */}
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-900/20 to-red-900/20 rounded-xl border border-amber-500/20">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                <span className="text-amber-400 mr-2">💻</span>
                Technical Requirement
              </h4>
              <p className="text-white/60 text-sm">
                <strong>Note:</strong> Make sure you have a Desktop or Laptop computer because this is an Online Coding Contest. Mobile devices are not recommended for the competition.
              </p>
            </div>

            {/* Additional Important Notes */}
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