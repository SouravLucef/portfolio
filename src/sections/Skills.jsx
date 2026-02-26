import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code2,
  Database,
  Server,
  Globe,
  Braces,
  Cpu,
  Brain,
  Activity,
  LineChart
} from "lucide-react"

/* Skills Data */
const skillsData = [
  // Languages
  { name: "Python", category: "Languages", icon: <Code2 size={28} /> },
  { name: "Java", category: "Languages", icon: <Braces size={28} /> },
  { name: "JavaScript", category: "Languages", icon: <Code2 size={28} /> },
  { name: "SQL", category: "Languages", icon: <Database size={28} /> },

  // Frontend
  { name: "React", category: "Frontend", icon: <Code2 size={28} /> },
  { name: "Tailwind CSS", category: "Frontend", icon: <Braces size={28} /> },
  { name: "Next.js", category: "Frontend", icon: <Globe size={28} /> },
  { name: "HTML/CSS", category: "Frontend", icon: <Globe size={28} /> },

  // Backend
  { name: "Node.js", category: "Backend", icon: <Server size={28} /> },
  { name: "Flask", category: "Backend", icon: <Cpu size={28} /> },
  { name: "MySQL", category: "Backend", icon: <Database size={28} /> },

  // AI / ML
  { name: "Machine Learning", category: "AI/ML", icon: <Brain size={28} /> },
  { name: "Model Deployment", category: "AI/ML", icon: <Activity size={28} /> },
  { name: "Scikit-learn", category: "AI/ML", icon: <LineChart size={28} /> },
  { name: "MNE-Python", category: "AI/ML", icon: <Cpu size={28} /> },
]

const categories = ["Languages", "Frontend", "Backend", "AI/ML"]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Languages")

  return (
    <section id="skills" className="min-h-screen px-6 lg:px-24 py-24">

      {/* Title */}
      <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">
        My <span className="text-teal-400">Skills</span>
      </h2>

      {/* Category Nav */}
      <div className="flex justify-center mb-16">
        <div className="flex gap-4 bg-white/5 border border-white/10 backdrop-blur-xl p-2 rounded-full flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-teal-400 text-black"
                    : "text-gray-300 hover:text-teal-400"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Cards */}
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl"
          >
            {skillsData
              .filter((skill) => skill.category === activeCategory)
              .map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl 
                             rounded-2xl p-6 flex flex-col items-center justify-center 
                             hover:border-teal-400 
                             hover:shadow-[0_0_25px_rgba(20,184,166,0.4)]
                             transition duration-300"
                >
                  <div className="text-teal-400 mb-4">
                    {skill.icon}
                  </div>

                  <p className="text-gray-300 font-medium text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  )
}

export default Skills