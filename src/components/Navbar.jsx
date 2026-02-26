import { useEffect, useState } from "react"

const sections = ["home", "about", "skills", "projects", "contact"]

const Navbar = () => {
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  // Smooth scroll
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={`px-10 py-3 rounded-full transition-all duration-300
        ${scrolled 
          ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg"
          : "bg-white/5 backdrop-blur-xl border border-white/10"
        }`}
      >
        <ul className="flex gap-10 font-medium">
          {sections.map((section) => (
            <li
              key={section}
              onClick={() => scrollToSection(section)}
              className={`cursor-pointer capitalize transition
                ${active === section 
                  ? "text-teal-400" 
                  : "text-gray-300 hover:text-teal-400"
                }`}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar