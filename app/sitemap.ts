import { MetadataRoute } from 'next';
import { locales, defaultLocale } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mustafahasanain.com';

  // Define all your routes
  const routes = ['', '/projects', '/contact'];

  // Generate sitemap entries for all locales
  const sitemap: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    // Add default locale (without prefix)
    sitemap.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}${route}`,
          ar: `${baseUrl}/ar${route}`,
          tr: `${baseUrl}/tr${route}`,
        },
      },
    });

    // Add other locales (with prefix)
    locales.filter(locale => locale !== defaultLocale).forEach((locale) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}${route}`,
            ar: `${baseUrl}/ar${route}`,
            tr: `${baseUrl}/tr${route}`,
          },
        },
      });
    });
  });

  return sitemap;
}
