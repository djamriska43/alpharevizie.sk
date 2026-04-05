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
    <nav className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-400 ${scrolled ? 'bg-white/92 backdrop-blur-[20px] backdrop-saturate-[180%] py-3 px-8 border-b border-gray-200' : 'py-5 px-8'}`}>
      <Link href="/" className="flex items-center gap-3 no-underline">
        <Image src="/logo-dark.png" alt="Alpha Revízie" width={36} height={36} className="w-9 h-auto" />
        <span className="font-extrabold text-lg text-black tracking-tight">ALPHA <span className="font-normal text-gray-500">REVÍZIE</span></span>
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        <Link href="/#services" className="text-gray-600 text-sm font-medium hover:text-black relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">Služby</Link>
        <Link href="/o-nas" className="text-gray-600 text-sm font-medium hover:text-black relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">O nás</Link>
        <Link href="/faq" className="text-gray-600 text-sm font-medium hover:text-black relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">F.A.Q.</Link>
        <Link href="/blog" className="text-gray-600 text-sm font-medium hover:text-black relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">Blog</Link>
        <Link href="/kontakt" className="text-gray-600 text-sm font-medium hover:text-black relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-black after:transition-all hover:after:w-full">Kontakt</Link>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <a href="mailto:office@alpharevizie.sk" className="text-gray-500 text-xs hover:text-black transition-colors">office@alpharevizie.sk</a>
        <a href="tel:+421952352669" className="flex items-center gap-1.5 bg-black text-white py-2.5 px-5 rounded-full font-semibold text-xs hover:bg-gray-900 hover:-translate-y-px transition-all">☎ +421 952 352 669</a>
      </div>

      {/* Mobile */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer">
        <span className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-black transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-6 flex flex-col gap-4">
          <Link href="/#services" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Služby</Link>
          <Link href="/o-nas" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">O nás</Link>
          <Link href="/faq" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">F.A.Q.</Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Blog</Link>
          <Link href="/kontakt" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Kontakt</Link>
          <a href="tel:+421952352669" className="bg-black text-white py-3 px-5 rounded-full font-semibold text-sm text-center">☎ +421 952 352 669</a>
        </div>
      )}
    </nav>
  );
}
