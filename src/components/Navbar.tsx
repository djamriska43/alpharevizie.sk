'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500 py-4 px-8 ${scrolled ? 'bg-[#111]/90 backdrop-blur-[20px] backdrop-saturate-[180%] shadow-[0_4px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent'}`}>
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/logo-white.svg" alt="Alpha Revízie" width={40} height={40} className="w-10 h-auto" />
          <span className="font-extrabold text-xl text-white tracking-tight">ALPHA <span className="font-normal text-gray-400">REVÍZIE</span></span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          {[['/#services','Služby'],['/o-nas','O nás'],['/faq','F.A.Q.'],['/blog','Blog'],['/kontakt','Kontakt']].map(([href,label])=>(
            <Link key={href} href={href} className="text-gray-300 text-base font-medium hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00d4ff] after:transition-all hover:after:w-full transition-colors">{label}</Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:office@alpharevizie.sk" className="flex items-center text-gray-300 py-3 px-6 rounded-full font-semibold text-sm border border-white/20 hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all">office@alpharevizie.sk</a>
          <a href="tel:+421952352669" className="flex items-center bg-[#00d4ff] text-black py-3 px-6 rounded-full font-bold text-sm hover:shadow-[0_4px_20px_rgba(0,212,255,0.4)] hover:-translate-y-px transition-all">+421 952 352 669</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer">
          <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#111]/95 backdrop-blur-[20px] border-b border-white/10 p-6 flex flex-col gap-4 shadow-lg">
            {[['/#services','Služby'],['/o-nas','O nás'],['/faq','F.A.Q.'],['/blog','Blog'],['/kontakt','Kontakt']].map(([href,label])=>(
              <Link key={href} href={href} onClick={()=>setMenuOpen(false)} className="text-gray-300 font-medium text-lg hover:text-white">{label}</Link>
            ))}
            <a href="mailto:office@alpharevizie.sk" className="text-gray-300 py-3 px-5 rounded-full font-semibold text-sm text-center border border-white/20">office@alpharevizie.sk</a>
            <a href="tel:+421952352669" className="bg-[#00d4ff] text-black py-3 px-5 rounded-full font-bold text-sm text-center">+421 952 352 669</a>
          </div>
        )}
      </nav>
      <div className={`fixed top-[72px] left-0 right-0 h-[2px] z-[999] bg-gradient-to-r from-[#00d4ff] via-[#ff2d6b] via-[#8b5cf6] to-[#00e676] bg-[length:300%_300%] animate-gradientBorder transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-20'}`} />
    </>
  );
}
