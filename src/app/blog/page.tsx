import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Alpha Revízie | Odborné články o revíziách VTZ',
  description: 'Praktické informácie o revíziách vyhradených technických zariadení. Kedy treba revíziu kotla, elektriky, kompresora alebo výťahu?',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Blog — Alpha Revízie', description: 'Odborné články o revíziách VTZ.', url: 'https://alpharevizie.sk/blog', locale: 'sk_SK', type: 'website' },
};

const posts = [
  {slug:'revizia-elektrickej-instalacie',icon:'⚡',tag:'Elektrické',color:'#00d4ff',bg:'rgba(0,212,255,0.12)',title:'Kedy potrebujete revíziu elektrickej inštalácie?',desc:'Máte byt, dom alebo prevádzku? Zo zákona musíte mať pravidelnú revíziu elektriky. Aké sú lehoty a čo vám hrozí bez nej?',date:'15. marca 2026'},
  {slug:'revizia-plynoveho-kotla',icon:'🔥',tag:'Plynové',color:'#ff2d6b',bg:'rgba(255,45,107,0.12)',title:'Revízia plynového kotla — čo zahŕňa a prečo ju neodkladať?',desc:'Plynový kotol je srdcom kúrenia. Kedy treba revíziu, čo kontroluje revízny technik a prečo to neodsúvať na neskôr.',date:'10. marca 2026'},
  {slug:'revizia-kompresora',icon:'⚙️',tag:'Tlakové',color:'#8b5cf6',bg:'rgba(139,92,246,0.12)',title:'Kompresor v dielni — potrebuje revíziu?',desc:'Máte kompresor s tlakovou nádobou? Pravdepodobne spadá pod VTZ. Pozrite sa, aké sú vaše povinnosti.',date:'5. marca 2026'},
  {slug:'revizia-vysokozdvizneho-vozika',icon:'🏗️',tag:'Zdvíhacie',color:'#00e676',bg:'rgba(0,230,118,0.12)',title:'Revízia vysokozdvižného vozíka — lehoty a povinnosti',desc:'Vysokozdvižné vozíky patria medzi VTZ zdvíhacie. Aké sú lehoty odborných prehliadok a skúšok?',date:'28. februára 2026'},
  {slug:'vyhlaska-508-2009',icon:'⚖️',tag:'Legislatíva',color:'#fff',bg:'rgba(255,255,255,0.05)',title:'Vyhláška 508/2009 Z. z. — čo musí vedieť každý prevádzkovateľ',desc:'Kľúčový predpis pre VTZ na Slovensku. Rozdelenie zariadení, lehoty revízií a vaše zákonné povinnosti.',date:'20. februára 2026'},
  {slug:'kontrola-inspektorat-prace',icon:'📋',tag:'Praktické',color:'#fff',bg:'rgba(255,255,255,0.05)',title:'Ako sa pripraviť na kontrolu z inšpektorátu práce?',desc:'Kontrola z IP nemusí byť stresujúca. Tu je zoznam dokumentov a vecí, ktoré musíte mať pripravené.',date:'12. februára 2026'},
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:'Domov',url:'https://alpharevizie.sk'},{name:'Blog',url:'https://alpharevizie.sk/blog'}]} />
      <section className="bg-[#111] pt-36 pb-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />Blog</div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-4 gradient-text inline-block">Odborné články o revíziách VTZ</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[600px]">Praktické informácie a rady pre prevádzkovateľov technických zariadení.</p>
          </Reveal>
        </div>
      </section>
      <section className="py-20 px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p,i) => (
            <Reveal key={i} delay={(i%3)*0.1}>
              <Link href={`/blog/${p.slug}`} className="block rounded-2xl border border-white/[0.08] overflow-hidden hover:-translate-y-1.5 hover:border-white/[0.2] transition-all cursor-pointer bg-white/[0.03] no-underline group">
                <div className="h-[180px] bg-white/[0.04] flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500">{p.icon}</div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[0.6rem] uppercase tracking-widest py-1 px-2.5 rounded font-semibold" style={{background:p.bg,color:p.color}}>{p.tag}</span>
                    <span className="text-[0.6rem] text-gray-500 font-mono">{p.date}</span>
                  </div>
                  <h3 className="font-bold leading-snug mb-2 text-white group-hover:text-[#00d4ff] transition-colors">{p.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                  <span className="text-xs font-bold text-[#00d4ff]">Čítať článok →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
