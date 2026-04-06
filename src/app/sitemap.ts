import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://alpharevizie.sk';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/elektricke-zariadenia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/plynove-zariadenia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/tlakove-zariadenia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/zdvihacie-zariadenia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/o-nas`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/blog/revizia-elektrickej-instalacie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/revizia-plynoveho-kotla`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/revizia-kompresora`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/revizia-vysokozdvizneho-vozika`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/vyhlaska-508-2009`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/kontrola-inspektorat-prace`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/revizia-priemyselnej-brany`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${base}/gdpr`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];
}
