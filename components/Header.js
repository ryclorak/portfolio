'use client'
import Link from 'next/link'

const Header = ({ children }) => {
  const style = { display: 'inline-block', margin: 10, marginBottom: 30 }

  return (
    <div>
      <div>
        <h3 style={style}><Link href="/">Home</Link></h3>
        <h3 style={style}><Link href="/jokes">Jokes</Link></h3>
      </div>
      {children}
    </div>
  )
}

export default Header
