import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Life from "./pages/Life"
import Navbar from "./components/Navbar"
import Pet from "./components/Pet"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/life" element={<Life />} />
      </Routes>

      <Pet /> {/* Pet visible everywhere */}
    </>
  )
}