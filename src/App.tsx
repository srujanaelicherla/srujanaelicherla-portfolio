import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills.tsx"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div>

      <div className="fixed -top-40 -left-40 w-96 h-96 bg-blue-500/30 blur-[120px] rounded-full"/>
      <div className="fixed top-60 right-0 w-96 h-96 bg-purple-500/30 blur-[120px] rounded-full"/>

      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  )
}