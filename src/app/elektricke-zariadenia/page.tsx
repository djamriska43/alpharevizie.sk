import ServiceDetail from '@/components/ServiceDetail';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';
import { services } from '@/lib/services';
const s = services.ele;
export const metadata: Metadata = {
  title: `${s.tag} — Alpha Revízie | Revízie VTZ`,
  description: s.desc,
  alternates: { canonical: '/elektricke-zariadenia' },
  openGraph: { title: `${s.tag} — Alpha Revízie`, description: s.desc, url: 'https://alpharevizie.sk/elektricke-zariadenia', locale: 'sk_SK', type: 'website' },
};
export default function Page() {
  return (<><BreadcrumbJsonLd items={[{name:'Domov',url:'https://alpharevizie.sk'},{name:'Elektrické zariadenia',url:'https://alpharevizie.sk/elektricke-zariadenia'}]} /><ServiceDetail serviceKey="ele" /></>);
}
