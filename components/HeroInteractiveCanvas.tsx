"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

interface HeroInteractiveCanvasProps {
  onTelemetryUpdate?: (telemetry: { x: number; y: number; active: boolean }) => void;
}

export default function HeroInteractiveCanvas({ onTelemetryUpdate }: HeroInteractiveCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; lastX: number; lastY: number; active: boolean }>({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Initial autonomous floating particle nodes (LiDAR sensor cloud)
    const particleCount = Math.min(Math.floor(width / 26), 40);
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 1.5 + 0.8,
        baseAlpha: Math.random() * 0.4 + 0.2,
      });
    }

    const ripples: Ripple[] = [];
    let lastRippleTime = 0;
    let autonomousTimer = 0;

    const spawnRipple = (x: number, y: number, color = "rgba(56, 189, 248, 0.45)") => {
      ripples.push({
        x,
        y,
        radius: 4,
        maxRadius: Math.random() * 50 + 75,
        alpha: 0.8,
        color,
      });
    };

    const handlePointerMove = (e: PointerEvent | MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouseRef.current.x = clientX;
      mouseRef.current.y = clientY;
      mouseRef.current.active = true;

      if (onTelemetryUpdate) {
        onTelemetryUpdate({ x: Math.round(clientX), y: Math.round(clientY), active: true });
      }

      const now = performance.now();
      const dist = Math.hypot(clientX - mouseRef.current.lastX, clientY - mouseRef.current.lastY);
      if (now - lastRippleTime > 120 && dist > 14) {
        spawnRipple(clientX, clientY, "rgba(56, 189, 248, 0.5)");
        lastRippleTime = now;
        mouseRef.current.lastX = clientX;
        mouseRef.current.lastY = clientY;
      }
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      if (onTelemetryUpdate) {
        onTelemetryUpdate({ x: 0, y: 0, active: false });
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Autonomous gentle wave if no mouse moved
      autonomousTimer += 0.015;
      if (!mouseRef.current.active && autonomousTimer > 2.5) {
        const autoX = width * 0.5 + Math.sin(time * 0.8) * (width * 0.25);
        const autoY = height * 0.65 + Math.cos(time * 0.6) * (height * 0.15);
        spawnRipple(autoX, autoY, "rgba(99, 102, 241, 0.35)");
        autonomousTimer = 0;
      }

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      // 1. Render & Update Interactive Footstep/Motion Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 1.6;
        r.alpha *= 0.965;

        if (r.alpha <= 0.01 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        // Concentric outer ring
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color.replace(/[\d\.]+\)$/, r.alpha + ")");
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Inner glowing core
        const glowGradient = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, r.radius * 0.6);
        glowGradient.addColorStop(0, "rgba(255, 255, 255, " + (r.alpha * 0.5) + ")");
        glowGradient.addColorStop(0.5, r.color.replace(/[\d\.]+\)$/, (r.alpha * 0.3) + ")"));
        glowGradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Radiant light filaments
        const rayCount = 8;
        for (let j = 0; j < rayCount; j++) {
          const angle = (Math.PI * 2 / rayCount) * j + (r.radius * 0.02);
          const innerR = r.radius * 0.25;
          const outerR = r.radius * 0.85;
          ctx.beginPath();
          ctx.moveTo(r.x + Math.cos(angle) * innerR, r.y + Math.sin(angle) * innerR);
          ctx.lineTo(r.x + Math.cos(angle) * outerR, r.y + Math.sin(angle) * outerR);
          ctx.strokeStyle = "rgba(186, 230, 253, " + (r.alpha * 0.35) + ")";
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // 2. Interactive Cursor Glow Node (LiDAR Target Pointer)
      if (mouseRef.current.active) {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        // Volumetric projection beam apex indicator
        const projectorX = width * 0.5;
        const projectorY = 0;
        const beamGrad = ctx.createLinearGradient(projectorX, projectorY, mx, my);
        beamGrad.addColorStop(0, "rgba(255, 255, 255, 0.06)");
        beamGrad.addColorStop(0.7, "rgba(56, 189, 248, 0.02)");
        beamGrad.addColorStop(1, "rgba(56, 189, 248, 0)");

        ctx.beginPath();
        ctx.moveTo(projectorX - 80, 0);
        ctx.lineTo(projectorX + 80, 0);
        ctx.lineTo(mx + 60, my);
        ctx.lineTo(mx - 60, my);
        ctx.closePath();
        ctx.fillStyle = beamGrad;
        ctx.fill();

        // Cursor focal halo
        const curGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 120);
        curGrad.addColorStop(0, "rgba(186, 230, 253, 0.25)");
        curGrad.addColorStop(0.3, "rgba(56, 189, 248, 0.1)");
        curGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = curGrad;
        ctx.beginPath();
        ctx.arc(mx, my, 120, 0, Math.PI * 2);
        ctx.fill();

        // Crosshair reticle
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mx, my, 14, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(mx - 20, my);
        ctx.lineTo(mx - 16, my);
        ctx.moveTo(mx + 16, my);
        ctx.lineTo(mx + 20, my);
        ctx.moveTo(mx, my - 20);
        ctx.lineTo(mx, my - 16);
        ctx.moveTo(mx, my + 16);
        ctx.lineTo(mx, my + 20);
        ctx.stroke();
      }

      // 3. Ambient LiDAR Tracking Cloud & Constellation Mesh
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x -= (dx / dist) * force * 1.8;
            p.y -= (dy / dist) * force * 1.8;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(186, 230, 253, " + p.baseAlpha + ")";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "rgba(56, 189, 248, " + (0.15 * (1 - dist / 90)) + ")";
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      ctx.restore();
      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting;
        if (intersecting && !isVisible) {
          isVisible = true;
          animationFrameId = requestAnimationFrame(render);
        } else if (!intersecting && isVisible) {
          isVisible = false;
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isVisible = true;
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    render();

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [onTelemetryUpdate]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[5] pointer-events-none w-full h-full mix-blend-screen opacity-90"
    />
  );
}
