"use client";

import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { CountdownTimer } from '../components/CountdownTimer';
import About from '../components/About';
import { Tracks } from '../components/Tracks';
import { Schedule } from '../components/Schedule';
import { Prizes } from '../components/Prizes';
import { Organizers } from '../components/Organizers';
import { Register } from '../components/Register';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <style jsx global>{`
        /* global keyframes & small layout tweaks kept here */
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-20px) rotate(180deg)} }
        @keyframes gradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes moveHorizontal { 0%,100%{transform:translateX(-100px)} 50%{transform:translateX(100px)} }
        @keyframes moveVertical { 0%,100%{transform:translateY(-50px)} 50%{transform:translateY(50px)} }
        @keyframes slide { 0%{transform:translate(0,0)} 100%{transform:translate(-100px,-100px)} }
        @keyframes particleFloat { 0%,100%{transform:translate(0,0) scale(1);opacity:.3} 25%{transform:translate(10px,-20px) scale(1.2);opacity:.6} 50%{transform:translate(-10px,-40px) scale(.8);opacity:.8} 75%{transform:translate(-15px,-20px) scale(1.1);opacity:.5} }
        @keyframes spin { 0%{transform:rotate(0)} 100%{transform:rotate(360deg)} }
        @keyframes twinkle { 0%,100%{opacity:.2;transform:scale(1)} 50%{opacity:1;transform:scale(1.5)} }
        @keyframes pulse { 0%,100%{opacity:.1;transform:scale(1)} 50%{opacity:.3;transform:scale(1.2)} }
        .animate-gradient{animation:gradient 3s ease infinite;background-size:200% 200%}
        html{scroll-behavior:smooth}
        body{margin:0;padding:0;background:#000;color:#fff;font-family:Inter,sans-serif}
        ::-webkit-scrollbar{width:8px} ::-webkit-scrollbar-track{background:#000} ::-webkit-scrollbar-thumb{background:linear-gradient(to bottom,#06b6d4,#8b5cf6);border-radius:4px} ::-webkit-scrollbar-thumb:hover{background:linear-gradient(to bottom,#0891b2,#7c3aed)}
      `}</style>

      <Header />
      <main>
        <Hero />
        <CountdownTimer />
        <About />
        <Tracks />
        <Schedule />
        <Prizes />
        <Organizers />
        <Register />
      </main>
      <Footer />
    </div>
  );
}