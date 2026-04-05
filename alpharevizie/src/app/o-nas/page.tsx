import { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';

export const metadata: Metadata = {
  title: 'O nás — Alpha Revízie',
  description: 'Sme súčasťou firmy Alpha Safety s.r.o. Poskytujeme revízie vyhradených technických zariadení na celom Slovensku.',
};

const cards = [
  { icon: '🎓', title: 'Kvalifikácia', desc: 'Náši revízni technici sú držiteľmi všetkých potrebných oprávnení a osvedčení podľa vyhlášky č. 508/2009 Z. z. Pravidelne sa vzdelávajú a sledujú zmeny v legislatíve.' },
  { icon: '⚖️', title: 'Legislatíva', desc: 'Pracujeme výhradne podľa platnej slovenskej legislatívy — zákon č. 124/2006 Z. z. o BOZP, vyhláška č. 508/2009 Z. z. a príslušné technické normy STN.' },
  { icon: '🇸🇰', title: 'Pôsobnosť', desc: 'Sídlime v Martine, ale revízie vykonávame po celom Slovensku. Bratislava, Žilina, Banská Bystrica, Košice, Prešov, Nitra, Trnava, Trenčín — prichádzame za vami.' },
  { icon: '🤝', title: 'Prístup', desc: 'Ku každému klientovi pristupujeme individuálne. Riešime vaše konkrétne zariadenia, vaše konkrétne lehoty. Žiadne šablóny, žiadne zbytočné papiere navyše.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-5 h-[1.5px] bg-gray-300" />O nás
            </div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-6">Kto stojí za Alpha Revízie?</h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-[700px] mb-12">
              Sme súčasťou firmy <strong className="text-black">Alpha Safety s.r.o.</strong> so sídlom v Martine.
              Poskytujeme komplexné služby v oblasti bezpečnosti práce, požiarnej ochrany a revízií technických zariadení
              na celom Slovensku. Stránka alpharevizie.sk je špecializovaná na revízie vyhradených technických zariadení —
              elektrických, plynových, tlakových a zdvíhacích.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {cards.map((c, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl border border-gray-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all">
                  <h3 className="text-lg font-bold mb-2">{c.icon} {c.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <h2 className="text-2xl font-extrabold mb-4">Naše oprávnenia zahŕňajú:</h2>
            <p className="text-gray-500 leading-7 max-w-[700px]">
              Revízny technik vyhr. tech. zariadení elektrických, plynových, tlakových a zdvíhacích.
              Bezpečnostný technik, technik požiarnej ochrany, odborne spôsobilá osoba v civilnej ochrane.
              Inštruktor na obsluhu motorových vozíkov, lešenárov, stavebných strojov a viazačov bremien.
            </p>
          </Reveal>
        </div>
      </section>
      <CTASection />
    </>
  );
}
