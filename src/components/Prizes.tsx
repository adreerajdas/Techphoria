import React from 'react';
import { motion, easeOut } from 'framer-motion'; // Import motion and easeOut
import { TiltCard } from './TiltCard';
import { TrophyIcon } from './Icons';

// Animation variants for the container to stagger children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

// Animation variants for each card
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start invisible and 50px down
  visible: {
    opacity: 1,
    y: 0, // End visible and at its original position
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
        <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Rewards & Recognition</span></h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">Beyond the glory, exciting prizes await. Top performers get featured, with special surprises and much more for the winners!</p>
      </motion.div>

      {/* Use motion.div for the grid container and apply variants */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the container is visible
      >
        {[
          // Updated Prize Information (Swags removed)
          { rank: '2nd', prize: 'Runner-up', color: 'from-gray-400 to-gray-600', description: 'Runner-up Package', features: ['Certificate', 'Featured on Website', 'Surprise Gift'] },
          { rank: '1st', prize: 'Champion', color: 'from-yellow-400 to-orange-500', description: 'Champion\'s Bounty', features: ['Winner Certificate', 'Champion Trophy', 'Featured on Website', 'Surprise Gift'], featured: true },
          { rank: '3rd', prize: '2nd Runner-up', color: 'from-amber-600 to-amber-800', description: 'Bronze Package', features: ['Certificate', 'Featured on Website', 'Surprise Gift'] },
        ].map((prize, index) => (
          // Wrap each card in a motion.div and apply its variants
          <motion.div key={index} variants={cardVariants}>
            <TiltCard className={`relative ${prize.featured ? 'md:transform md:scale-110 md:z-10' : ''}`}>
              <div className={`bg-gradient-to-br ${prize.color} p-1 rounded-2xl h-full transform hover:scale-105 transition-transform duration-300`}>
                <div className="bg-black rounded-xl p-8 h-full text-center">
                  <div className="text-5xl font-black text-white mb-2">{prize.rank}</div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">{prize.prize}</div>
                  <div className="text-white/70 mb-6">{prize.description}</div>
                  <ul className="space-y-2 mb-6">{prize.features.map((feature, featureIndex) => (<li key={featureIndex} className="text-white/80 text-sm">✓ {feature}</li>))}</ul>
                  <div className="text-xs text-white/50">All participants receive a certificate</div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-16" // Added more margin-top for better spacing
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <div className="inline-flex items-center space-x-2 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
          <TrophyIcon />
          <span className="text-cyan-400 font-semibold">Participation Certificates for All • Surprises for Top Coders</span>
        </div>
      </motion.div>
    </div>
  </section>
);