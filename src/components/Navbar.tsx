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
      <nav className={`fixed top-0 left-0 right-0 z-[1000] bg-white flex items-center justify-between transition-all duration-400 py-4 px-8 ${scrolled ? 'shadow-[0_4px_30px_rgba(0,0,0,0.08)]' : ''}`}>
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image src="/logo-dark.png" alt="Alpha Revízie" width={44} height={44} className="w-11 h-auto" />
          <span className="font-extrabold text-xl text-black tracking-tight">ALPHA <span className="font-normal text-gray-500">REVÍZIE</span></span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {[['/#services','Služby'],['/o-nas','O nás'],['/faq','F.A.Q.'],['/blog','Blog'],['/kontakt','Kontakt']].map(([href,label])=>(
            <Link key={href} href={href} className="text-gray-600 text-base font-medium hover:text-black relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">{label}</Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a href="mailto:office@alpharevizie.sk" className="text-gray-500 text-sm hover:text-black transition-colors">office@alpharevizie.sk</a>
          <a href="tel:+421952352669" className="flex items-center gap-2 bg-[#00e676] text-black py-3 px-6 rounded-full font-bold text-sm hover:shadow-[0_4px_20px_rgba(0,230,118,0.3)] hover:-translate-y-px transition-all">☎ +421 952 352 669</a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer">
          <span className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4 shadow-lg">
            <Link href="/#services" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium text-lg">Služby</Link>
            <Link href="/o-nas" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium text-lg">O nás</Link>
            <Link href="/faq" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium text-lg">F.A.Q.</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium text-lg">Blog</Link>
            <Link href="/kontakt" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium text-lg">Kontakt</Link>
            <a href="tel:+421952352669" className="bg-[#00e676] text-black py-3 px-5 rounded-full font-bold text-sm text-center">☎ +421 952 352 669</a>
          </div>
        )}
      </nav>
      {/* Gradient border */}
      <div className={`fixed top-[72px] left-0 right-0 h-[2px] z-[999] bg-gradient-to-r from-[#00d4ff] via-[#ff2d6b] via-[#8b5cf6] to-[#00e676] bg-[length:300%_300%] animate-gradientBorder transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-40'}`} />
    </>
  );
}
