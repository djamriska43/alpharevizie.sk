'use client';
import { useState } from 'react';
import Reveal from '@/components/Reveal';

const neons = ['#00d4ff','#ff2d6b','#8b5cf6','#00e676'];

export default function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  const color = neons[i % 4];
  return (
    <Reveal delay={(i % 4) * 0.08}>
      <div className={`py-6 cursor-pointer group transition-all duration-300 border-l-2 pl-6 mb-2 rounded-r-lg ${open ? 'bg-white/[0.02]' : ''}`} style={{ borderLeftColor: open ? color : 'transparent' }} onClick={() => setOpen(!open)}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-lg font-bold shrink-0 w-8" style={{ color }}>{String(i + 1).padStart(2, '0')}</span>
          <div className="flex-1 flex justify-between items-center">
            <span className="font-bold text-base text-white group-hover:translate-x-1 transition-transform">{q}</span>
            <span className="text-lg font-bold transition-all duration-300 shrink-0 ml-4 w-6 h-6 flex items-center justify-center rounded-full" style={{ color }}>{open ? '×' : '+'}</span>
          </div>
        </div>
        <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-[300px] pt-4 pl-12 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
        </div>
      </div>
    </Reveal>
  );
}
