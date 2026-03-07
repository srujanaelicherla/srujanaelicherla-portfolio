import { motion } from "framer-motion"

const projects = [
  {
    title:"Ember Study Rooms",
    description:"A collaborative digital study space with shared focus rooms, real-time presence, tasks, timers, and ambient music.",
    link:"https://github.com/srujanaelicherla/ember"
  },
  {
    title:"Log Monitoring and Alerting",
    description:"A RESTful backend API built with FastAPI, SQLAlchemy, and SQLite to ingest, store, and monitor system logs with CRUD operations and filtering.",
    link:"https://github.com/srujanaelicherla/log-monitoring-backend" 
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
              className="bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">

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