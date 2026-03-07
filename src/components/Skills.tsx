const skills = [
  "Python",
  "Java",
  "C",
  "React",
  "Tailwind",
  "Machine Learning",
  "Cybersecurity",
  "Git/GitHub"
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill)=>(
            <div
              key={skill}
              className="className=bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-lg"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}