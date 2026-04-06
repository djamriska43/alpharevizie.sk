import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import { CTASection } from '@/components/Widgets';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O nás — Alpha Revízie | Certifikovaní revízni technici VTZ',
  description: 'Alpha Safety s.r.o., Martin ✓ Certifikovaní RT na všetky 4 druhy VTZ ✓ Elektrické, plynové, tlakové, zdvíhacie ✓ 500+ revízií ✓ Pôsobíme po celom Slovensku.',
  alternates: { canonical: '/o-nas' },
  openGraph: { title: 'O nás — Alpha Revízie | Certifikovaní revízni technici', description: 'Alpha Safety s.r.o. — certifikovaní revízni technici s oprávneniami na všetky štyri druhy VTZ. Martin, celé Slovensko.', url: 'https://alpharevizie.sk/o-nas', locale: 'sk_SK', type: 'website' },
};

const neons = ['#00d4ff','#ff2d6b','#8b5cf6','#00e676'];
const cards = [
  { num: '01', title: 'Kvalifikácia', desc: 'Náši revízni technici sú držiteľmi všetkých potrebných oprávnení a osvedčení podľa vyhlášky č. 508/2009 Z. z. Pravidelne sa vzdelávajú a sledujú zmeny v legislatíve.' },
  { num: '02', title: 'Legislatíva', desc: 'Pracujeme výhradne podľa platnej slovenskej legislatívy — zákon č. 124/2006 Z. z. o BOZP, vyhláška č. 508/2009 Z. z. a príslušné technické normy STN.' },
  { num: '03', title: 'Pôsobnosť', desc: 'Sídlime v Martine, ale revízie vykonávame po celom Slovensku — Bratislava, Žilina, Banská Bystrica, Košice, Prešov, Nitra, Trnava, Trenčín.' },
  { num: '04', title: 'Prístup', desc: 'Ku každému klientovi pristupujeme individuálne. Riešime vaše konkrétne zariadenia, vaše konkrétne lehoty. Žiadne šablóny, žiadne zbytočné papiere navyše.' },
];
const skills = [
  { label: 'Elektrické VTZ', w: '100', color: '#00d4ff' },
  { label: 'Plynové VTZ', w: '100', color: '#ff2d6b' },
  { label: 'Tlakové VTZ', w: '100', color: '#8b5cf6' },
  { label: 'Zdvíhacie VTZ', w: '100', color: '#00e676' },
  { label: 'BOZP & PO', w: '100', color: '#00d4ff' },
  { label: 'Školenia & Inštruktáže', w: '100', color: '#ff2d6b' },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:'Domov',url:'https://alpharevizie.sk'},{name:'O nás',url:'https://alpharevizie.sk/o-nas'}]} />
      <section className="bg-[#111] pt-36 pb-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />O nás</div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-6 gradient-text inline-block">Kto stojí za Alpha Revízie?</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[700px]">Sme súčasťou firmy <strong className="text-white">Alpha Safety s.r.o.</strong> so sídlom v Martine. Poskytujeme komplexné služby v oblasti bezpečnosti práce, požiarnej ochrany a revízií technických zariadení na celom Slovensku.</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-[#0a0a0a] py-14 px-8 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <Reveal delay={0}><Counter target={10} suffix="+" label="Rokov praxe" color="#00d4ff" /></Reveal>
          <Reveal delay={0.1}><Counter target={8} suffix="" label="Oprávnení RT" color="#ff2d6b" /></Reveal>
          <Reveal delay={0.2}><Counter target={500} suffix="+" label="Revízií ročne" color="#8b5cf6" /></Reveal>
          <Reveal delay={0.3}><Counter target={8} suffix="" label="Krajov pôsobnosti" color="#00e676" /></Reveal>
        </div>
      </section>
      <section className="py-20 px-8 bg-[#111] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {cards.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:-translate-y-0.5 hover:bg-white/[0.05] transition-all">
                <div className="font-mono text-5xl font-bold mb-4" style={{color:neons[i],textShadow:`0 0 20px ${neons[i]}30`}}>{c.num}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{c.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="max-w-[800px] mx-auto">
          <Reveal><h2 className="text-2xl font-extrabold mb-8 text-white">Naše oprávnenia</h2></Reveal>
          {skills.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="mb-5">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-300">{s.label}</span>
                  <span className="text-sm font-mono font-bold" style={{color:s.color}}>{s.w}%</span>
                </div>
                <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-1000" style={{width:`${s.w}%`,background:s.color,boxShadow:`0 0 10px ${s.color}40`}} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
