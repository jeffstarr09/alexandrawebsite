const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#listings", label: "Properties" },
  { href: "#neighborhoods", label: "Neighborhoods" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="py-16 bg-navy text-white/70">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-16 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-semibold text-white mb-1">
              Alexandra Carter
            </p>
            <p className="text-xs tracking-[0.15em] uppercase text-gold mb-2">
              Licensed RE Salesperson
            </p>
            <p className="text-sm text-white/50">The Corcoran Group</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-white/40 mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:9048602098"
                className="text-white/70 hover:text-gold transition-colors"
              >
                904.860.2098
              </a>
              <a
                href="mailto:Alexandra.Carter@corcoran.com"
                className="text-white/70 hover:text-gold transition-colors"
              >
                Alexandra.Carter@corcoran.com
              </a>
              <p className="text-white/70 leading-relaxed mt-2">
                Westside Gallery Office
                <br />
                New York, NY
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center">
          <p className="text-xs text-white/40 mb-2">
            &copy; {new Date().getFullYear()} Alexandra Carter. All rights
            reserved. Licensed as Alexandra Carter.
          </p>
          <p className="text-[0.65rem] text-white/25 max-w-[700px] mx-auto leading-relaxed">
            All information furnished regarding property for sale, rental or
            financing is from sources deemed reliable, but no warranty or
            representation is made as to the accuracy thereof and same is
            submitted subject to errors, omissions, changes, or withdrawal
            without notice.
          </p>
        </div>
      </div>
    </footer>
  );
}
