import { BlogServiceLink } from '@/components/BlogServiceLinks';
import { BreadcrumbJsonLd, BlogPostingJsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kedy potrebujete revíziu elektrickej inštalácie? | Alpha Revízie',
  description: 'Revízia elektrickej inštalácie v byte, dome aj firme. Aké sú zákonné lehoty, čo kontroluje revízny technik a koľko stojí revízia elektriky na Slovensku.',
};

export default function Article() {
  const jsonLd = <><BreadcrumbJsonLd items={[{name:"Domov",url:"https://alpharevizie.sk"},{name:"Blog",url:"https://alpharevizie.sk/blog"},{name:"Revízia elektrickej inštalácie",url:"https://alpharevizie.sk/blog/revizia-elektrickej-instalacie"}]} /><BlogPostingJsonLd title="Kedy potrebujete revíziu elektrickej inštalácie?" description="Revízia elektrickej inštalácie v byte, dome aj firme." date="2026-03-15" url="https://alpharevizie.sk/blog/revizia-elektrickej-instalacie" /></>;
  return (
    <>
      <section className="bg-[#111] pt-36 pb-16 px-8">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <Link href="/blog" className="text-[#00d4ff] text-sm font-medium no-underline hover:underline mb-6 inline-block">← Späť na blog</Link>
            <span className="inline-flex font-mono text-[0.6rem] uppercase tracking-widest py-1 px-2.5 rounded font-semibold mb-4 bg-[rgba(0,212,255,0.12)] text-[#00d4ff]">Elektrické zariadenia</span>
            <h1 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black tracking-tight mb-4 text-white leading-tight">Kedy potrebujete revíziu elektrickej inštalácie?</h1>
            <p className="text-gray-500 text-sm font-mono">15. marca 2026 · 5 min čítania</p>
          </Reveal>
        </div>
      </section>
      <section className="py-16 px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <div className="prose-dark text-gray-300 leading-8 text-[0.95rem]">
              <p className="text-lg text-gray-300 leading-8 mb-6">Máte byt, rodinný dom alebo firmu? Tak by ste mali vedieť, že <strong className="text-white">revízia elektrickej inštalácie je zo zákona povinná</strong>. Nejde len o nejaký papier do šuflíka — ide o bezpečnosť vašej rodiny, zamestnancov a vášho majetku.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Čo je vlastne revízia elektrickej inštalácie?</h2>
              <p className="mb-6">Revízia elektrickej inštalácie je odborná prehliadka a odborná skúška, ktorú vykonáva <strong className="text-white">revízny technik s platným osvedčením</strong>. Technik skontroluje stav vašej elektroinštalácie — od rozvádzača, cez káble, zásuvky, ističe, až po uzemnenie. Súčasťou revízie sú aj merania — izolačný odpor, impedancia slučky, odpor uzemnenia a ďalšie parametre podľa technických noriem.</p>
              <p className="mb-6">Po vykonaní revízie dostanete <strong className="text-white">revíznu správu s okrúhlou pečiatkou revízneho technika</strong>. Tento dokument je váš dôkaz, že elektroinštalácia je bezpečná a spĺňa požiadavky predpisov.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Aké sú lehoty revízií elektrickej inštalácie?</h2>
              <p className="mb-4">Lehoty sú presne stanovené vo <strong className="text-[#00d4ff]">vyhláške č. 508/2009 Z. z.</strong>, príloha č. 8. Závisia od druhu prostredia:</p>
              <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08]">
                <div className="flex justify-between py-3 border-b border-white/5"><span>Byty a rodinné domy (bez nebezpečenstva)</span><span className="font-mono text-[#00d4ff] font-bold">5 rokov</span></div>
                <div className="flex justify-between py-3 border-b border-white/5"><span>Kancelárie, obchody, školy</span><span className="font-mono text-[#00d4ff] font-bold">5 rokov</span></div>
                <div className="flex justify-between py-3 border-b border-white/5"><span>Výrobné prevádzky (podľa prostredia)</span><span className="font-mono text-[#ff2d6b] font-bold">2-5 rokov</span></div>
                <div className="flex justify-between py-3 border-b border-white/5"><span>Priestory s nebezpečenstvom výbuchu</span><span className="font-mono text-[#ff2d6b] font-bold">2 roky</span></div>
                <div className="flex justify-between py-3"><span>Stavenisko, dočasné zariadenia</span><span className="font-mono text-[#ff2d6b] font-bold">6 mesiacov</span></div>
              </div>
              <p className="text-xs text-gray-500 mt-2 mb-6">Lehota závisí od druhu objektu (príloha č. 8, tabuľka A) a vonkajších vplyvov (tabuľka B). Použije sa kratšia z oboch lehôt.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Kedy potrebujete východiskovú revíziu?</h2>
              <p className="mb-6">Východisková revízia sa robí <strong className="text-white">pred prvým zapojením novej alebo rekonštruovanej elektroinštalácie</strong>. Ak ste stavali dom, robili rekonštrukciu bytu, menili elektrický rozvádzač alebo pridávali nové obvody — potrebujete východiskovú revíziu ešte predtým, než elektriku zapojíte.</p>
              <p className="mb-6">Bez východiskovej revízie vám energetická spoločnosť nesmie pripojiť elektrinu. A ak by ste elektriku zapojili bez revízie a niečo sa stalo — poistka, skrat, požiar — poisťovňa vám nič nepreplatí.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Čo ak nemám revíziu?</h2>
              <p className="mb-6">Ak nemáte platnú revíziu a príde kontrola z <strong className="text-white">inšpektorátu práce</strong>, hrozí vám pokuta. Podľa § 19 zákona č. 124/2006 Z. z. môže inšpektorát uložiť pokutu <strong className="text-[#ff2d6b]">až do výšky 100 000 €</strong>. A ak by sa na nezrevídovanej elektroinštalácii stal úraz, zodpovedáte za to aj trestnoprávne.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Koľko stojí revízia elektriky?</h2>
              <p className="mb-6">Cena závisí od veľkosti objektu a rozsahu inštalácie. Pre bežný byt sa pohybuje od 80 do 150 €, pre rodinný dom od 120 do 250 €. Pre firmy a väčšie prevádzky sa cena stanovuje individuálne podľa rozsahu. Zavolajte nám a dohodneme cenu vopred — žiadne prekvapenia.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Revízia bleskozvodu</h2>
              <p className="mb-6">Ak máte na streche hromozvod (bleskozvod), aj ten podlieha pravidelnej revízii. Lehota je zvyčajne 2 až 4 roky podľa druhu objektu. Revízia bleskozvodu sa robí podľa normy STN 62305 a zahŕňa vizuálnu kontrolu aj meranie prechodového odporu uzemnenia.</p>

              <div className="bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.2)] rounded-2xl p-6 mt-10">
                <h3 className="text-lg font-bold text-white mb-2">Potrebujete revíziu elektriky?</h3>
                <p className="text-sm text-gray-400 mb-4">Zavolajte nám na <a href="tel:+421952352669" className="text-[#00d4ff] font-bold no-underline">+421 952 352 669</a> alebo napíšte na <a href="mailto:office@alpharevizie.sk" className="text-[#00d4ff] no-underline">office@alpharevizie.sk</a>. Revízie robíme po celom Slovensku.</p>
              </div>
              <BlogServiceLink slug="elektricke-zariadenia" />
            </div>
          </Reveal>
        </div>
      </section>
    <CTASection />
    </>
  );
}
