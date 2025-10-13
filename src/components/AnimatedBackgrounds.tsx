import React from 'react';

export const AnimatedOrb = ({ delay, size, color, position }: { delay: number; size: number; color: string; position: { x: number; y: number } }) => (
  <div
    className="absolute rounded-full animate-pulse"
    style={{
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      left: `${position.x}%`,
      top: `${position.y}%`,
      animationDelay: `${delay}s`,
      opacity: 0.1,
      filter: 'blur(20px)',
    }}
  />
);

export const MovingLine = ({ delay, duration, vertical = false }: { delay: number; duration: number; vertical?: boolean }) => (
  <div
    className={`absolute bg-gradient-to-r from-cyan-500/20 to-purple-500/20 ${vertical ? 'w-px h-32' : 'h-px w-32'}`}
    style={{
      animation: `move${vertical ? 'Vertical' : 'Horizontal'} ${duration}s ease-in-out ${delay}s infinite alternate`,
    }}
  />
);

export const FloatingElement = ({ delay, duration, style, className = "" }: { delay: number; duration: number; style: React.CSSProperties; className?: string }) => (
  <div
    className={`absolute rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm ${className}`}
    style={{
      animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
      ...style
    }}
  />
);
