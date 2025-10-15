import React from 'react';
// Import the useInView hook from the library
import { useInView } from 'react-intersection-observer';

export const Schedule = () => {
  // Updated schedule array based on the provided information
  const schedule = [
    { time: '11:00 AM', title: 'Google Meet Link Shared', description: 'The link to join the event will be distributed.' },
    { time: '11:15 AM', title: 'Joining Time', description: 'Participants can start joining the Google Meet session.' },
    { time: '11:30 AM', title: 'Inauguration & Entry Closes', description: 'The welcome program begins. No entry is permitted after this time.' },
    { time: '11:45 AM', title: 'Instructions for Participants', description: 'Rules and guidelines for the competition will be explained.' },
    { time: '12:00 PM', title: 'Competition Begins', description: 'Round 1 (Coding Challenges) & Round 2 (MCQ Questions) start.' },
    { time: '01:00 PM', title: 'Competition Ends', description: 'All submissions are final and the competition concludes.' },
    { time: 'Later', title: 'Winner Announcement', description: 'Results will be announced after the evaluation process.' },
  ];

  // A small helper component for individual animated items
  // This keeps the main component cleaner
  interface ScheduleEvent {
    time: string;
    title: string;
    description: string;
  }
  interface ScheduleItemProps {
    event: ScheduleEvent;
    index: number;
  }
  const ScheduleItem: React.FC<ScheduleItemProps> = ({ event, index }) => {
    // The useInView hook gives us a ref and a boolean (inView)
    // triggerOnce: true ensures the animation only runs once
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1, // Trigger animation when 10% of the item is visible
    });

    return (
      <div
        ref={ref} // Attach the ref to this element
        // Conditionally apply classes based on the inView state
        className={`flex items-start space-x-6 p-6 bg-gradient-to-r from-gray-900/50 to-black rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-700 ease-out group hover:scale-105
          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        // Apply a staggered delay using an inline style
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

  return (
    <section id="schedule" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Event Schedule</span></h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">Follow the timeline for the competition</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {schedule.map((event, eventIndex) => (
              // Use the new animated component for each item
              <ScheduleItem key={eventIndex} event={event} index={eventIndex} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};