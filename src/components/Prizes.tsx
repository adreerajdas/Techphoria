import React from 'react';
import { motion, easeOut } from 'framer-motion';
import { TiltCard } from './TiltCard';
import { TrophyIcon } from './Icons';

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const Prizes = () => (
  <section id="prizes" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Rewards & Recognition
          </span>
        </h2>
        {/* UPDATED: Description Text */}
        <div className="text-xl text-white/70 max-w-2xl mx-auto space-y-2">
          <p className="font-bold text-cyan-400 text-2xl mb-4">Top & Winners will get Amazing Goodies.</p>
          <p>Tech Skills, Badges, and Prizes.</p>
          <p className="text-purple-400 font-medium italic">Participation Certificates for all</p>
        </div>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {[
          { 
            rank: '2nd', 
            prize: 'Runner-up', 
            color: 'from-gray-400 to-gray-600', 
            description: 'Amazing Goodies', 
            features: ['Official Badge', 'Tech Skills Recognition', 'Runner-up Certificate', 'Special Prize'] 
          },
          { 
            rank: '1st', 
            prize: 'Champion', 
            color: 'from-yellow-400 to-orange-500', 
            description: 'Grand Prize Package', 
            features: ['Winner Trophy', 'Exclusive Badges', 'Top Performer Goodies', 'Special Featured Certificate'], 
            featured: true 
          },
          { 
            rank: '3rd', 
            prize: '2nd Runner-up', 
            color: 'from-amber-600 to-amber-800', 
            description: 'Bronze Rewards', 
            features: ['Official Badge', 'Tech Skills Recognition', 'Achievement Certificate', 'Special Prize'] 
          },
        ].map((prize, index) => (
          <motion.div key={index} variants={cardVariants}>
            <TiltCard className={`relative h-full ${prize.featured ? 'md:transform md:scale-110 md:z-10' : ''}`}>
              <div className={`bg-gradient-to-br ${prize.color} p-1 rounded-2xl h-full transform hover:scale-105 transition-transform duration-300`}>
                <div className="bg-black rounded-xl p-8 h-full text-center flex flex-col">
                  <div className="text-5xl font-black text-white mb-2">{prize.rank}</div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">{prize.prize}</div>
                  <div className="text-white/70 mb-6 font-semibold">{prize.description}</div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {prize.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-white/80 text-sm flex items-center justify-center gap-2">
                        <span className="text-cyan-400">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-xs text-cyan-400/80 font-medium">Earn Skills & Badges</div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="inline-flex items-center space-x-3 bg-black/50 backdrop-blur-sm rounded-full px-8 py-4 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/10">
          <TrophyIcon />
          {/* UPDATED: Bottom Badge Text */}
          <span className="text-white font-semibold">
            <span className="text-cyan-400">Participation Certificates for all</span> • <span className="text-purple-400">Techphoria Badges</span>
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);