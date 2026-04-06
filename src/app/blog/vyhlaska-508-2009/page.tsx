import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';
import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Vyhláška 508/2009 Z. z. — čo musí vedieť každý prevádzkovateľ | Alpha Revízie', description: 'Kompletný prehľad vyhlášky 508/2009 Z. z. o VTZ. Rozdelenie zariadení do skupín A, B, C, lehoty revízií a povinnosti prevádzkovateľa.'   alternates: { canonical: '/blog/vyhlaska-508-2009' },
};
export default function Article() {
  return (<>
    <section className="bg-[#111] pt-36 pb-16 px-8"><div className="max-w-[800px] mx-auto"><Reveal>
      <Link href="/blog" className="text-gray-400 text-sm font-medium no-underline hover:underline mb-6 inline-block">← Späť na blog</Link>
      <span className="inline-flex font-mono text-[0.6rem] uppercase tracking-widest py-1 px-2.5 rounded font-semibold mb-4 bg-white/[0.06] text-gray-300">Legislatíva</span>
      <h1 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black tracking-tight mb-4 text-white leading-tight">Vyhláška 508/2009 Z. z. — čo musí vedieť každý prevádzkovateľ</h1>
      <p className="text-gray-500 text-sm font-mono">20. februára 2026 · 6 min čítania</p>
    </Reveal></div></section>
    <section className="py-16 px-8 bg-[#0a0a0a] border-t border-white/5"><div className="max-w-[800px] mx-auto"><Reveal><div className="text-gray-300 leading-8 text-[0.95rem]">
      <p className="text-lg mb-6"><strong className="text-white">Vyhláška č. 508/2009 Z. z.</strong> je ústredný predpis pre vyhradené technické zariadenia (VTZ) na Slovensku. Ak prevádzkujete akékoľvek elektrické, plynové, tlakové alebo zdvíhacie zariadenie, tento predpis sa vás priamo týka.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Čo sú vyhradené technické zariadenia?</h2>
      <p className="mb-6">VTZ sú zariadenia, ktoré pri prevádzke predstavujú zvýšené nebezpečenstvo ohrozenia života, zdravia alebo majetku. Delia sa na štyri druhy: <strong className="text-[#00d4ff]">elektrické</strong>, <strong className="text-[#ff2d6b]">plynové</strong>, <strong className="text-[#8b5cf6]">tlakové</strong> a <strong className="text-[#00e676]">zdvíhacie</strong>.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Skupiny A, B, C — čo znamenajú?</h2>
      <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08]">
        <div className="py-3 border-b border-white/5"><strong className="text-[#ff2d6b]">Skupina A</strong> — najvyššia miera ohrozenia. Úradné skúšky vykonáva oprávnená právnická osoba (napr. TÜV). Príklad: osobné výťahy, veľké žeriavy, parné kotly, VN rozvodne.</div>
        <div className="py-3 border-b border-white/5"><strong className="text-[#8b5cf6]">Skupina B</strong> — vyššia miera ohrozenia. Revízie vykonáva revízny technik. Príklad: plynové kotly, kompresory, VZV, bežná elektroinštalácia.</div>
        <div className="py-3"><strong className="text-[#00e676]">Skupina C</strong> — nižšia miera ohrozenia. Zjednodušený režim. Príklad: malé spotrebiče, prenosné náradie.</div>
      </div>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Povinnosti prevádzkovateľa</h2>
      <p className="mb-6">Ako prevádzkovateľ ste povinný zabezpečiť odborné prehliadky a odborné skúšky VTZ v lehotách stanovených vyhláškou. Musíte viesť evidenciu zariadení, uchovávať revízne správy a sprístupniť ich kontrolným orgánom. Zariadenia musia byť prevádzkované len osobami s potrebnou odbornou spôsobilosťou.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Kto môže vykonávať revízie?</h2>
      <p className="mb-6">Revízie VTZ môže vykonávať len <strong className="text-white">revízny technik s platným osvedčením</strong> vydaným oprávnenou právnickou osobou (napr. Technická inšpekcia, a.s.). Revízny technik musí mať osvedčenie presne na ten druh a skupinu zariadenia, ktoré reviduje.</p>
      <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 mt-10">
        <h3 className="text-lg font-bold text-white mb-2">Potrebujete pomoc s revíziami VTZ?</h3>
        <p className="text-sm text-gray-400">Naši revízni technici majú oprávnenia na všetky štyri druhy VTZ. Zavolajte na <a href="tel:+421952352669" className="text-[#00d4ff] font-bold no-underline">+421 952 352 669</a>.</p>
      </div>
    </div></Reveal></div></section>
    <CTASection />
  </>);
}
