'use client'

import dynamic from 'next/dynamic'

const PhotoGrid = dynamic(() => import('../../components/PhotoGrid'), { ssr: false })

function formatDateHeader(isoDate) {
  const year = parseInt(isoDate.substring(0, 4))
  const month = parseInt(isoDate.substring(5, 7))
  const day = parseInt(isoDate.substring(8, 10))
  const d = new Date(year, month - 1, day)
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function PhotoGridClient({ days, groups }) {
  return (
    <>
      {days.length === 0 && <p>No photos yet.</p>}

      {days.map((day) => (
        <section key={day}>
          <h2>{formatDateHeader(day)}</h2>
          <div>
            {/* use client-side PhotoGrid to get lightbox + interactions */}
            <PhotoGrid photos={groups[day]} />
          </div>
        </section>
      ))}
    </>
  )
}
