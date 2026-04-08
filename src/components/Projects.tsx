import { motion } from "framer-motion"

const projects = [
  {
    title: "Ember Study Rooms",
    description: "A collaborative digital study space with shared focus rooms, real-time presence, tasks, timers, and ambient music.",
    link: "https://github.com/srujanaelicherla/ember",
    live: "https://ember-one-tau.vercel.app/" 
  },
  {
    title: "Log Monitoring and Alerting",
    description: "A RESTful backend API built with FastAPI, SQLAlchemy, and SQLite to ingest, store, and monitor system logs with CRUD operations and filtering.",
    link: "https://github.com/srujanaelicherla/log-monitoring-backend" 
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">
          Projects
        </h2>

        {/* Updated grid to 3 columns for large screens to fit your new card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/50 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20"
            >
              <h3 className="text-xl font-semibold mb-4">
                {p.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {p.description}
              </p>

              <div className="flex gap-5">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-medium hover:underline flex items-center gap-1"
                >
                  GitHub <span>→</span>
                </a>

                {/* Only renders the Live link if it exists in the object */}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline flex items-center gap-1"
                  >
                    Live Demo <span>↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}