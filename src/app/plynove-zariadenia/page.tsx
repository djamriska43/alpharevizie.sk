import ServiceDetail from '@/components/ServiceDetail';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';
import { services } from '@/lib/services';
const s = services.plyn;
export const metadata: Metadata = {
  title: `Revízia plynového kotla a plynových rozvodov — Alpha Revízie`,
  description: 'Revízia plynového kotla, rozvodov, spotrebičov a komínov ✓ Kontrola každý rok ✓ Skúška každé 3 roky ✓ Celé Slovensko. Revízna správa s pečiatkou RT. Zavolajte +421 952 352 669.',
  alternates: { canonical: '/plynove-zariadenia' },
  openGraph: { title: 'Revízia plynového kotla a plynových rozvodov — Alpha Revízie', description: 'Revízie plynových zariadení — kotly, rozvody, spotrebiče, komíny. Odborné prehliadky a skúšky podľa vyhlášky 508/2009 Z. z.', url: 'https://alpharevizie.sk/plynove-zariadenia', locale: 'sk_SK', type: 'website' },
};
export default function Page() {
  return (<><BreadcrumbJsonLd items={[{name:'Domov',url:'https://alpharevizie.sk'},{name:'Plynové zariadenia',url:'https://alpharevizie.sk/plynove-zariadenia'}]} /><ServiceDetail serviceKey="plyn" /></>);
}
