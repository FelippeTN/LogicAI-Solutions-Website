import { useEffect, useRef } from "react";

type Options = {
  strength?: number;
  radius?: number;
};

export const useMagnetic = <T extends HTMLElement>({
  strength = 0.35,
  radius = 120,
}: Options = {}) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    let frame = 0;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        frame = requestAnimationFrame(animate);
      } else {
        element.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }
    };

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const distance = Math.hypot(dx, dy);

      if (distance < radius + Math.max(rect.width, rect.height) / 2) {
        targetX = dx * strength;
        targetY = dy * strength;
      } else {
        targetX = 0;
        targetY = 0;
      }

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(animate);
    };

    const handleLeave = () => {
      targetX = 0;
      targetY = 0;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(frame);
      element.style.transform = "";
    };
  }, [strength, radius]);

  return ref;
};
