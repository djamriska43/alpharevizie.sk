import Reveal from '@/components/Reveal';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Blog — Alpha Revízie' };

const posts = [
  {icon:'⚡',tag:'Elektrické',color:'#00d4ff',bg:'rgba(0,212,255,0.08)',title:'Kedy potrebujete revíziu elektrickej inštalácie v byte?',desc:'Ak bývate v byte alebo dome, mali by ste vedieť, že revízia elektriky nie je len formalita...'},
  {icon:'🔥',tag:'Plynové',color:'#ff2d6b',bg:'rgba(255,45,107,0.08)',title:'Revízia plynového kotla — čo zahŕňa a prečo ju neodkladať?',desc:'Plynový kotol je srdcom vášho kúrenia. Pravidelná revízia nie je len povinnosť...'},
  {icon:'⚙️',tag:'Tlakové',color:'#8b5cf6',bg:'rgba(139,92,246,0.08)',title:'Kompresor v dielni — potrebuje revíziu?',desc:'Ak máte kompresor s tlakovou nádobou, pravdepodobne spadá pod VTZ...'},
  {icon:'🏗️',tag:'Zdvíhacie',color:'#00e676',bg:'rgba(0,230,118,0.08)',title:'Revízia vysokozdvižného vozíka — lehoty a povinnosti',desc:'Vysokozdvižné vozíky patria medzi VTZ zdvíhacie skupiny B...'},
  {icon:'⚖️',tag:'Legislatíva',color:'#444',bg:'#f5f5f5',title:'Vyhláška 508/2009 Z. z. — čo musí vedieť každý prevádzkovateľ',desc:'Táto vyhláška je ústredným predpisom pre VTZ na Slovensku...'},
  {icon:'📋',tag:'Praktické',color:'#444',bg:'#f5f5f5',title:'Ako sa pripraviť na kontrolu z inšpektorátu práce?',desc:'Kontrola z IP nemusí byť stresujúca, ak máte poriadok v dokumentácii...'},
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#111] pt-36 pb-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />Blog</div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-4 text-white">Odborné články o revíziách VTZ</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[600px]">Praktické informácie a rady pre prevádzkovateľov technických zariadení.</p>
          </Reveal>
        </div>
      </section>
      <section className="py-20 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p,i) => (
            <Reveal key={i} delay={(i%4)*0.1}>
              <div className="rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all cursor-pointer">
                <div className="h-[180px] bg-gray-100 flex items-center justify-center text-4xl">{p.icon}</div>
                <div className="p-6">
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest py-1 px-2 rounded font-semibold inline-block mb-3" style={{background:p.bg,color:p.color}}>{p.tag}</span>
                  <h3 className="font-bold leading-snug mb-2">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
