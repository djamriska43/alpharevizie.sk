import { BreadcrumbJsonLd, BlogPostingJsonLd } from '@/components/JsonLd';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { CTASection } from '@/components/Widgets';
import { Metadata } from 'next';
export const metadata: Metadata = { title: 'Revízia priemyselnej brány — kedy je povinná? | Alpha Revízie', description: 'Máte sekcionálnu alebo rolovaciu bránu v hale? Ak má motorový pohon a výšku zdvihu nad 2,7 m, spadá pod VTZ a potrebuje pravidelnú revíziu.', alternates: { canonical: '/blog/revizia-priemyselnej-brany' },
  openGraph: { title: 'Revízia priemyselnej brány — kedy je povinná?', description: 'Sekcionálne a rolovacie brány s motorovým pohonom patria medzi VTZ zdvíhacie.', url: 'https://alpharevizie.sk/blog/revizia-priemyselnej-brany', locale: 'sk_SK', type: 'article' },
};
export default function Article() {
  return (<>
      <BreadcrumbJsonLd items={[{name:"Domov",url:"https://alpharevizie.sk"},{name:"Blog",url:"https://alpharevizie.sk/blog"},{name:"Revízia priemyselnej brány",url:"https://alpharevizie.sk/blog/revizia-priemyselnej-brany"}]} />
      <BlogPostingJsonLd title="Revízia priemyselnej brány — kedy je povinná?" description="Sekcionálne a rolovacie brány s motorovým pohonom a výškou zdvihu nad 2,7 m spadajú pod VTZ zdvíhacie." date="2026-04-06" url="https://alpharevizie.sk/blog/revizia-priemyselnej-brany" />
    <section className="bg-[#111] pt-36 pb-16 px-8"><div className="max-w-[800px] mx-auto"><Reveal>
      <Link href="/blog" className="text-[#00e676] text-sm font-medium no-underline hover:underline mb-6 inline-block">← Späť na blog</Link>
      <span className="inline-flex font-mono text-[0.6rem] uppercase tracking-widest py-1 px-2.5 rounded font-semibold mb-4 bg-[rgba(0,230,118,0.12)] text-[#00e676]">Zdvíhacie zariadenia</span>
      <h1 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black tracking-tight mb-4 text-white leading-tight">Revízia priemyselnej brány — kedy je povinná a čo všetko zahŕňa?</h1>
      <p className="text-gray-500 text-sm font-mono">6. apríla 2026 · 5 min čítania</p>
    </Reveal></div></section>
    <section className="py-16 px-8 bg-[#0a0a0a] border-t border-white/5"><div className="max-w-[800px] mx-auto"><Reveal><div className="text-gray-300 leading-8 text-[0.95rem]">
      <p className="text-lg mb-6">Sekcionálne brány, rolovacie brány, rýchlobežné brány — nájdete ich v každej výrobnej hale, sklade alebo logistickom centre. Väčšina prevádzkovateľov vie, že žeriav alebo výťah potrebuje revíziu. Ale <strong className="text-white">vedeli ste, že aj vaša priemyselná brána môže byť vyhradené technické zariadenie</strong> a podlieha pravidelným odborným prehliadkam a skúškam?</p>

      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Kedy brána spadá pod VTZ?</h2>
      <p className="mb-6">Podľa <strong className="text-[#00e676]">vyhlášky č. 508/2009 Z. z.</strong>, príloha č. 1, II. časť (zdvíhacie zariadenia), skupina B, písmeno f), medzi vyhradené technické zariadenia zdvíhacie patrí:</p>
      <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08]">
        <p className="text-white font-bold text-base leading-relaxed">„Zvislá posuvná brána s motorovým pohonom s výškou zdvihu nad 2,7 m"</p>
      </div>
      <p className="mb-6">Aby brána spadala pod VTZ, musia byť splnené <strong className="text-white">všetky tri podmienky súčasne</strong>:</p>
      <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08] flex flex-col gap-3">
        {['Zvislá posuvná — brána sa otvára smerom nahor (sekcionálna, rolovacia, zdvíhacia)','Motorový pohon — brána má elektrický alebo hydraulický pohon','Výška zdvihu nad 2,7 m — výška otvoru, ktorý brána uzatvára, presahuje 2,7 metra'].map((t,i)=>
          <div key={i} className="flex items-start gap-3 text-sm"><span className="font-mono text-xs font-bold mt-0.5 shrink-0 text-[#00e676]">{String(i+1).padStart(2,'0')}</span><span>{t}</span></div>
        )}
      </div>
      <p className="mb-6">V praxi to znamená väčšinu priemyselných brán v halách, skladoch a logistických centrách. Bežné brány v rodinných domoch s výškou do 2,5 m pod VTZ zdvíhacie <strong className="text-white">nespadajú</strong>.</p>

      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Aké typy brán sem patria?</h2>
      <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08] flex flex-col gap-3">
        {['Sekcionálne priemyselné brány — najčastejší typ v halách a skladoch','Rolovacie brány (rolety) — navíjajú sa na hriadeľ nad otvorom','Rýchlobežné brány — používané v logistike a potravinárskom priemysle','Zvislé posuvné brány — klasické priemyselné zdvíhacie brány'].map((t,i)=>
          <div key={i} className="flex items-center gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#00e676] shrink-0"/>{t}</div>
        )}
      </div>
      <p className="mb-6"><strong className="text-white">Nepatria sem:</strong> horizontálne posuvné brány (odsúvacie do strany), krídlové brány a závory — tie sa neotvárajú zvisle, a preto nespadajú pod túto kategóriu VTZ.</p>

      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Čo kontroluje revízny technik?</h2>
      <p className="mb-6">Pri odbornej prehliadke a skúške zvislej posuvnej brány revízny technik skontroluje predovšetkým:</p>
      <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08] flex flex-col gap-3">
        {['Celkový technický stav brány — konštrukciu, panely, vedenie, tesnenia','Pohonný mechanizmus — motor, prevodovku, remeň alebo reťaz, ložiská','Bezpečnostné prvky — fotobunku, svetelnú záclonu, bezpečnostnú hranu','Vyvažovacie pružiny — stav, napnutie, opotrebenie','Riadiacu jednotku — funkčnosť ovládania, koncové spínače, núdzové ovládanie','Laná a nosné prvky — stav oceľových lán, kladiek a upevnení','Označenie a dokumentáciu — štítok, návod, sprievodná dokumentácia'].map((t,i)=>
          <div key={i} className="flex items-start gap-3 text-sm"><span className="font-mono text-xs font-bold mt-0.5 shrink-0" style={{color:['#00d4ff','#ff2d6b','#8b5cf6','#00e676'][i%4]}}>{String(i+1).padStart(2,'0')}</span>{t}</div>
        )}
      </div>

      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Aké sú lehoty revízií?</h2>
      <p className="mb-6">Zvislé posuvné brány s motorovým pohonom patria do <strong className="text-white">skupiny B</strong> VTZ zdvíhacích zariadení. Podľa prílohy č. 7 vyhlášky 508/2009 Z. z. sú lehoty odborných prehliadok aj odborných skúšok pre brány stanovené ako <strong className="text-[#00e676]">TPV — podľa technických podmienok výrobcu</strong>.</p>
      <div className="bg-white/[0.04] rounded-2xl p-6 mb-6 border border-white/[0.08]">
        <div className="flex justify-between py-3 border-b border-white/5"><span>Odborná prehliadka</span><span className="font-mono text-[#00e676] font-bold">podľa návodu výrobcu</span></div>
        <div className="flex justify-between py-3 border-b border-white/5"><span>Odborná skúška</span><span className="font-mono text-[#00e676] font-bold">podľa návodu výrobcu</span></div>
        <div className="flex justify-between py-3"><span>Opakovaná úradná skúška</span><span className="font-mono text-gray-500 font-bold">nevyžaduje sa</span></div>
      </div>
      <p className="mb-6">Čo to znamená v praxi? Lehoty určuje <strong className="text-white">výrobca brány v návode na obsluhu a údržbu</strong>. Väčšina výrobcov priemyselných brán (napr. Hörmann, Crawford, Novoferm) predpisuje kontrolu minimálne <strong className="text-white">1× ročne</strong>, pri intenzívnom používaní aj častejšie. Revíziu vykonáva revízny technik zdvíhacích zariadení.</p>

      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">Prečo je revízia brány dôležitá?</h2>
      <p className="mb-6">Priemyselná brána sa otvára a zatvára aj desiatky krát denne. Pod ňou prechádzajú ľudia, vozíky, autá. Pokazený bezpečnostný prvok, prasknuté lano alebo opotrebovaná pružina môžu spôsobiť pád brány — a to sú stovky kilogramov. Každý rok na Slovensku dochádza k úrazom spôsobeným práve poruchami priemyselných brán.</p>
      <p className="mb-6">Okrem bezpečnosti ide aj o <strong className="text-white">zákonnú povinnosť</strong>. Podľa § 13 zákona č. 124/2006 Z. z. o BOZP je každý prevádzkovateľ povinný zabezpečiť pravidelné odborné prehliadky a skúšky VTZ. Za nesplnenie hrozí pokuta od inšpektorátu práce <strong className="text-[#ff2d6b]">do 100 000 €</strong>.</p>

      <h2 className="text-xl font-extrabold text-white mt-10 mb-4">A čo brány pod 2,7 m?</h2>
      <p className="mb-6">Ak máte bránu s výškou zdvihu do 2,7 m, nespadá pod VTZ zdvíhacie. To ale neznamená, že nemáte žiadne povinnosti. Podľa <strong className="text-white">nariadenia vlády SR č. 392/2006 Z. z.</strong> o minimálnych bezpečnostných požiadavkách pri používaní pracovných prostriedkov musí prevádzkovateľ zabezpečiť pravidelné kontroly stavu každého pracovného prostriedku — vrátane brán s motorovým pohonom. Lehoty a rozsah kontrol stanovuje prevádzkovateľ na základe návodu výrobcu a posúdenia rizík.</p>

      <div className="bg-[rgba(0,230,118,0.08)] border border-[rgba(0,230,118,0.2)] rounded-2xl p-6 mt-10">
        <h3 className="text-lg font-bold text-white mb-2">Potrebujete revíziu priemyselnej brány?</h3>
        <p className="text-sm text-gray-400">Zavolajte na <a href="tel:+421952352669" className="text-[#00e676] font-bold no-underline">+421 952 352 669</a>. Posúdime, či vaša brána spadá pod VTZ, a zabezpečíme odbornú prehliadku aj skúšku.</p>
      </div>
    </div></Reveal></div></section>
    <CTASection />
  </>);
}
