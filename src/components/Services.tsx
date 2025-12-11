import { Cloud, Workflow, BarChart3, Bot, Code2, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "SaaS (Software as a Service)",
    description:
      "Criamos e personalizamos plataformas na nuvem, entregando soluções escaláveis e acessíveis para o seu negócio.",
  },
  {
    icon: Workflow,
    title: "Automação de Processos",
    description:
      "Eliminamos tarefas repetitivas e aumentamos a produtividade com fluxos automatizados sob medida.",
  },
  {
    icon: BarChart3,
    title: "Análise e Extração de Dados",
    description:
      "Coletamos, limpamos e interpretamos dados para gerar insights estratégicos e decisões baseadas em dados.",
  },
  {
    icon: Bot,
    title: "Criação de Bots Inteligentes",
    description:
      "Desenvolvemos bots para atendimento automatizado, integrações e assistentes virtuais que funcionam 24/7.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento Web e APIs",
    description:
      "Construímos sites, painéis, sistemas personalizados e integrações entre plataformas com performance e segurança.",
  },
  {
    icon: Cpu,
    title: "Consultoria em IA",
    description:
      "Planejamos, arquitetamos e implementamos soluções de inteligência artificial alinhadas aos objetivos do seu negócio.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções inteligentes para impulsionar seu negócio com automação,
            dados, IA e desenvolvimento sob medida.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card p-8 hover-glow cursor-pointer transition-all duration-300 hover:border-primary/40 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                <span className="text-sm font-medium">Saiba mais</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
