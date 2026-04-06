'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      type: (form.elements.namedItem('type') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json.error || 'Nepodarilo sa odoslať správu.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Chyba pripojenia. Skúste to znova.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12 px-6 rounded-2xl border border-[#00e676]/30 bg-[#00e676]/5">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-white mb-2">Správa odoslaná!</h3>
        <p className="text-gray-400 mb-6">Ďakujeme. Ozveme sa vám do 24 hodín.</p>
        <button onClick={() => setStatus('idle')} className="text-[#00d4ff] font-semibold text-sm hover:underline">Odoslať ďalšiu správu</button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input name="name" type="text" placeholder="Meno a priezvisko" required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all bg-white/[0.05] text-white placeholder-gray-500" />
      <input name="email" type="email" placeholder="E-mail" required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all bg-white/[0.05] text-white placeholder-gray-500" />
      <input name="phone" type="tel" placeholder="Telefón" className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all bg-white/[0.05] text-white placeholder-gray-500" />
      <select name="type" required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all bg-white/[0.05] text-white">
        <option value="" className="bg-[#111]">Typ revízie...</option>
        <option className="bg-[#111]">Elektrické zariadenia</option>
        <option className="bg-[#111]">Plynové zariadenia</option>
        <option className="bg-[#111]">Tlakové zariadenia</option>
        <option className="bg-[#111]">Zdvíhacie zariadenia</option>
        <option className="bg-[#111]">Iné</option>
      </select>
      <textarea name="message" placeholder="Opíšte nám, čo potrebujete zrevídovať..." required className="w-full py-4 px-5 border border-white/10 rounded-xl font-sans text-sm outline-none focus:border-[#00d4ff] focus:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all bg-white/[0.05] text-white placeholder-gray-500 min-h-[120px] resize-y" />
      {status === 'error' && <p className="text-[#ff2d6b] text-sm font-medium">{errorMsg}</p>}
      <button type="submit" disabled={status === 'loading'} className="bg-[#00d4ff] text-black border-none py-4 px-8 rounded-full font-bold text-sm cursor-pointer font-sans hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.35)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
        {status === 'loading' ? 'Odosielam...' : 'Odoslať správu →'}
      </button>
    </form>
  );
}
