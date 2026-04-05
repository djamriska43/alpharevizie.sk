import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';
import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Revízia vysokozdvižného vozíka — lehoty a povinnosti | Alpha Revízie', description: 'Vysokozdvižné vozíky patria medzi VTZ zdvíhacie. Odborná prehliadka každých 6 mesiacov, skúška každý rok. Kompletný prehľad povinností.' };
export default function Article() {
  return (<>
    <section className="bg-[#111] pt-36 pb-16 px-8"><div className="max-w-[800px] mx-auto"><Reveal>
      <Link href="/blog" className="text-[#00e676] text-sm font-medium no-underline hover:underline mb-6 inline-block">← Späť na blog</Link>
      <span className="inline-flex font-mono text-[0.6rem] uppercase tracking-widest py-1 px-2.5 rounded font-semibold mb-4 bg-[rgba(0,230,118,0.12)] text-[#00e676]">Zdvíhacie zariadenia</span>
      <h1 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black tracking-tight mb-4 text-white leading-tight">Revízia vysokozdvižného vozíka — lehoty a povinnosti</h1>
      <p className="text-gray-500 text-sm font-mono">28. februára 2026 · 4 min čítania</p>
    </Reveal></div></section>
    <section className="py-16 px-8 bg-[#0a0a0a] border-t border-white/5"><div className="max-w-[800px] mx-auto"><Reveal><div className="text-gray-300 leading-8 text-[0.95rem]">
      <p className="text-lg mb-6">Vysokozdvižné vozíky sú jedným z najpoužívanejších zariadení v skladoch, výrobných halách a logistických centrách. Ale nie každý prevádzkovateľ vie, že <strong className="text-white">vysokozdvižný vozík je vyhradené technické zariadenie zdvíhacie</strong> a podlieha prísnym pravidlám revízií.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Do akej skupiny patria VZV?</h2>
      <p className="mb-6">Vysokozdvižné vozíky s nosnosťou nad 1 000 kg patria do <strong className="text-white">skupiny A</strong> — najvyššia miera ohrozenia. Vozíky s nosnosťou do 1 000 kg patria do <strong className="text-white">skupiny B</strong>. V praxi väčšina bežných VZV v skladoch patrí do skupiny B.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Aké sú lehoty?</h2>
      <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08]">
        <div className="flex justify-between py-3 border-b border-white/5"><span>Odborná prehliadka (vizuálna kontrola)</span><span className="font-mono text-[#00e676] font-bold">každých 6 mesiacov</span></div>
        <div className="flex justify-between py-3 border-b border-white/5"><span>Odborná skúška (záťažová skúška)</span><span className="font-mono text-[#00e676] font-bold">každý 1 rok</span></div>
        <div className="flex justify-between py-3"><span>Kontrola viazacích prostriedkov</span><span className="font-mono text-[#00e676] font-bold">pred každým použitím</span></div>
      </div>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Čo kontroluje revízny technik?</h2>
      <p className="mb-6">Revízny technik skontroluje celkový technický stav vozíka — nosný stĺp, vidlice, reťaze, hydrauliku, brzdy, riadenie, osvetlenie, výstražné zariadenia, stav pneumatík a bezpečnostné prvky. Pri odbornej skúške sa vykonáva aj záťažová skúška — vozík sa zaťaží na menovitú nosnosť a overí sa správna funkcia všetkých mechanizmov.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Nezabudnite na obsluhu</h2>
      <p className="mb-6">Okrem revízie samotného vozíka musí mať každý vodič VZV <strong className="text-white">platný preukaz na obsluhu motorového vozíka</strong>. Školenie a preskúšanie je povinné. Bez platného preukazu nesmie nikto VZV obsluhovať — ak by sa stal úraz, zodpovedáte za to vy ako zamestnávateľ.</p>
      <div className="bg-[rgba(0,230,118,0.08)] border border-[rgba(0,230,118,0.2)] rounded-2xl p-6 mt-10">
        <h3 className="text-lg font-bold text-white mb-2">Potrebujete revíziu VZV alebo školenie obsluhy?</h3>
        <p className="text-sm text-gray-400">Zavolajte na <a href="tel:+421952352669" className="text-[#00e676] font-bold no-underline">+421 952 352 669</a>. Zabezpečíme revíziu aj školenie na jednom mieste.</p>
      </div>
    </div></Reveal></div></section>
    <CTASection />
  </>);
}
