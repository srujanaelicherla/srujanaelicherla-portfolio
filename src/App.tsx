import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Life from "./pages/Life"
import Navbar from "./components/Navbar"
import Playground from "./components/Playground"

export default function App() {
  return (
    <>
      <Navbar />

      {/* Main content wrapper with bottom padding to clear playground */}
      <div className="pb-28"> {/* 28 = ~112px, enough for grass+bunny */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/life" element={<Life />} />
        </Routes>
      </div>

      {/* Bunny playground visible everywhere */}
      <Playground />
    </>
  )
}