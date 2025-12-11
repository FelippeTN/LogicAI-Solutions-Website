import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Shield, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
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

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-accent/10 blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-primary/5 blur-lg animate-float" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Conectando tecnologia,
            <br />
            transformando negócios.
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transformamos negócios com foco em <span className="text-foreground font-semibold">Inovação</span>,
            <span className="text-foreground font-semibold"> Automação</span> e
            <span className="text-foreground font-semibold"> Futuro</span>.
          </p>
          <p
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-up"
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
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Cpu, value: "500+", label: "Projetos" },
              { icon: Shield, value: "99.9%", label: "Uptime" },
              { icon: Zap, value: "24/7", label: "Suporte" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
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
