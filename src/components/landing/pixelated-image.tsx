"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export function PixelatedImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const animRef = useRef<number>(0);
  const pixelSizeRef = useRef(20);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      imgRef.current = img;
      setLoaded(true);
    };
  }, [src]);

  useEffect(() => {
    if (!loaded || !canvasRef.current || !imgRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d")!;
    const img = imgRef.current;

    const parent = canvas.parentElement!;
    const rect = parent.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = rect.width;
    const ratio = img.width / img.height;
    const cssH = cssW / ratio;

    // Set canvas to full retina resolution
    canvas.width = cssW * dpr;
    canvas.height = cssH * dpr;
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;

    const w = canvas.width;
    const h = canvas.height;

    const targetPixelSize = isHovered ? 1 : 16;

    const animate = () => {
      const current = pixelSizeRef.current;
      const diff = targetPixelSize - current;

      if (Math.abs(diff) < 0.3) {
        pixelSizeRef.current = targetPixelSize;
      } else {
        pixelSizeRef.current += diff * 0.15;
      }

      const ps = Math.max(1, Math.round(pixelSizeRef.current));

      ctx.clearRect(0, 0, w, h);

      if (ps <= 1) {
        // Full quality — draw image directly at retina res
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, w, h);
      } else {
        // Pixelated — draw small then scale up
        ctx.imageSmoothingEnabled = false;

        const smallW = Math.max(1, Math.floor(w / ps));
        const smallH = Math.max(1, Math.floor(h / ps));

        ctx.drawImage(img, 0, 0, smallW, smallH);
        ctx.drawImage(canvas, 0, 0, smallW, smallH, 0, 0, w, h);

        // Slight dark overlay when pixelated
        if (ps > 2) {
          ctx.fillStyle = `rgba(0,0,0,${Math.min(0.25, (ps - 1) * 0.015)})`;
          ctx.fillRect(0, 0, w, h);
        }
      }

      if (Math.abs(pixelSizeRef.current - targetPixelSize) > 0.3) {
        animRef.current = requestAnimationFrame(animate);
      }
    };

    cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animRef.current);
  }, [loaded, isHovered]);

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-xl"
      />

      {/* Fallback for SSR */}
      {!loaded && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto rounded-xl blur-sm"
        />
      )}

      {/* Hover hint */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center
          transition-opacity duration-500
          ${isHovered ? "opacity-0" : "opacity-100"}
          pointer-events-none
        `}
      >
        <div className="glass rounded-full px-4 py-2 text-sm text-white/70 backdrop-blur-md">
          Hover to reveal
        </div>
      </div>
    </div>
  );
}
