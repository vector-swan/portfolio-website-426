import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

/**
 * Normalized pointer in [-1, 1], lerped for smooth motion.
 */
export function usePointerParallax(smoothing = 0.08): Point {
  const target = useRef<Point>({ x: 0, y: 0 });
  const current = useRef<Point>({ x: 0, y: 0 });
  const [, tick] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth * 0.5;
      const cy = window.innerHeight * 0.5;
      target.current = {
        x: (e.clientX - cx) / Math.max(cx, 1),
        y: (e.clientY - cy) / Math.max(cy, 1),
      };
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    let id: number;
    const loop = () => {
      const t = target.current;
      const c = current.current;
      const px = c.x;
      const py = c.y;
      c.x += (t.x - c.x) * smoothing;
      c.y += (t.y - c.y) * smoothing;
      const moved = Math.abs(c.x - px) > 0.0003 || Math.abs(c.y - py) > 0.0003;
      const chasing = Math.hypot(t.x - c.x, t.y - c.y) > 0.002;
      if (moved || chasing) {
        tick((n) => (n + 1) % 10000);
      }
      id = requestAnimationFrame(loop);
    };
    id = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(id);
  }, [smoothing]);

  return current.current;
}
