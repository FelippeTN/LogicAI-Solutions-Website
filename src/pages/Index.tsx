import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollImageSequence from "@/components/ScrollImageSequence";
import AuroraBackground from "@/components/AuroraBackground";
import MarqueeStrip from "@/components/MarqueeStrip";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      <ScrollImageSequence />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <MarqueeStrip />
        <Services />
        <Process />
        <Stack />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
