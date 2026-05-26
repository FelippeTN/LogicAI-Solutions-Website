import { useRef } from "react";
import {
  ArrowUpRight,
  BotMessageSquare,
  Braces,
  CloudCog,
  LineChart,
  Network,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  size?: "wide" | "narrow" | "default";
};

const services: Service[] = [
  {
    icon: CloudCog,
    title: "SaaS e plataformas",
    description:
      "Soluções em nuvem escaláveis, pensadas para operação, crescimento e uso contínuo.",
    size: "wide",
  },
  {
    icon: Sparkles,
    title: "Consultoria em IA",
    description:
      "Planejamento e implementação de IA alinhados aos objetivos reais do negócio.",
    size: "narrow",
  },
  {
    icon: Network,
    title: "Automação de processos",
    description:
      "Fluxos sob medida para reduzir tarefas repetitivas e liberar tempo estratégico.",
    size: "narrow",
  },
  {
    icon: LineChart,
    title: "Análise e dados",
    description:
      "Coleta, organização e leitura de dados para decisões mais claras e rápidas.",
    size: "wide",
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
];

const BentoCell = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => {
  const cellRef = useRef<HTMLElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cellRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  const sizeClass =
    service.size === "wide"
      ? "bento__cell--wide"
      : service.size === "narrow"
        ? "bento__cell--narrow"
        : "";

  const Icon = service.icon;

  return (
    <article
      ref={cellRef}
      onMouseMove={handleMove}
      className={`section-reveal-item bento__cell ${sizeClass}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <ArrowUpRight className="bento__arrow" strokeWidth={1.5} />
      <div className="bento__inner">
        <div className="bento__top">
          <span className="bento__index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="bento__icon-wrap">
            <Icon className="bento__icon" strokeWidth={1.5} aria-hidden="true" />
          </span>
        </div>
        <div>
          <h3 className="bento__title">{service.title}</h3>
          <p className="bento__copy">{service.description}</p>
        </div>
      </div>
    </article>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="services"
      className={`section-reveal minimal-section ${isVisible ? "is-visible" : ""}`}
    >
      <span className="edge-number" aria-hidden="true">01</span>
      <span className="edge-section-label" aria-hidden="true">Capacidades</span>
      <div className="minimal-section__inner">
        <div className="section-reveal-item minimal-section__header">
          <span className="minimal-kicker">Serviços / 01</span>
          <div>
            <h2 className="minimal-title">Soluções digitais sem excesso.</h2>
            <p className="minimal-copy">
              Automação, dados, inteligência artificial e desenvolvimento sob
              medida para deixar sua operação mais simples, rápida e inteligente.
            </p>
          </div>
        </div>

        <div className="bento">
          {services.map((service, index) => (
            <BentoCell key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
