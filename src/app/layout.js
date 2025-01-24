
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
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-MK5X33J5J3"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MK5X33J5J3');
</script>
  <head>
    <!-- Meta Tags for SEO -->
    <meta name="description" content="Welcome to the portfolio of Md Abdullah Al Amin Khan, a skilled Software Engineer and MERN Stack Developer. Discover my projects, expertise, and professional journey.">
    <meta name="keywords" content="Md Abdullah Al Amin Khan, Software Engineer, MERN Stack Developer, Website Builder, Web Developer, Freelancer, Portfolio">
    <meta name="author" content="Md Abdullah Al Amin Khan">
</head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
