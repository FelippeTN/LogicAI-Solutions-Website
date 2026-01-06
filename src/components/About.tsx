import { CheckCircle2, Users, Award, TrendingUp } from "lucide-react";

const features = [
  "Automatizamos processos e ampliamos eficiência",
  "Otimizamos recursos com análise orientada a dados",
  "Soluções personalizadas alinhadas ao seu negócio",
  "Entrega ágil, precisa e com inovação contínua",
  "Integrações completas entre plataformas e APIs",
  "Suporte próximo para cada etapa do projeto",
];

const stats = [
  { icon: Users, value: "Clientes", label: "Parcerias de longo prazo" },
  { icon: Award, value: "Projetos", label: "Soluções sob medida" },
  { icon: TrendingUp, value: "Resultados", label: "Foco em impacto real" },
];

const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden">
      {/* Background Glow - Hidden on mobile */}
      <div className="hidden md:block absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-3 md:px-4 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-3 md:mb-4">
              Sobre
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Soluções Inteligentes para Impulsionar o Seu Negócio
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg mb-3 md:mb-4 leading-relaxed">
              Na LogicAi Solutions, transformamos tecnologia em resultados reais.
              Automatizamos processos, otimizamos recursos e ampliamos a
              eficiência das empresas por meio de soluções inovadoras em
              inteligência artificial, análise de dados e desenvolvimento sob
              medida.
            </p>
            <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
              Nosso diferencial está na personalização. Compreendemos os
              desafios únicos de cada cliente e entregamos soluções tecnológicas
              alinhadas aos objetivos do seu negócio com agilidade, precisão e
              inovação.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start sm:items-center gap-2 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="text-foreground text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Card */}
            <div className="glass-card p-5 md:p-8 glow-border">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">
                Números que <span className="gradient-text">Impressionam</span>
              </h3>

              <div className="grid gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-display text-xl md:text-3xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground text-xs md:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 px-3 md:px-4 py-1 md:py-2 rounded-full bg-primary text-primary-foreground font-semibold text-xs md:text-sm animate-pulse-glow">
              #1 em Inovação
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
