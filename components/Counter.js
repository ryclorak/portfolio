'use client'
import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <br/>
      <button onClick={() => setCount(c => c + 1)}>like</button>
      <p>{count}</p>
    </div>
  )
}
