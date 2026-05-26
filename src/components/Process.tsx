import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    id: "01",
    title: "Descoberta",
    description:
      "Mergulhamos no seu contexto, mapeamos gargalos e definimos critérios objetivos de sucesso.",
  },
  {
    id: "02",
    title: "Estratégia",
    description:
      "Desenhamos a arquitetura, escolhemos o stack e priorizamos entregas com impacto real.",
  },
  {
    id: "03",
    title: "Construção",
    description:
      "Engenharia ágil com ciclos curtos, code review e demo a cada sprint para feedback contínuo.",
  },
  {
    id: "04",
    title: "Evolução",
    description:
      "Acompanhamento pós-entrega, observabilidade e melhorias baseadas em dados reais de uso.",
  },
];

const Process = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight * 0.4;
      const scrolled = window.innerHeight * 0.85 - rect.top;
      const raw = scrolled / total;
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const setRefs = (node: HTMLElement | null) => {
    ref.current = node;
    sectionRef.current = node;
  };

  return (
    <section
      ref={setRefs}
      id="process"
      className={`section-reveal minimal-section ${isVisible ? "is-visible" : ""}`}
    >
      <div className="minimal-section__inner">
        <div className="section-reveal-item minimal-section__header">
          <span className="minimal-kicker">Processo</span>
          <h2 className="minimal-title">Da ideia ao impacto, em quatro passos.</h2>
          <p className="minimal-copy">
            Um método enxuto, transparente e replicável que reduz risco e
            acelera o caminho até a primeira entrega.
          </p>
        </div>

        <div className="process">
          <div className="process__rail" aria-hidden="true">
            <div
              className="process__rail-fill"
              style={{ transform: `scaleY(${progress})` }}
            />
          </div>

          {steps.map((step, index) => {
            const stepProgress = Math.max(
              0,
              Math.min(1, progress * steps.length - index),
            );
            const isActive = stepProgress > 0.15;
            return (
              <article
                key={step.id}
                className={`section-reveal-item process__step ${isActive ? "is-active" : ""}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <span className="process__node">
                  <span className="process__node-inner" />
                </span>
                <div className="process__content">
                  <div className="process__head">
                    <span className="process__id">{step.id}</span>
                    <h3 className="process__title">{step.title}</h3>
                  </div>
                  <p className="process__copy">{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
