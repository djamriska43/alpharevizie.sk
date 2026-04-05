'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function FloatingButton() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-8 right-8 z-[999] flex flex-col items-end gap-2.5 max-md:bottom-6 max-md:right-6">
      <div className={`flex flex-col gap-2 transition-all duration-300 ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2.5 pointer-events-none scale-95'}`}>
        <a href="tel:+421952352669" className="flex items-center gap-2.5 bg-[#1a1a1a] text-white py-2.5 px-4 rounded-full text-sm font-semibold shadow-lg hover:-translate-x-1 transition-all border border-white/10">
          <span className="w-8 h-8 rounded-full bg-[rgba(0,212,255,0.12)] flex items-center justify-center text-sm">☎</span>Zavolať
        </a>
        <Link href="/kontakt" onClick={() => setOpen(false)} className="flex items-center gap-2.5 bg-[#1a1a1a] text-white py-2.5 px-4 rounded-full text-sm font-semibold shadow-lg hover:-translate-x-1 transition-all no-underline border border-white/10">
          <span className="w-8 h-8 rounded-full bg-[rgba(255,45,107,0.12)] flex items-center justify-center text-sm">📋</span>Napíšte nám
        </Link>
      </div>
      <button onClick={() => setOpen(!open)} className={`w-[60px] h-[60px] rounded-full bg-[#00d4ff] text-black flex items-center justify-center text-2xl cursor-pointer transition-all shadow-[0_4px_20px_rgba(0,212,255,0.3)] border-none hover:shadow-[0_8px_30px_rgba(0,212,255,0.4)] max-md:w-[54px] max-md:h-[54px] ${open ? 'rotate-45 !bg-gray-800 !text-white !shadow-[0_4px_20px_rgba(0,0,0,0.3)]' : ''}`}>
        <Image src="/logo-dark.svg" alt="A" width={28} height={28} className={`w-7 h-auto ${open ? 'hidden' : ''}`} />
        {open && <span className="text-xl">+</span>}
      </button>
    </div>
  );
}

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && !localStorage.getItem('cookieConsent')) {
        setShow(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const accept = () => { localStorage.setItem('cookieConsent', 'accepted'); setShow(false); };
  const reject = () => { localStorage.setItem('cookieConsent', 'rejected'); setShow(false); };

  if (!show) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-[#0a0a0a] py-5 px-8 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 flex-wrap max-md:flex-col max-md:text-center">
        <p className="text-xs text-gray-400 leading-6 max-w-[700px]">
          Táto webová stránka používa súbory cookies na zabezpečenie jej správneho fungovania a na analytické účely.
          Kliknutím na „Súhlasím" udeľujete súhlas s ich spracovaním v súlade so zákonom č. 18/2018 Z. z.
          o ochrane osobných údajov a Nariadením (EÚ) 2016/679 (GDPR). Svoj súhlas môžete kedykoľvek odvolať.
        </p>
        <div className="flex gap-3 shrink-0 max-md:justify-center">
          <button onClick={accept} className="bg-[#00d4ff] text-black border-none py-2.5 px-5 rounded-full font-bold text-xs cursor-pointer font-sans hover:-translate-y-px hover:shadow-[0_4px_15px_rgba(0,212,255,0.3)] transition-all">Súhlasím</button>
          <button onClick={reject} className="bg-transparent text-gray-400 border border-white/15 py-2.5 px-5 rounded-full font-semibold text-xs cursor-pointer font-sans hover:border-white/30 hover:text-white transition-all">Len nevyhnutné</button>
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
          {/* Breathing background */}
          <div className="absolute inset-0 animate-breathe">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.12),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,45,107,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08),transparent_50%)]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold text-white tracking-tight leading-tight mb-4 max-md:text-2xl">Potrebujete revíziu?<br />Ozvite sa nám.</h2>
            <p className="text-gray-400 mb-10 max-w-[500px] mx-auto leading-relaxed">Zavolajte alebo napíšte — ozveme sa vám do 24 hodín s cenovou ponukou na mieru.</p>
            {/* Pulsing phone number */}
            <a href="tel:+421952352669" className="block font-mono text-4xl font-bold text-[#00d4ff] mb-2 no-underline animate-neonPulse max-md:text-2xl">+421 952 352 669</a>
            <div className="text-gray-400 mb-10"><a href="mailto:office@alpharevizie.sk" className="text-gray-300 no-underline hover:text-[#00d4ff] transition-colors">office@alpharevizie.sk</a></div>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:+421952352669" className="bg-[#00d4ff] text-black py-4 px-8 rounded-full font-bold no-underline hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.35)] transition-all">☎ Zavolať teraz</a>
              <Link href="/kontakt" className="bg-transparent text-white py-4 px-8 rounded-full font-semibold no-underline border-[1.5px] border-white/20 hover:border-[#00d4ff] hover:text-[#00d4ff] hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)] transition-all">✉ Napísať správu</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
