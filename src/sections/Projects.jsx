import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Major Depressive Disorder (MDD) Predictor",
    description:
      "Flask-based  web application that takes basic details and EEG signal file of a patient from the user and utilizes EEG signals into predicting Healthy or Major Depressive Disorder (MDD).",
    tech: ["React", "Flask", "Python", "FastAPI"],
    image: "/projects/project1.png",
    link: "https://mdd-frontendd.vercel.app/",
  },
  {
    title: "Smart SpeakUp Application",
    description:
      "This app enhances communication with, Speaking with AI using different API's for conversation practice, and a Dictionary for quick word meanings. It also includes a Learning Module Path with grammar tests and feedback, improving overall language proficiency.",
    tech: ["Java", "Android Studio", "SQLite", "AssemblyAI API", "GeminiAI API"],
    image: "/projects/Project2.jpeg",
    link: "https://github.com/SouravLucef/Smart-SpeakUp-Application",
  },
  {
    title: "Fintech Dashboard",
    description:
      "Financial analytics dashboard with real-time data visualization and portfolio management.",
    tech: ["React", "TypeScript", "Node.js"],
    image: "/project3.png",
    link: "#",
  },
  {
    title: "Weather Application",
    description:
      "a responsive weather web application using OpenWeather API.Implemented location-based and user-input weather search functionality.Parsed and displayed real-time temperature, humidity, and wind data dynamically.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    image: "/projects/project4.png",
    link: "#",
  },
]

const Projects = () => {
  return (
    <section id="projects" className="px-6 lg:px-24 py-28">

      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-teal-400 tracking-widest text-sm mb-4">
          FEATURED WORK
        </p>

        <h2 className="text-4xl lg:text-6xl  font-bold text-teal-400 leading-tight">
          Projects that <span className= "text-white italic font-light">make an impact.</span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A selection of my recent work — from intelligent AI systems to scalable
          full-stack platforms solving real-world problems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white/5 border border-white/10 backdrop-blur-xl 
                       rounded-3xl overflow-hidden 
                       hover:border-teal-400 
                       hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]
                       transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[260px] object-cover 
                           group-hover:scale-110 
                           transition duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-8">

              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 hover:scale-110 transition"
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>

              <p className="text-gray-400 text-sm mt-4">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1 rounded-full text-xs 
                               bg-white/5 border border-white/10 
                               text-gray-300  hover:border-teal-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}

      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-20">
        <a href="https://github.com/SouravLucef"><button  className="px-10 py-4 rounded-full border border-teal-400 
                           text-white hover:bg-teal-400 hover:text-black 
                           transition duration-300">
          View All Projects →
        </button></a>
      </div>

    </section>
  )
}

export default Projects