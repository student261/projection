import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com' // replace with your real domain once live

  // static routes
  const staticRoutes = [
    '',
    '/solutions',
    '/industries',
    '/projects',
    '/about',
    '/blogs',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // dynamic routes — replace with your actual data source (CMS, DB, or hardcoded array)
  const industrySlugs = [
    'education',
    'museums-culture',
    'retail-showrooms',
    'healthcare',
    'entertainment',
    'hospitality',
    'corporate',
    'public-spaces',
  ]
  const industryRoutes = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const projectSlugs = [
    'interactive-learning-experience',
    'immersive-museum-experience',
    'interactive-brand-experience',
    'classroom-projection',
    '360-exhibit-tunnel',
    'retail-gamification',
  ]
  const projectRoutes = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...industryRoutes, ...projectRoutes]
}
