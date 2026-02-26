'use server';
import Link from 'next/link'
import supabaseAdmin from '../../lib/supabaseAdmin'
import PhotoGridClient from './PhotoGridClient'

export default async function BBQGallery() {
  // Fetch approved photos from the DB using the server-side service role client
  const { data: photos, error } = await supabaseAdmin
    .from('photos')
    .select('*')
    .eq('approved', true)
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div>
        <h1>BBQ Photo Gallery</h1>
        <p>Error loading photos: {error.message}</p>
      </div>
    )
  }

  // Generate signed URLs for private storage bucket (expires in 24h)
  const signed = await Promise.all(
    (photos || []).map(async (p) => {
      try {
        const { data } = await supabaseAdmin.storage.from('bbq_photos').createSignedUrl(p.storage_path, 60 * 60 * 24)
        return { ...p, url: data?.signedUrl }
      } catch (e) {
        return { ...p, url: null }
      }
    })
  )

  // Group by event day using taken_at if present, otherwise created_at
  const groups = {}
  signed.forEach((p) => {
    const refDate = p.taken_at || p.created_at
    const day = refDate ? refDate.substring(0, 10) : 'unknown'
    if (!groups[day]) groups[day] = []
    groups[day].push(p)
  })

  const days = Object.keys(groups).sort((a, b) => (a < b ? 1 : -1))

  return (
    <div>
      <h1>BBQ Photo Gallery</h1>
      <p>This gallery shows photos uploaded by guests</p>
      <p>
        <Link href="/bbq/upload">Upload a photo</Link>
      </p>

      <PhotoGridClient days={days} groups={groups} />
    </div>
  )
}
