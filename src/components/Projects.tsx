import { motion } from "framer-motion"

const projects = [
  {
    title:"Automated Log Analysis System",
    description:"Dashboard to monitor logs and detect anomalies.",
    link:"https://github.com"
  },
  {
    title:"E-learning Website",
    description:"Hackathon winning frontend learning platform.",
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

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((p,i)=>(
            <motion.div
              key={i}
              whileHover={{ scale:1.05 }}
              className="bg-slate-800 p-6 rounded-xl"
            >

              <h3 className="text-xl font-semibold mb-3">
                {p.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {p.description}
              </p>

              <a
                href={p.link}
                className="text-blue-400"
              >
                View Project →
              </a>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}