import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const defaultItems = [
  "Inteligência Artificial",
  "Automação de processos",
  "Engenharia de dados",
  "SaaS sob medida",
  "Integrações via API",
  "Consultoria estratégica",
  "Bots inteligentes",
  "Dashboards e BI",
];

type Props = {
  items?: string[];
};

const MarqueeStrip = ({ items = defaultItems }: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const sequence = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let offset = 0;
    let halfWidth = 0;
    let lastScroll = window.scrollY;
    let lastTime = performance.now();
    let velocity = 0;
    let direction: 1 | -1 = -1;
    let frame = 0;

    const animate = () => {
      const now = performance.now();
      const dt = Math.max(16, now - lastTime);
      const current = window.scrollY;
      const delta = current - lastScroll;
      const instant = delta / dt;
      velocity += (instant - velocity) * 0.18;
      velocity *= 0.92;
      if (Math.abs(delta) > 0.4) {
        direction = delta > 0 ? -1 : 1;
      }

      if (halfWidth === 0) {
        halfWidth = track.scrollWidth / 2;
      }
      const half = halfWidth || 1;

      const baseSpeed = 0.6;
      const boost = Math.min(8, Math.abs(velocity) * 3);
      offset += (baseSpeed + boost) * direction;

      if (offset <= -half) offset += half;
      if (offset >= 0) offset -= half;

      track.style.transform = `translate3d(${offset}px, 0, 0)`;

      lastScroll = current;
      lastTime = now;
      frame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      halfWidth = track.scrollWidth / 2;
    };

    frame = requestAnimationFrame(animate);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="marquee" aria-hidden="true">
      <div ref={trackRef} className="marquee__track marquee__track--js">
        {sequence.map((item, index) => (
          <span key={`${item}-${index}`} className="marquee__item">
            <span>{item}</span>
            <ArrowUpRight className="marquee__icon" strokeWidth={1.6} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
