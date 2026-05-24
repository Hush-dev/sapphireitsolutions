import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    { url: `${baseUrl}/services/apple-macbooks`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/services/laptop-rentals`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/services/server-solutions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/services/av-solutions`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/services/infrastructure`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
{ url: `${baseUrl}/services/amc-services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}