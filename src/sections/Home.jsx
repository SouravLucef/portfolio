import profile from "../assets/profile.png"; // use your image
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-10 lg:px-24 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-teal-500/10 via-transparent to-teal-500/10 blur-3xl"></div>

      <div className="grid lg:grid-cols-2 gap-10 items-center w-full z-10">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-teal-400 text-sm">
            • Software Developer • AI/ML Enthusiast
          </div>
          <h3 className="text-1xl lg:text-5xl font-bold text-white leading-tight">
            Hi, I'm{" "}
          </h3>

          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            <span className="text-teal-400 italic">Sourav Mondal</span>
          </h1>

          <p className="text-gray-400 max-w-xl text-lg">
            A passionate software developer and AI enthusiast who loves building
            intelligent and scalable web applications. I work with React,
            Node.js, and modern machine learning technologies to create
            real-world solutions that combine clean design with powerful
            functionality.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-6 items-center">
            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-400 text-black px-8 py-3 rounded-full font-semibold transition flex items-center gap-2"
            >
              Contact Me <ArrowRight size={18} />
            </a>

            {/* DOWNLOAD CV BUTTON */}
            {/* <a
              href="/Sourav_CV1.pdf"
              download
              className="relative group px-8 py-3 rounded-full border border-teal-400 text-white flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={18} />
                Download CV
              </span> */}

              {/* Animated Outline */}
              {/* <span className="absolute inset-0 rounded-full border-2 border-teal-400 scale-100 group-hover:scale-110 transition-transform duration-500"></span> */}
            {/* </a> */}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-6 mt-8 text-gray-400">
            <span className="text-sm">Follow me:</span>

            <a
              href="https://github.com/SouravLucef"
              target="_blank"
              className="hover:text-teal-400 transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/sourav-mondal-2a7802210/"
              target="_blank"
              className="hover:text-teal-400 transition"
            >
              <Linkedin size={20} />
            </a>

            {/* <a
              href="https://twitter.com/yourusername"
              target="_blank"
              className="hover:text-teal-400 transition"
            >
              <Twitter size={20} />
            </a> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>

          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-xl">
            <img
              src={profile}
              alt="profile"
              className="w-80 h-105 object-cover rounded-xl"
            />

            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-lg px-4 py-2 rounded-full text-sm text-teal-400 border border-white/10">
              ● Available for work
            </div>
          </div>
        </div>

        {/* SCROLL DOWN */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-gray-400">
          <a href="#about"><p className="text-sm tracking-widest">SCROLL</p>
          <ChevronDown className="mx-auto mt-2 animate-bounce" size={20} /></a>
        </div>
      </div>
    </section>
  );
};

export default Home;
