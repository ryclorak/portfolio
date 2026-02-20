import '../styles/globals.css'

export const metadata = {
  title: 'Karol Cyrklaff — Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="site-container">
          {children}
        </main>
      </body>
    </html>
  )
}
