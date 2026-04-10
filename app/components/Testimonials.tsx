"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Alexandra is truly exceptional. Her knowledge of the Manhattan market is unmatched, and she guided us through every step of purchasing our Upper West Side home. Her finance background gave us confidence in the numbers, and her staging advice transformed our listing. We had multiple offers within the first week.",
    name: "Michael & Sarah T.",
    detail: "Upper West Side Buyers",
  },
  {
    text: "Working with Alexandra was a game-changer. She understood exactly what we were looking for and found us our dream townhouse. Her renovation experience was invaluable, and she negotiated a price that saved us over $200,000. We cannot recommend her highly enough.",
    name: "David & Jennifer L.",
    detail: "West Village Townhouse Purchase",
  },
  {
    text: "Alexandra sold our co-op in record time and at a premium price. Her marketing strategy was brilliant — the photography, staging, and digital presence she created attracted serious buyers immediately. She is professional, intuitive, and incredibly knowledgeable about NYC real estate.",
    name: "Robert K.",
    detail: "5th Avenue Co-op Seller",
  },
  {
    text: "As an investor, I needed an agent who understood the numbers. Alexandra's analytical approach and deep market knowledge helped me identify three investment properties that have already appreciated significantly. She's not just an agent — she's a trusted advisor.",
    name: "James W.",
    detail: "Manhattan Real Estate Investor",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent(
      (c) => (c - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4 text-center">
          Client Stories
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-12 text-center">
          What My Clients Say
        </h2>

        <div className="max-w-[700px] mx-auto">
          {/* Testimonial Content */}
          <div className="relative min-h-[280px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center px-4"
              >
                {/* Quote Mark */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gold/15 mx-auto mb-6"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-base md:text-lg leading-relaxed text-gray-500 italic mb-8">
                  {testimonials[current].text}
                </p>
                <p className="font-serif text-lg font-semibold text-navy">
                  {testimonials[current].name}
                </p>
                <p className="text-xs text-gray-400 tracking-[0.1em] uppercase mt-1">
                  {testimonials[current].detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-500 hover:border-navy hover:text-navy transition-all"
              aria-label="Previous testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                    i === current
                      ? "bg-gold border-gold"
                      : "border-gray-300 bg-transparent"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-500 hover:border-navy hover:text-navy transition-all"
              aria-label="Next testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
