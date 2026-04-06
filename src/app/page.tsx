import HomeContent from '@/components/HomeContent';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Domov', url: 'https://alpharevizie.sk' }]} />
      <HomeContent />
    </>
  );
}
