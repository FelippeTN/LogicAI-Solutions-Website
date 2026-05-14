import {
  BotMessageSquare,
  Braces,
  CloudCog,
  LineChart,
  Network,
  Sparkles,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: CloudCog,
    title: "SaaS e plataformas",
    description:
      "Soluções em nuvem escaláveis, pensadas para operação, crescimento e uso contínuo.",
  },
  {
    icon: Network,
    title: "Automação de processos",
    description:
      "Fluxos sob medida para reduzir tarefas repetitivas e liberar tempo estratégico.",
  },
  {
    icon: LineChart,
    title: "Análise e dados",
    description:
      "Coleta, organização e leitura de dados para decisões mais claras e rápidas.",
  },
  {
    icon: BotMessageSquare,
    title: "Bots inteligentes",
    description:
      "Atendimento, integrações e assistentes virtuais disponíveis quando sua equipe precisa.",
  },
  {
    icon: Braces,
    title: "Web e APIs",
    description:
      "Sites, painéis, sistemas e integrações com foco em performance e segurança.",
  },
  {
    icon: Sparkles,
    title: "Consultoria em IA",
    description:
      "Planejamento e implementação de IA alinhados aos objetivos reais do negócio.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="services"
      className={`section-reveal minimal-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="minimal-section__inner">
        <div className="section-reveal-item minimal-section__header">
          <span className="minimal-kicker">Serviços</span>
          <h2 className="minimal-title">Soluções digitais sem excesso.</h2>
          <p className="minimal-copy">
            Automação, dados, inteligência artificial e desenvolvimento sob
            medida para deixar sua operação mais simples, rápida e inteligente.
          </p>
        </div>

        <div className="minimal-list">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="section-reveal-item minimal-list__item group"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <span className="minimal-list__number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <service.icon
                className="minimal-list__icon"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <div>
                <h3 className="minimal-list__title">{service.title}</h3>
                <p className="minimal-list__copy">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
