import { BadgeCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const principles = [
  "Automatizar o que trava a operação.",
  "Transformar dados em decisões simples.",
  "Construir soluções sob medida, sem complexidade desnecessária.",
  "Acompanhar cada etapa com proximidade e clareza.",
];

const About = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className={`section-reveal minimal-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="minimal-section__inner">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="section-reveal-item">
            <span className="minimal-kicker">Sobre</span>
            <h2 className="minimal-title">
              Tecnologia com direção, não distração.
            </h2>
          </div>

          <div className="section-reveal-item space-y-6" style={{ transitionDelay: "100ms" }}>
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
      </div>
    </section>
  );
};

export default About;
