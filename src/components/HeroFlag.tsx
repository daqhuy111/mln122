
import React from 'react';
import { motion } from 'motion/react';

export default function HeroFlag() {
  return (
    <div className="relative w-full h-64 md:h-96 flex items-center justify-center overflow-hidden bg-slate-950 rounded-2xl border border-white/5 shadow-2xl">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-red-600/20 to-transparent opacity-50" />
      
      {/* Animated Flag Canvas/SVG */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-64 h-44 md:w-96 md:h-64 bg-red-600 rounded-sm shadow-2xl flex items-center justify-center overflow-hidden"
      >
        {/* Wave Effect Overlay */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        />
        
        {/* The Star */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 512 512"
            className="w-24 h-24 md:w-40 md:h-40 text-yellow-400 fill-current drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]"
          >
            <path d="M256 37.3L324.3 175.7L476.7 197.8L366.4 305.4L392.4 457.1L256 385.4L119.6 457.1L145.6 305.4L35.3 197.8L187.7 175.7L256 37.3Z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
          animate={{
            y: [0, -100],
            x: [0, (i % 2 === 0 ? 50 : -50)],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: '10%',
          }}
        />
      ))}
    </div>
  );
}
