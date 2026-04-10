"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const credentials = [
  "WSJ Top 100 Agents in Manhattan",
  "Gold Council Member",
  "#1 Agent, Westside Gallery Office 2025",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face"
                alt="Alexandra Carter - Luxury Manhattan Real Estate Agent"
                width={600}
                height={800}
                className="w-full h-[500px] md:h-[600px] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
            <div className="hidden md:block absolute top-8 -left-8 w-full h-full border border-gold z-0" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">
              About Alexandra
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight text-navy mb-8">
              Your Trusted Partner in
              <br />
              Manhattan Real Estate
            </h2>

            <div className="space-y-5 mb-10">
              <p className="text-[0.95rem] text-gray-500 leading-relaxed">
                Strong interpersonal skills, an extensive background in finance,
                and a deep love of New York City all contribute to
                Alexandra&apos;s role as an invaluable resource for buyers,
                sellers, and investors throughout the five boroughs.
              </p>
              <p className="text-[0.95rem] text-gray-500 leading-relaxed">
                Alexandra brings a unique background to the real estate market.
                She graduated Magna Cum Laude in finance which allows her to
                bring an analytical approach to her market analysis, coupled with
                working in the fashion industry. Alexandra started coming to the
                city as a young adult as a model with Wilhelmina, which
                ultimately was how New York City became her home.
              </p>
              <p className="text-[0.95rem] text-gray-500 leading-relaxed">
                Having experience over some of the most competitive industries,
                she brings her knowledge of not only proper marketing and
                staging, but an understanding of the numbers that drive the
                market.
              </p>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-3">
              {credentials.map((cred) => (
                <div
                  key={cred}
                  className="flex items-center gap-3 text-[0.85rem] font-medium text-navy"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-gold flex-shrink-0"
                  >
                    <path d="M12 15l-3.5 2 .67-3.89L6 10.11l3.92-.57L12 6l2.08 3.54 3.92.57-2.83 2.76.66 3.89z" />
                  </svg>
                  {cred}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
