export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Alpha Revízie — Alpha Safety s.r.o.",
    "description": "Revízie vyhradených technických zariadení — elektrických, plynových, tlakových a zdvíhacích. Odborné prehliadky a skúšky podľa vyhlášky 508/2009 Z. z.",
    "url": "https://alpharevizie.sk",
    "telephone": "+421952352669",
    "email": "office@alpharevizie.sk",
    "address": { "@type": "PostalAddress", "streetAddress": "Jeleňova 4154/9", "addressLocality": "Martin", "postalCode": "036 01", "addressCountry": "SK" },
    "geo": { "@type": "GeoCoordinates", "latitude": 49.0636, "longitude": 18.9214 },
    "areaServed": { "@type": "Country", "name": "Slovensko" },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 07:00-16:00",
    "sameAs": ["https://alphasafety.sk"],
    "parentOrganization": { "@type": "Organization", "name": "Alpha Safety s.r.o.", "taxID": "2121731810", "vatID": "SK2121731810" }
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
