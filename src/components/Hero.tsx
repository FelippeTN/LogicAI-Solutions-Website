import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [slideProgress, setSlideProgress] = useState(0);

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
          <h1 className="font-display text-[clamp(2rem,5.6vw,5.4rem)] font-semibold leading-[1.04] tracking-normal text-foreground [hyphens:none] [overflow-wrap:normal]">
            <span className="block sm:whitespace-nowrap">
              Conectando tecnologia,
            </span>
            <span className="block sm:whitespace-nowrap">
              transformando negócios.
            </span>
          </h1>
        </div>

        <div className="absolute inset-x-5 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-20 flex flex-col gap-3 sm:inset-x-8 sm:bottom-8 sm:flex-row sm:items-center sm:justify-between lg:inset-x-12">
          <a
            href="https://wa.me/5521974546156?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noreferrer"
            className="minimal-fill-link"
          >
            <span>Solicitar orçamento</span>
          </a>
          <a href="#services" className="minimal-edge-link">
            Ver serviços
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
