export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Alpha Revízie — Alpha Safety s.r.o.",
    "description": "Revízie vyhradených technických zariadení — elektrických, plynových, tlakových a zdvíhacích. Odborné prehliadky a skúšky podľa vyhlášky 508/2009 Z. z. na celom Slovensku.",
    "url": "https://alpharevizie.sk",
    "telephone": "+421952352669",
    "email": "office@alpharevizie.sk",
    "image": "https://alpharevizie.sk/logo-white.png",
    "logo": "https://alpharevizie.sk/logo-white.png",
    "address": { "@type": "PostalAddress", "streetAddress": "Jeleňova 4154/9", "addressLocality": "Martin", "postalCode": "036 01", "addressRegion": "Žilinský kraj", "addressCountry": "SK" },
    "geo": { "@type": "GeoCoordinates", "latitude": 49.0636, "longitude": 18.9214 },
    "areaServed": [
      { "@type": "Country", "name": "Slovensko" },
      { "@type": "City", "name": "Martin" },
      { "@type": "City", "name": "Žilina" },
      { "@type": "City", "name": "Bratislava" },
      { "@type": "City", "name": "Košice" },
      { "@type": "City", "name": "Banská Bystrica" },
      { "@type": "City", "name": "Prešov" },
      { "@type": "City", "name": "Nitra" },
      { "@type": "City", "name": "Trnava" },
      { "@type": "City", "name": "Trenčín" }
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Fr 07:00-16:00",
    "knowsLanguage": "sk",
    "sameAs": ["https://alphasafety.sk"],
    "parentOrganization": { "@type": "Organization", "name": "Alpha Safety s.r.o.", "taxID": "2121731810", "vatID": "SK2121731810", "identifier": { "@type": "PropertyValue", "name": "IČO", "value": "54610982" } },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Revízie vyhradených technických zariadení",
      "itemListElement": [
        { "@type": "OfferCatalog", "name": "Revízie elektrických zariadení", "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revízia elektrickej inštalácie" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revízia bleskozvodu" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revízia elektrických spotrebičov" } }
        ]},
        { "@type": "OfferCatalog", "name": "Revízie plynových zariadení", "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revízia plynového kotla" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revízia plynových rozvodov" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kontrola komína a dymovodu" } }
        ]},
        { "@type": "OfferCatalog", "name": "Revízie tlakových zariadení", "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revízia tlakovej nádoby" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revízia kompresora" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tlaková skúška" } }
        ]},
        { "@type": "OfferCatalog", "name": "Revízie zdvíhacích zariadení", "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revízia žeriavu" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revízia vysokozdvižného vozíka" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revízia priemyselnej brány" } }
        ]}
      ]
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({ "@type": "ListItem", "position": i + 1, "name": item.name, "item": item.url }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FAQPageJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BlogPostingJsonLd({ title, description, date, url }: { title: string; description: string; date: string; url: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": date,
    "url": url,
    "author": { "@type": "Organization", "name": "Alpha Revízie" },
    "publisher": { "@type": "Organization", "name": "Alpha Revízie", "url": "https://alpharevizie.sk" }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
