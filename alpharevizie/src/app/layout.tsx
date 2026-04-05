import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FloatingButton, CookieConsent } from '@/components/Widgets';

export const metadata: Metadata = {
  title: 'Alpha Revízie — Revízie VTZ na celom Slovensku',
  description: 'Revízie vyhradených technických zariadení — elektrických, plynových, tlakových a zdvíhacích. Odborné prehliadky a skúšky podľa vyhlášky 508/2009 Z. z. na celom Slovensku.',
  keywords: 'revízie VTZ, revízia kotla, revízia elektrickej inštalácie, revízia bleskozvodu, revízia tlakovej nádoby, revízia žeriavu, revízia výťahu, vyhláška 508/2009',
  openGraph: {
    title: 'Alpha Revízie — Revízie VTZ na celom Slovensku',
    description: 'Elektrické, plynové, tlakové a zdvíhacie zariadenia. Odborne, rýchlo a podľa zákona.',
    url: 'https://alpharevizie.sk',
    siteName: 'Alpha Revízie',
    locale: 'sk_SK',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body className="bg-white text-[#111] overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButton />
        <CookieConsent />
      </body>
    </html>
  );
}
