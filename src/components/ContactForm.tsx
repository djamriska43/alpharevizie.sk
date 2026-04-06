'use client';

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert('Ďakujeme! Ozveme sa vám do 24 hodín.'); }}>
      <input type="text" placeholder="Meno a priezvisko" required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all bg-white/[0.05] text-white placeholder-gray-500" />
      <input type="email" placeholder="E-mail" required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all bg-white/[0.05] text-white placeholder-gray-500" />
      <input type="tel" placeholder="Telefón" className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all bg-white/[0.05] text-white placeholder-gray-500" />
      <select required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all bg-white/[0.05] text-white">
        <option value="" className="bg-[#111]">Typ revízie...</option>
        <option className="bg-[#111]">Elektrické zariadenia</option>
        <option className="bg-[#111]">Plynové zariadenia</option>
        <option className="bg-[#111]">Tlakové zariadenia</option>
        <option className="bg-[#111]">Zdvíhacie zariadenia</option>
        <option className="bg-[#111]">Iné</option>
      </select>
      <textarea placeholder="Opíšte nám, čo potrebujete zrevídovať..." required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all bg-white/[0.05] text-white placeholder-gray-500 min-h-[120px] resize-y" />
      <button type="submit" className="bg-[#00d4ff] text-black border-none py-4 px-8 rounded-full font-bold text-sm cursor-pointer font-sans hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.35)] transition-all">Odoslať správu →</button>
    </form>
  );
}
