import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#111] flex items-center justify-center px-8">
      <div className="text-center max-w-[500px]">
        <div className="font-mono text-8xl font-bold mb-6 gradient-text inline-block">404</div>
        <h1 className="text-2xl font-extrabold text-white mb-4">Stránka sa nenašla</h1>
        <p className="text-gray-400 leading-relaxed mb-10">Táto stránka neexistuje alebo bola presunutá. Skúste niektorú z odkazov nižšie.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-black py-3 px-6 rounded-full font-bold no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_30px_color-mix(in_srgb,var(--accent)_30%,transparent)] transition-all">Domov</Link>
          <Link href="/kontakt" className="inline-flex items-center justify-center gap-2 bg-transparent text-white py-3 px-6 rounded-full font-semibold no-underline border-2 border-white/20 hover:border-white/50 transition-all">Kontakt</Link>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/elektricke-zariadenia" className="text-xs text-[var(--accent)] no-underline hover:underline">Elektrické zariadenia</Link>
          <span className="text-gray-600">·</span>
          <Link href="/plynove-zariadenia" className="text-xs text-[#ff2d6b] no-underline hover:underline">Plynové zariadenia</Link>
          <span className="text-gray-600">·</span>
          <Link href="/tlakove-zariadenia" className="text-xs text-[#8b5cf6] no-underline hover:underline">Tlakové zariadenia</Link>
          <span className="text-gray-600">·</span>
          <Link href="/zdvihacie-zariadenia" className="text-xs text-[#00e676] no-underline hover:underline">Zdvíhacie zariadenia</Link>
          <span className="text-gray-600">·</span>
          <Link href="/blog" className="text-xs text-gray-400 no-underline hover:underline">Blog</Link>
          <span className="text-gray-600">·</span>
          <Link href="/faq" className="text-xs text-gray-400 no-underline hover:underline">F.A.Q.</Link>
        </div>
      </div>
    </section>
  );
}
