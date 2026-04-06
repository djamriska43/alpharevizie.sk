import ServiceDetail from '@/components/ServiceDetail';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';
import { services } from '@/lib/services';
const s = services.zdvih;
export const metadata: Metadata = {
  title: `Revízia žeriavu, plošiny a vysokozdvižného vozíka — Alpha Revízie`,
  description: 'Revízia žeriavov, zdvíhacích plošín, vysokozdvižných vozíkov a priemyselných brán ✓ Kontrola viazacích prostriedkov ✓ Celé Slovensko. Revízna správa s pečiatkou RT. Zavolajte +421 952 352 669.',
  alternates: { canonical: '/zdvihacie-zariadenia' },
  openGraph: { title: 'Revízia žeriavu, plošiny a vysokozdvižného vozíka — Alpha Revízie', description: 'Revízie zdvíhacích zariadení — žeriavy, plošiny, vozíky, brány, viazacie prostriedky.', url: 'https://alpharevizie.sk/zdvihacie-zariadenia', locale: 'sk_SK', type: 'website' },
};
export default function Page() {
  return (<><BreadcrumbJsonLd items={[{name:'Domov',url:'https://alpharevizie.sk'},{name:'Zdvíhacie zariadenia',url:'https://alpharevizie.sk/zdvihacie-zariadenia'}]} /><ServiceDetail serviceKey="zdvih" /></>);
}
