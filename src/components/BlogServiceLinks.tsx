import Link from 'next/link';

const allServices = [
  { slug: 'elektricke-zariadenia', tag: 'Elektrické zariadenia', icon: '⚡', color: '#00d4ff', desc: 'Revízie elektrickej inštalácie, bleskozvodov a spotrebičov.' },
  { slug: 'plynove-zariadenia', tag: 'Plynové zariadenia', icon: '🔥', color: '#ff2d6b', desc: 'Revízie plynových kotlov, rozvodov a komínov.' },
  { slug: 'tlakove-zariadenia', tag: 'Tlakové zariadenia', icon: '⚙️', color: '#8b5cf6', desc: 'Vonkajšie prehliadky, vnútorné prehliadky a tlakové skúšky.' },
  { slug: 'zdvihacie-zariadenia', tag: 'Zdvíhacie zariadenia', icon: '🏗️', color: '#00e676', desc: 'Revízie žeriavov, plošín, brán a vysokozdvižných vozíkov.' },
];

export function BlogServiceLink({ slug }: { slug: string }) {
  const svc = allServices.find(s => s.slug === slug);
  if (!svc) return null;
  return (
    <div className="mt-10 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03]">
      <p className="text-sm text-gray-400 mb-3">Potrebujete revíziu? Pozrite si naše služby:</p>
      <Link href={`/${svc.slug}`} className="flex items-center gap-3 no-underline group">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg border shrink-0" style={{background:`${svc.color}20`,borderColor:`${svc.color}40`}}>{svc.icon}</div>
        <div>
          <span className="font-bold text-white group-hover:underline">{svc.tag}</span>
          <span className="block text-xs text-gray-400">{svc.desc}</span>
        </div>
      </Link>
    </div>
  );
}

export function BlogServiceLinksAll() {
  return (
    <div className="mt-10 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03]">
      <p className="text-sm text-gray-400 mb-4">Potrebujete revíziu? Pozrite si naše služby:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {allServices.map(svc => (
          <Link key={svc.slug} href={`/${svc.slug}`} className="flex items-center gap-3 no-underline group py-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm border shrink-0" style={{background:`${svc.color}20`,borderColor:`${svc.color}40`}}>{svc.icon}</div>
            <span className="font-semibold text-sm text-white group-hover:underline">{svc.tag}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
