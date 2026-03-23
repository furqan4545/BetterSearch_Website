"use client";

import { useRef, useEffect } from "react";

interface Particle {
  originX: number;
  originY: number;
  x: number;
  y: number;
  r: number;
  g: number;
  b: number;
  a: number;
  size: number;
  vx: number;
  vy: number;
}

export function ParticleCanvas({
  imageSrc,
  className,
}: {
  imageSrc: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<{
    particles: Particle[];
    mouse: { x: number; y: number };
    formed: boolean;
    animId: number;
    initialized: boolean;
  }>({
    particles: [],
    mouse: { x: -9999, y: -9999 },
    formed: false,
    animId: 0,
    initialized: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const state = stateRef.current;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      if (state.initialized) return;
      state.initialized = true;

      const parent = canvas.parentElement!;
      const rect = parent.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height || rect.width;

      canvas.width = w;
      canvas.height = h;

      // Extract pixels
      const offscreen = document.createElement("canvas");
      offscreen.width = img.width;
      offscreen.height = img.height;
      const offCtx = offscreen.getContext("2d", { willReadFrequently: true })!;
      offCtx.drawImage(img, 0, 0);
      const imageData = offCtx.getImageData(0, 0, img.width, img.height);
      const pixels = imageData.data;

      // Center the image in the canvas
      const imgAspect = img.width / img.height;
      const canvasAspect = w / h;
      let drawW: number, drawH: number, offsetX: number, offsetY: number;

      if (imgAspect > canvasAspect) {
        drawW = w * 0.6;
        drawH = drawW / imgAspect;
      } else {
        drawH = h * 0.6;
        drawW = drawH * imgAspect;
      }
      offsetX = (w - drawW) / 2;
      offsetY = (h - drawH) / 2;

      const isMobile = w < 500;
      const gap = isMobile ? 5 : 3;
      const scaleX = drawW / img.width;
      const scaleY = drawH / img.height;

      const particles: Particle[] = [];

      for (let y = 0; y < img.height; y += gap) {
        for (let x = 0; x < img.width; x += gap) {
          const i = (y * img.width + x) * 4;
          const a = pixels[i + 3];
          if (a < 100) continue;

          const originX = x * scaleX + offsetX;
          const originY = y * scaleY + offsetY;

          const angle = Math.random() * Math.PI * 2;
          const distance = Math.max(w, h) * (0.5 + Math.random() * 0.8);

          particles.push({
            originX,
            originY,
            x: originX + Math.cos(angle) * distance,
            y: originY + Math.sin(angle) * distance,
            r: pixels[i],
            g: pixels[i + 1],
            b: pixels[i + 2],
            a: a / 255,
            size: isMobile ? 3 : 2.5,
            vx: 0,
            vy: 0,
          });
        }
      }

      state.particles = particles;

      setTimeout(() => {
        state.formed = true;
      }, 300);

      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const mouse = state.mouse;
        const formed = state.formed;
        const ps = state.particles;

        for (let i = 0; i < ps.length; i++) {
          const p = ps[i];

          if (formed) {
            p.vx += (p.originX - p.x) * 0.04;
            p.vy += (p.originY - p.y) * 0.04;
          }

          // Mouse repulsion
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const distSq = mdx * mdx + mdy * mdy;
          const repelRadiusSq = 8100; // ~90px

          if (distSq < repelRadiusSq && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (90 - dist) / 90;
            p.vx += (mdx / dist) * force * 3;
            p.vy += (mdy / dist) * force * 3;
          }

          p.vx *= 0.92;
          p.vy *= 0.92;
          p.x += p.vx;
          p.y += p.vy;

          ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.a * 0.8})`;
          ctx.fillRect(p.x, p.y, p.size, p.size);
        }

        state.animId = requestAnimationFrame(animate);
      };

      state.animId = requestAnimationFrame(animate);
    };

    // Mouse events on the canvas itself (for interactive hero bg)
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      state.mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      state.mouse = { x: -9999, y: -9999 };
    };

    // Listen on document so mouse works even through overlaid content
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(state.animId);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [imageSrc]);

  return (
    <div className={className}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
