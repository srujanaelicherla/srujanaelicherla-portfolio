export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/70 backdrop-blur border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="font-bold text-xl">
          Srujana.dev
        </h1>

        <div className="flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  )
}