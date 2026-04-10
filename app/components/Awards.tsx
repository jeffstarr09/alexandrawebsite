"use client";

import { motion } from "framer-motion";

const awards = [
  {
    title: "Top 1% Nationwide",
    description: "Ranked in the top 1% of agents across the United States",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: "#1 Agent",
    description: "Westside Gallery Office, 2025",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 7 7 7 7" />
        <path d="M18 9h1.5a2.5 2.5 0 000-5C17 4 17 7 17 7" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0012 0V2z" />
      </svg>
    ),
  },
  {
    title: "WSJ Top 100",
    description:
      "Wall Street Journal's Top 100 Agents in Manhattan for Individual Volume",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Gold Council",
    description: "Recognized among the elite tier of Corcoran agents",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function Awards() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-8"
            >
              <div className="text-gold flex justify-center mb-6">
                {award.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-2">
                {award.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
