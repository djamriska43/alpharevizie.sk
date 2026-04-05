'use client';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';
import { services, ServiceKey } from '@/lib/services';

export default function ServiceDetail({ serviceKey }: { serviceKey: ServiceKey }) {
  const s = services[serviceKey];
  return (
    <>
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="max-w-[800px] mb-12">
              <span className="inline-flex font-mono text-xs font-semibold uppercase tracking-[0.15em] py-1.5 px-4 rounded-full mb-6" style={{ background: `${s.color}15`, color: s.color }}>{s.tag}</span>
              <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight leading-tight mb-4">{s.title}</h1>
              <p className="text-lg text-gray-500 leading-relaxed max-w-[650px]">{s.desc}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-start">
            <Reveal direction="left">
              <div>
                <h2 className="text-2xl font-extrabold mb-4 tracking-tight">{s.sectionTitle}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{s.text1}</p>
                <p className="text-gray-500 leading-relaxed mb-6">{s.text2}</p>
                <ul className="flex flex-col gap-2.5 mb-8 list-none">
                  {s.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 font-medium leading-snug">
                      <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: s.color, boxShadow: `0 0 8px ${s.color}30` }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className="inline-flex items-center gap-2 bg-black text-white py-4 px-8 rounded-full font-semibold no-underline hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all">Objednať revíziu →</Link>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="bg-gray-50 rounded-3xl p-10 flex flex-col gap-4 border border-gray-200">
                {s.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-4 px-5 bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:translate-x-1 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-[10px] flex items-center justify-center text-sm" style={{ background: `${s.color}15` }}>{item.icon}</div>
                      <span className="text-sm font-semibold">{item.text}</span>
                    </div>
                    <span className="font-mono text-[0.62rem] font-medium py-1 px-2.5 rounded-md bg-gray-100 text-gray-500">{item.badge}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
