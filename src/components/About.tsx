import { BadgeCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const principles = [
  "Automatizar o que trava a operação.",
  "Transformar dados em decisões simples.",
  "Construir soluções sob medida, sem complexidade desnecessária.",
  "Acompanhar cada etapa com proximidade e clareza.",
];

const stats = [
  { value: 40, suffix: "+", label: "Projetos entregues" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 12, suffix: "k", label: "Horas economizadas" },
  { value: 24, suffix: "/7", label: "Operação contínua" },
];

const StatItem = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const { count, countRef } = useCounterAnimation({ end: value, duration: 1800 });

  return (
    <div ref={countRef} className="stats__item">
      <span className="stats__value">
        {count}
        <span className="text-primary">{suffix}</span>
      </span>
      <span className="stats__label">{label}</span>
    </div>
  );
};

const About = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className={`section-reveal minimal-section ${isVisible ? "is-visible" : ""}`}
    >
      <span className="edge-number" aria-hidden="true">04</span>
      <span className="edge-section-label" aria-hidden="true">Quem somos</span>
      <div className="minimal-section__inner">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="section-reveal-item">
            <span className="minimal-kicker">Sobre / 04</span>
            <h2 className="minimal-title">
              Tecnologia com direção, não distração.
            </h2>
          </div>

          <div
            className="section-reveal-item space-y-6"
            style={{ transitionDelay: "100ms" }}
          >
            <p className="minimal-copy">
              A LogicAI Solutions cria sistemas, automações e soluções com IA
              para empresas que querem operar melhor. Entendemos o problema,
              desenhamos o fluxo e entregamos tecnologia que funciona no dia a
              dia.
            </p>
            <p className="minimal-copy">
              Nosso trabalho combina estratégia, desenvolvimento e proximidade.
              Cada solução nasce do objetivo do cliente, não de uma fórmula
              pronta.
            </p>

            <div className="minimal-checklist">
              {principles.map((item, index) => (
                <div
                  key={item}
                  className="section-reveal-item minimal-checklist__item"
                  style={{ transitionDelay: `${160 + index * 50}ms` }}
                >
                  <BadgeCheck className="h-4 w-4 shrink-0" strokeWidth={1.7} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="stats">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
