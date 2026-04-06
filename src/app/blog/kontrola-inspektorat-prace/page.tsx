import { BlogServiceLinksAll } from '@/components/BlogServiceLinks';
import { BreadcrumbJsonLd, BlogPostingJsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';
import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Ako sa pripraviť na kontrolu z inšpektorátu práce? | Alpha Revízie', description: 'Kontrola z inšpektorátu práce nemusí byť stresujúca. Kompletný zoznam dokumentov a vecí, ktoré musíte mať pripravené v oblasti VTZ a BOZP.', alternates: { canonical: '/blog/kontrola-inspektorat-prace' },
};
export default function Article() {
  return (<>
      <BreadcrumbJsonLd items={[{name:"Domov",url:"https://alpharevizie.sk"},{name:"Blog",url:"https://alpharevizie.sk/blog"},{name:"Kontrola z inšpektorátu práce",url:"https://alpharevizie.sk/blog/kontrola-inspektorat-prace"}]} />
      <BlogPostingJsonLd title="Ako sa pripraviť na kontrolu z inšpektorátu práce?" description="Kontrola z inšpektorátu práce nemusí byť stresujúca." date="2026-02-12" url="https://alpharevizie.sk/blog/kontrola-inspektorat-prace" />
    <section className="bg-[#111] pt-36 pb-16 px-8"><div className="max-w-[800px] mx-auto"><Reveal>
      <Link href="/blog" className="text-gray-400 text-sm font-medium no-underline hover:underline mb-6 inline-block">← Späť na blog</Link>
      <span className="inline-flex font-mono text-[0.6rem] uppercase tracking-widest py-1 px-2.5 rounded font-semibold mb-4 bg-white/[0.06] text-gray-300">Praktické</span>
      <h1 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black tracking-tight mb-4 text-white leading-tight">Ako sa pripraviť na kontrolu z inšpektorátu práce?</h1>
      <p className="text-gray-500 text-sm font-mono">12. februára 2026 · 5 min čítania</p>
    </Reveal></div></section>
    <section className="py-16 px-8 bg-[#0a0a0a] border-t border-white/5"><div className="max-w-[800px] mx-auto"><Reveal><div className="text-gray-300 leading-8 text-[0.95rem]">
      <p className="text-lg mb-6">Dostali ste avízo o kontrole z inšpektorátu práce? Alebo len chcete mať istotu, že máte všetko v poriadku? <strong className="text-white">Kontrola nemusí byť stresujúca</strong>, ak máte poriadok v dokumentácii a vaše zariadenia majú platné revízie.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Čo inšpektori kontrolujú v oblasti VTZ?</h2>
      <p className="mb-6">Inšpektor práce sa zameriava predovšetkým na to, či máte <strong className="text-white">platné revízne správy</strong> pre všetky vyhradené technické zariadenia, ktoré prevádzkujete. Kontroluje aj to, či ich prevádzkujú osoby s potrebnou odbornou spôsobilosťou a či dodržiavate lehoty odborných prehliadok a skúšok.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Dokumenty, ktoré musíte mať pripravené</h2>
      <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08] flex flex-col gap-3">
        {['Platné revízne správy všetkých VTZ (elektrické, plynové, tlakové, zdvíhacie)','Sprievodná dokumentácia zariadení (pasporty, návody)','Evidencia vyhradených technických zariadení','Doklady o odbornej spôsobilosti obsluhy (preukazy, osvedčenia)','Záznamy o školeniach zamestnancov','Prevádzkové poriadky a predpisy','Záznamy o odstránení nedostatkov z predchádzajúcich revízií'].map((t,i)=>
          <div key={i} className="flex items-start gap-3 text-sm"><span className="font-mono text-xs font-bold mt-0.5 shrink-0" style={{color:['#00d4ff','#ff2d6b','#8b5cf6','#00e676'][i%4]}}>{String(i+1).padStart(2,'0')}</span>{t}</div>
        )}
      </div>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Najčastejšie nedostatky</h2>
      <p className="mb-6">Z praxe vieme, že najčastejšie nedostatky sú: <strong className="text-white">expirované revízne správy</strong> (prevádzkovateľ zabudol na lehotu), chýbajúce doklady o školení obsluhy, neodstránené nedostatky z predchádzajúcich revízií a chýbajúca evidencia VTZ. Všetky tieto problémy sa dajú jednoducho predísť pravidelnými revíziami a dobrým systémom evidencie.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Aké pokuty hrozia?</h2>
      <p className="mb-6">Za porušenie predpisov BOZP môže inšpektorát práce uložiť pokutu <strong className="text-[#ff2d6b]">do 100 000 €</strong>. Pri závažných nedostatkoch — napríklad prevádzkovanie zariadenia bez akejkoľvek revízie — môže inšpektorát nariadiť aj <strong className="text-white">zastavenie prevádzky</strong> zariadenia až do vykonania revízie.</p>
      <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 mt-10">
        <h3 className="text-lg font-bold text-white mb-2">Nechajte si skontrolovať dokumentáciu</h3>
        <p className="text-sm text-gray-400">Skontrolujeme vám stav revízií, pomôžeme s chýbajúcou dokumentáciou a zabezpečíme všetky potrebné revízie. Zavolajte na <a href="tel:+421952352669" className="text-[#00d4ff] font-bold no-underline">+421 952 352 669</a>.</p>
      </div>
      <BlogServiceLinksAll />
    </div></Reveal></div></section>
    <CTASection />
  </>);
}
