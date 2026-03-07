import { motion } from "framer-motion"

const projects = [
  {
    title:"Automated Log Analysis System",
    description:"AI powered dashboard that detects anomalies in system logs.",
    link:"https://github.com"
  },
  {
    title:"E-learning Website",
    description:"Hackathon winning educational platform.",
    link:"https://github.com"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((p,i)=>(
            <motion.div
              key={i}
              whileHover={{y:-8}}
              className="glass p-8 rounded-xl"
            >

              <h3 className="text-xl font-semibold mb-4">
                {p.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {p.description}
              </p>

              <a
                href={p.link}
                className="text-blue-400"
              >
                View on GitHub →
              </a>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}