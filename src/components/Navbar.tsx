export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <h1 className="font-bold text-[#1E293B] font-medium tracking-wide">
          Srujana.dev
        </h1>

        <div className="flex gap-8 text-sm text-slate-300">
          <a href="#about" className="text-[#1E293B] hover:text-blue-400 transition">About</a>
          <a href="#skills" className="text-[#1E293B] hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="text-[#1E293B] hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="text-[#1E293B] hover:text-blue-400 transition">Contact</a>
        </div>

      </div>

    </nav>
  )
}