import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Available from "./components/Available";
import About from "./components/About";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";

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
    </>
  );
}

export default App;
