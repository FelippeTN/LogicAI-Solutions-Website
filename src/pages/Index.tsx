import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollImageSequence from "@/components/ScrollImageSequence";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ScrollImageSequence />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
