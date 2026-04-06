import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import { CTASection } from '@/components/Widgets';
import { services } from '@/lib/services';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

const svcKeys = ['ele', 'plyn', 'tlak', 'zdvih'] as const;
const neonColors = { ele: '#00d4ff', plyn: '#ff2d6b', tlak: '#8b5cf6', zdvih: '#00e676' };
const bgColors = { ele: 'rgba(0,212,255,0.12)', plyn: 'rgba(255,45,107,0.12)', tlak: 'rgba(139,92,246,0.12)', zdvih: 'rgba(0,230,118,0.12)' };
const bgColorsStrong = { ele: 'rgba(0,212,255,0.2)', plyn: 'rgba(255,45,107,0.2)', tlak: 'rgba(139,92,246,0.2)', zdvih: 'rgba(0,230,118,0.2)' };
const procColors = ['#00d4ff', '#ff2d6b', '#00e676'];

const whyItems = [
  { icon: '🎓', svg: null, title: 'Certifikovaní RT na všetky VTZ', desc: 'Revízni technici s oprávneniami na elektrické, plynové, tlakové aj zdvíhacie zariadenia. S dlhoročnými skúsenosťami v odbore.', c: 'ele' as const },
  { icon: '📄', title: 'Revízna správa s pečiatkou RT', desc: 'Po vykonaní revízie vám do niekoľkých dní dodáme kompletnú revíznu správu s okrúhlou pečiatkou revízneho technika — pripravenú na predloženie kontrolným orgánom.', c: 'plyn' as const },
  { icon: '🇸🇰', title: 'Po celom Slovensku', desc: 'Sídlime v Martine, ale prichádzame za vami kamkoľvek na Slovensko. Bratislava, Žilina, Banská Bystrica, Košice — žiadny problém.', c: 'tlak' as const },
  { icon: '⚖️', title: 'Presne podľa legislatívy', desc: 'Všetko robíme striktne podľa zákona č. 124/2006 Z. z. o BOZP a vyhlášky č. 508/2009 Z. z. Žiadne skratky, žiadne kompromisy.', c: 'zdvih' as const },
];

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Domov', url: 'https://alpharevizie.sk' }]} />

      {/* HERO */}
      <section className="min-h-screen bg-[#111] relative overflow-hidden">
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]"><svg viewBox="285 136 227 211" className="w-[clamp(400px,50vw,700px)] h-auto" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="m502.5 339.9h-29.1l-75.5-128.5 14.7-24.6z"/><path fill="white" d="m370.1 258.1l48.1 81.7h29l-62.5-106.2z"/><path fill="white" d="m402.4 169.4l-14.5-24.6-14.6 24.6-76.2 127.4h29.2l61.4-102.8z"/></svg></div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 pt-36 pb-20 relative z-10">
          <div>
            <h1 className="text-[clamp(2.8rem,5vw,4.2rem)] font-black leading-[1.05] tracking-tighter mb-6 text-white animate-fadeUp" style={{animationDelay:'0.1s'}}>Revízie technických zariadení po celom Slovensku</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[500px] mb-10 animate-fadeUp" style={{animationDelay:'0.2s'}}>Nemusíte hľadať štyroch rôznych technikov. Pokrývame elektrické, plynové, tlakové aj zdvíhacie zariadenia na celom Slovensku.</p>
            <div className="flex gap-4 flex-wrap animate-fadeUp" style={{animationDelay:'0.3s'}}>
              <Link href="/kontakt" className="inline-flex items-center gap-2 bg-[#00d4ff] text-black py-4 px-8 rounded-full font-bold no-underline shadow-[0_4px_20px_rgba(0,212,255,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,212,255,0.4)] transition-all">Napíšte nám</Link>
              <a href="#services" className="inline-flex items-center gap-2 bg-transparent text-white py-4 px-8 rounded-full font-semibold no-underline border-2 border-white/20 hover:border-white/50 transition-all">Pozrieť služby ↓</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 animate-fadeUp" style={{animationDelay:'0.3s'}}>
            {svcKeys.map((key) => { const s = services[key]; return (
              <Link key={key} href={`/${s.slug}`} className={`bg-white/[0.05] border border-white/10 rounded-2xl p-6 no-underline cursor-pointer transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 hover:border-transparent hover:bg-white/[0.08] glow-${key}`}>
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-2xl mb-4 border-2"  style={{background:bgColors[key],borderColor:neonColors[key]+'50',boxShadow:`0 0 20px ${bgColors[key]}`}}>{s.icon}</div>
                <div className="font-bold text-base mb-1 text-white">{s.tag.split(' ')[0]}</div>
                <div className="text-xs text-gray-400 leading-snug">{s.cardDesc.slice(0,50)}</div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" style={{background:neonColors[key]}} />
              </Link>
            ); })}
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="bg-[#0a0a0a] py-16 px-8 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <Reveal delay={0}><Counter target={500} suffix="+" label="Vykonaných revízií" color="#00d4ff" /></Reveal>
          <Reveal delay={0.1}><Counter suffix="SK" label="Celé Slovensko" color="#ff2d6b" /></Reveal>
          <Reveal delay={0.2}><Counter suffix="24/7" label="Sme k dispozícii" color="#8b5cf6" /></Reveal>
          <Reveal delay={0.3}><Counter target={100} suffix="%" label="Spokojnosť klientov" color="#00e676" /></Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#111] py-28 px-8 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />Naše služby</div>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold tracking-tight leading-tight text-white mb-4">Štyri druhy VTZ.<br />Jedna firma. Žiadne komplikácie.</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-[520px] mb-14">Kompletné odborné prehliadky a odborné skúšky vyhradených technických zariadení podľa vyhlášky č. 508/2009 Z. z.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {svcKeys.map((key, i) => { const s = services[key]; return (
              <Reveal key={key} delay={i * 0.1}>
                <Link href={`/${s.slug}`} className={`block bg-white/[0.04] rounded-2xl p-8 border border-white/[0.08] no-underline transition-all duration-400 relative overflow-hidden group cursor-pointer hover:-translate-y-1.5 hover:border-transparent glow-${key}`}>
                  <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center text-2xl mb-6 border-2" style={{background:bgColors[key],borderColor:neonColors[key]+'50',boxShadow:`0 0 20px ${bgColors[key]}`}}>{s.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{s.tag}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{s.cardDesc}</p>
                  <div className="flex flex-col gap-1.5 mb-6">
                    {s.cardItems.map((item, j) => (
                      <span key={j} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center text-[0.55rem] font-bold text-white shrink-0" style={{background:neonColors[key]}}>✓</span>{item}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold" style={{color:neonColors[key]}}>Viac informácií →</span>
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" style={{background:neonColors[key]}} />
                </Link>
              </Reveal>
            ); })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-28 px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />Prečo práve my</div>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold tracking-tight leading-tight text-white mb-4">Kompletné revízie VTZ.<br />Bez zbytočného hľadania.</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-[520px]">Nemusíte volať štyrom rôznym firmám. U nás vybavíte revíziu všetkých štyroch druhov VTZ na jednom mieste.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {whyItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`text-center p-8 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:-translate-y-1 transition-all group glow-icon-${item.c}`}>
                  <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center mx-auto mb-5 transition-shadow duration-300 glow-target border-2" style={{background:bgColorsStrong[item.c],borderColor:neonColors[item.c]+'50',boxShadow:`0 0 25px ${bgColorsStrong[item.c]}`}}>{item.svg || item.icon}</div>
                  <h3 className="font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 px-8 bg-[#111] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />Ako to prebieha</div>
            <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] font-extrabold tracking-tight leading-tight text-white mb-4">Tri jednoduché kroky</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-[520px]">Od prvého telefonátu po hotovú revíznu správu.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {[
              {num:'01',title:'Ozvite sa nám',text:'Zavolajte na <strong class="text-white">+421 952 352 669</strong> alebo napíšte na <strong class="text-white">office@alpharevizie.sk</strong>. Povedzte nám, aké zariadenie potrebujete zrevídovať.'},
              {num:'02',title:'Dohodneme termín a cenu',text:'Ozveme sa vám do 24 hodín. Dohodneme dátum, rozsah a cenu. Žiadne skryté poplatky.'},
              {num:'03',title:'Vykonáme revíziu',text:'Prídeme na miesto, vykonáme odbornú prehliadku a skúšku. Do niekoľkých dní vám dodáme kompletnú revíznu správu <strong class="text-white">s okrúhlou pečiatkou revízneho technika</strong> — pripravenú na predloženie pri akejkoľvek kontrole.'},
            ].map((step,i) => (
              <Reveal key={i} delay={i*0.1}>
                <div className="text-center p-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:-translate-y-1 hover:bg-white/[0.05] transition-all">
                  <div className="font-mono text-6xl font-bold leading-none mb-4" style={{color:procColors[i]}}>{step.num}</div>
                  <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{__html:step.text}} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL */}
      <section className="bg-[#0a0a0a] py-16 px-8 border-t border-white/5">
        <Reveal>
          <div className="max-w-[900px] mx-auto flex gap-8 items-start max-md:flex-col">
            <div className="w-14 h-14 shrink-0 bg-[rgba(255,45,107,0.15)] rounded-2xl flex items-center justify-center text-2xl border border-[rgba(255,45,107,0.2)]">⚠️</div>
            <div>
              <h3 className="text-xl font-extrabold text-white mb-3">Revízie VTZ sú zo zákona povinné</h3>
              <p className="text-sm text-gray-400 leading-7">Podľa <strong className="text-[#ff2d6b] font-extrabold">§ 13 zákona č. 124/2006 Z. z.</strong> o bezpečnosti a ochrane zdravia pri práci je každý prevádzkovateľ povinný zabezpečiť pravidelné odborné prehliadky a odborné skúšky vyhradených technických zariadení v lehotách stanovených <strong className="text-[#ff2d6b] font-extrabold">vyhláškou č. 508/2009 Z. z.</strong> Nesplnenie tejto povinnosti je porušenie predpisov BOZP, za ktoré môže inšpektorát práce uložiť <strong className="text-[#ff2d6b] font-extrabold">pokutu do výšky 100 000 €</strong>. V prípade pracovného úrazu na nezrevídovanom zariadení hrozí aj trestnoprávna zodpovednosť.</p>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
