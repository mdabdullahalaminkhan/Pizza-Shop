import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"


function layout({children}) {
  return (
    <>
        <NavBar />
        {children}
        <Footer />
    </>
  )
}

export default layout