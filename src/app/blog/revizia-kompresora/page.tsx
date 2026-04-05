import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';
import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Kompresor v dielni — potrebuje revíziu? | Alpha Revízie', description: 'Máte kompresor s tlakovou nádobou? Spadá pod VTZ a potrebuje pravidelnú revíziu. Aké sú lehoty a povinnosti prevádzkovateľa?' };
export default function Article() {
  return (<>
    <section className="bg-[#111] pt-36 pb-16 px-8"><div className="max-w-[800px] mx-auto"><Reveal>
      <Link href="/blog" className="text-[#8b5cf6] text-sm font-medium no-underline hover:underline mb-6 inline-block">← Späť na blog</Link>
      <span className="inline-flex font-mono text-[0.6rem] uppercase tracking-widest py-1 px-2.5 rounded font-semibold mb-4 bg-[rgba(139,92,246,0.12)] text-[#8b5cf6]">Tlakové zariadenia</span>
      <h1 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black tracking-tight mb-4 text-white leading-tight">Kompresor v dielni — potrebuje revíziu?</h1>
      <p className="text-gray-500 text-sm font-mono">5. marca 2026 · 4 min čítania</p>
    </Reveal></div></section>
    <section className="py-16 px-8 bg-[#0a0a0a] border-t border-white/5"><div className="max-w-[800px] mx-auto"><Reveal><div className="text-gray-300 leading-8 text-[0.95rem]">
      <p className="text-lg mb-6">Kompresor nájdete takmer v každej dielni, autoservise alebo výrobnej prevádzke. Ale vedeli ste, že ak má váš kompresor <strong className="text-white">tlakovú nádobu (vzdušník)</strong>, tak spadá pod vyhradené technické zariadenia tlakové a <strong className="text-white">zo zákona podlieha pravidelnej revízii</strong>?</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Kedy kompresor spadá pod VTZ?</h2>
      <p className="mb-6">Kompresor sám o sebe nie je VTZ. Ale jeho <strong className="text-white">tlaková nádoba (vzdušník)</strong> áno — ak má objem nad 0,5 litra a pracovný tlak nad 0,05 MPa. V praxi to znamená, že väčšina dielenských kompresorov so vzdušníkom spadá pod VTZ tlakové skupiny B alebo C.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Aké sú lehoty revízií?</h2>
      <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08]">
        <div className="flex justify-between py-3 border-b border-white/5"><span>Vonkajšia prehliadka (skupina B)</span><span className="font-mono text-[#8b5cf6] font-bold">1× ročne</span></div>
        <div className="flex justify-between py-3 border-b border-white/5"><span>Vnútorná prehliadka + tlaková skúška (sk. B)</span><span className="font-mono text-[#8b5cf6] font-bold">každých 5 rokov</span></div>
        <div className="flex justify-between py-3"><span>Skupina C — zjednodušený režim</span><span className="font-mono text-[#8b5cf6] font-bold">podľa návodu výrobcu</span></div>
      </div>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Čo ak kompresor nemá revíziu?</h2>
      <p className="mb-6">Ak prevádzkujete kompresor s tlakovou nádobou bez platnej revízie, <strong className="text-white">porušujete zákon č. 124/2006 Z. z. o BOZP</strong>. V prípade kontroly z inšpektorátu práce vám hrozí pokuta. A ak by prišlo k havárii — roztrhnutie vzdušníka, úraz zamestnanca — zodpovedáte za to vy ako prevádzkovateľ.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Čo kontroluje revízny technik?</h2>
      <p className="mb-6">Pri vonkajšej prehliadke technik skontroluje celkový stav nádoby, tesnosť spojov, funkčnosť poistného ventilu a manometra, stav náteru a prípadnú koróziu. Pri vnútornej prehliadke sa kontroluje vnútorný povrch nádoby. Tlaková skúška overí, či nádoba bezpečne vydrží predpísaný skúšobný tlak.</p>
      <div className="bg-[rgba(139,92,246,0.08)] border border-[rgba(139,92,246,0.2)] rounded-2xl p-6 mt-10">
        <h3 className="text-lg font-bold text-white mb-2">Máte kompresor, ktorý potrebuje revíziu?</h3>
        <p className="text-sm text-gray-400">Zavolajte na <a href="tel:+421952352669" className="text-[#8b5cf6] font-bold no-underline">+421 952 352 669</a>. Poradíme vám, do akej skupiny vaše zariadenie patrí.</p>
      </div>
    </div></Reveal></div></section>
    <CTASection />
  </>);
}
