import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'O nás — Alpha Revízie' };

const cards = [
  { icon: '🎓', title: 'Kvalifikácia', desc: 'Náši revízni technici sú držiteľmi všetkých potrebných oprávnení a osvedčení podľa vyhlášky č. 508/2009 Z. z.', c: 'ele' },
  { icon: '⚖️', title: 'Legislatíva', desc: 'Pracujeme výhradne podľa platnej slovenskej legislatívy — zákon č. 124/2006 Z. z. a príslušné technické normy STN.', c: 'plyn' },
  { icon: '🇸🇰', title: 'Pôsobnosť', desc: 'Sídlime v Martine, ale revízie vykonávame po celom Slovensku — od Bratislavy po Košice.', c: 'tlak' },
  { icon: '🤝', title: 'Prístup', desc: 'Ku každému klientovi pristupujeme individuálne. Riešime vaše konkrétne zariadenia, vaše konkrétne lehoty.', c: 'zdvih' },
];
const bgColors: Record<string,string> = { ele: 'rgba(0,212,255,0.08)', plyn: 'rgba(255,45,107,0.08)', tlak: 'rgba(139,92,246,0.08)', zdvih: 'rgba(0,230,118,0.08)' };

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#111] pt-36 pb-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />O nás</div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-6 text-white">Kto stojí za Alpha Revízie?</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[700px]">Sme súčasťou firmy <strong className="text-white">Alpha Safety s.r.o.</strong> so sídlom v Martine. Poskytujeme komplexné služby v oblasti bezpečnosti práce, požiarnej ochrany a revízií technických zariadení na celom Slovensku.</p>
          </Reveal>
        </div>
      </section>
      <section className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {cards.map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`p-8 rounded-2xl border border-gray-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all group glow-icon-${c.c}`}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-xl mb-4 transition-shadow glow-target" style={{background:bgColors[c.c]}}>{c.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <h2 className="text-2xl font-extrabold mb-4">Naše oprávnenia zahŕňajú:</h2>
            <p className="text-gray-500 leading-7 max-w-[700px]">Revízny technik vyhr. tech. zariadení elektrických, plynových, tlakových a zdvíhacích. Bezpečnostný technik, technik požiarnej ochrany, odborne spôsobilá osoba v civilnej ochrane. Inštruktor na obsluhu motorových vozíkov, lešenárov, stavebných strojov a viazačov bremien.</p>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
