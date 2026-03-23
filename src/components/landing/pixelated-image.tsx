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
  const pixelSizeRef = useRef(20); // start very pixelated

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
    const w = rect.width;
    const ratio = img.width / img.height;
    const h = w / ratio;

    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const targetPixelSize = isHovered ? 1 : 16;

    const animate = () => {
      const current = pixelSizeRef.current;
      const diff = targetPixelSize - current;

      if (Math.abs(diff) < 0.3) {
        pixelSizeRef.current = targetPixelSize;
      } else {
        pixelSizeRef.current += diff * 0.08;
      }

      const ps = Math.max(1, Math.round(pixelSizeRef.current));

      // Draw at reduced resolution then scale up
      ctx.imageSmoothingEnabled = false;

      const smallW = Math.max(1, Math.floor(w / ps));
      const smallH = Math.max(1, Math.floor(h / ps));

      // Draw image small
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, smallW, smallH);

      // Scale back up with no smoothing = pixelation
      ctx.drawImage(canvas, 0, 0, smallW, smallH, 0, 0, w, h);

      // Add slight overlay when pixelated
      if (ps > 2) {
        ctx.fillStyle = `rgba(0,0,0,${Math.min(0.3, (ps - 1) * 0.02)})`;
        ctx.fillRect(0, 0, w, h);
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
