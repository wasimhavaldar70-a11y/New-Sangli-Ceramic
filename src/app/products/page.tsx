import { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our extensive collection of premium floor tiles, wall tiles, and sanitaryware from top brands.',
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const supabase = await createClient()
  const params = await searchParams
  
  const category = typeof params.category === 'string' ? params.category : undefined
  const brand = typeof params.brand === 'string' ? params.brand : undefined

  let query = supabase.from('products').select(`
    *,
    categories ( name, slug ),
    brands ( name, logo )
  `)

  // In a real app, we'd filter by category/brand slugs if provided.
  // For now, we'll just pass the data to the client.

  const { data: products, error } = await query

  return (
    <ProductsClient 
      initialProducts={products || []} 
      initialCategory={category} 
      initialBrand={brand} 
    />
  )
}
