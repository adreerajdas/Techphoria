"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion, Variants } from 'framer-motion';
import { AnimatedOrb, MovingLine, FloatingElement } from './AnimatedBackgrounds';
import { Bangers } from 'next/font/google';

const bangers = Bangers({
  subsets: ['latin'],
  weight: ['400'], 
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative font-sans min-h-screen flex items-start md:items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4 pt-40 md:pt-4"
    >
      
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.1), transparent 80%)`,
        }}
      />
      
      <style>
        {`
          @keyframes glitch-blink {
            0%, 95% { opacity: 1; }
            96% { opacity: 0.3; }
            97% { opacity: 1; }
            98% { opacity: 0.3; }
            100% { opacity: 1; }
          }

          @keyframes border-pulse {
            0%, 100% {
              box-shadow: 0 0 5px rgba(59, 130, 246, 0.4), 0 0 10px rgba(59, 130, 246, 0.2);
            }
            50% {
              box-shadow: 0 0 15px rgba(59, 130, 246, 0.8), 0 0 25px rgba(59, 130, 246, 0.4);
            }
          }
        `}
      </style>
      
      {/* Background animations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <AnimatedOrb delay={0} size={400} color="rgba(34, 211, 238, 0.3)" position={{ x: 10, y: 20 }} />
        <AnimatedOrb delay={2} size={300} color="rgba(168, 85, 247, 0.3)" position={{ x: 80, y: 60 }} />
        <AnimatedOrb delay={4} size={500} color="rgba(6, 182, 212, 0.2)" position={{ x: 60, y: 10 }} />
        <MovingLine delay={0} duration={8} />
        <MovingLine delay={1} duration={12} vertical />
        <MovingLine delay={2} duration={10} />
        <MovingLine delay={3} duration={15} vertical />
        <FloatingElement delay={0} duration={20} style={{ top: '20%', left: '10%', width: '80px', height: '80px' }} />
        <FloatingElement delay={5} duration={25} style={{ top: '60%', left: '80%', width: '120px', height: '120px' }} />
        <FloatingElement delay={10} duration={30} style={{ top: '80%', left: '20%', width: '60px', height: '60px' }} />
        <FloatingElement delay={15} duration={20} style={{ top: '30%', left: '70%', width: '100px', height: '100px' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particleFloat ${8 + Math.random() * 12}s ease-in-out ${Math.random() * 5}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-heading">Welcome To</h2>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-8xl lg:text-9xl tracking-tight"
        >
          <span 
            className={`${bangers.className} bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient`}
            style={{ animation: 'glitch-blink 5s infinite steps(1, end) 2s' }}
          >
            TECHPHORIA
          </span>
        </motion.h1>

        <motion.div variants={itemVariants}>
          <div className="text-base font-bold text-white -mt-3 md:-mt-4">Season <span className="text-cyan-400">2</span></div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-3xl mt-8">
          <TypeAnimation
            sequence={[
              'A 3-hour online coding competition where individual programmers test their skills, solve challenges, and prove their coding prowes. PRESENT BY',
              5000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-lg md:text-xl text-white/70 mx-auto leading-relaxed"
            style={{ minHeight: '84px' }}
          />
        </motion.div>
        
        <motion.div 
          variants={itemVariants} 
          className="flex justify-center items-center gap-x-4 md:gap-x-6 my-6"
        >
          {/* === FIRST LOGO WRAPPED IN A LINK HERE === */}
          <a href="https://www.techniqueedu.com/" target="_blank" rel="noopener noreferrer">
            <div className="relative w-20 h-20 rounded-full border-2 border-cyan-500/50 shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-300/40">
              <Image 
                src="/org/logo1.jpg" 
                alt="TPI Logo" 
                fill 
                sizes="80px"
                className="object-cover rounded-full" 
              />
            </div>
          </a>
          
          <div className="relative w-20 h-20 rounded-full border-2 border-cyan-500/50 shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-300/40">
            <Image 
              src="/org/logo2.jpg" 
              alt="Techphoria Logo" 
              fill 
              sizes="80px"
              className="object-cover rounded-full" 
            />
          </div>
          <div className="relative w-20 h-20 rounded-full border-2 border-cyan-500/50 shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-300/40">
            <Image 
              src="/org/logo3.jpg" 
              alt="CST Logo" 
              fill 
              sizes="80px"
              className="object-cover rounded-full" 
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="https://forms.gle/v58LUvhByfh46PxC8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-5 px-10 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          
          <a 
            href="#countdown" 
            className="
              relative inline-flex items-center font-bold py-5 px-10 rounded-full 
              transition-all duration-500 ease-in-out
              text-cyan-300 border-2 border-cyan-500/50 bg-transparent
              hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400
              hover:scale-105
              hover:animate-[border-pulse_1.5s_infinite_ease-in-out]
            "
          >
            Get Started
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};