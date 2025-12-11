import { useEffect, useRef, useState } from "react";

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export const useCounterAnimation = ({
  end,
  duration = 2000,
  startOnView = true,
}: UseCounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView) {
      animateCounter();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            setIsVisible(true);
            hasAnimated.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [startOnView]);

  useEffect(() => {
    if (isVisible || !startOnView) {
      animateCounter();
    }
  }, [isVisible, startOnView]);

  const animateCounter = () => {
    const startTime = Date.now();
    const step = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  return { count, countRef };
};
