import { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import ProductDetailsClient from './ProductDetailsClient'
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const supabase = await createClient()
  const { data: product } = await supabase
    .from('products')
    .select('name, short_description')
    .eq('slug', resolvedParams.slug)
    .single()

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: product.name,
    description: product.short_description || `Buy ${product.name} at Sangali Ceramica.`,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const supabase = await createClient()
  
  const { data: product, error } = await supabase
    .from('products')
    .select(`
      *,
      categories ( name, slug ),
      brands ( name, logo )
    `)
    .eq('slug', resolvedParams.slug)
    .single()

  // In production with a real DB, if (!product) notFound() would be used.
  // For the sake of the demo before DB population, we will pass the slug to the client to use mock data if needed.
  
  return <ProductDetailsClient initialProduct={product} slug={resolvedParams.slug} />
}
