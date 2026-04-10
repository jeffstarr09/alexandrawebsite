import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Listings from "./components/Listings";
import Neighborhoods from "./components/Neighborhoods";
import ParallaxQuote from "./components/ParallaxQuote";
import Testimonials from "./components/Testimonials";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Listings />
      <Neighborhoods />
      <ParallaxQuote />
      <Testimonials />
      <Awards />
      <Contact />
      <Footer />
    </main>
  );
}
