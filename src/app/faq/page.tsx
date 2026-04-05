'use client';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';

const neons = ['#00d4ff','#ff2d6b','#8b5cf6','#00e676'];

const faqs = [
  {q:'Ako často treba robiť revíziu elektrickej inštalácie?',a:'Závisí od typu prostredia. V bežných bytoch a kanceláriách je to každých 5 rokov. Vo výrobných prevádzkach každé 2–3 roky. Na staveniskách každých 6 mesiacov. Presné lehoty sú uvedené v prílohe č. 8 vyhlášky č. 508/2009 Z. z.'},
  {q:'Ako často treba robiť revíziu plynového kotla?',a:'Odborná prehliadka (kontrola) sa robí každý rok. Odborná skúška (revízia) každé 3 roky. Platí to pre plynové zariadenia skupiny B — teda bežné domáce kotly od 5 kW do 0,5 MW.'},
  {q:'Čo sa stane ak nemám platnú revíziu?',a:'Nesplnenie povinnosti je porušenie predpisov BOZP. Inšpektorát práce môže uložiť pokutu do výšky 100 000 €. V prípade pracovného úrazu na nezrevídovanom zariadení hrozí aj trestnoprávna zodpovednosť. Poisťovňa vám tiež nemusí preplatiť poistnú udalosť.'},
  {q:'Aký je rozdiel medzi odbornou prehliadkou a odbornou skúškou?',a:'Odborná prehliadka (OP) je vizuálna kontrola stavu zariadenia. Odborná skúška (OS) je komplexnejšia — zahŕňa prehliadku aj funkčné skúšky a merania. Obe vykonáva revízny technik a o výsledku vystaví doklad.'},
  {q:'Robíte aj východiskové revízie?',a:'Áno, robíme východiskové aj periodické revízie. Východisková revízia sa robí pred prvým uvedením zariadenia do prevádzky — napríklad po novej elektroinštalácii, montáži plynového kotla alebo inštalácii tlakovej nádoby.'},
  {q:'Pôsobíte aj mimo Žilinského kraja?',a:'Áno, pôsobíme po celom Slovensku. Sídlime v Martine, ale pravidelne cestujeme do všetkých krajov — Bratislava, Banská Bystrica, Košice, Prešov, Nitra, Trnava, Trenčín.'},
  {q:'Ako dlho trvá dodanie revíznej správy?',a:'Revíznu správu s okrúhlou pečiatkou revízneho technika vám dodáme do niekoľkých pracovných dní po vykonaní revízie.'},
  {q:'Čo je to vyhláška 508/2009 Z. z.?',a:'Je to ústredný predpis pre vyhradené technické zariadenia na Slovensku. Upravuje rozdelenie zariadení do skupín (A, B, C), požiadavky na odbornú spôsobilosť, lehoty revízií a obsah revíznych správ. Nadväzuje na zákon č. 124/2006 Z. z. o BOZP.'},
];

function FAQItem({q,a,i}:{q:string;a:string;i:number}) {
  const [open,setOpen]=useState(false);
  const color = neons[i % 4];
  return (
    <Reveal delay={(i%4)*0.08}>
      <div className={`py-6 cursor-pointer group transition-all duration-300 border-l-2 pl-6 mb-2 rounded-r-lg ${open?'bg-white/[0.02]':''}`} style={{borderLeftColor:open?color:'transparent'}} onClick={()=>setOpen(!open)}>
        <div className="flex items-center gap-4">
          <span className="font-mono text-lg font-bold shrink-0 w-8" style={{color}}>{String(i+1).padStart(2,'0')}</span>
          <div className="flex-1 flex justify-between items-center">
            <span className="font-bold text-base text-white group-hover:translate-x-1 transition-transform">{q}</span>
            <span className={`text-lg font-bold transition-all duration-300 shrink-0 ml-4 w-6 h-6 flex items-center justify-center rounded-full`} style={{color,borderColor:open?color:'transparent'}}>{open?'×':'+'}</span>
          </div>
        </div>
        <div className={`overflow-hidden transition-all duration-400 ${open?'max-h-[300px] pt-4 pl-12 opacity-100':'max-h-0 opacity-0'}`}>
          <p className="text-sm text-gray-400 leading-relaxed">{a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function FAQPage() {
  return (
    <>
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
          {faqs.map((f,i)=><FAQItem key={i} q={f.q} a={f.a} i={i} />)}
        </div>
      </section>
      <CTASection />
    </>
  );
}
