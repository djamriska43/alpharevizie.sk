import { BreadcrumbJsonLd, BlogPostingJsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';
import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Revízia plynového kotla — čo zahŕňa a prečo ju neodkladať | Alpha Revízie', description: 'Revízia plynového kotla je povinná každé 3 roky. Kontrola každý rok. Čo presne kontroluje technik a prečo to neodsúvať?', alternates: { canonical: '/blog/revizia-plynoveho-kotla' },
};
export default function Article() {
  return (<>
      <BreadcrumbJsonLd items={[{name:"Domov",url:"https://alpharevizie.sk"},{name:"Blog",url:"https://alpharevizie.sk/blog"},{name:"Revízia plynového kotla",url:"https://alpharevizie.sk/blog/revizia-plynoveho-kotla"}]} />
      <BlogPostingJsonLd title="Revízia plynového kotla — čo zahŕňa a prečo ju neodkladať?" description="Revízia plynového kotla je povinná každé 3 roky." date="2026-03-10" url="https://alpharevizie.sk/blog/revizia-plynoveho-kotla" />
    <section className="bg-[#111] pt-36 pb-16 px-8"><div className="max-w-[800px] mx-auto"><Reveal>
      <Link href="/blog" className="text-[#ff2d6b] text-sm font-medium no-underline hover:underline mb-6 inline-block">← Späť na blog</Link>
      <span className="inline-flex font-mono text-[0.6rem] uppercase tracking-widest py-1 px-2.5 rounded font-semibold mb-4 bg-[rgba(255,45,107,0.12)] text-[#ff2d6b]">Plynové zariadenia</span>
      <h1 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black tracking-tight mb-4 text-white leading-tight">Revízia plynového kotla — čo zahŕňa a prečo ju neodkladať?</h1>
      <p className="text-gray-500 text-sm font-mono">10. marca 2026 · 5 min čítania</p>
    </Reveal></div></section>
    <section className="py-16 px-8 bg-[#0a0a0a] border-t border-white/5"><div className="max-w-[800px] mx-auto"><Reveal><div className="text-gray-300 leading-8 text-[0.95rem]">
      <p className="text-lg mb-6">Plynový kotol je srdcom vášho vykurovania. Keď funguje správne, ani si ho nevšimnete. Ale keď sa niečo pokazí — a vy nemáte platnú revíziu — <strong className="text-white">problémy sa začnú kopíc</strong>. Poďme sa pozrieť na to, čo presne revízia zahŕňa, kedy ju treba robiť a prečo to naozaj neodkladať.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Rozdiel medzi kontrolou a revíziou</h2>
      <p className="mb-6">Ľudia si často zamieňajú dva pojmy. <strong className="text-white">Odborná prehliadka (kontrola)</strong> sa robí <strong className="text-[#ff2d6b]">každý rok</strong>. Je to vizuálna kontrola stavu kotla, kontrola tesnosti plynových spojov, kontrola odvodu spalín a celkového stavu zariadenia. <strong className="text-white">Odborná skúška (revízia)</strong> sa robí <strong className="text-[#ff2d6b]">každé 3 roky</strong>. Je komplexnejšia — zahŕňa aj funkčné skúšky, merania a podrobnejšiu kontrolu bezpečnostných prvkov.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Čo presne kontroluje revízny technik?</h2>
      <p className="mb-4">Pri revízii plynového kotla technik skontroluje:</p>
      <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08] flex flex-col gap-2">
        {['Tesnosť všetkých plynových spojov a prípojok','Stav horáka a výmenníka tepla','Funkčnosť bezpečnostných prvkov (termostat, poistný ventil)','Odvod spalín — komín, dymovod, prívod vzduchu','Stav regulačných prvkov a armatúr','Celkový technický stav kotla a jeho príslušenstva'].map((t,i)=>
          <div key={i} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#ff2d6b] shrink-0"/>{t}</div>
        )}
      </div>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Prečo je revízia kotla taká dôležitá?</h2>
      <p className="mb-6">Nie je to len o papieri. Unikajúci plyn môže spôsobiť výbuch. Nesprávny odvod spalín môže viesť k otrave oxidom uhoľnatým — tichým zabijakom, ktorého necítiť. Každý rok na Slovensku dochádza k prípadom otravy CO práve kvôli zanedbaným plynovým zariadeniam. <strong className="text-white">Pravidelná revízia vám môže doslova zachrániť život.</strong></p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">A čo poisťovňa?</h2>
      <p className="mb-6">Ak nemáte platnú revíziu plynového kotla a dôjde k poistnej udalosti (požiar, výbuch, vytopenie), <strong className="text-white">poisťovňa má právo odmietnuť poistné plnenie</strong>. Toto je jeden z najčastejších dôvodov zamietnutia poistných udalostí na Slovensku.</p>
      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Pre aké kotly platí povinnosť revízie?</h2>
      <p className="mb-6">Povinnosť sa vzťahuje na všetky plynové spotrebiče s výkonom <strong className="text-white">od 5 kW</strong>. To znamená prakticky každý bežný plynový kotol v domácnosti. Zariadenia do 0,5 MW patria do skupiny B podľa vyhlášky 508/2009 Z. z. Zariadenia nad 0,5 MW patria do skupiny A a podliehajú ešte prísnejšiemu režimu vrátane úradných skúšok.</p>
      <p className="mb-6">Plynové spotrebiče s výkonom <strong className="text-white">do 5 kW</strong> patria do <strong className="text-white">skupiny C</strong> podľa vyhlášky 508/2009 Z. z. Aj tie majú povinnosť kontroly, ale v zjednodušenom režime — lehoty a rozsah určuje prevádzkovateľ na základe návodu výrobcu a posúdenia rizík.</p>
      <div className="bg-[rgba(255,45,107,0.08)] border border-[rgba(255,45,107,0.2)] rounded-2xl p-6 mt-10">
        <h3 className="text-lg font-bold text-white mb-2">Potrebujete revíziu kotla?</h3>
        <p className="text-sm text-gray-400">Zavolajte nám na <a href="tel:+421952352669" className="text-[#ff2d6b] font-bold no-underline">+421 952 352 669</a>. Revízie plynových zariadení robíme po celom Slovensku.</p>
      </div>
    </div></Reveal></div></section>
    <CTASection />
  </>);
}
