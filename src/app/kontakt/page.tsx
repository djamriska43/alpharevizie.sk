import ContactContent from '@/components/ContactContent';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt — Alpha Revízie | Objednajte si revíziu VTZ',
  description: 'Kontaktujte nás pre revízie vyhradených technických zariadení. Telefón +421 952 352 669, e-mail office@alpharevizie.sk. Pôsobíme po celom Slovensku.',
  alternates: { canonical: '/kontakt' },
  openGraph: { title: 'Kontakt — Alpha Revízie', description: 'Objednajte si revíziu VTZ. Pôsobíme po celom Slovensku.', url: 'https://alpharevizie.sk/kontakt', locale: 'sk_SK', type: 'website' },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Domov', url: 'https://alpharevizie.sk' }, { name: 'Kontakt', url: 'https://alpharevizie.sk/kontakt' }]} />
      <ContactContent />
    </>
  );
}
