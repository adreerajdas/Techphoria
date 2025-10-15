import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// --- Helper Icon Components ---
const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const UsersIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.184-1.268-.5-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.184-1.268.5-1.857m0 0a5.002 5.002 0 019 0m0 0a5 5 0 00-9 0" />
    </svg>
);
const ClockIcon = () => (
    <svg className="w-8 h-8 mb-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const TrophyIcon = () => (
    <svg className="w-8 h-8 mb-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
    </svg>
);
const GiftIcon = () => (
    <svg className="w-8 h-8 mb-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
);

// --- NEW GlitchText Component ---
interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`glitch-container ${className}`}>
      {/* Base Text (Styled with gradient) */}
      <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
        {text}
      </span>
      {/* Glitch Layers (Absolute positioned duplicates) */}
      <span className="glitch-layer glitch-layer-1 absolute" aria-hidden="true">{text}</span>
      <span className="glitch-layer glitch-layer-2 absolute" aria-hidden="true">{text}</span>
    </div>
  );
};

// --- Photo Gallery Component ---
const PhotoGallery = ({ photos, onPhotoClick }: { photos: string[], onPhotoClick: (index: number) => void }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  // Mobile layout - simple grid
  const MobileGallery = () => (
    <div className="grid grid-cols-2 gap-4 md:hidden">
      {photos.map((src, index) => (
        <motion.button
          key={src}
          onClick={() => onPhotoClick(index)}
          className="aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={src}
            alt={`Event photo ${index + 1}`}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      ))}
    </div>
  );

  // Desktop layout - fanned cards
  const DesktopGallery = () => (
    <div className="hidden md:flex items-center justify-center h-96 relative">
      {photos.map((src, index) => {
        const isHovered = hoveredIndex === index;
        const distanceFromCenter = index - (photos.length - 1) / 2;
        
        return (
          <motion.button
            key={src}
            onClick={() => onPhotoClick(index)}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="absolute w-56 h-36 overflow-hidden rounded-xl shadow-2xl border-2 border-white/20 cursor-pointer focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-opacity-50"
            style={{
              originX: 0.5,
              originY: 0.5,
              zIndex: isHovered ? 20 : 10 - Math.abs(distanceFromCenter),
            }}
            animate={{
              rotate: isHovered ? 0 : distanceFromCenter * 8,
              x: isHovered ? distanceFromCenter * 60 : distanceFromCenter * 40,
              y: isHovered ? -20 : Math.abs(distanceFromCenter) * -5,
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(34, 211, 238, 0.25)",
              borderColor: "rgba(34, 211, 238, 0.5)",
            }}
          >
            <motion.img
              src={src}
              alt={`Event photo ${index + 1}`}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0"
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute bottom-3 left-3 right-3">
                <motion.div
                  className="text-white text-sm font-semibold bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-center"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
                  transition={{ delay: 0.1 }}
                >
                  View Photo {index + 1}
                </motion.div>
              </div>
            </motion.div>
          </motion.button>
        );
      })}
    </div>
  );

  return (
    <>
      <MobileGallery />
      <DesktopGallery />
    </>
  );
};

const About = () => {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const photos = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
  ];
  
  // Stats data now includes icons
  const stats = [
    { number: '3', label: 'Hours of Coding', Icon: ClockIcon },
    { number: 'Individual', label: 'Participation', Icon: UsersIcon },
    { number: '3', label: 'Challenge Levels', Icon: TrophyIcon },
    { number: 'Certificates', label: '& Swags', Icon: GiftIcon },
  ];

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // --- Event Handlers ---
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % photos.length));
  const prevImage = () => setLightboxIndex((prev) => (prev === null ? photos.length - 1 : (prev - 1 + photos.length) % photos.length));
  
  // --- Effects for Keyboard Navigation & Scroll Lock ---
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage, closeLightbox]);

  React.useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : 'auto';
  }, [lightboxIndex]);


  return (
    <section id="about" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          {/* Replaced H2 with GlitchText Component */}
          <GlitchText 
            text="About TechPhoria"
            className="text-4xl md:text-5xl font-extrabold mb-4"
          />
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* --- Left Column: Content & Stats --- */}
          <motion.div className="flex flex-col gap-8" variants={itemVariants}>
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10"
              whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(34, 211, 238, 0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Step into the Arena</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                TechPhoria S2 is an individual coding competition designed to push your limits. It&apos;s not just about writing code; it&apos;s about strategic thinking, efficiency, and showcasing your raw talent against the clock.
              </p>
              <div className="flex items-center space-x-6 pt-4 text-sm">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <CodeIcon />
                  <span className="font-semibold">Individual Competition</span>
                </div>
                <div className="flex items-center space-x-2 text-purple-400">
                  <UsersIcon />
                  <span className="font-semibold">Online Event</span>
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-900/50 p-6 rounded-xl border border-white/10 text-center flex flex-col items-center justify-center"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(34, 211, 238, 0.5)', backgroundColor: '#111827' }}
                  transition={{ duration: 0.3 }}
                  custom={i}
                  variants={itemVariants}
                >
                  <stat.Icon />
                  <div className="text-xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- Right Column: Photo Gallery --- */}
          <motion.div className="relative" variants={itemVariants}>
            <PhotoGallery photos={photos} onPhotoClick={openLightbox} />
          </motion.div>

        </motion.div>
      </div>

      {/* --- Lightbox Modal --- */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            {/* Main Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Main Image */}
              <motion.img
                key={lightboxIndex}
                src={photos[lightboxIndex]}
                alt={`Event photo ${lightboxIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-all bg-black/60 hover:bg-black/80 rounded-full p-3 backdrop-blur-sm"
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Prev Button */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all bg-black/60 hover:bg-black/80 rounded-full p-3 backdrop-blur-sm"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Next Button */}
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-all bg-black/60 hover:bg-black/80 rounded-full p-3 backdrop-blur-sm"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                {lightboxIndex + 1} / {photos.length}
              </div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform flex space-x-2 mt-4">
                {photos.map((src, index) => (
                  <button
                    key={src}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === lightboxIndex 
                        ? 'border-cyan-400 scale-110' 
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Glitch Effect CSS (using styled-jsx) --- */}
      <style jsx global>{`
        /* Keyframes for the glitch animation */
        @keyframes glitch {
          0% {
            text-shadow: 2px 0 0 red, -2px 0 0 blue;
            transform: translate(var(--glitch-x, 0), var(--glitch-y, 0));
          }
          25% {
            text-shadow: -2px 0 0 red, 2px 0 0 blue;
            transform: translate(var(--glitch-x-2, 0), var(--glitch-y-2, 0));
          }
          50% {
            text-shadow: 2px -2px 0 red, -2px 2px 0 blue;
            transform: translate(var(--glitch-x-3, 0), var(--glitch-y-3, 0));
          }
          75% {
            text-shadow: -2px 2px 0 red, 2px -2px 0 blue;
            transform: translate(var(--glitch-x-4, 0), var(--glitch-y-4, 0));
          }
          100% {
            text-shadow: 2px 0 0 red, -2px 0 0 blue;
            transform: translate(var(--glitch-x, 0), var(--glitch-y, 0));
          }
        }

        /* Keyframes for the intermittent, blocky distortion */
        @keyframes glitch-block {
          0% { clip-path: inset(1% 0 99% 0); }
          20% { clip-path: inset(50% 0 50% 0); }
          40% { clip-path: inset(10% 0 70% 0); }
          60% { clip-path: inset(60% 0 30% 0); }
          80% { clip-path: inset(20% 0 70% 0); }
          100% { clip-path: inset(1% 0 99% 0); }
        }

        /* Base class for the glitch container */
        .glitch-container {
          position: relative;
          display: inline-block; /* Crucial for controlling the width of the container */
          /* Default CSS variables (will be overridden by layers) */
          --glitch-x: 0;
          --glitch-y: 0;
          --glitch-x-2: 0;
          --glitch-y-2: 0;
          --glitch-x-3: 0;
          --glitch-y-3: 0;
          --glitch-x-4: 0;
          --glitch-y-4: 0;
        }
        
        /* The primary text span is relative and acts as the canvas */
        .glitch-container > span:first-child {
            display: inline-block;
        }

        /* Layer class for the text duplicates */
        .glitch-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          user-select: none;
          
          /* Apply the animation */
          animation: glitch 0.5s infinite alternate steps(1), glitch-block 0.5s infinite steps(1);
        }

        /* Specific offsets and colors for each layer */
        .glitch-layer-1 {
          color: #ff00ff; /* Magenta/Purple */
          opacity: 0.8;
          --glitch-x: -8px; 
          --glitch-y: -2px; 
          --glitch-x-2: 8px; 
          --glitch-y-2: 2px;
          --glitch-x-3: -4px; 
          --glitch-y-3: 4px;
          --glitch-x-4: 4px; 
          --glitch-y-4: -4px;
        }

        .glitch-layer-2 {
          color: #00ffff; /* Cyan */
          opacity: 0.8;
          --glitch-x: 8px; 
          --glitch-y: 2px; 
          --glitch-x-2: -8px; 
          --glitch-y-2: -2px;
          --glitch-x-3: 4px; 
          --glitch-y-3: -4px;
          --glitch-x-4: -4px; 
          --glitch-y-4: 4px;
          animation-delay: 0.1s; /* Slight delay to make the effect asynchronous */
        }
      `}</style>
    </section>
  );
};

export default About;