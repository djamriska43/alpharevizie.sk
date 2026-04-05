import Reveal from '@/components/Reveal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ochrana osobných údajov — Alpha Revízie',
  description: 'Zásady ochrany osobných údajov spoločnosti Alpha Safety s.r.o. podľa zákona č. 18/2018 Z. z. a nariadenia GDPR.',
};

export default function GDPRPage() {
  return (
    <>
      <section className="bg-[#111] pt-36 pb-16 px-8">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 text-gray-500 text-xs font-mono uppercase tracking-widest mb-4"><span className="w-5 h-[1.5px] bg-gray-700" />Právne informácie</div>
            <h1 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-black tracking-tight mb-4 text-white">Ochrana osobných údajov</h1>
            <p className="text-gray-400">Zásady spracúvania osobných údajov v súlade so zákonom č. 18/2018 Z. z. o ochrane osobných údajov a Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR).</p>
          </Reveal>
        </div>
      </section>
      <section className="py-16 px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <div className="text-gray-300 leading-8 text-[0.9rem]">
              <h2 className="text-xl font-extrabold text-white mt-8 mb-4">1. Prevádzkovateľ</h2>
              <div className="bg-white/[0.04] rounded-xl p-5 mb-6 border border-white/[0.08] text-sm">
                <strong className="text-white">Alpha Safety s.r.o.</strong><br />
                Sídlo: Jeleňova 4154/9, 036 01 Martin<br />
                IČO: 54 610 982<br />
                DIČ: 2121731810<br />
                IČ DPH: SK2121731810<br />
                E-mail: <a href="mailto:office@alpharevizie.sk" className="text-[#00d4ff] no-underline">office@alpharevizie.sk</a><br />
                Telefón: <a href="tel:+421952352669" className="text-[#00d4ff] no-underline">+421 952 352 669</a>
              </div>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">2. Aké osobné údaje spracúvame</h2>
              <p className="mb-4">Pri používaní webovej stránky alpharevizie.sk a kontaktných formulárov môžeme spracúvať nasledovné osobné údaje:</p>
              <p className="mb-6">Kontaktné údaje poskytnuté cez formulár (meno, priezvisko, e-mailová adresa, telefónne číslo), údaje o zariadení a prehliadači (IP adresa, typ prehliadača, operačný systém), údaje z cookies (analytické a funkčné cookies) a údaje z e-mailovej a telefonickej komunikácie.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">3. Účel spracúvania osobných údajov</h2>
              <p className="mb-6">Osobné údaje spracúvame za účelom odpovedania na vaše dopyty a požiadavky (právny základ: oprávnený záujem podľa čl. 6 ods. 1 písm. f) GDPR), prípravy a plnenia zmluvného vzťahu (právny základ: plnenie zmluvy podľa čl. 6 ods. 1 písm. b) GDPR), zlepšovania funkčnosti webovej stránky prostredníctvom analytických cookies (právny základ: súhlas podľa čl. 6 ods. 1 písm. a) GDPR) a plnenia zákonných povinností (právny základ: zákonná povinnosť podľa čl. 6 ods. 1 písm. c) GDPR).</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">4. Doba uchovávania</h2>
              <p className="mb-6">Kontaktné údaje z formulárov uchovávame po dobu 3 rokov od poslednej komunikácie, ak nedôjde k uzavretiu zmluvného vzťahu. Údaje súvisiace so zmluvným vzťahom uchovávame po dobu trvania zmluvy a následne po dobu stanovenú príslušnými právnymi predpismi (najmä zákon o účtovníctve — 10 rokov). Cookies údaje sa uchovávajú po dobu platnosti cookie (maximálne 12 mesiacov).</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">5. Cookies</h2>
              <p className="mb-4">Táto webová stránka používa nasledovné typy cookies:</p>
              <p className="mb-6"><strong className="text-white">Nevyhnutné cookies</strong> — zabezpečujú základnú funkčnosť stránky. Tieto cookies sa nedajú vypnúť, pretože sú nevyhnutné pre správne fungovanie webu. <strong className="text-white">Analytické cookies</strong> — pomáhajú nám pochopiť, ako návštevníci používajú stránku. Spracúvajú sa len na základe vášho súhlasu. Svoj súhlas s analytickými cookies môžete kedykoľvek odvolať.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">6. Vaše práva</h2>
              <p className="mb-4">Podľa zákona č. 18/2018 Z. z. a nariadenia GDPR máte nasledovné práva:</p>
              <p className="mb-6">Právo na prístup k osobným údajom (čl. 15 GDPR), právo na opravu nesprávnych údajov (čl. 16 GDPR), právo na vymazanie údajov (čl. 17 GDPR), právo na obmedzenie spracúvania (čl. 18 GDPR), právo na prenosnosť údajov (čl. 20 GDPR), právo namietať proti spracúvaniu (čl. 21 GDPR) a právo odvolať súhlas so spracúvaním kedykoľvek (čl. 7 ods. 3 GDPR).</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">7. Uplatnenie práv</h2>
              <p className="mb-6">Svoje práva si môžete uplatniť zaslaním žiadosti na e-mailovú adresu <a href="mailto:office@alpharevizie.sk" className="text-[#00d4ff] no-underline">office@alpharevizie.sk</a> alebo písomne na adresu sídla spoločnosti. Na vašu žiadosť odpovieme do 30 dní od jej doručenia.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">8. Dozorný orgán</h2>
              <p className="mb-6">Ak sa domnievate, že spracúvanie vašich osobných údajov je v rozpore s právnymi predpismi, máte právo podať sťažnosť na Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07 Bratislava 27, <a href="https://dataprotection.gov.sk" target="_blank" className="text-[#00d4ff] no-underline">dataprotection.gov.sk</a>.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">9. Príjemcovia osobných údajov</h2>
              <p className="mb-6">Vaše osobné údaje neposkytujeme tretím stranám na marketingové účely. Údaje môžu byť poskytnuté len spracovateľom, ktorí pre nás zabezpečujú technické služby (hosting, e-mailové služby) a orgánom verejnej moci v zákonom stanovených prípadoch.</p>

              <h2 className="text-xl font-extrabold text-white mt-10 mb-4">10. Zabezpečenie údajov</h2>
              <p className="mb-6">Prijali sme primerané technické a organizačné opatrenia na ochranu vašich osobných údajov pred neoprávneným prístupom, zmenou, zverejnením alebo zničením. Webová stránka používa šifrované pripojenie (SSL/TLS).</p>

              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-5 mt-10 text-sm text-gray-400">
                <p>Tieto zásady ochrany osobných údajov sú platné od 1. januára 2026. Prevádzkovateľ si vyhradzuje právo tieto zásady kedykoľvek aktualizovať. O zmenách budete informovaní prostredníctvom tejto stránky.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
