import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt — Alpha Revízie | Objednajte si revíziu VTZ',
  description: 'Kontaktujte nás pre revízie vyhradených technických zariadení. Telefón +421 952 352 669, e-mail office@alpharevizie.sk. Pôsobíme po celom Slovensku.',
  alternates: { canonical: '/kontakt' },
  openGraph: { title: 'Kontakt — Alpha Revízie', description: 'Objednajte si revíziu VTZ.', url: 'https://alpharevizie.sk/kontakt', locale: 'sk_SK', type: 'website' },
};

const contactItems = [
  {icon:'☎',title:'Telefón',color:'#00d4ff',bg:'rgba(0,212,255,0.15)',border:'rgba(0,212,255,0.3)',href:'tel:+421952352669',text:'+421 952 352 669'},
  {icon:'✉',title:'E-mail',color:'#ff2d6b',bg:'rgba(255,45,107,0.15)',border:'rgba(255,45,107,0.3)',href:'mailto:office@alpharevizie.sk',text:'office@alpharevizie.sk'},
  {icon:'📍',title:'Adresa',color:'#8b5cf6',bg:'rgba(139,92,246,0.15)',border:'rgba(139,92,246,0.3)',href:null,text:'Jeleňova 4154/9, 036 01 Martin'},
  {icon:'🏢',title:'Fakturačné údaje',color:'#00e676',bg:'rgba(0,230,118,0.15)',border:'rgba(0,230,118,0.3)',href:null,text:'Alpha Safety s.r.o. · IČO: 54 610 982 · DIČ: 2121731810 · IČ DPH: SK2121731810'},
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:'Domov',url:'https://alpharevizie.sk'},{name:'Kontakt',url:'https://alpharevizie.sk/kontakt'}]} />
      <section className="bg-[#111] pt-36 pb-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />Kontakt</div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-4 gradient-text inline-block">Ozvite sa nám</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[600px]">Zavolajte, napíšte e-mail alebo vyplňte formulár. Ozveme sa vám do 24 hodín.</p>
          </Reveal>
        </div>
      </section>
      <section className="py-20 px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            {contactItems.map((item,i) => (
              <Reveal key={i} delay={i*0.1}>
                <div className="flex gap-4 items-start group hover:translate-x-1 transition-transform">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl shrink-0 border transition-shadow" style={{background:item.bg,borderColor:item.border}}>{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 text-white">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-semibold no-underline" style={{color:item.color}}>{item.text}</a>
                    ) : (
                      <p className="text-sm text-gray-300">{item.text}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
