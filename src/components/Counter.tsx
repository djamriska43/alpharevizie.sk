'use client';
import { useEffect, useRef, useState } from 'react';

export default function Counter({ target, suffix = '', label, color }: {
  target?: number; suffix?: string; label: string; color: string; text?: string;
}) {
  const [count, setCount] = useState(target ?? 0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        setCount(0);
        const duration = 2000;
        const start = performance.now();
        const animate = (now: number) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started]);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="font-mono text-[2.5rem] font-bold text-white leading-none">
        {target ? `${count}${suffix}` : suffix}
      </div>
      <div className="text-sm mt-2 font-medium" style={{ color }}>{label}</div>
    </div>
  );
}
