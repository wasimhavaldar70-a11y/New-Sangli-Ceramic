import { createClient } from '@/lib/supabase/server'
import { Plus } from 'lucide-react'

export default async function AdminBrandsPage() {
  const supabase = await createClient()
  const { data: brands } = await supabase.from('brands').select('*').order('created_at', { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Brands</h1>
          <p className="text-gray-500 mt-1">Manage partner brands.</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary/90 flex items-center">
          <Plus className="w-4 h-4 mr-2" /> Add Brand
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 text-center text-gray-500">
        Brands list view. ({brands?.length || 0} brands)
      </div>
    </div>
  )
}
