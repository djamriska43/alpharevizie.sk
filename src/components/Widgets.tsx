'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function FloatingButton() {
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTooltip(true), 3000);
    const t2 = setTimeout(() => setShowTooltip(false), 7000);
    const interval = setInterval(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }, 12000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(interval); };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-3 max-md:bottom-6 max-md:right-6">
      <div className={`flex flex-col gap-3 transition-all duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none scale-90'}`}>
        <a href="tel:+421952352669" className="flex items-center gap-3 bg-[#1a1a1a] text-white py-3 px-5 rounded-2xl text-sm font-bold shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-x-1 transition-all border border-white/10 group">
          <span className="w-12 h-12 rounded-full bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] border-2 border-[color-mix(in_srgb,var(--accent)_40%,transparent)] flex items-center justify-center text-lg group-hover:shadow-[0_0_15px_color-mix(in_srgb,var(--accent)_30%,transparent)] transition-shadow">☎</span>
          <span>Zavolať</span>
        </a>
        <Link href="/kontakt" onClick={() => { setOpen(false); setShowTooltip(false); }} className="flex items-center gap-3 bg-[#1a1a1a] text-white py-3 px-5 rounded-2xl text-sm font-bold shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-x-1 transition-all no-underline border border-white/10 group">
          <span className="w-12 h-12 rounded-full bg-[rgba(255,45,107,0.2)] border-2 border-[rgba(255,45,107,0.4)] flex items-center justify-center text-lg group-hover:shadow-[0_0_15px_rgba(255,45,107,0.3)] transition-shadow">✉</span>
          <span>Napíšte nám</span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <div className={`bg-[#1a1a1a] text-white py-2.5 px-4 rounded-xl text-sm font-semibold border border-[color-mix(in_srgb,var(--accent)_20%,transparent)] shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-500 cursor-pointer whitespace-nowrap ${showTooltip && !open ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`} onClick={() => { setOpen(true); setShowTooltip(false); }}>
          Potrebujete revíziu? 👋
        </div>
        <button onClick={() => { setOpen(!open); setShowTooltip(false); }} className={`w-[62px] h-[62px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-none max-md:w-[56px] max-md:h-[56px] ${open ? 'bg-[#222] rotate-[135deg] shadow-[0_4px_20px_rgba(0,0,0,0.3)]' : 'bg-[var(--accent)] shadow-[0_4px_20px_color-mix(in_srgb,var(--accent)_40%,transparent)] hover:shadow-[0_8px_30px_color-mix(in_srgb,var(--accent)_50%,transparent)] animate-[fabPulse_2s_ease-in-out_infinite]'}`}>
          {!open && <Image src="/logo-dark.svg" alt="A" width={30} height={30} className="w-[30px] h-auto" />}
          {open && <span className="text-white text-2xl font-light">+</span>}
        </button>
      </div>
    </div>
  );
}

export function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && !localStorage.getItem('cookieConsent')) setShow(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  const accept = () => { localStorage.setItem('cookieConsent', 'accepted'); setShow(false); };
  const reject = () => { localStorage.setItem('cookieConsent', 'rejected'); setShow(false); };
  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-[cookieSlide_0.5s_ease]">
      <div className="mx-4 mb-4 md:mx-8 md:mb-6 rounded-2xl p-[1px] bg-gradient-to-r from-[#00d4ff] via-[#ff2d6b] via-[#8b5cf6] to-[#00e676] bg-[length:300%_300%] animate-gradientBorder">
        <div className="bg-[#0a0a0a] rounded-2xl py-5 px-6 md:px-8">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 flex-wrap max-md:flex-col max-md:text-center">
            <p className="text-sm text-gray-300 leading-6 max-w-[600px]">
              Táto stránka používa cookies na zabezpečenie správneho fungovania a analytiku.
              Viac v <Link href="/gdpr" className="text-[var(--accent)] no-underline hover:underline">zásadách ochrany osobných údajov</Link>.
            </p>
            <div className="flex gap-3 shrink-0 max-md:justify-center">
              <button onClick={accept} className="bg-[var(--accent)] text-black border-none py-3 px-6 rounded-full font-bold text-sm cursor-pointer font-sans hover:-translate-y-px hover:shadow-[0_4px_15px_color-mix(in_srgb,var(--accent)_30%,transparent)] transition-all">Súhlasím</button>
              <button onClick={reject} className="bg-transparent text-gray-400 border border-white/15 py-3 px-6 rounded-full font-semibold text-sm cursor-pointer font-sans hover:border-white/30 hover:text-white transition-all">Len nevyhnutné</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CTASection() {
  return (
    <section className="py-28 px-8 bg-[#111] border-t border-white/5">
      <div className="max-w-[900px] mx-auto rounded-[34px] p-[2px] bg-gradient-to-br from-[#00d4ff] via-[#ff2d6b] via-[#8b5cf6] to-[#00e676] bg-[length:300%_300%] animate-gradientBorder">
        <div className="bg-[#0a0a0a] rounded-[32px] py-20 px-16 text-center relative overflow-hidden max-md:py-12 max-md:px-6">
          <div className="absolute inset-0 animate-breathe">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,45,107,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_50%)]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 max-md:text-2xl">Potrebujete revíziu?<br />Ozvite sa nám.</h2>
            <p className="text-gray-400 mb-10 max-w-[500px] mx-auto leading-relaxed">Zavolajte alebo napíšte — ozveme sa vám do 24 hodín s cenovou ponukou na mieru.</p>
            <a href="tel:+421952352669" className="block font-mono text-4xl font-bold text-[var(--accent)] mb-2 no-underline animate-neonPulse max-md:text-2xl">+421 952 352 669</a>
            <div className="text-gray-400 mb-10"><a href="mailto:office@alpharevizie.sk" className="text-gray-300 no-underline hover:text-[var(--accent)] transition-colors">office@alpharevizie.sk</a></div>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+421952352669" className="bg-[var(--accent)] text-black py-4 px-8 rounded-full font-bold no-underline hover:-translate-y-0.5 hover:shadow-[0_10px_30px_color-mix(in_srgb,var(--accent)_35%,transparent)] transition-all">Zavolať teraz</a>
              <Link href="/kontakt" className="bg-transparent text-white py-4 px-8 rounded-full font-semibold no-underline border-[1.5px] border-white/20 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-[0_10px_30px_color-mix(in_srgb,var(--accent)_15%,transparent)] transition-all">Napísať správu</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
