"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#listings", label: "Properties" },
  { href: "#neighborhoods", label: "Neighborhoods" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMobile = () => {
    setMobileOpen((o) => !o);
    document.body.style.overflow = mobileOpen ? "" : "hidden";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        scrolled
          ? "bg-navy/97 py-3 backdrop-blur-md shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex flex-col" onClick={handleLinkClick}>
          <span className="font-serif text-[1.4rem] font-semibold text-white tracking-wide">
            Alexandra Carter
          </span>
          <span className="text-[0.6rem] font-medium tracking-[0.2em] uppercase text-gold">
            Licensed RE Salesperson
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.8rem] font-medium tracking-[0.1em] uppercase text-white/85 hover:text-white relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-[0.8rem] font-medium tracking-[0.1em] uppercase text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMobile}
          className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none"
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-[25px] h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-[25px] h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[25px] h-[2px] bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-screen bg-navy flex flex-col items-center justify-center gap-8 transition-transform duration-400 shadow-[-5px_0_20px_rgba(0,0,0,0.3)] md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className="text-[0.8rem] font-medium tracking-[0.1em] uppercase text-white/85 hover:text-white"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={handleLinkClick}
          className="text-[0.8rem] font-medium tracking-[0.1em] uppercase text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-navy transition-all duration-300 mt-4"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
