import ServiceDetail from '@/components/ServiceDetail';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';
import { services } from '@/lib/services';
const s = services.ele;
export const metadata: Metadata = {
  title: `Revízia elektrickej inštalácie a bleskozvodu — Alpha Revízie`,
  description: 'Revízia elektrickej inštalácie, bleskozvodu a spotrebičov ✓ Východisková aj periodická ✓ Celé Slovensko ✓ Revízna správa s pečiatkou RT. Lehoty od 6 mesiacov do 5 rokov. Zavolajte +421 952 352 669.',
  alternates: { canonical: '/elektricke-zariadenia' },
  openGraph: { title: 'Revízia elektrickej inštalácie a bleskozvodu — Alpha Revízie', description: 'Revízie elektrických zariadení — inštalácie, bleskozvody, spotrebiče. Certifikovaní RT, celé Slovensko.', url: 'https://alpharevizie.sk/elektricke-zariadenia', locale: 'sk_SK', type: 'website' },
};
export default function Page() {
  return (<><BreadcrumbJsonLd items={[{name:'Domov',url:'https://alpharevizie.sk'},{name:'Elektrické zariadenia',url:'https://alpharevizie.sk/elektricke-zariadenia'}]} /><ServiceDetail serviceKey="ele" /></>);
}
