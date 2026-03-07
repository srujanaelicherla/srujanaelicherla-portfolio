import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

      <div>

        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm Srujana 👋
        </motion.h1>

        <motion.p
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:0.4 }}
          className="text-gray-400 max-w-xl mx-auto text-lg"
        >
          Computer Science student passionate about AI, cybersecurity,
          and building intelligent systems.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">

          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 border border-gray-600 rounded-lg"
          >
            Resume
          </a>

        </div>

      </div>

    </section>
  )
}