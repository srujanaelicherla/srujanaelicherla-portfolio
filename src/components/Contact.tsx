import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Contact
      </h2>

      <p className="text-gray-400 mb-10">
        Let's connect and build something amazing.
      </p>

      <div className="flex justify-center gap-10 text-2xl">

        <a href="mailto:your@email.com" className="hover:text-blue-400">
          <Mail/>
        </a>

        <a href="https://github.com" className="hover:text-blue-400">
          <Github/>
        </a>

        <a href="https://linkedin.com" className="hover:text-blue-400">
          <Linkedin/>
        </a>

      </div>

    </section>
  )
}