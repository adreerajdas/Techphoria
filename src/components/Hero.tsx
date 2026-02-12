"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion, Variants, AnimatePresence } from 'framer-motion';
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
      staggerChildren: 0.18,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 18, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false); // Track if user closed it

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Show popup after 10 seconds only if it wasn't already closed manually
    const timer = setTimeout(() => {
      if (!hasBeenClosed) {
        setShowPopup(true);
      }
    }, 10000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, [hasBeenClosed]);

  const handleClose = () => {
    setShowPopup(false);
    setHasBeenClosed(true); // Prevents it from popping up again in this session
  };

  return (
    <section 
      id="home" 
      className="relative font-sans min-h-screen flex items-start md:items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4 pt-28 md:pt-4"
    >
      {/* Mouse Follow Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 hidden md:block"
        style={{
          background: `radial-gradient(550px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.1), transparent 80%)`,
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
            0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.4), 0 0 10px rgba(59, 130, 246, 0.2); }
            50% { box-shadow: 0 0 12px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.4); }
          }
          @keyframes whatsapp-glow {
            0%, 100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.2); }
            50% { box-shadow: 0 0 16px rgba(34, 197, 94, 0.5); }
          }
          @keyframes text-glow-pulse {
            0%, 100% { text-shadow: 0 0 8px rgba(34, 211, 238, 0.6); }
            50% { text-shadow: 0 0 16px rgba(34, 211, 238, 0.9), 0 0 24px rgba(34, 211, 238, 0.4); }
          }
        `}
      </style>

      {/* Background animations */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <AnimatedOrb delay={0} size={360} color="rgba(34, 211, 238, 0.3)" position={{ x: 10, y: 20 }} />
        <AnimatedOrb delay={2} size={260} color="rgba(168, 85, 247, 0.3)" position={{ x: 80, y: 60 }} />
        <AnimatedOrb delay={4} size={450} color="rgba(6, 182, 212, 0.2)" position={{ x: 60, y: 10 }} />
        <MovingLine delay={0} duration={9} />
        <MovingLine delay={1} duration={13} vertical />
        <MovingLine delay={2} duration={11} />
        <MovingLine delay={3} duration={16} vertical />
        <FloatingElement delay={0} duration={22} style={{ top: '20%', left: '10%', width: '70px', height: '70px' }} />
        <FloatingElement delay={5} duration={28} style={{ top: '60%', left: '80%', width: '105px', height: '105px' }} />
        <FloatingElement delay={10} duration={32} style={{ top: '80%', left: '20%', width: '55px', height: '55px' }} />
        <FloatingElement delay={15} duration={22} style={{ top: '30%', left: '70%', width: '90px', height: '90px' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-1"
        >
          <span 
            className={`${bangers.className} bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-[length:200%_auto] animate-gradient`}
            style={{ animation: 'glitch-blink 5s infinite steps(1, end) 2s' }}
          >
            TECHPHORIA
          </span>
        </motion.h1>

        <motion.div variants={itemVariants}>
          <div className="text-sm font-bold text-white -mt-2 md:-mt-3">
            Session: <span className="text-cyan-400">2025-26</span>
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="mt-6 mb-3 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md"
        >
          <p className="text-lg md:text-xl font-black tracking-wider text-cyan-400 uppercase animate-[text-glow-pulse_2s_infinite]">
            Only For CST / IT / CSWT / Diploma Students  
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full max-w-3xl mt-3">
          <TypeAnimation
            sequence={[
              'State Level Online CODING Competition. Where individual programmers test their skills, solve challenges, and prove their coding prowess. PRESENTED BY',
              5000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            className="text-base md:text-lg text-white/70 mx-auto leading-relaxed"
            style={{ minHeight: '78px' }}
          />
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="flex justify-center items-center gap-x-4 md:gap-x-5 my-6"
        >
          {['logo1.jpg','logo2.png','logo3.jpg'].map((logo, i) => (
            <div key={i} className="relative w-16 h-16 rounded-full border-2 border-cyan-500/50 shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-300/40">
              <Image 
                src={`/org/${logo}`} 
                alt="Org Logo" 
                fill 
                sizes="64px"
                className="object-cover rounded-full" 
              />
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="https://forms.gle/zZaa7yJCTgzB7KH99"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="relative z-10">Register Now</span>
          </a>

          <a 
            href="https://chat.whatsapp.com/KfD6DtCylFWLq1DpsL0s4N?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-[#25D366] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#22c35e] animate-[whatsapp-glow_2s_infinite]"
          >
            <span>Join Group</span>
          </a>

          <a 
            href="#countdown" 
            className="relative inline-flex items-center font-bold py-4 px-8 rounded-full transition-all duration-500 ease-in-out text-cyan-300 border-2 border-cyan-500/50 bg-transparent hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 hover:animate-[border-pulse_1.5s_infinite_ease-in-out]"
          >
            Get Started
          </a>
        </motion.div>
      </motion.div>

      {/* Persistent Popup during session */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-6 right-6 z-[100] max-w-xs px-4 sm:px-0"
          >
            <div className="relative bg-gradient-to-br from-gray-900/95 to-black border border-cyan-500/40 p-5 rounded-2xl shadow-2xl backdrop-blur-xl">
              <button 
                onClick={handleClose}
                className="absolute -top-2 -right-2 bg-gray-800 text-white hover:text-cyan-400 border border-white/10 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              
              <div className="flex items-start space-x-3">
                <div className="bg-cyan-500/20 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Important Update!</h4>
                  <p className="text-white/60 text-xs mb-3">Check the contest schedule and guidelines.</p>
                  <a 
                    href="#register" 
                    onClick={handleClose}
                    className="inline-block text-xs font-bold text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                  >
                    Download Instruction & Schedule
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};