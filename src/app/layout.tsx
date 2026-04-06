import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FloatingButton, CookieConsent } from '@/components/Widgets';
import { LocalBusinessJsonLd } from '@/components/JsonLd';

const outfit = Outfit({ subsets: ['latin', 'latin-ext'], variable: '--font-outfit', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://alpharevizie.sk'),
  title: 'Alpha Revízie — Revízie VTZ na celom Slovensku',
  description: 'Revízie vyhradených technických zariadení — elektrických, plynových, tlakových a zdvíhacích. Odborné prehliadky a skúšky podľa vyhlášky 508/2009 Z. z. na celom Slovensku.',
  keywords: 'revízie VTZ, revízia kotla, revízia elektrickej inštalácie, revízia bleskozvodu, revízia tlakovej nádoby, revízia žeriavu, revízia výťahu, vyhláška 508/2009',
  alternates: { canonical: '/' },
  icons: { icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }] },
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
      <body className={`${outfit.variable} ${jetbrains.variable} bg-[#111] text-white overflow-x-hidden`}>
        <LocalBusinessJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButton />
        <CookieConsent />
      </body>
    </html>
  );
}
