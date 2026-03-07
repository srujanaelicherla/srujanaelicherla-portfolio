import { useState, useEffect, useRef } from "react"

export default function BunnyPlayground() {
  const [left, setLeft] = useState(50)
  const [target, setTarget] = useState(200)
  const [direction, setDirection] = useState(1)
  const [hopOffset, setHopOffset] = useState(0)
  const [paused, setPaused] = useState(false) // pause on hover
  const requestRef = useRef<number>(0)

  const grassHeight = 62 // grass height

  // Random target update
  const updateTarget = () => {
    const maxX = window.innerWidth - 100
    const newTarget = Math.random() * maxX
    setTarget(newTarget)
    setDirection(left < newTarget ? -1 : 1)
  }

  // Hop animation
  useEffect(() => {
    const hopFunc = () => {
      if (!paused) {
        const hopHeight = 3 + Math.random() * 6
        setHopOffset(hopHeight)
        const hopDuration = 200 + Math.random() * 300
        setTimeout(() => setHopOffset(0), hopDuration)
      }
      const nextHop = 1000 + Math.random() * 1000
      setTimeout(hopFunc, nextHop)
    }
    hopFunc()
  }, [paused])

  // Bunny movement
  const animate = () => {
    if (!paused) {
      setLeft(prev => {
        const speed = 0.5 + Math.random() * 0.3
        if (Math.abs(prev - target) < speed) {
          updateTarget()
          return target
        }
        return prev + (prev < target ? speed : -speed)
      })
    }
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [target, paused])

  // Bunny click reaction: instant little hop
  const handleClick = () => {
    setHopOffset(15)
    setTimeout(() => setHopOffset(0), 300)
  }

  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, width: "100%", zIndex: 1000 }}>
      
      {/* Grass */}
      <img
        src="grass.png"
        alt="Grass"
        style={{
          width: "100%",
          height: `${grassHeight}px`,
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Bunny */}
      <img
        src="/pet.png"
        alt="Bunny"
        style={{
          position: "absolute",
          bottom: -10,
          left,
          width: 126,
          height: 126,
          cursor: "pointer",
          transform: `scaleX(${direction}) translateY(${hopOffset}px)`,
          transition: "transform 0.2s",
          zIndex: 2,
        }}
        onMouseEnter={() => setPaused(true)}  // pause movement on hover
        onMouseLeave={() => setPaused(false)} // resume on leave
        onClick={handleClick}                 // interactive hop
      />
    </div>
  )
}