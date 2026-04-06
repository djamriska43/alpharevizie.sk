'use client';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';
import { services, ServiceKey } from '@/lib/services';

export default function ServiceDetail({ serviceKey }: { serviceKey: ServiceKey }) {
  const s = services[serviceKey];
  const extended = 'extended' in s ? (s as any).extended as { title: string; paragraphs: string[] }[] : [];
  return (
    <>
      <section className="bg-[#111] pt-36 pb-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <span className="inline-flex font-mono text-xs font-semibold uppercase tracking-[0.15em] py-1.5 px-4 rounded-full mb-6 border" style={{background:`${s.color}15`,color:s.color,borderColor:`${s.color}30`}}>{s.tag}</span>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight leading-tight mb-4 text-white">{s.title}</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[650px]">{s.desc}</p>
          </Reveal>
        </div>
      </section>
      <section className="py-20 px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <Reveal direction="left">
            <div>
              <h2 className="text-2xl font-extrabold mb-4 tracking-tight text-white">{s.sectionTitle}</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{s.text1}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{s.text2}</p>
              <ul className="flex flex-col gap-2.5 mb-8 list-none p-0">
                {s.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 font-medium leading-snug">
                    <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{background:s.color,boxShadow:`0 0 8px ${s.color}50`}} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[#00d4ff] text-black py-4 px-8 rounded-full font-bold no-underline hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)] transition-all">Objednať revíziu →</Link>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="bg-white/[0.03] rounded-3xl p-10 flex flex-col gap-4 border border-white/[0.08]">
              {s.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-4 px-5 bg-white/[0.04] rounded-xl border border-white/[0.06] hover:border-white/[0.15] hover:translate-x-1 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-base border" style={{background:`${s.color}20`,borderColor:`${s.color}40`}}>{item.icon}</div>
                    <span className="text-sm font-semibold text-white">{item.text}</span>
                  </div>
                  <span className="font-mono text-[0.62rem] font-medium py-1 px-2.5 rounded-md bg-white/[0.06] text-gray-400">{item.badge}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXTENDED SEO CONTENT */}
      {extended.length > 0 && (
        <section className="py-20 px-8 bg-[#111] border-t border-white/5">
          <div className="max-w-[800px] mx-auto">
            {extended.map((section, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className={i > 0 ? 'mt-16' : ''}>
                  <h2 className="text-xl font-extrabold tracking-tight text-white mb-5 leading-snug">{section.title}</h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-gray-400 leading-relaxed mb-4 text-[0.95rem]">{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
