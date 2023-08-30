import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://florent-baleinier.com',
      lastModified: new Date(),
    },
    {
      url: 'https://florent-baleinier.com/work',
      lastModified: new Date(),
    },
    {
      url: 'https://florent-baleinier.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://florent-baleinier.com/contact',
      lastModified: new Date(),
    },
  ]
}
