import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Popular from './../components/popular';
import Recently from "@/components/Recently";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
        <NavBar />
        <Hero />
        <About />
        <Popular />
        <Recently />
        <Newsletter />
        <Footer />
    </>
  )
}
