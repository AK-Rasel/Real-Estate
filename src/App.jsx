import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Available from "./components/Available";
import About from "./components/About";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import TeamSection from "./components/TeamSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Available />
      <About />
      <CTA />
      <FAQ />
      <TeamSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
