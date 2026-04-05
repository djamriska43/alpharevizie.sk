'use client';
import Reveal from '@/components/Reveal';

export default function ContactPage() {
  return (
    <section className="pt-32 pb-16 px-8">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="flex items-center gap-3 text-gray-400 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-5 h-[1.5px] bg-gray-300" />Kontakt
          </div>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-4">Ozvite sa nám</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-[600px] mb-12">Zavolajte, napíšte e-mail alebo vyplňte formulár. Ozveme sa vám do 24 hodín.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            {[
              { icon: '☎', title: 'Telefón', content: <a href="tel:+421952352669" className="text-black font-semibold no-underline">+421 952 352 669</a> },
              { icon: '✉', title: 'E-mail', content: <a href="mailto:office@alpharevizie.sk" className="text-black font-semibold no-underline">office@alpharevizie.sk</a> },
              { icon: '📍', title: 'Adresa', content: <span>Jeleňova 4154/9<br />036 01 Martin</span> },
              { icon: '🏢', title: 'Fakturačné údaje', content: <span>Alpha Safety s.r.o.<br />IČO: 54 610 982<br />DIČ: 2121731810<br />IČ DPH: SK2121731810</span> },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gray-50 rounded-[14px] flex items-center justify-center text-xl shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.content}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="right">
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Formulár odoslaný! (demo)'); }}>
              <input type="text" placeholder="Meno a priezvisko" required className="w-full py-4 px-5 border border-gray-200 rounded-xl font-sans text-sm outline-none focus:border-black transition-colors" />
              <input type="email" placeholder="E-mail" required className="w-full py-4 px-5 border border-gray-200 rounded-xl font-sans text-sm outline-none focus:border-black transition-colors" />
              <input type="tel" placeholder="Telefón" className="w-full py-4 px-5 border border-gray-200 rounded-xl font-sans text-sm outline-none focus:border-black transition-colors" />
              <select required className="w-full py-4 px-5 border border-gray-200 rounded-xl font-sans text-sm outline-none focus:border-black transition-colors bg-white">
                <option value="">Typ revízie...</option>
                <option>Elektrické zariadenia</option>
                <option>Plynové zariadenia</option>
                <option>Tlakové zariadenia</option>
                <option>Zdvíhacie zariadenia</option>
                <option>Iné</option>
              </select>
              <textarea placeholder="Opíšte nám, čo potrebujete zrevídovať..." required className="w-full py-4 px-5 border border-gray-200 rounded-xl font-sans text-sm outline-none focus:border-black transition-colors min-h-[120px] resize-y" />
              <button type="submit" className="bg-black text-white border-none py-4 px-8 rounded-full font-semibold text-sm cursor-pointer font-sans hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all">Odoslať správu →</button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
