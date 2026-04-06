import ServiceDetail from '@/components/ServiceDetail';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';
import { services } from '@/lib/services';
const s = services.tlak;
export const metadata: Metadata = {
  title: `Revízia tlakovej nádoby a kompresora — Alpha Revízie`,
  description: 'Revízia tlakovej nádoby, kompresora, expanznej nádoby a kotlov ✓ Vonkajšia aj vnútorná prehliadka ✓ Tlaková skúška ✓ Celé Slovensko. Revízna správa s pečiatkou RT. Zavolajte +421 952 352 669.',
  alternates: { canonical: '/tlakove-zariadenia' },
  openGraph: { title: 'Revízia tlakovej nádoby a kompresora — Alpha Revízie', description: 'Revízie tlakových zariadení — nádoby, kompresory, kotly. Vonkajšie prehliadky, vnútorné prehliadky, tlakové skúšky.', url: 'https://alpharevizie.sk/tlakove-zariadenia', locale: 'sk_SK', type: 'website' },
};
export default function Page() {
  return (<><BreadcrumbJsonLd items={[{name:'Domov',url:'https://alpharevizie.sk'},{name:'Tlakové zariadenia',url:'https://alpharevizie.sk/tlakove-zariadenia'}]} /><ServiceDetail serviceKey="tlak" /></>);
}
