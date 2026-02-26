import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-white/10 mt-24">

      <div className="px-6 lg:px-24 py-16">

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Sourav <span className="text-teal-400">Mondal</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Developer & AI Enthusiast focused on building
              scalable applications and intelligent systems that solve
              real-world problems.
            </p>
          </div>

          {/* Center Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="hover:text-teal-400 transition cursor-pointer"
                  onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>
                Home
              </li>
              <li className="hover:text-teal-400 transition cursor-pointer"
                  onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
                About
              </li>
              <li className="hover:text-teal-400 transition cursor-pointer"
                  onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
                Projects
              </li>
              <li className="hover:text-teal-400 transition cursor-pointer"
                  onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
                Contact
              </li>
            </ul>
          </div>

          {/* Right */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>

            <div className="flex gap-4">

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 
                           hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]
                           transition"
              >
                <Github size={18} className="text-gray-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/sourav-mondal-2a7802210/"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 
                           hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]
                           transition"
              >
                <Linkedin size={18} className="text-gray-300" />
              </a>

              <a
                href="mailto:sm30122000@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/10 
                           hover:border-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]
                           transition"
              >
                <Mail size={18} className="text-gray-300" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sourav Mondal. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-teal-400 transition"
          >
            Back to Top <ArrowUp size={16} />
          </button>

        </div>

      </div>

    </footer>
  )
}

export default Footer