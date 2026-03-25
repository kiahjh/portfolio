"use client";

import { useEffect, useRef } from "react";

/**
 * A large, fixed organic shape that lives on the right side of the
 * viewport. It's always visible as ambient atmosphere while content
 * scrolls on the left. Two layered blobs — a massive diffuse outer
 * wash and a denser inner form — morphing slowly via overlapping
 * sine waves with Catmull-Rom smoothed paths.
 */
export default function CraftedDetail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = canvas.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    };
    window.addEventListener("resize", debouncedResize);

    function blobPoints(
      cx: number,
      cy: number,
      baseR: number,
      t: number,
      harmonics: [number, number, number][],
      steps: number,
    ): [number, number][] {
      const pts: [number, number][] = [];
      for (let i = 0; i < steps; i++) {
        const angle = (i / steps) * Math.PI * 2;
        let r = baseR;
        for (const [freq, amp, speed] of harmonics) {
          r += Math.sin(angle * freq + t * speed) * baseR * amp;
        }
        pts.push([cx + Math.cos(angle) * r, cy + Math.sin(angle) * r]);
      }
      return pts;
    }

    function drawSmoothBlob(
      points: [number, number][],
      tension: number = 0.3,
    ) {
      const n = points.length;
      ctx.beginPath();

      for (let i = 0; i < n; i++) {
        const p0 = points[(i - 1 + n) % n];
        const p1 = points[i];
        const p2 = points[(i + 1) % n];
        const p3 = points[(i + 2) % n];

        const cp1x = p1[0] + ((p2[0] - p0[0]) * tension) / 3;
        const cp1y = p1[1] + ((p2[1] - p0[1]) * tension) / 3;
        const cp2x = p2[0] - ((p3[0] - p1[0]) * tension) / 3;
        const cp2y = p2[1] - ((p3[1] - p1[1]) * tension) / 3;

        if (i === 0) ctx.moveTo(p1[0], p1[1]);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2[0], p2[1]);
      }

      ctx.closePath();
    }

    const draw = (t: number) => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      // ─── Layer 1: Massive outer wash ───
      // Centered on the right portion of the viewport
      const cx1 = w * 0.72;
      const cy1 = h * 0.42;
      const r1 = Math.max(w, h) * 0.38;

      const pts1 = blobPoints(
        cx1,
        cy1,
        r1,
        t,
        [
          [3, 0.08, 0.0002],
          [5, 0.05, -0.00015],
          [2, 0.07, 0.00028],
          [7, 0.025, 0.00012],
        ],
        100,
      );
      drawSmoothBlob(pts1, 0.35);

      const g1 = ctx.createRadialGradient(
        cx1 - r1 * 0.1,
        cy1 - r1 * 0.12,
        0,
        cx1,
        cy1,
        r1 * 1.2,
      );
      g1.addColorStop(0, "oklch(65% 0.12 33 / 0.55)");
      g1.addColorStop(0.3, "oklch(70% 0.09 38 / 0.35)");
      g1.addColorStop(0.6, "oklch(78% 0.06 45 / 0.18)");
      g1.addColorStop(1, "oklch(90% 0.02 55 / 0.0)");
      ctx.fillStyle = g1;
      ctx.fill();

      // ─── Layer 2: Denser inner form ───
      const cx2 = w * 0.68;
      const cy2 = h * 0.38;
      const r2 = Math.max(w, h) * 0.18;

      const pts2 = blobPoints(
        cx2,
        cy2,
        r2,
        t,
        [
          [4, 0.11, -0.00025],
          [6, 0.06, 0.0002],
          [3, 0.08, 0.00032],
          [8, 0.035, -0.00018],
        ],
        72,
      );
      drawSmoothBlob(pts2, 0.3);

      const g2 = ctx.createRadialGradient(
        cx2 + r2 * 0.08,
        cy2 - r2 * 0.1,
        0,
        cx2,
        cy2,
        r2 * 1.15,
      );
      g2.addColorStop(0, "oklch(66% 0.1 30 / 0.22)");
      g2.addColorStop(0.45, "oklch(70% 0.08 35 / 0.16)");
      g2.addColorStop(1, "oklch(78% 0.05 42 / 0.06)");
      ctx.fillStyle = g2;
      ctx.fill();


    };

    if (prefersReducedMotion) {
      draw(0);
    } else {
      const loop = (t: number) => {
        draw(t);
        animationRef.current = requestAnimationFrame(loop);
      };
      animationRef.current = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
