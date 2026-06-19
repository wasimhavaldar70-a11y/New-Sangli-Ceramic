import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sangaliceramica.com'
  const supabase = await createClient()

  // Dynamic products
  const { data: products } = await supabase.from('products').select('slug, updated_at')
  
  const productUrls = (products || []).map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(product.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const staticRoutes = ['', '/about', '/products', '/gallery', '/brands', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.9,
  }))

  return [...staticRoutes, ...productUrls]
}
