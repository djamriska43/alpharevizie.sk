'use client';
import Reveal from '@/components/Reveal';

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#111] pt-36 pb-20 px-8">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />Kontakt</div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight mb-4 text-white">Ozvite sa nám</h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-[600px]">Zavolajte, napíšte e-mail alebo vyplňte formulár. Ozveme sa vám do 24 hodín.</p>
          </Reveal>
        </div>
      </section>
      <section className="py-20 px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            {[
              {icon:'☎',title:'Telefón',content:'<a href="tel:+421952352669" class="text-[#00e676] font-semibold no-underline">+421 952 352 669</a>'},
              {icon:'✉',title:'E-mail',content:'<a href="mailto:office@alpharevizie.sk" class="text-[#00d4ff] font-semibold no-underline">office@alpharevizie.sk</a>'},
              {icon:'📍',title:'Adresa',content:'<span class="text-gray-300">Jeleňova 4154/9<br/>036 01 Martin</span>'},
              {icon:'🏢',title:'Fakturačné údaje',content:'<span class="text-gray-300">Alpha Safety s.r.o.<br/>IČO: 54 610 982<br/>DIČ: 2121731810<br/>IČ DPH: SK2121731810</span>'},
            ].map((item,i) => (
              <Reveal key={i} delay={i*0.1}>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-white/[0.06] rounded-[14px] flex items-center justify-center text-xl shrink-0 border border-white/[0.08]">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-sm mb-1 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{__html:item.content}} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal direction="right">
            <form className="flex flex-col gap-4" onSubmit={(e)=>{e.preventDefault();alert('Formulár odoslaný! (demo)')}}>
              <input type="text" placeholder="Meno a priezvisko" required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00e676] transition-colors bg-white/[0.05] text-white placeholder-gray-500" />
              <input type="email" placeholder="E-mail" required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00e676] transition-colors bg-white/[0.05] text-white placeholder-gray-500" />
              <input type="tel" placeholder="Telefón" className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00e676] transition-colors bg-white/[0.05] text-white placeholder-gray-500" />
              <select required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00e676] transition-colors bg-white/[0.05] text-white">
                <option value="" className="bg-[#111]">Typ revízie...</option>
                <option className="bg-[#111]">Elektrické zariadenia</option><option className="bg-[#111]">Plynové zariadenia</option><option className="bg-[#111]">Tlakové zariadenia</option><option className="bg-[#111]">Zdvíhacie zariadenia</option><option className="bg-[#111]">Iné</option>
              </select>
              <textarea placeholder="Opíšte nám, čo potrebujete zrevídovať..." required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00e676] transition-colors bg-white/[0.05] text-white placeholder-gray-500 min-h-[120px] resize-y" />
              <button type="submit" className="bg-[#00e676] text-black border-none py-4 px-8 rounded-full font-bold text-sm cursor-pointer font-sans hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,230,118,0.3)] transition-all">Odoslať správu →</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
