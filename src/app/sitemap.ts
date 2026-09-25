import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://[DOMAIN]';
  const routes = [
    '',
    '/solar-installation-islamabad',
    '/solar-installation-rawalpindi',
    '/solar-system-price-islamabad',
    '/solar-system-price-rawalpindi',
    '/5kw-solar-system',
    '/10kw-solar-system',
    '/15kw-solar-system',
    '/hybrid-solar-system',
    '/on-grid-solar-system',
    '/solar-on-installments',
    '/about',
    '/contact',
    '/get-quote',
    '/privacy-policy',
    '/terms-and-conditions',
    '/refund-cancellation',
    '/installment-terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
