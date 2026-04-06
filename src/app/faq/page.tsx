import Reveal from '@/components/Reveal';
import FAQItem from '@/components/FAQItem';
import { CTASection } from '@/components/Widgets';
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Časté otázky o revíziách VTZ — Alpha Revízie | FAQ',
  description: 'Ako často treba revíziu elektrickej inštalácie? Koľko stojí revízia kotla? Aká pokuta hrozí bez revízie? Odpovede na najčastejšie otázky o VTZ.',
  alternates: { canonical: '/faq' },
  openGraph: { title: 'Časté otázky o revíziách VTZ — Alpha Revízie', description: 'Odpovede na najčastejšie otázky o revíziách elektrických, plynových, tlakových a zdvíhacích zariadení.', url: 'https://alpharevizie.sk/faq', locale: 'sk_SK', type: 'website' },
};

const faqs = [
  {q:'Ako často treba robiť revíziu elektrickej inštalácie?',a:'Závisí od typu prostredia. V bežných bytoch a kanceláriách je to každých 5 rokov. Vo výrobných prevádzkach každé 2–3 roky. Na staveniskách každých 6 mesiacov. Presné lehoty sú uvedené v prílohe č. 8 vyhlášky č. 508/2009 Z. z.'},
  {q:'Ako často treba robiť revíziu plynového kotla?',a:'Odborná prehliadka (kontrola) sa robí každý rok. Odborná skúška (revízia) každé 3 roky. Platí to pre plynové zariadenia skupiny B — teda bežné domáce kotly.'},
  {q:'Čo sa stane ak nemám platnú revíziu?',a:'Nesplnenie povinnosti je porušenie predpisov BOZP. Inšpektorát práce môže uložiť pokutu do výšky 100 000 €. V prípade pracovného úrazu na nezrevídovanom zariadení hrozí aj trestnoprávna zodpovednosť.'},
  {q:'Aký je rozdiel medzi odbornou prehliadkou a odbornou skúškou?',a:'Odborná prehliadka (OP) je vizuálna kontrola stavu zariadenia. Odborná skúška (OS) je komplexnejšia — zahŕňa prehliadku aj funkčné skúšky a merania. Obe vykonáva revízny technik.'},
  {q:'Robíte aj východiskové revízie?',a:'Áno, robíme východiskové aj periodické revízie. Východisková revízia sa robí pred prvým uvedením zariadenia do prevádzky.'},
  {q:'Pôsobíte aj mimo Žilinského kraja?',a:'Áno, pôsobíme po celom Slovensku. Sídlime v Martine, ale pravidelne cestujeme do všetkých krajov.'},
  {q:'Ako dlho trvá dodanie revíznej správy?',a:'Revíznu správu s okrúhlou pečiatkou revízneho technika vám dodáme do niekoľkých pracovných dní po vykonaní revízie.'},
  {q:'Čo je to vyhláška 508/2009 Z. z.?',a:'Je to ústredný predpis pre vyhradené technické zariadenia na Slovensku. Upravuje rozdelenie zariadení do skupín (A, B, C), požiadavky na odbornú spôsobilosť, lehoty revízií a obsah revíznych správ.'},
];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:'Domov',url:'https://alpharevizie.sk'},{name:'F.A.Q.',url:'https://alpharevizie.sk/faq'}]} />
      <FAQPageJsonLd faqs={faqs} />
      <section className="bg-[#111] pt-36 pb-20 px-8">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />Časté otázky</div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-4 gradient-text inline-block">F.A.Q.</h1>
            <p className="text-lg text-gray-400 leading-relaxed">Odpovede na najčastejšie otázky o revíziách vyhradených technických zariadení.</p>
          </Reveal>
        </div>
      </section>
      <section className="py-16 px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[800px] mx-auto">
          {faqs.map((f,i) => <FAQItem key={i} q={f.q} a={f.a} i={i} />)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
