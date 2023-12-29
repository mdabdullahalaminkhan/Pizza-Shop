
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pizza Shop',
  description: 'Md Abdullah Al Amin Khan, visit: https://www.aminprofessional.com/',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/3.5.0/remixicon.css"
      integrity="sha512-HXXR0l2yMwHDrDyxJbrMD9eLvPe3z3qL3PPeozNTsiHJEENxx8DH2CxmV05iwG0dwoz5n4gQZQyYLUNt1Wdgfg=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
