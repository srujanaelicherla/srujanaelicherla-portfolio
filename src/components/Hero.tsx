import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

      <div>

        <motion.h1
          initial={{opacity:0, y:40}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.8}}
          className="text-6xl font-bold mb-6"
        >
          Srujana Elicherla
        </motion.h1>

        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.4}}
          className="text-gray-400 text-lg max-w-xl mx-auto"
        >
          Computer Science student exploring AI, cybersecurity,
          and building intelligent systems that solve real problems.
        </motion.p>

        <div className="mt-10 flex justify-center gap-6">

          <a
            href="#projects"
            className="px-7 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-gray-600 rounded-lg hover:bg-white/10"
          >
            Resume
          </a>

        </div>

      </div>

    </section>
  )
}