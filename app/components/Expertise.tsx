"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Market Analysis",
    description:
      "Leveraging her Magna Cum Laude finance degree to bring an analytical, data-driven approach to every transaction.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Townhouse & Co-op",
    description:
      "Personal experience as a townhouse owner, 5th Avenue Co-op owner, and renovator of multiple NYC homes.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "New Developments",
    description:
      "In-depth knowledge of condominiums and new developments throughout Manhattan and the five boroughs.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Marketing & Staging",
    description:
      "Fashion industry experience combined with real estate expertise for impeccable property presentation.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
];

export default function Expertise() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center p-10 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
            >
              <div className="text-gold flex justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="font-serif text-lg font-medium text-navy mb-4">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
