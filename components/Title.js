'use client'
import React, { useEffect, useState } from 'react'

const TITLES = ['a maker', 'a developer', 'a designer', 'an artist', 'a plant lover']

export default function Title() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setFadeIn(false), 1500)
    const interval = setInterval(() => {
      setTitleIndex(i => (i + 1) % TITLES.length)
      setFadeIn(true)
      setTimeout(() => setFadeIn(false), 1500)
    }, 3000)
    return () => { clearTimeout(t); clearInterval(interval) }
  }, [])

  return <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>I am {TITLES[titleIndex]}</p>
}
