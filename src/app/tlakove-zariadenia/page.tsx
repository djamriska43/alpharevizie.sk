import ServiceDetail from '@/components/ServiceDetail';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';
import { services } from '@/lib/services';
const s = services.tlak;
export const metadata: Metadata = {
  title: `${s.tag} — Alpha Revízie | Revízie VTZ`,
  description: s.desc,
  alternates: { canonical: '/tlakove-zariadenia' },
  openGraph: { title: `${s.tag} — Alpha Revízie`, description: s.desc, url: 'https://alpharevizie.sk/tlakove-zariadenia', locale: 'sk_SK', type: 'website' },
};
export default function Page() {
  return (<><BreadcrumbJsonLd items={[{name:'Domov',url:'https://alpharevizie.sk'},{name:'Tlakové zariadenia',url:'https://alpharevizie.sk/tlakove-zariadenia'}]} /><ServiceDetail serviceKey="tlak" /></>);
}
