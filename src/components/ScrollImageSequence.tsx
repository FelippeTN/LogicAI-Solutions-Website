import { useEffect, useRef, useState } from "react";

const frameModules = import.meta.glob(
  "/src/assets/images-sequence/ezgif-frame-*.jpg",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

const frameUrls = Object.entries(frameModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

const TOTAL_FRAMES = frameUrls.length;

const ScrollImageSequence = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedSetRef = useRef<Set<number>>(new Set());
  const currentFrameRef = useRef<number>(-1);
  const targetFrameRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  const findNearestLoaded = (target: number): number => {
    if (loadedSetRef.current.has(target)) return target;
    for (let i = 1; i < TOTAL_FRAMES; i++) {
      const lower = target - i;
      const upper = target + i;
      if (lower >= 0 && loadedSetRef.current.has(lower)) return lower;
      if (upper < TOTAL_FRAMES && loadedSetRef.current.has(upper)) return upper;
    }
    return -1;
  };

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const actualIndex = findNearestLoaded(frameIndex);
    if (actualIndex < 0) return;

    const img = imagesRef.current[actualIndex];
    if (!img || !img.complete || !img.naturalWidth) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth: number;
    let drawHeight: number;
    let dx: number;
    let dy: number;

    if (imgRatio > canvasRatio) {
      drawHeight = height;
      drawWidth = height * imgRatio;
      dx = (width - drawWidth) / 2;
      dy = 0;
    } else {
      drawWidth = width;
      drawHeight = width / imgRatio;
      dx = 0;
      dy = (height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
    currentFrameRef.current = frameIndex;
  };

  useEffect(() => {
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    let loadedCount = 0;

    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.decoding = "async";
      img.src = url;
      img.onload = () => {
        loadedSetRef.current.add(index);
        loadedCount += 1;
        setProgress(loadedCount / TOTAL_FRAMES);
        if (loadedCount === 1 || loadedCount === TOTAL_FRAMES) {
          setReady(true);
        }
        if (Math.abs(index - targetFrameRef.current) <= 3) {
          renderFrame(targetFrameRef.current);
        }
      };
      images[index] = img;
    });

    imagesRef.current = images;

    const computeTarget = () => {
      const scrollTop = window.scrollY || window.pageYOffset || 0;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
      const clamped = Math.max(0, Math.min(1, ratio));
      targetFrameRef.current = Math.round(clamped * (TOTAL_FRAMES - 1));
    };

    const tick = () => {
      if (currentFrameRef.current !== targetFrameRef.current) {
        renderFrame(targetFrameRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleResize = () => {
      const frame = currentFrameRef.current >= 0 ? currentFrameRef.current : 0;
      renderFrame(frame);
    };

    window.addEventListener("scroll", computeTarget, { passive: true });
    window.addEventListener("resize", handleResize);
    computeTarget();
    tick();

    return () => {
      window.removeEventListener("scroll", computeTarget);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    >
      <canvas
        ref={canvasRef}
        className={`h-full w-full transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        style={{ filter: "saturate(0.45) brightness(0.55) contrast(1.05)" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      {progress < 1 && (
        <div className="absolute bottom-0 left-0 h-px w-full bg-primary/20">
          <div
            className="h-full bg-primary transition-[width] duration-200"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollImageSequence;
