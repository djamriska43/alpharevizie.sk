'use client';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';

const faqs = [
  {q:'Ako často treba robiť revíziu elektrickej inštalácie?',a:'Závisí od typu prostredia. V bežných bytoch každých 5 rokov, vo výrobných prevádzkach každé 2–3 roky, na staveniskách každých 6 mesiacov.'},
  {q:'Ako často treba robiť revíziu plynového kotla?',a:'Odborná prehliadka každý rok, odborná skúška každé 3 roky.'},
  {q:'Čo sa stane ak nemám platnú revíziu?',a:'Inšpektorát práce môže uložiť pokutu do 100 000 €. Pri úraze hrozí trestnoprávna zodpovednosť.'},
  {q:'Aký je rozdiel medzi odbornou prehliadkou a skúškou?',a:'Prehliadka je vizuálna kontrola, skúška zahŕňa aj funkčné skúšky a merania.'},
  {q:'Robíte aj východiskové revízie?',a:'Áno, robíme východiskové aj periodické revízie všetkých štyroch druhov VTZ.'},
  {q:'Pôsobíte aj mimo Žilinského kraja?',a:'Áno, pôsobíme po celom Slovensku.'},
  {q:'Ako dlho trvá dodanie revíznej správy?',a:'Do niekoľkých pracovných dní po vykonaní revízie.'},
  {q:'Čo je vyhláška 508/2009 Z. z.?',a:'Ústredný predpis pre VTZ — upravuje rozdelenie zariadení, lehoty revízií a odborné spôsobilosti.'},
];

function FAQItem({q,a,i}:{q:string;a:string;i:number}) {
  const [open,setOpen]=useState(false);
  return (
    <Reveal delay={(i%4)*0.08}>
      <div className="border-b border-white/10 py-6 cursor-pointer" onClick={()=>setOpen(!open)}>
        <div className="flex justify-between items-center font-bold text-base text-white hover:text-gray-300 transition-colors">
          {q}<span className={`text-xl text-gray-500 transition-transform duration-300 ${open?'rotate-45':''}`}>+</span>
        </div>
        <div className={`overflow-hidden transition-all duration-400 text-sm text-gray-400 leading-relaxed ${open?'max-h-[300px] pt-4':'max-h-0'}`}>{a}</div>
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
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-4 text-white">F.A.Q.</h1>
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
