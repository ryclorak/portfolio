import { createClient } from '@supabase/supabase-js'

let supabase = null

export const getSupabase = () => {
  if (typeof window === 'undefined') {
    return null // Server-side, don't initialize
  }
  
  if (!supabase) {
    supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
    )
  }
  return supabase
}

export default getSupabase
