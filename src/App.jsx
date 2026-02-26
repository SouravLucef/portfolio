import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./sections/Home"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

/* ===============================
   Scroll Progress Bar Component
================================= */
function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const progress = (scrollTop / height) * 100
      setWidth(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[100]">
      <div
        className="h-full bg-teal-400 transition-all duration-200"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

/* ===============================
   Main App
================================= */

function App() {
  return (
    <div className="relative bg-[#050b14] overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  )
}

export default App