import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useTypewriter } from "@/hooks/use-typewriter";

const StatCounter = ({ value, label, icon: Icon }: { value: string; label: string; icon: any }) => {
  // Detectar se é um valor especial (como "24/7") que não deve ser animado
  const isSpecialValue = value.includes("/");
  
  // Extrair número da string (ex: "500+" -> 500, "99.9%" -> 99.9)
  const numericPart = value.match(/^[0-9.]+/)?.[0] || "0";
  const numericValue = parseFloat(numericPart);
  const suffix = value.replace(numericPart, "");
  const isDecimal = value.includes(".") && !value.includes("/");
  
  const { count, countRef } = useCounterAnimation({
    end: numericValue,
    duration: 2500,
    startOnView: true,
  });

  const displayValue = isSpecialValue 
    ? value 
    : isDecimal 
      ? count.toFixed(1) + suffix 
      : count + suffix;

  return (
    <div ref={countRef} className="text-center group">
      <div className="relative inline-block mb-1 md:mb-2">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
        <div className="absolute -inset-2 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="font-display text-lg sm:text-xl md:text-3xl font-bold text-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-105">
        {displayValue}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
        {label}
      </div>
    </div>
  );
};

const Hero = () => {
  const { text: animatedWord } = useTypewriter({
    words: ["em Inovação", "em Automação", "no Futuro"],
    typingSpeed: 120,
    deletingSpeed: 80,
    delayBetweenWords: 2000,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern z-0" />

      {/* Floating Elements - Hidden on mobile for performance */}
      <div className="hidden md:block absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl animate-float" />
      <div className="hidden md:block absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="hidden md:block absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-primary/5 blur-lg animate-float" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Title */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-slide-up px-2">
            Conectando tecnologia,
            <br />
            transformando negócios.
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3 md:mb-4 animate-slide-up px-2"
            style={{ animationDelay: "0.2s" }}
          >
            Transformamos negócios com foco{" "}
            <span className="relative inline-block min-w-[120px] sm:min-w-[180px] text-left">
              <span className="text-foreground font-semibold text-primary">
                {animatedWord}
                <span className="animate-blink">|</span>
              </span>
            </span>
            .
          </p>
          <p
            className="text-xs sm:text-sm md:text-lg text-muted-foreground max-w-3xl pt-3 md:pt-5 mx-auto mb-6 md:mb-10 animate-slide-up px-4"
            style={{ animationDelay: "0.25s" }}
          >
            Automatizamos processos, otimizamos recursos e entregamos soluções
            personalizadas em inteligência artificial, análise de dados e
            desenvolvimento sob medida para impulsionar resultados reais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button asChild variant="hero" size="xl">
              <a href="#contact">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#services">Ver Serviços</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-8 md:mt-16 max-w-2xl mx-auto animate-fade-in px-2" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Cpu, value: "500+", label: "Projetos" },
              { icon: Shield, value: "99.9%", label: "Uptime" },
              { icon: Zap, value: "24/7", label: "Suporte" },
            ].map((stat, index) => (
              <StatCounter
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
