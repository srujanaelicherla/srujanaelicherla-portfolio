import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Contact
      </h2>

      <p className="text-gray-400 mb-8">
        Let's connect!
      </p>

      <div className="flex justify-center gap-8 text-xl">

        <a href="mailto:your@email.com">
          <Mail />
        </a>

        <a href="https://github.com">
          <Github />
        </a>

        <a href="https://linkedin.com">
          <Linkedin />
        </a>

      </div>

    </section>
  )
}