"use client";

import { useRef, useEffect, useState } from "react";
import { Sparkles, Layers } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  decay: number;
}

export default function InteractiveFloorCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeTheme, setActiveTheme] = useState<"cosmic" | "cyan" | "gold">("cosmic");

  const themes = {
    cosmic: ["#a855f7", "#c084fc", "#e879f9", "#818cf8"],
    cyan: ["#06b6d4", "#22d3ee", "#38bdf8", "#60a5fa"],
    gold: ["#f59e0b", "#fbbf24", "#f43f5e", "#ec4899"],
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationFrameId) {
          render();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight || 420;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    const colors = themes[activeTheme];

    const addParticle = (x: number, y: number) => {
      if (!isVisible || particles.length > 80) return; // Cap max active particles for smooth 60fps
      for (let i = 0; i < 3; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5,
          radius: Math.random() * 5 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: Math.random() * 0.025 + 0.02,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      addParticle(x, y);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;
        addParticle(x, y);
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });

    const render = () => {
      if (!isVisible) {
        animationFrameId = 0;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw faint grid projection lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update & render particles (Zero ctx.shadowBlur for max FPS)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [activeTheme]);

  return (
    <div className="relative w-full h-[420px] rounded-3xl overflow-hidden glass-panel border-white/10 bg-black/80 shadow-2xl group transform-gpu">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-black/10 blur-[80px] pointer-events-none rounded-full" />

      {/* Live Canvas Surface */}
      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair relative z-10" />

      {/* Top Banner Control Overlay */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-white/20 bg-black/60 text-neutral-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-neutral-400 animate-pulse" />
          <span>INTERACTIVE PROJECTION SIMULATOR</span>
        </div>

        {/* Theme Selectors */}
        <div className="flex items-center gap-2 glass-panel p-1 rounded-full border-white/15 bg-black/60 backdrop-blur-md">
          <button
            onClick={() => setActiveTheme("cosmic")}
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
              activeTheme === "cosmic" ? "bg-black text-white shadow-md" : "text-gray-400 hover:text-white"
            }`}
          >
            Purple Nebula
          </button>
          <button
            onClick={() => setActiveTheme("cyan")}
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
              activeTheme === "cyan" ? "bg-cyan-500 text-white shadow-md" : "text-gray-400 hover:text-white"
            }`}
          >
            Cyber Cyan
          </button>
          <button
            onClick={() => setActiveTheme("gold")}
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
              activeTheme === "gold" ? "bg-amber-500 text-white shadow-md" : "text-gray-400 hover:text-white"
            }`}
          >
            Solar Gold
          </button>
        </div>
      </div>

      {/* Bottom Hint Overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between text-xs text-gray-400 pointer-events-none px-2">
        <span className="flex items-center gap-1.5 text-neutral-300 font-medium bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10">
          <Layers className="w-3.5 h-3.5 text-neutral-400" />
          Hover mouse or swipe touch screen over canvas surface to simulate optical tracking
        </span>
      </div>
    </div>
  );
}
