import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left">

        {/* Profile Image */}
        <motion.img
          src="/profile.jpg"
          alt="Srujana"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-2xl shadow-2xl"
        />

        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Srujana Elicherla
            </span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "AI Enthusiast",
              1500,
              "Cybersecurity Learner",
              1500,
              "Hackathon Builder",
              1500,
              "Computer Science Student",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl text-gray-300"
          />

          <p className="text-gray-400 max-w-xl mt-6">
            I build intelligent systems, explore cybersecurity challenges,
            and love creating impactful software through hackathons and projects.
          </p>

          <div className="mt-10 flex justify-center md:justify-start gap-6">

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

      </div>

    </section>
  )
}