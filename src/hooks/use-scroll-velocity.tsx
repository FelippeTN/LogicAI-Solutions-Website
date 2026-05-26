import { useEffect, useRef } from "react";

type Callback = (velocity: number, direction: 1 | -1) => void;

export const useScrollVelocity = (onChange: Callback) => {
  const callbackRef = useRef(onChange);
  callbackRef.current = onChange;

  useEffect(() => {
    let lastScroll = window.scrollY;
    let lastTime = performance.now();
    let velocity = 0;
    let direction: 1 | -1 = 1;
    let frame = 0;

    const tick = () => {
      const now = performance.now();
      const dt = Math.max(16, now - lastTime);
      const current = window.scrollY;
      const delta = current - lastScroll;
      const instant = delta / dt;

      velocity += (instant - velocity) * 0.15;
      if (Math.abs(delta) > 0.5) {
        direction = delta > 0 ? 1 : -1;
      }
      velocity *= 0.92;

      callbackRef.current(velocity, direction);

      lastScroll = current;
      lastTime = now;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);
};
