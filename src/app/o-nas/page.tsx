import AboutContent from '@/components/AboutContent';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O nás — Alpha Revízie | Revízie VTZ na celom Slovensku',
  description: 'Alpha Safety s.r.o. so sídlom v Martine. Certifikovaní revízni technici s oprávneniami na všetky štyri druhy VTZ — elektrické, plynové, tlakové a zdvíhacie zariadenia.',
  alternates: { canonical: '/o-nas' },
  openGraph: { title: 'O nás — Alpha Revízie', description: 'Certifikovaní revízni technici na všetky VTZ. Pôsobíme po celom Slovensku.', url: 'https://alpharevizie.sk/o-nas', locale: 'sk_SK', type: 'website' },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Domov', url: 'https://alpharevizie.sk' }, { name: 'O nás', url: 'https://alpharevizie.sk/o-nas' }]} />
      <AboutContent />
    </>
  );
}
