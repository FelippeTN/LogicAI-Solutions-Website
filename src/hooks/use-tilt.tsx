import { useEffect, useRef } from "react";

type Options = {
  max?: number;
  scale?: number;
};

export const useTilt = <T extends HTMLElement>({ max = 6, scale = 1.01 }: Options = {}) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    let frame = 0;

    const handleMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (py - 0.5) * -max;
      const ry = (px - 0.5) * max;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
      });
    };

    const handleLeave = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
      });
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", handleLeave);
      cancelAnimationFrame(frame);
      element.style.transform = "";
    };
  }, [max, scale]);

  return ref;
};
