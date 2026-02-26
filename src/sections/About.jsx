import { motion } from "framer-motion"
import { Download } from "lucide-react"

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 lg:px-24 py-24 relative"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            About <span className="text-teal-400">Me</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            I'm Sourav Mondal, a passionate software developer and AI enthusiast 
            who enjoys solving real-world problems using technology. 
            I specialize in building full-stack web applications and 
            integrating machine learning models into practical systems.
          </p>

          {/* <p className="text-gray-400 text-lg leading-relaxed">
            From developing MERN stack platforms to working on EEG-based 
            classification systems using LSTM and KNN models, I focus on 
            writing scalable, efficient, and production-ready code.
          </p> */}

          {/* HIGHLIGHT CARDS */}
          <div className="grid grid-cols-2 gap-6 pt-4">
            {/* <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-lg">
              <h3 className="text-teal-400 text-2xl font-bold">10+</h3>
              <p className="text-gray-400 text-sm mt-2">Projects Built</p>
            </div> */}

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-lg">
              <h3 className="text-teal-400 text-2xl font-bold">AI + Web</h3>
              <p className="text-gray-400 text-sm mt-2">Specialized Focus</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative space-y-8"
        >

          {/* Experience Card */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-white">
              What I Bring
            </h3>

            <ul className="mt-6 space-y-4 text-gray-400">
              <li>• Strong understanding of Data Structures & Algorithms</li>
              <li>• Experience building ML pipelines with Python</li>
              {/* <li>• Full-stack development using MERN</li>
              <li>• Model deployment & real-world integration</li> */}
            </ul>
          </div>

          {/* DOWNLOAD CV BUTTON */}
          <a
            href="/Sourav_Mondal_CV.pdf"
            download
            className="relative group inline-flex items-center gap-3 px-10 py-4 rounded-full border border-teal-400 text-white overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3 font-semibold">
              <Download size={20} />
              Download CV
            </span>

            <span className="absolute inset-0 rounded-full border-2 border-teal-400 scale-100 group-hover:scale-110 transition-transform duration-500"></span>
          </a>

        </motion.div>

      </div>
    </section>
  )
}

export default About