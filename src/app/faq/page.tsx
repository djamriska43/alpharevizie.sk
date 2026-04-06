import FAQContent from '@/components/FAQContent';
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/JsonLd';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Časté otázky o revíziách VTZ — Alpha Revízie',
  description: 'Odpovede na najčastejšie otázky o revíziách elektrických, plynových, tlakových a zdvíhacích zariadení. Lehoty, povinnosti, pokuty.',
  alternates: { canonical: '/faq' },
  openGraph: { title: 'F.A.Q. — Alpha Revízie', description: 'Odpovede na otázky o revíziách VTZ.', url: 'https://alpharevizie.sk/faq', locale: 'sk_SK', type: 'website' },
};

const faqs = [
  {q:'Ako často treba robiť revíziu elektrickej inštalácie?',a:'Závisí od typu prostredia. V bežných bytoch každých 5 rokov, vo výrobných prevádzkach každé 2–3 roky, na staveniskách každých 6 mesiacov.'},
  {q:'Ako často treba robiť revíziu plynového kotla?',a:'Odborná prehliadka každý rok, odborná skúška každé 3 roky.'},
  {q:'Čo sa stane ak nemám platnú revíziu?',a:'Inšpektorát práce môže uložiť pokutu do 100 000 €. Pri úraze hrozí trestnoprávna zodpovednosť.'},
  {q:'Aký je rozdiel medzi odbornou prehliadkou a skúškou?',a:'Prehliadka je vizuálna kontrola, skúška zahŕňa aj funkčné skúšky a merania.'},
  {q:'Robíte aj východiskové revízie?',a:'Áno, robíme východiskové aj periodické revízie všetkých štyroch druhov VTZ.'},
  {q:'Pôsobíte aj mimo Žilinského kraja?',a:'Áno, pôsobíme po celom Slovensku.'},
  {q:'Ako dlho trvá dodanie revíznej správy?',a:'Do niekoľkých pracovných dní po vykonaní revízie.'},
  {q:'Čo je vyhláška 508/2009 Z. z.?',a:'Ústredný predpis pre VTZ — upravuje rozdelenie zariadení, lehoty revízií a odborné spôsobilosti.'},
];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Domov', url: 'https://alpharevizie.sk' }, { name: 'F.A.Q.', url: 'https://alpharevizie.sk/faq' }]} />
      <FAQPageJsonLd faqs={faqs} />
      <FAQContent />
    </>
  );
}
