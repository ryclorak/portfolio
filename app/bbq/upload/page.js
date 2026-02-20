'use client'
import { useState } from 'react'
import getSupabase from '../../../lib/supabaseClient'

export default function BBQUpload() {
  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const [caption, setCaption] = useState('')
  const [status, setStatus] = useState('')
  const [eventDate, setEventDate] = useState(() => {
    // default to today
    const today = new Date()
    return today.toISOString().split('T')[0]
  })

  const handleFile = (e) => {
    setFile(e.target.files?.[0] || null)
  }

  const handleUpload = async () => {
    if (!file) return setStatus('Select a file first')

    // configurable max via NEXT_PUBLIC_MAX_UPLOAD_MB (defaults to 25 MB)
    const maxMB = parseInt(process.env.NEXT_PUBLIC_MAX_UPLOAD_MB) || 25
    const maxBytes = maxMB * 1024 * 1024
    if (file.size > maxBytes) return setStatus(`File too large (max ${maxMB}MB)`) 

    setStatus('Uploading...')
    try {
      const supabase = getSupabase()
      if (!supabase) throw new Error('Supabase not configured')

      // If image, try to read dimensions before upload
      let width = null
      let height = null
      if (file.type.startsWith('image/')) {
        const dataUrl = await new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = () => resolve(reader.result)
          reader.onerror = reject
          reader.readAsDataURL(file)
        })

        await new Promise((resolve) => {
          const img = new Image()
          img.onload = () => {
            width = img.naturalWidth
            height = img.naturalHeight
            resolve()
          }
          img.onerror = () => resolve()
          img.src = dataUrl
        })
        
        // extract EXIF DateTimeOriginal using exifr
        try {
          const exifr = await import('exifr')
          const exifRaw = await exifr.parse(file, { exif: true })
          if (exifRaw?.DateTimeOriginal) {
            const d = new Date(exifRaw.DateTimeOriginal)
            file.taken_at = d.toISOString()
          }
        } catch (e) {
          // parsing EXIF failed; ignore
        }
      }

      const fileName = `${Date.now()}_${file.name}`
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('bbq_photos')
        .upload(fileName, file)

      if (uploadError) throw uploadError

      // Insert a metadata row (auto-approved)
      // use user-selected event date if provided, otherwise extracted EXIF date
      // IMPORTANT: User-entered dates override EXIF metadata and are used for sorting
      // Store at noon UTC so the date displays correctly in Pacific timezone
      const eventDateToStore = eventDate ? (() => {
        const [year, month, day] = eventDate.split('-').map(Number)
        return new Date(Date.UTC(year, month - 1, day, 12, 0, 0)).toISOString()
      })() : file.taken_at || null

      const { error: dbError } = await supabase
        .from('photos')
        .insert([
          {
            storage_path: uploadData.path,
            uploader_name: name || null,
            caption: caption || null,
            mime_type: file.type,
            approved: true,
            width: width,
            height: height,
            taken_at: eventDateToStore
          }
        ])

      if (dbError) throw dbError

      setStatus('Uploaded — visible on the site')
      setFile(null)
      setName('')
      setCaption('')
      setEventDate('')
    } catch (err) {
      setStatus(err.message || 'Upload failed')
    }
  }

  return (
    <div>
      <h1>Upload a BBQ photo</h1>
      <p>Use your phone camera or pick a photo. Files will appear automatically.</p>
      <input type="text" placeholder="Your name (optional)" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <textarea placeholder="Photo caption (optional)" value={caption} onChange={e => setCaption(e.target.value)} style={{ width: '100%', minHeight: 60 }} />
      <br />
      <label>
        Event date:
        <input type="date" value={eventDate} onChange={e => setEventDate(e.target.value)} />
      </label>
      <br />
      <input type="file" accept="image/*,video/*" capture="environment" onChange={handleFile} />
      <br />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
      <br />
      <a href="/bbq" style={{ textDecoration: 'underline', cursor: 'pointer' }}>← Back to BBQ</a>
    </div>
  )
}
