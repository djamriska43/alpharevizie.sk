import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-14 px-8">
      <div className="max-w-[1200px] mx-auto flex justify-between items-start flex-wrap gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <Image src="/logo-white.svg" alt="Alpha Revízie" width={32} height={32} className="w-8 h-auto" />
            <span className="font-extrabold text-lg text-white">ALPHA <span className="font-normal text-gray-500">REVÍZIE</span></span>
          </div>
          <div className="text-xs text-gray-500 leading-7">
            <strong className="text-white/70">Alpha Safety s.r.o.</strong><br />
            IČO: 54 610 982 · DIČ: 2121731810 · IČ DPH: SK2121731810<br />
            Jeleňova 4154/9, 036 01 Martin<br />
            OR OS Žilina, odd. Sro, vl. č. 79712/L
          </div>
        </div>
        <div className="flex gap-14 flex-wrap">
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-widest text-gray-500 mb-3">Služby</h4>
            <Link href="/elektricke-zariadenia" className="block text-sm text-gray-400 leading-8 hover:text-[var(--accent)] transition-colors">Elektrické zariadenia</Link>
            <Link href="/plynove-zariadenia" className="block text-sm text-gray-400 leading-8 hover:text-[#ff2d6b] transition-colors">Plynové zariadenia</Link>
            <Link href="/tlakove-zariadenia" className="block text-sm text-gray-400 leading-8 hover:text-[#8b5cf6] transition-colors">Tlakové zariadenia</Link>
            <Link href="/zdvihacie-zariadenia" className="block text-sm text-gray-400 leading-8 hover:text-[#00e676] transition-colors">Zdvíhacie zariadenia</Link>
          </div>
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-widest text-gray-500 mb-3">Kontakt</h4>
            <a href="tel:+421952352669" className="block text-sm text-gray-400 leading-8 hover:text-[var(--accent)] transition-colors">+421 952 352 669</a>
            <a href="mailto:office@alpharevizie.sk" className="block text-sm text-gray-400 leading-8 hover:text-[var(--accent)] transition-colors">office@alpharevizie.sk</a>
            <a href="https://alphasafety.sk" target="_blank" className="block text-sm text-gray-400 leading-8 hover:text-white transition-colors">alphasafety.sk</a>
          </div>
          <div>
            <h4 className="text-[0.7rem] font-semibold uppercase tracking-widest text-gray-500 mb-3">Firma</h4>
            <Link href="/o-nas" className="block text-sm text-gray-400 leading-8 hover:text-white transition-colors">O nás</Link>
            <Link href="/faq" className="block text-sm text-gray-400 leading-8 hover:text-white transition-colors">F.A.Q.</Link>
            <Link href="/blog" className="block text-sm text-gray-400 leading-8 hover:text-white transition-colors">Blog</Link>
            <Link href="/kontakt" className="block text-sm text-gray-400 leading-8 hover:text-white transition-colors">Kontakt</Link>
            <Link href="/gdpr" className="block text-sm text-gray-400 leading-8 hover:text-white transition-colors">Ochrana osobných údajov</Link>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-10 pt-8 border-t border-white/5 text-[0.72rem] text-gray-600 flex justify-between flex-wrap gap-4">
        <span>© 2026 Alpha Safety s.r.o. Všetky práva vyhradené.</span>
        <span>Revízie VTZ podľa vyhlášky č. 508/2009 Z. z.</span>
      </div>
    </footer>
  );
}
