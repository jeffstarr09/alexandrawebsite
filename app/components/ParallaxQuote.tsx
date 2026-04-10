export default function ParallaxQuote() {
  return (
    <section
      className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center bg-fixed max-md:bg-scroll"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&h=800&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-navy/75" />
      <div className="relative z-10 text-center max-w-[800px] px-8 py-20">
        <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl font-normal italic text-white leading-relaxed">
          &ldquo;Her personal knowledge and over 14 years experience has given
          her clients the edge in identifying long-term investment opportunities
          and obtaining premium sales prices.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
