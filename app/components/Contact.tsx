"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-cream">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-navy mb-6 leading-tight">
              Let&apos;s Find Your
              <br />
              Perfect Home
            </h2>
            <p className="text-[0.95rem] text-gray-500 leading-relaxed mb-10">
              Whether you&apos;re buying, selling, or investing in Manhattan
              real estate, Alexandra&apos;s expertise and dedication will give
              you the edge you need.
            </p>

            <div className="flex flex-col gap-6 mb-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gold mt-0.5 flex-shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gray-400 mb-1">
                    Direct
                  </p>
                  <a
                    href="tel:9048602098"
                    className="text-[0.9rem] font-medium text-gray-800 hover:text-gold transition-colors"
                  >
                    904.860.2098
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gold mt-0.5 flex-shrink-0"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gray-400 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:Alexandra.Carter@corcoran.com"
                    className="text-[0.9rem] font-medium text-gray-800 hover:text-gold transition-colors"
                  >
                    Alexandra.Carter@corcoran.com
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start gap-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gold mt-0.5 flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-gray-400 mb-1">
                    Office
                  </p>
                  <p className="text-[0.9rem] text-gray-600 leading-relaxed">
                    The Corcoran Group
                    <br />
                    Westside Gallery Office
                    <br />
                    New York, NY
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gold hover:text-gold transition-all"
                aria-label="Instagram"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/alexandra-carter-67887886/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gold hover:text-gold transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://www.corcoran.com/real-estate-agents/detail/agent/alexandra-carter/22639"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gold hover:text-gold transition-all"
                aria-label="Corcoran Profile"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="w-full py-3 border-b border-gray-300 bg-transparent text-[0.9rem] text-gray-800 outline-none focus:border-gold transition-colors placeholder:text-gray-400"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full py-3 border-b border-gray-300 bg-transparent text-[0.9rem] text-gray-800 outline-none focus:border-gold transition-colors placeholder:text-gray-400"
              />
            </div>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full py-3 border-b border-gray-300 bg-transparent text-[0.9rem] text-gray-800 outline-none focus:border-gold transition-colors placeholder:text-gray-400"
              />
            </div>
            <div className="relative">
              <select
                name="interest"
                required
                defaultValue=""
                className="w-full py-3 border-b border-gray-300 bg-transparent text-[0.9rem] text-gray-800 outline-none focus:border-gold transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled className="text-gray-400">
                  I&apos;m Interested In
                </option>
                <option value="buying">Buying</option>
                <option value="selling">Selling</option>
                <option value="investing">Investing</option>
                <option value="renting">Renting</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Message"
                className="w-full py-3 border-b border-gray-300 bg-transparent text-[0.9rem] text-gray-800 outline-none focus:border-gold transition-colors resize-y min-h-[100px] placeholder:text-gray-400"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitted}
                className={`px-10 py-4 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-400 ${
                  submitted
                    ? "bg-gold text-white"
                    : "bg-navy text-white hover:bg-gold"
                }`}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
