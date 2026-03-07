export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

        <h1 className="font-bold text-lg tracking-wide">
          Srujana.dev
        </h1>

        <div className="flex gap-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

      </div>

    </nav>
  )
}