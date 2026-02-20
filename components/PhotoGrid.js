'use client'
import { useState } from 'react'

export default function PhotoGrid({ photos }) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handlePrev = (e) => {
    e.stopPropagation()
    setSelectedIndex((i) => (i === 0 ? photos.length - 1 : i - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setSelectedIndex((i) => (i === photos.length - 1 ? 0 : i + 1))
  }

  const selected = selectedIndex !== null ? photos[selectedIndex] : null

  return (
    <div>
      <div className="photo-grid">
        {photos.map((p, idx) => (
          <figure key={p.id} style={{ cursor: 'pointer' }} onClick={() => setSelectedIndex(idx)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" src={p.url} alt={p.uploader_name ?? 'what are you looking for?'} style={{ width: '100%', height: 'auto' }} />
            <figcaption style={{ fontSize: 12, marginTop: 6 }}>
              {p.uploader_name ?? 'Anonymous'}
              {p.caption && <div style={{ fontSize: 11, fontStyle: 'italic', marginTop: 2 }}>{p.caption}</div>}
            </figcaption>
          </figure>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelectedIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selected.url} alt={selected.uploader_name ?? 'what are you looking for?'} style={{ maxWidth: '90vw', maxHeight: '70vh' }} />
            <div style={{ marginTop: 12 }}>
              <strong>{selected.uploader_name ?? 'Anonymous'}</strong>
              {selected.caption && <p style={{ margin: '4px 0', fontSize: 14 }}>{selected.caption}</p>}
              <div style={{ fontSize: 12, color: '#666' }}>
                {(() => {
                  const isoStr = selected.taken_at || selected.created_at
                  const d = new Date(isoStr)
                  return new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()).toLocaleDateString()
                })()}
              </div>
            </div>
            <div style={{ marginTop: 12, display: 'flex', gap: 8, justifyContent: 'center' }}>
              <button onClick={handlePrev}>← Prev</button>
              <span style={{ fontSize: 12, alignSelf: 'center', color: '#666' }}>{selectedIndex + 1} / {photos.length}</span>
              <button onClick={handleNext}>Next →</button>
              <button onClick={() => setSelectedIndex(null)} style={{ marginLeft: 8 }}>Close</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .lightbox { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.7); z-index: 9999; }
        .lightbox-content { background: #fff; padding: 16px; border-radius: 6px; max-width: 95%; text-align: center; }
        .photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; max-width: 1200px; margin: 0 auto; }
      `}</style>
    </div>
  )
}
