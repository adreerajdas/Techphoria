import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon } from './Icons'; // Assuming CalendarIcon is defined elsewhere

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Intersection Observer hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only happen once
    threshold: 0.1,    // Trigger animation when 10% of the component is visible
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-07T11:00:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div 
        className="bg-black/30 backdrop-blur-sm rounded-lg p-3 min-w-[60px] 
                   border border-cyan-500/30 transition-all duration-300 ease-in-out 
                   hover:scale-105 hover:border-cyan-400 cursor-pointer"
      >
        <div className="text-2xl font-bold text-cyan-400">{value.toString().padStart(2, '0')}</div>
      </div>
      <div className="text-xs text-white/60 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );

  return (
    <section 
      id="countdown"
      ref={ref} // Attach the ref here
      className="py-16 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-8">
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 transition-all duration-700 ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* UPDATED: "Season 2" is now red with a matching red glow */}
            <span 
              className="text-red-500"
              style={{
                // Red glow to match the text color
                textShadow: '0 0 10px rgba(239, 68, 68, 0.7), 0 0 20px rgba(239, 68, 68, 0.4)' 
              }}
            >
              Season 2
            </span>
            {/* The rest of the title keeps the original gradient */}
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400"
              style={{
                // Subtle cyan glow to match the gradient and theme
                textShadow: '0 0 10px rgba(52, 211, 235, 0.7), 0 0 20px rgba(52, 211, 235, 0.4)' 
              }}
            >
              {' '}Competition Starts In
            </span>
          </h2>
          <p className={`text-white/70 max-w-2xl mx-auto transition-all duration-700 ease-in-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Mark your calendars! The coding battle begins on November 7, 2025 at 11:00 AM
          </p>
        </div>
        
        <div className={`flex justify-center space-x-4 mb-8 transition-all duration-700 ease-in-out delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
        
        <div className={`text-center transition-all duration-700 ease-in-out delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/30">
            <CalendarIcon />
            <span className="text-cyan-400 font-semibold">November 7, 2025 | 11:00 AM - 2:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};