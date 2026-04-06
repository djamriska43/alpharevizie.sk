export const services = {
  ele: {
    slug: 'elektricke-zariadenia',
    color: '#00d4ff',
    colorVar: 'ele',
    tag: 'Elektrické zariadenia',
    icon: '⚡',
    title: 'Revízia elektrickej inštalácie, bleskozvodu a spotrebičov',
    desc: 'Odborné prehliadky a odborné skúšky elektrických zariadení podľa vyhlášky č. 508/2009 Z. z. Východiskové aj periodické revízie na celom Slovensku.',
    cardDesc: 'Revízie elektrickej inštalácie, bleskozvodov, spotrebičov a elektrického náradia.',
    cardItems: ['Revízia elektrickej inštalácie', 'Revízia bleskozvodu', 'Revízia elektrických spotrebičov', 'Revízia el. ručného náradia', 'Východisková aj periodická revízia'],
    sectionTitle: 'Kedy potrebujete revíziu elektriky?',
    text1: 'Máte dom, byt, firmu alebo prevádzku? Zo zákona musíte mať pravidelnú revíziu elektrickej inštalácie. Lehoty sa líšia podľa typu prostredia — v bežnom byte je to každých 5 rokov, v prevádzke to môže byť aj každé 2 roky. Ak ste robili novú elektroinštaláciu alebo rekonštrukciu, potrebujete východiskovú revíziu ešte pred prvým zapojením.',
    text2: 'To isté platí pre bleskozvod — ak máte na streche hromozvod, musíte mať jeho revíziu. Bez nej vám poisťovňa v prípade zásahu bleskom nepreplatí škodu.',
    list: [
      'Východisková revízia novej alebo rekonštruovanej inštalácie',
      'Periodická revízia podľa lehôt vyhlášky 508/2009 Z. z.',
      'Revízia bleskozvodu (hromozvodu) podľa STN 62305',
      'Revízia elektrických spotrebičov podľa STN 33 1630',
      'Revízia el. ručného náradia podľa STN 33 1630',
      'Kompletná revízna správa s protokolom o meraní',
    ],
    items: [
      { icon: '🏠', text: 'Byty a rodinné domy', badge: 'každých 5 rokov' },
      { icon: '🏢', text: 'Kancelárie a obchody', badge: 'každých 5 rokov' },
      { icon: '🏭', text: 'Výrobné prevádzky', badge: 'každé 2-3 roky' },
      { icon: '⚡', text: 'Priestory s nebezp. výbuchu', badge: 'každé 2 roky' },
      { icon: '🔨', text: 'Stavenisko', badge: 'každých 6 mesiacov' },
    ],
    extended: [
      {
        title: 'Čo kontroluje revízny technik pri revízii elektriky?',
        paragraphs: [
          'Revízia elektrickej inštalácie nie je len „obídenie rozvádzača." Revízny technik vykoná <strong style="color:#00d4ff">vizuálnu prehliadku</strong> celej inštalácie — skontroluje stav rozvádzačov, ističov, prúdových chráničov, kabeláže, zásuviek, svietidiel a ich pripojení. Hľadá viditeľné poškodenia, nevyhovujúce spoje, chýbajúce kryty a iné nedostatky.',
          'Po vizuálnej prehliadke nasledujú <strong style="color:#00d4ff">merania</strong> — <strong style="color:#00d4ff">izolačný odpor</strong> vodičov, <strong style="color:#00d4ff">impedancia poruchovej slučky</strong>, <strong style="color:#00d4ff">spojitosť ochranných vodičov</strong>, <strong style="color:#00d4ff">meranie sledu fáz</strong>, overenie funkčnosti <strong style="color:#00d4ff">prúdových chráničov (RCD)</strong> a kontrola ochrany pred zásahom elektrickým prúdom. Výsledky meraní sa zaznamenajú do protokolu, ktorý je súčasťou revíznej správy.',
          'Ak revízny technik nájde závady, rozdelí ich na <strong style="color:#00d4ff">závady brániace bezpečnej prevádzke</strong> (zariadenie nemožno ďalej prevádzkovať) a <strong style="color:#00d4ff">závady nebrániace bezpečnej prevádzke</strong> (zariadenie sa môže používať, ale závada sa musí odstrániť do stanoveného termínu).',
          'Súčasťou revízie je aj <strong style="color:#00d4ff">kontrola sprievodnej technickej dokumentácie</strong> podľa § 8 vyhlášky č. 508/2009 Z. z. — revízny technik overí existenciu a úplnosť dokladu o súlade (vyhlásenie o zhode), výrobného štítku, pasportu alebo revíznej knihy a <strong style="color:#00d4ff">protokolu o určení vonkajších vplyvov</strong>.',
        ],
      },
      {
        title: 'Lehoty periodických revízií elektrickej inštalácie',
        paragraphs: [
          'Lehoty odborných prehliadok a odborných skúšok elektrickej inštalácie určuje <strong style="color:#00d4ff">príloha č. 8 vyhlášky č. 508/2009 Z. z.</strong> Lehota závisí od dvoch faktorov — od druhu objektu (tabuľka A) a od klasifikácie vonkajších vplyvov (tabuľka B). Platí vždy kratšia z oboch lehôt.',
          'Podľa druhu objektu sú lehoty nasledovné: murovaná obytná a kancelárska budova — <strong style="color:#00d4ff">každých 5 rokov</strong>. Školy, materské školy, jasle, hotely, ubytovacie zariadenia a rekreačné strediská — <strong style="color:#00d4ff">každé 3 roky</strong>. Miestnosti na zdravotnícke účely — <strong style="color:#00d4ff">každé 3 roky</strong>. Výškové budovy a objekty určené na zhromažďovanie viac ako 250 osôb (napríklad obchodné centrá, kultúrne zariadenia, stanice hromadnej dopravy) — <strong style="color:#00d4ff">každé 2 roky</strong>. Objekty zhotovené z horľavých materiálov so stupňom horľavosti C, D, E a F — <strong style="color:#00d4ff">každé 2 roky</strong>. Dočasné elektrické inštalácie, napríklad na staveniskách — <strong style="color:#00d4ff">každých 6 mesiacov</strong>.',
          'Pre zariadenia na ochranu pred účinkami atmosférickej elektriny (bleskozvody) platia lehoty podľa hladiny ochrany: hladina I a II — <strong style="color:#00d4ff">každé 2 roky</strong>, hladina III a IV — <strong style="color:#00d4ff">každé 4 roky</strong>. V priestore s nebezpečenstvom výbuchu je lehota <strong style="color:#00d4ff">1 rok</strong>.',
        ],
      },
      {
        title: 'Východisková a periodická revízia — aký je rozdiel?',
        paragraphs: [
          '<strong style="color:#00d4ff">Východisková revízia</strong> sa vykonáva pred prvým uvedením elektrickej inštalácie do prevádzky. Potrebujete ju vždy, keď sa robí nová elektroinštalácia — napríklad v novostavbe, po kompletnej rekonštrukcii elektriky, po rozšírení existujúcej inštalácie alebo po zmene istenia. Bez platnej východiskovej revíznej správy nesmie byť zariadenie uvedené do prevádzky.',
          '<strong style="color:#00d4ff">Periodická revízia</strong> sa vykonáva počas prevádzky v pravidelných lehotách podľa <strong style="color:#00d4ff">prílohy č. 8 vyhlášky č. 508/2009 Z. z.</strong> Jej cieľom je overiť, že inštalácia je naďalej v bezpečnom stave a spĺňa požiadavky na bezpečnú prevádzku. Obe revízie vykonáva výhradne <strong style="color:#00d4ff">revízny technik s platným osvedčením</strong>.',
        ],
      },
      {
        title: 'Revízia elektrických spotrebičov a ručného náradia',
        paragraphs: [
          'Okrem elektrickej inštalácie podliehajú revízii aj elektrické spotrebiče a elektrické ručné náradie počas ich používania. Rozsah a lehoty revízií upravuje technická norma <strong style="color:#00d4ff">STN 33 1630:2025</strong>, ktorá nahradila predchádzajúce normy STN 33 1610 a STN 33 1600.',
          'STN 33 1630:2025 klasifikuje spotrebiče a náradie do <strong style="color:#00d4ff">skupín A až E</strong> podľa spôsobu a prostredia používania. Lehoty kontrol a revízií sa líšia podľa skupiny — od <strong style="color:#00d4ff">1 mesiaca</strong> pri náradí v priemyselnom použití až po <strong style="color:#00d4ff">24 mesiacov</strong> pri spotrebičoch v bežnom prostredí. Presné lehoty závisia od konkrétneho zariadenia a prostredia, v ktorom sa používa.',
        ],
      },
      {
        title: 'Čo obsahuje revízna správa?',
        paragraphs: [
          'Po vykonaní revízie vám dodáme kompletnú revíznu správu s <strong style="color:#00d4ff">okrúhlou pečiatkou revízneho technika</strong>. Revízna správa obsahuje identifikáciu revidovaného zariadenia, rozsah a druh revízie (východisková alebo periodická), súpis vykonaných meraní s nameranými hodnotami, zoznam zistených závad s uvedením ich závažnosti a celkový záver — či je zariadenie <strong style="color:#00d4ff">spôsobilé</strong> alebo <strong style="color:#00d4ff">nespôsobilé</strong> na bezpečnú prevádzku. Súčasťou je aj overenie úplnosti <strong style="color:#00d4ff">sprievodnej technickej dokumentácie</strong> podľa prílohy č. 3 vyhlášky č. 508/2009 Z. z.',
          'Revízna správa s okrúhlou pečiatkou revízneho technika je doklad, ktorý od vás vyžaduje zákon, inšpektorát práce aj poisťovňa. Odporúčame ju uchovávať po celú dobu prevádzky zariadenia — pri <strong style="color:#00d4ff">kontrole z inšpektorátu práce</strong> ju budete potrebovať predložiť.',
        ],
      },
      {
        title: 'Čo hrozí bez platnej revízie elektrickej inštalácie?',
        paragraphs: [
          'Prevádzkovanie elektrickej inštalácie bez platnej revízie je porušenie <strong style="color:#00d4ff">§ 13 zákona č. 124/2006 Z. z.</strong> o bezpečnosti a ochrane zdravia pri práci. Inšpektorát práce môže za toto porušenie uložiť <strong style="color:#00d4ff">pokutu až do výšky 100 000 €</strong>. V prípade pracovného úrazu na nezrevídovanom zariadení nesie prevádzkovateľ plnú zodpovednosť — vrátane <strong style="color:#00d4ff">trestnoprávnej</strong>.',
          'Rovnako dôležitý je vzťah s poisťovňou. Ak dôjde k škodovej udalosti (napríklad požiar spôsobený skratom) a vy nemáte platnú revíznu správu elektrickej inštalácie, <strong style="color:#00d4ff">poisťovňa má právo odmietnuť vyplatenie poistného plnenia</strong>. Pravidelná revízia elektriky nie je len papier do šuflíka — je to ochrana vás, vašich zamestnancov a vášho majetku.',
        ],
      },
    ],
  },
  plyn: {
    slug: 'plynove-zariadenia',
    color: '#ff2d6b',
    colorVar: 'plyn',
    tag: 'Plynové zariadenia',
    icon: '🔥',
    title: 'Revízia plynového kotla, rozvodov a spotrebičov',
    desc: 'Odborné prehliadky a odborné skúšky plynových zariadení. Kotly, rozvody, komíny, regulačné stanice — všetko podľa vyhlášky č. 508/2009 Z. z. Platí pre zariadenia spadajúce do skupiny A, B alebo C podľa prílohy č. 1.',
    cardDesc: 'Revízie plynových kotlov, rozvodov, spotrebičov a komínov. Aby ste vedeli, že je u vás všetko bezpečné.',
    cardItems: ['Revízia plynového kotla', 'Revízia plynových rozvodov', 'Revízia plynových spotrebičov', 'Kontrola komína a dymovodu', 'Odborná prehliadka kotolne'],
    sectionTitle: 'Prečo je revízia plynu taká dôležitá?',
    text1: 'Máte doma plynový kotol? Potom by ste mali vedieť, že odborná prehliadka (kontrola) sa robí každý rok a odborná skúška (revízia) každé tri roky. Platí to pre všetky plynové spotrebiče — kotly, ohrievače vody, sporáky s výkonom od 5 kW, plynové rozvody aj regulačné stanice.',
    text2: 'Nejde len o papier do šuflíka. Ide o bezpečnosť vašej rodiny. Unikajúci plyn alebo nefunkčný odvod spalín môžu mať fatálne následky.',
    list: [
      'Odborná prehliadka plynového kotla — každý rok',
      'Odborná skúška plynového zariadenia — každé 3 roky',
      'Revízia plynových rozvodov a prípojok',
      'Kontrola odvodu spalín (komín, dymovod)',
      'Revízia kotolní a regulačných staníc plynu',
      'Tlaková skúška plynovodu pri novej inštalácii',
    ],
    items: [
      { icon: '🔥', text: 'Plynový kotol (od 5 kW)', badge: 'kontrola 1r / skúška 3r' },
      { icon: '🚿', text: 'Plynový ohrievač vody', badge: 'kontrola 1r / skúška 3r' },
      { icon: '🔧', text: 'Plynový rozvod', badge: 'kontrola 1r / skúška 3r' },
      { icon: '🏭', text: 'Kotolňa (nad 0,5 MW)', badge: 'skupina A — úradná skúška' },
      { icon: '📋', text: 'Regulačná stanica', badge: 'kontrola 1r / skúška 3r' },
    ],
    extended: [
      {
        title: 'Čo kontroluje revízny technik pri revízii plynového kotla?',
        paragraphs: [
          'Revízia plynového kotla zahŕňa <strong style="color:#ff2d6b">vizuálnu kontrolu</strong> celého zariadenia — stav horáka, výmenníka tepla, ovládacích prvkov, bezpečnostných armatúr a plynových spojov. Revízny technik kontroluje tesnosť plynových rozvodov a prípojok, funkčnosť bezpečnostných prvkov (termostat, poistný ventil, ionizačná elektróda) a stav <strong style="color:#ff2d6b">odvodu spalín</strong> (komín, dymovod).',
          'Súčasťou revízie je aj kontrola vetrania miestnosti, v ktorej je kotol umiestnený. Nedostatočné vetranie v kombinácii s nefunkčným odvodom spalín je jednou z najčastejších príčin <strong style="color:#ff2d6b">otravy oxidom uhoľnatým (CO)</strong> — tichým zabijakom, ktorý každoročne ohrozuje desiatky domácností na Slovensku.',
          'Po kontrole revízny technik vykoná <strong style="color:#ff2d6b">funkčnú skúšku</strong> zariadenia — overí správny štart horáka, stabilitu plameňa, funkčnosť regulácie a bezpečné odstavenie. Skontroluje tiež prístupnosť a funkčnosť <strong style="color:#ff2d6b">hlavného uzáveru plynu (HUP)</strong> a stav <strong style="color:#ff2d6b">regulátora tlaku plynu</strong>. Výsledky zaznamená do revíznej správy.',
          'Súčasťou revízie je aj <strong style="color:#ff2d6b">kontrola sprievodnej technickej dokumentácie</strong> podľa § 8 vyhlášky č. 508/2009 Z. z. — revízny technik overí existenciu a úplnosť pasportu, revíznej knihy a dokladu o súlade (vyhlásenie o zhode) podľa prílohy č. 3.',
        ],
      },
      {
        title: 'Lehoty odborných prehliadok a skúšok plynových zariadení',
        paragraphs: [
          'Lehoty revízií plynových zariadení určuje <strong style="color:#ff2d6b">príloha č. 10 vyhlášky č. 508/2009 Z. z.</strong> a závisia od skupiny zariadenia (A, B alebo C) a od druhu zariadenia podľa prílohy č. 1.',
          'Pre bežný <strong style="color:#ff2d6b">plynový kotol</strong> v domácnosti alebo firme (skupina B, písm. h — spotrebiče od 5 kW do 0,5 MW) platí: <strong style="color:#ff2d6b">odborná prehliadka (OP) každý rok</strong> a <strong style="color:#ff2d6b">odborná skúška (OS) každé 3 roky</strong>. Rovnaké lehoty platia pre plynové ohrievače vody, regulačné stanice a plynové rozvody skupiny B.',
          'Pre <strong style="color:#ff2d6b">kotolne s výkonom nad 0,5 MW</strong> (skupina A, písm. h) sú lehoty prísnejšie — odborná prehliadka sa robí <strong style="color:#ff2d6b">každých 6 mesiacov</strong>, odborná skúška <strong style="color:#ff2d6b">každé 3 roky</strong> a <strong style="color:#ff2d6b">opakovaná úradná skúška každých 6 rokov</strong> vykonaná oprávnenou právnickou osobou.',
          'Plynové rozvody skupiny B, písm. g (bežné domové plynovody s tlakom do 0,4 MPa) majú lehoty: odborná prehliadka <strong style="color:#ff2d6b">každé 3 roky</strong> a odborná skúška <strong style="color:#ff2d6b">každých 6 rokov</strong>.',
        ],
      },
      {
        title: 'Odborná prehliadka vs. odborná skúška — aký je rozdiel?',
        paragraphs: [
          '<strong style="color:#ff2d6b">Odborná prehliadka (OP)</strong> je kontrola stavu plynového zariadenia, pri ktorej sa overuje, či je zariadenie v bezpečnom stave, či nemá viditeľné závady a či sú dodržané bezpečnostnotechnické požiadavky. Vykonáva ju revízny technik.',
          '<strong style="color:#ff2d6b">Odborná skúška (OS)</strong> je komplexnejšia — okrem vizuálnej kontroly zahŕňa aj funkčné skúšky zariadenia, skúšky tesnosti, kontrolu meracích a regulačných prvkov a overenie celkovej bezpečnosti prevádzky. Taktiež ju vykonáva revízny technik a o výsledku vystaví revíznu správu.',
          'Pri plynových zariadeniach <strong style="color:#ff2d6b">skupiny A</strong> sa navyše vykonáva <strong style="color:#ff2d6b">opakovaná úradná skúška</strong>, ktorú vykonáva oprávnená právnická osoba (napr. Technická inšpekcia, a.s.).',
        ],
      },
      {
        title: 'Kedy potrebujete východiskovú revíziu plynu?',
        paragraphs: [
          'Východiskovú revíziu plynového zariadenia potrebujete pred prvým uvedením do prevádzky — napríklad po <strong style="color:#ff2d6b">inštalácii nového kotla</strong>, po výmene starého kotla za nový, po montáži nového plynového rozvodu alebo po <strong style="color:#ff2d6b">rekonštrukcii plynového zariadenia</strong>.',
          'Pri nových plynovodoch sa navyše vykonáva <strong style="color:#ff2d6b">tlaková skúška tesnosti</strong> — plynovod sa naplní skúšobným tlakom a sleduje sa, či nedochádza k úniku. Bez úspešnej tlakovej skúšky a východiskovej revízie nesmie byť plynové zariadenie uvedené do prevádzky.',
        ],
      },
      {
        title: 'Kontrola komína a odvodu spalín',
        paragraphs: [
          'Funkčný <strong style="color:#ff2d6b">odvod spalín</strong> je kriticky dôležitý pre bezpečnú prevádzku každého plynového spotrebiča. Pri revízii plynového kotla kontrolujeme aj stav komína a dymovodu — správny ťah, tesnosť spojov, stav komínovej vložky a voľný prierez.',
          'Upchatý alebo netesný komín je priamy zdroj nebezpečenstva — spaliny vrátane <strong style="color:#ff2d6b">oxidu uhoľnatého (CO)</strong> sa môžu vracať do miestnosti. Pravidelná kontrola odvodu spalín je preto rovnako dôležitá ako revízia samotného kotla.',
        ],
      },
      {
        title: 'Čo obsahuje revízna správa plynového zariadenia?',
        paragraphs: [
          'Po vykonaní revízie vám dodáme kompletnú revíznu správu s <strong style="color:#ff2d6b">okrúhlou pečiatkou revízneho technika</strong>. Správa obsahuje identifikáciu zariadenia, druh a rozsah vykonanej kontroly, zoznam skontrolovaných častí, zistené závady (ak existujú), celkové hodnotenie stavu zariadenia a záver o <strong style="color:#ff2d6b">spôsobilosti na ďalšiu bezpečnú prevádzku</strong>. Súčasťou je aj overenie úplnosti <strong style="color:#ff2d6b">sprievodnej technickej dokumentácie</strong> podľa prílohy č. 3 vyhlášky č. 508/2009 Z. z.',
          'Revízna správa je doklad, ktorý musíte vedieť predložiť pri kontrole z <strong style="color:#ff2d6b">inšpektorátu práce</strong>. Rovnako ju vyžaduje poisťovňa v prípade poistnej udalosti súvisiacej s plynovým zariadením.',
        ],
      },
      {
        title: 'Čo hrozí bez platnej revízie plynového zariadenia?',
        paragraphs: [
          'Prevádzkovanie plynového zariadenia bez platnej revízie je porušenie <strong style="color:#ff2d6b">§ 13 zákona č. 124/2006 Z. z.</strong> o BOZP. Inšpektorát práce môže uložiť <strong style="color:#ff2d6b">pokutu až do výšky 100 000 €</strong>. V prípade havárie alebo pracovného úrazu na nezrevídovanom zariadení hrozí prevádzkovateľovi aj <strong style="color:#ff2d6b">trestnoprávna zodpovednosť</strong>.',
          'Ale nejde len o pokuty. Nefunkčný plynový kotol alebo netesný plynový rozvod môžu spôsobiť <strong style="color:#ff2d6b">únik plynu, výbuch alebo otravu CO</strong>. Pravidelná revízia nie je byrokracia — je to ochrana života a zdravia vás a vašej rodiny.',
        ],
      },
    ],
  },
  tlak: {
    slug: 'tlakove-zariadenia',
    color: '#8b5cf6',
    colorVar: 'tlak',
    tag: 'Tlakové zariadenia',
    icon: '⚙️',
    title: 'Revízia tlakových nádob, kompresorov a kotlov',
    desc: 'Vonkajšie prehliadky, vnútorné prehliadky a tlakové skúšky. Kompletné revízie tlakových zariadení skupiny A, B aj C.',
    cardDesc: 'Revízie tlakových nádob, kompresorov, expanzných nádob a kotlov.',
    cardItems: ['Revízia tlakovej nádoby', 'Revízia kompresora', 'Revízia expanznej nádoby', 'Parné a kvapalinové kotly', 'Vonkajšia + vnútorná + tlaková skúška'],
    sectionTitle: 'Čo všetko patrí medzi tlakové zariadenia?',
    text1: 'Tlakové zariadenia sú všade — kompresory v dielňach, expanzné nádoby v kotolniach, tlakové nádoby v priemysle, parné kotly vo výrobe. Podľa vyhlášky 508/2009 Z. z. sa delia do skupín A, B a C podľa miery ohrozenia.',
    text2: 'Robíme vonkajšie prehliadky, vnútorné prehliadky aj tlakové skúšky. Po revízii dostanete kompletnú revíznu správu so všetkými náležitosťami.',
    list: [
      'Vonkajšia prehliadka tlakovej nádoby',
      'Vnútorná prehliadka tlakovej nádoby',
      'Tlaková skúška',
      'Revízia kompresora a vzdušníka',
      'Revízia expanznej nádoby',
      'Revízia parných a kvapalinových kotlov (trieda I.–V.)',
    ],
    items: [
      { icon: '🔩', text: 'Tlaková nádoba sk. A', badge: 'VP 1r / VnP 5r / TS 10r' },
      { icon: '🔧', text: 'Tlaková nádoba sk. B', badge: 'VP 1r / VnP 5r / TS 10r' },
      { icon: '💨', text: 'Kompresor + vzdušník', badge: 'podľa skupiny nádoby' },
      { icon: '♨️', text: 'Parný kotol (I.–IV. trieda)', badge: 'VP 6m / VnP 1r / TS 6r' },
      { icon: '🌡️', text: 'Kvapalinový kotol (V. trieda)', badge: 'VP 1r / VnP 1r / TS 10r' },
    ],
    extended: [
      {
        title: 'Čo je tlaková nádoba a kedy spadá pod VTZ?',
        paragraphs: [
          'Tlaková nádoba je každá uzavretá nádoba, v ktorej je médium (plyn, para alebo kvapalina) pod vyšším tlakom ako atmosférický. Medzi najbežnejšie príklady patria <strong style="color:#8b5cf6">vzdušníky kompresorov</strong>, <strong style="color:#8b5cf6">expanzné nádoby</strong> v kotolniach, tlakové zásobníky v priemysle, autoklávy a parné kotly.',
          'Podľa <strong style="color:#8b5cf6">prílohy č. 1 vyhlášky č. 508/2009 Z. z.</strong> sa tlakové zariadenia zaraďujú do skupín podľa miery ohrozenia. Pre nádoby s nie nebezpečnými plynmi (napríklad vzduch) je rozhodujúci najvyšší pracovný tlak, objem a ich súčin — tzv. <strong style="color:#8b5cf6">bezpečnostný súčin (p × V)</strong>, kde p je v MPa a V v litroch. Ak je tlak vyšší ako 0,2 MPa, objem nad 10 litrov a bezpečnostný súčin väčší ako 20 — ide o <strong style="color:#8b5cf6">skupinu A</strong>. Ak je bezpečnostný súčin väčší ako 5, ale menší alebo rovný 20 — ide o <strong style="color:#8b5cf6">skupinu B</strong>.',
          'V praxi to znamená, že aj bežný dielenský kompresor so vzdušníkom 50 litrov a tlakom 0,8 MPa má bezpečnostný súčin 40 (0,8 × 50), čo ho zaraďuje do <strong style="color:#8b5cf6">skupiny A</strong>. Do skupiny B spadajú len kompresory s menším vzdušníkom — približne do 25 litrov pri bežnom pracovnom tlaku.',
        ],
      },
      {
        title: 'Tri druhy revízií tlakových zariadení',
        paragraphs: [
          'Na rozdiel od elektrických alebo plynových zariadení, pri tlakových zariadeniach sa vykonávajú <strong style="color:#8b5cf6">tri odlišné druhy kontrol</strong>:',
          '<strong style="color:#8b5cf6">Vonkajšia prehliadka (VP)</strong> — vizuálna kontrola vonkajšieho stavu nádoby, spojov, armatúr, <strong style="color:#8b5cf6">manometrov</strong> (overenie kalibrácie), <strong style="color:#8b5cf6">poistných ventilov</strong> (funkčnosť a nastavenie otvárania) a bezpečnostného príslušenstva. Overenie, či nie sú viditeľné korózie, deformácie alebo netesnosti. Súčasťou je aj <strong style="color:#8b5cf6">kontrola sprievodnej technickej dokumentácie</strong> podľa § 8 vyhlášky č. 508/2009 Z. z. — pasport, revízna kniha, výrobný štítok a doklad o súlade (vyhlásenie o zhode).',
          '<strong style="color:#8b5cf6">Vnútorná prehliadka (VnP)</strong> — kontrola vnútorného povrchu nádoby. Hľadajú sa korózie, trhliny, usadeniny a iné poškodenia, ktoré môžu ovplyvniť pevnosť a tesnosť nádoby. Nádoba musí byť pred vnútornou prehliadkou vyprázdnená a sprístupnená.',
          '<strong style="color:#8b5cf6">Tlaková skúška (TS)</strong> — nádoba sa naplní skúšobným médiom (zvyčajne vodou) na skúšobný tlak, ktorý je vyšší ako najvyšší pracovný tlak. Sleduje sa, či nedochádza k deformáciám alebo únikom. Je to najprísnejší druh kontroly.',
        ],
      },
      {
        title: 'Lehoty revízií tlakových zariadení podľa prílohy č. 5',
        paragraphs: [
          'Lehoty odborných prehliadok a skúšok tlakových zariadení počas prevádzky určuje <strong style="color:#8b5cf6">príloha č. 5 vyhlášky č. 508/2009 Z. z.</strong> a závisia od skupiny a druhu zariadenia.',
          'Pre <strong style="color:#8b5cf6">tlakové nádoby skupiny A</strong> (typ b): vonkajšia prehliadka <strong style="color:#8b5cf6">každý rok</strong>, vnútorná prehliadka <strong style="color:#8b5cf6">každých 5 rokov</strong>, tlaková skúška <strong style="color:#8b5cf6">každých 10 rokov</strong>. Navyše sa vykonáva opakovaná úradná skúška oprávnenou právnickou osobou <strong style="color:#8b5cf6">každých 10 rokov</strong>.',
          'Pre <strong style="color:#8b5cf6">tlakové nádoby skupiny B</strong> (typ b): vonkajšia prehliadka <strong style="color:#8b5cf6">každý rok</strong>, vnútorná prehliadka <strong style="color:#8b5cf6">každých 5 rokov</strong>, tlaková skúška <strong style="color:#8b5cf6">každých 10 rokov</strong>.',
          'Pre <strong style="color:#8b5cf6">parné kotly skupiny A</strong> (triedy I.–IV.) sú lehoty výrazne prísnejšie: vonkajšia prehliadka <strong style="color:#8b5cf6">každých 6 mesiacov</strong>, vnútorná prehliadka <strong style="color:#8b5cf6">každý rok</strong>, tlaková skúška <strong style="color:#8b5cf6">každých 6 rokov</strong> a opakovaná úradná skúška <strong style="color:#8b5cf6">každých 6 rokov</strong>.',
        ],
      },
      {
        title: 'Kompresor v dielni — potrebuje revíziu?',
        paragraphs: [
          'Áno, ak má <strong style="color:#8b5cf6">vzdušník (tlakovú nádobu)</strong>. Samotný kompresor (motor + hlava) nie je tlakové zariadenie, ale vzdušník, do ktorého kompresor stláča vzduch, už pod VTZ spadá. Rozhodujúci je pracovný tlak a objem vzdušníka.',
          'Väčšina dielenských kompresorov pracuje s tlakom <strong style="color:#8b5cf6">0,8–1,0 MPa</strong> a má vzdušník s objemom 50–500 litrov. Pri týchto parametroch je bezpečnostný súčin väčší ako 20, čo znamená zaradenie do <strong style="color:#8b5cf6">skupiny A</strong>. To znamená povinné vonkajšie prehliadky každý rok, vnútorné prehliadky každých 5 rokov, tlakové skúšky každých 10 rokov a opakovanú úradnú skúšku oprávnenou právnickou osobou každých 10 rokov.',
        ],
      },
      {
        title: 'Čo obsahuje revízna správa tlakovej nádoby?',
        paragraphs: [
          'Po vykonaní revízie vám dodáme revíznu správu s <strong style="color:#8b5cf6">okrúhlou pečiatkou revízneho technika</strong>. Správa obsahuje identifikáciu zariadenia (výrobca, rok výroby, výrobné číslo, parametre), druh vykonanej kontroly (VP, VnP alebo TS), popis stavu zariadenia, zistené závady a celkový záver o <strong style="color:#8b5cf6">spôsobilosti na ďalšiu bezpečnú prevádzku</strong>. Súčasťou je aj overenie úplnosti <strong style="color:#8b5cf6">sprievodnej technickej dokumentácie</strong> podľa prílohy č. 3 vyhlášky č. 508/2009 Z. z.',
          'Pri tlakovej skúške správa navyše obsahuje údaje o skúšobnom tlaku, dobe trvania skúšky a výsledok — či nádoba vydržala skúšobný tlak bez deformácií a únikov.',
        ],
      },
      {
        title: 'Čo hrozí bez platnej revízie tlakovej nádoby?',
        paragraphs: [
          'Tlaková nádoba bez revízie je časovaná bomba — doslova. Korózia, únavové trhliny alebo poškodené poistné ventily môžu viesť k <strong style="color:#8b5cf6">výbuchu tlakovej nádoby</strong>, čo má devastačné následky na okolie.',
          'Z právneho hľadiska je prevádzkovanie tlakovej nádoby bez platnej revízie porušenie <strong style="color:#8b5cf6">§ 13 zákona č. 124/2006 Z. z.</strong> o BOZP. Inšpektorát práce môže uložiť <strong style="color:#8b5cf6">pokutu až do výšky 100 000 €</strong>. V prípade havarie s následkom na zdraví alebo živote hrozí <strong style="color:#8b5cf6">trestnoprávna zodpovednosť</strong> prevádzkovateľa.',
        ],
      },
    ],
  },
  zdvih: {
    slug: 'zdvihacie-zariadenia',
    color: '#00e676',
    colorVar: 'zdvih',
    tag: 'Zdvíhacie zariadenia',
    icon: '🏗️',
    title: 'Revízia žeriavov, plošín, brán a vozíkov',
    desc: 'Odborné prehliadky a skúšky zdvíhacích zariadení vrátane viazacích prostriedkov. Od žeriavov cez priemyselné brány po vysokozdvižné vozíky.',
    cardDesc: 'Revízie žeriavov, plošín, priemyselných brán, autozdvihákov, vysokozdvižných vozíkov a viazacích prostriedkov.',
    cardItems: ['Revízia žeriavu', 'Revízia zdvíhacej plošiny', 'Revízia priemyselných brán', 'Revízia autozdviháka', 'Revízia vysokozdvižného vozíka', 'Kontrola viazacích prostriedkov'],
    sectionTitle: 'Prečo sú revízie zdvíhacích zariadení také dôležité?',
    text1: 'Zdvíhacie zariadenia sú jedny z najrizikovejších technických zariadení — pracujú s ťažkými bremenami a akákoľvek porucha môže mať vážne následky. Medzi VTZ zdvíhacie patria aj zvislé posuvné brány s motorovým pohonom v priemyselných halách, skladoch a logistických centrách.',
    text2: 'Okrem samotných zariadení kontrolujeme aj viazacie prostriedky — laná, reťaze, popruhy a háky.',
    list: [
      'Odborná prehliadka a skúška žeriavov a žeriavových dráh',
      'Revízia zdvíhacích plošín a servisných zdvíhacích zariadení',
      'Revízia zvislých posuvných brán s motorovým pohonom',
      'Revízia autozdvihákov (hydraulický zdvihák na vozidlá)',
      'Revízia vysokozdvižných a nízkozdvižných vozíkov',
      'Kontrola viazacích prostriedkov (laná, reťaze, popruhy)',
      'Revízia stavebných výťahov a pohyblivých plošín',
    ],
    items: [
      { icon: '🏗️', text: 'Žeriav nad 1 000 kg (sk. A)', badge: 'OP 2r / OS 4r' },
      { icon: '🚪', text: 'Priemyselná brána s mot. pohonom', badge: 'lehoty podľa výrobcu' },
      { icon: '📐', text: 'Pohyblivá pracovná plošina', badge: 'OP 1r / OS 2r' },
      { icon: '🔧', text: 'Autozdvihák (hydraulický)', badge: 'podľa TPV' },
      { icon: '🚜', text: 'Vysokozdvižný vozík', badge: 'podľa TPV' },
      { icon: '🔗', text: 'Viazacie prostriedky', badge: 'kontrola pred použitím' },
    ],
    extended: [
      {
        title: 'Aké zariadenia patria medzi VTZ zdvíhacie?',
        paragraphs: [
          'Zdvíhacie zariadenia sú rozdelené do skupín A, B a C podľa <strong style="color:#00e676">prílohy č. 1, II. časti vyhlášky č. 508/2009 Z. z.</strong> Do <strong style="color:#00e676">skupiny A</strong> (vysoká miera ohrozenia) patria žeriavy s nosnosťou nad 1 000 kg, pohyblivé pracovné plošiny s výškou zdvihu nad 1,5 m, osobné a nákladné výťahy, stavebné výťahy, pohyblivé schody a zariadenia technickej zábavnej činnosti.',
          'Do <strong style="color:#00e676">skupiny B</strong> (vyššia miera ohrozenia) patria žeriavy do 1 000 kg, zdvíhacie ústrojenstá vysokozdvižných vozíkov, servisné zdvíhacie zariadenia (autozdviháky), zdvíhacie rampy, zdvíhacie plošiny a <strong style="color:#00e676">zvislé posuvné brány s motorovým pohonom s výškou zdvihu nad 2,7 m</strong>.',
          'Do <strong style="color:#00e676">skupiny C</strong> patria viazacie prostriedky (laná, reťaze, popruhy, háky), ktoré nie sú trvalou súčasťou zdvíhacieho zariadenia.',
        ],
      },
      {
        title: 'Lehoty odborných prehliadok a skúšok zdvíhacích zariadení',
        paragraphs: [
          'Lehoty revízií zdvíhacích zariadení počas prevádzky určuje <strong style="color:#00e676">príloha č. 7 vyhlášky č. 508/2009 Z. z.</strong> Pre zariadenia skupiny A platia pevné lehoty, pre väčšinu zariadení skupiny B sa lehoty riadia podľa <strong style="color:#00e676">technických podmienok výrobcu (TPV)</strong>.',
          'Pre <strong style="color:#00e676">žeriavy skupiny A</strong> (nad 1 000 kg) sú lehoty: odborná prehliadka <strong style="color:#00e676">každé 2 roky</strong> a odborná skúška <strong style="color:#00e676">každé 4 roky</strong>. Pre stavebné žeriavy, mobilné žeriavy, nakladacie žeriavy (hydraulické ruky) a žeriavy v agresívnom prostredí sú lehoty prísnejšie — OP <strong style="color:#00e676">každý rok</strong> a OS <strong style="color:#00e676">každé 2 roky</strong>.',
          'Pre <strong style="color:#00e676">pohyblivé pracovné plošiny</strong> skupiny A: odborná prehliadka <strong style="color:#00e676">každý rok</strong>, odborná skúška <strong style="color:#00e676">každé 2 roky</strong> a opakovaná úradná skúška <strong style="color:#00e676">každých 10 rokov</strong>.',
          'Pre <strong style="color:#00e676">vysokozdvižné vozíky</strong> a <strong style="color:#00e676">priemyselné brány</strong> (skupina B) sa lehoty riadia podľa technických podmienok výrobcu. V praxi to znamená lehoty stanovené v návode na obsluhu a údržbu od výrobcu zariadenia.',
        ],
      },
      {
        title: 'Čo kontroluje revízny technik pri revízii zdvíhacieho zariadenia?',
        paragraphs: [
          'Rozsah kontroly závisí od druhu zariadenia. Pri <strong style="color:#00e676">žeriavoch</strong> revízny technik kontroluje stav nosných oceľových konštrukcií (korózia, trhliny, stav zvarov), <strong style="color:#00e676">nosné laná a reťaze</strong> (opotrebenie, predĺženie, poškodenie drôtov), funkčnosť <strong style="color:#00e676">koncových vypínačov</strong> a bezpečnostných prvkov, brzdový systém a stav <strong style="color:#00e676">žeriavovej dráhy</strong>.',
          'Pri <strong style="color:#00e676">vysokozdvižných vozíkoch</strong> sa kontroluje zdvíhací mechanizmus (vidlice, reťaze, valce), riadenie, brzdy, osvetlenie, výstražná signalizácia a celkový technický stav vozíka.',
          'Pri všetkých zdvíhacích zariadeniach revízny technik zároveň kontroluje <strong style="color:#00e676">sprievodnú technickú dokumentáciu</strong> podľa § 8 vyhlášky č. 508/2009 Z. z. — pasport, revíznu knihu, doklad o súlade (vyhlásenie o zhode) a evidenciu VTZ podľa prílohy č. 4.',
        ],
      },
      {
        title: 'Revízia priemyselnej brány — kedy je povinná?',
        paragraphs: [
          'Nie každá brána je VTZ. Pod vyhradené technické zariadenia zdvíhacie spadá len <strong style="color:#00e676">zvislá posuvná brána s motorovým pohonom s výškou zdvihu nad 2,7 m</strong> (príloha č. 1, II. časť, sk. B, písm. f). To sú typicky sekcionálne a rolovacie brány v priemyselných halách, skladoch a logistických centrách.',
          'Lehoty odborných prehliadok a skúšok pre brány nie sú vo vyhláške fixne určené — riadia sa <strong style="color:#00e676">technickými podmienkami výrobcu (TPV)</strong>. To znamená, že rozhodujúci je návod od výrobcu brány, kde sú uvedené intervaly údržby a kontrol. Revíziu vykonáva revízny technik s oprávnením na zdvíhacie zariadenia.',
        ],
      },
      {
        title: 'Revízia vysokozdvižného vozíka',
        paragraphs: [
          'Vysokozdvižné vozíky patria medzi <strong style="color:#00e676">VTZ zdvíhacie skupiny B</strong> (písm. b — zdvíhacie ústrojenstvo dopravného vozíka s motorovým pohonom). Lehoty odborných prehliadok a skúšok sa riadia <strong style="color:#00e676">technickými podmienkami výrobcu</strong>.',
          'V praxi väčšina výrobcov vysokozdvižných vozíkov predpisuje odborné prehliadky v intervale <strong style="color:#00e676">každých 6 mesiacov</strong> a odborné skúšky <strong style="color:#00e676">každý rok</strong>. Tieto lehoty odporúčame dodržiavať — vysokozdvižný vozík pracuje s ťažkými bremenami vo výške a akákoľvek porucha zdvíhacieho mechanizmu môže mať vážne následky.',
        ],
      },
      {
        title: 'Kontrola viazacích prostriedkov',
        paragraphs: [
          'Viazacie prostriedky (laná, reťaze, popruhy, háky, strmeňe) patria do <strong style="color:#00e676">skupiny C</strong> zdvíhacích zariadení. Kontrolu vykonáva prevádzkovateľom určená osoba podľa technických podmienok výrobcu.',
          'V praxi to znamená <strong style="color:#00e676">kontrolu pred každým použitím</strong> — vizuálna kontrola stavu lana, reťaze alebo popruhu, overenie čitateľnosti štítku s nosnosťou, kontrola hákov na deformácie a opotrebenie. Poškodené viazacie prostriedky sa musia okamžite vyradiť z prevádzky.',
        ],
      },
      {
        title: 'Čo obsahuje revízna správa zdvíhacieho zariadenia?',
        paragraphs: [
          'Po vykonaní revízie vám dodáme revíznu správu s <strong style="color:#00e676">okrúhlou pečiatkou revízneho technika</strong>. Správa obsahuje identifikáciu zariadenia (typ, výrobca, výrobné číslo, nosnosť), druh vykonanej kontroly (OP alebo OS), popis stavu zariadenia, zoznam zistených závad a celkový záver o <strong style="color:#00e676">spôsobilosti na ďalšiu bezpečnú prevádzku</strong>. Súčasťou je aj overenie úplnosti <strong style="color:#00e676">sprievodnej technickej dokumentácie</strong> podľa prílohy č. 3 vyhlášky č. 508/2009 Z. z.',
          'Pre zdvíhacie zariadenia skupiny A sa navyše vykonáva <strong style="color:#00e676">opakovaná úradná skúška</strong> oprávnenou právnickou osobou v lehotách podľa prílohy č. 7 (6 alebo 10 rokov podľa druhu zariadenia).',
        ],
      },
      {
        title: 'Čo hrozí bez platnej revízie zdvíhacieho zariadenia?',
        paragraphs: [
          'Zdvíhacie zariadenia patria medzi <strong style="color:#00e676">najrizikovejšie technické zariadenia</strong>. Pád bremena zo žeriavu, zlyhanie plošiny alebo porucha vysokozdvižného vozíka môžu mať fatálne následky. Preto sú požiadavky na ich revízie jedny z najprísnejších.',
          'Prevádzkovanie zdvíhacieho zariadenia bez platnej revízie je porušenie <strong style="color:#00e676">§ 13 zákona č. 124/2006 Z. z.</strong> o BOZP. Inšpektorát práce môže uložiť <strong style="color:#00e676">pokutu až do výšky 100 000 €</strong>. V prípade pracovného úrazu na nezrevídovanom zariadení hrozí prevádzkovateľovi <strong style="color:#00e676">trestnoprávna zodpovednosť</strong>. Poisťovňa v takom prípade spravidla odmieta vyplatiť poistné plnenie.',
        ],
      },
    ],
  },
} as const;

export type ServiceKey = keyof typeof services;
