"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const neighborhoods = [
  {
    name: "Upper West Side",
    description:
      "Classic pre-war elegance meets modern luxury along Central Park and Riverside Drive.",
    image:
      "https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=800&h=600&fit=crop",
    large: true,
  },
  {
    name: "Tribeca",
    description:
      "Manhattan's premier luxury neighborhood with converted lofts and celebrity allure.",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=400&fit=crop",
  },
  {
    name: "West Village",
    description:
      "Charming tree-lined streets, townhouses, and a vibrant cultural scene.",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
  },
  {
    name: "Midtown West",
    description:
      "Iconic skyline views and world-class amenities in the heart of Manhattan.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=400&fit=crop",
  },
  {
    name: "Harlem",
    description:
      "Rich cultural heritage with stunning brownstones and exciting new developments.",
    image:
      "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=600&h=400&fit=crop",
  },
];

export default function Neighborhoods() {
  return (
    <section id="neighborhoods" className="py-20 md:py-32 bg-cream">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4 text-center">
          Explore Manhattan
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-12 text-center">
          Neighborhood Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {neighborhoods.map((hood, i) => (
            <motion.div
              key={hood.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${
                hood.large
                  ? "md:col-span-2 h-[280px] md:h-[320px]"
                  : "h-[280px]"
              }`}
            >
              <Image
                src={hood.image}
                alt={hood.name}
                fill
                className="object-cover group-hover:scale-[1.08] transition-transform duration-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent group-hover:from-navy/90 transition-all duration-400 flex flex-col justify-end p-8">
                <h3 className="font-serif text-2xl font-medium text-white mb-2">
                  {hood.name}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                  {hood.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
