import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const titleLines = [
  ["Conectando", "tecnologia,"],
  ["transformando", "negócios."],
];

const Hero = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [slideProgress, setSlideProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const reveal = window.setTimeout(() => setIsRevealed(true), 240);
    return () => window.clearTimeout(reveal);
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateSlide = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const slideDistance = window.innerHeight * 0.34;
      const progress = Math.min(1, Math.max(0, -rect.top / slideDistance));
      setSlideProgress(progress);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateSlide);
    };

    updateSlide();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  let wordIndex = 0;

  return (
    <div ref={wrapperRef} className="relative h-[134svh]" id="home">
      <section
        className="sticky top-0 flex min-h-[100svh] items-center justify-center overflow-hidden bg-background/80 px-5 py-24 backdrop-blur-[1px] will-change-transform"
        style={{
          opacity: 1 - slideProgress * 0.18,
          transform: `translate3d(0, ${-slideProgress * 112}vh, 0)`,
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-foreground/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-foreground/10" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1
            className={`word-reveal font-display text-[clamp(2rem,5.6vw,5.4rem)] font-semibold leading-[1.04] tracking-normal text-foreground [hyphens:none] [overflow-wrap:normal] ${
              isRevealed ? "is-revealed" : ""
            }`}
          >
            {titleLines.map((line, lineIdx) => (
              <span key={lineIdx} className="block sm:whitespace-nowrap">
                {line.map((word, i) => {
                  const idx = wordIndex++;
                  return (
                    <span key={`${word}-${i}`}>
                      <span className="word-reveal__word">
                        <span
                          className="word-reveal__inner"
                          style={{ ["--word-index" as never]: idx }}
                        >
                          {word}
                        </span>
                      </span>
                      {i < line.length - 1 ? " " : ""}
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <p
            className={`reveal-up mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/55 md:text-lg ${
              isRevealed ? "is-revealed" : ""
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            Sistemas, automações e IA construídos sob medida para empresas que
            buscam operar com mais clareza, velocidade e inteligência.
          </p>
        </div>

        <div className="absolute inset-x-5 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-20 flex flex-col gap-3 sm:inset-x-8 sm:bottom-8 sm:flex-row sm:items-center sm:justify-between lg:inset-x-12">
          <a
            href="https://wa.me/5521974546156?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noreferrer"
            className="cta-primary"
          >
            <span>Solicitar orçamento</span>
            <ArrowUpRight className="cta-arrow h-4 w-4" strokeWidth={1.8} />
          </a>
          <a href="#services" className="cta-ghost">
            <span>Ver serviços</span>
            <ArrowUpRight className="cta-arrow h-4 w-4" strokeWidth={1.8} />
          </a>
        </div>

        <a href="#services" className="scroll-hint" aria-label="Rolar para baixo">
          <span className="scroll-hint__text">scroll</span>
          <span className="scroll-hint__line" />
        </a>
      </section>
    </div>
  );
};

export default Hero;
