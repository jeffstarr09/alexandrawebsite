"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "#1", label: "Agent, Westside Gallery Office" },
  { number: "Top 1%", label: "of Agents Nationwide" },
  { number: "14+", label: "Years of Experience" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&h=1080&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/70" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[800px] px-8">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[0.8rem] font-medium tracking-[0.35em] uppercase text-gold mb-6"
        >
          The Corcoran Group
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-wide leading-[1.1] mb-6"
        >
          Alexandra Carter
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-[60px] h-px bg-gold mx-auto mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg font-light tracking-wider text-white/85 mb-12"
        >
          Where Financial Strategy Meets New York Real Estate
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mb-12"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 md:gap-10">
              {i > 0 && (
                <div className="hidden md:block w-px h-10 bg-white/20" />
              )}
              {i > 0 && (
                <div className="md:hidden w-10 h-px bg-white/20" />
              )}
              <div className="text-center">
                <span className="block font-serif text-3xl font-semibold text-gold">
                  {stat.number}
                </span>
                <span className="block text-[0.7rem] tracking-[0.1em] uppercase text-white/70 mt-1">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#listings"
            className="px-8 py-4 border border-gold text-gold text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold hover:text-navy transition-all duration-400"
          >
            View Properties
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-gold text-navy text-xs font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-all duration-400"
          >
            Work With Alexandra
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.2em] uppercase text-white/50">
          Scroll
        </span>
        <div className="w-px h-10 bg-white/30 relative overflow-hidden">
          <div className="absolute top-[-100%] left-0 w-full h-full bg-gold animate-[scrollLine_2s_ease-in-out_infinite]" />
        </div>
      </motion.div>
    </section>
  );
}
