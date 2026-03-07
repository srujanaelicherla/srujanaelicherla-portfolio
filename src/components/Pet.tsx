// src/components/Bunny.tsx
import { useState, useEffect, useRef } from "react"

export default function Bunny() {
  const [left, setLeft] = useState(50)
  const [target, setTarget] = useState(200)
  const [direction, setDirection] = useState(1)
  const [hover, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hopOffset, setHopOffset] = useState(0)

  const requestRef = useRef<number>(0)

  // Pick a new random target
  const updateTarget = () => {
    const maxX = window.innerWidth - 100
    const newTarget = Math.random() * maxX
    setTarget(newTarget)
    setDirection(left < newTarget ? 1 : -1)
  }

  // Hopping effect
  useEffect(() => {
    const hopFunc = () => {
      const hopHeight = 3 + Math.random() * 6
      setHopOffset(hopHeight)
      const hopDuration = 200 + Math.random() * 300
      setTimeout(() => setHopOffset(0), hopDuration)
      const nextHop = 1000 + Math.random() * 1000
      setTimeout(hopFunc, nextHop)
    }
    hopFunc()
    return () => {}
  }, [])

  // Smooth movement toward target
  const animate = () => {
    setLeft(prev => {
      const speed = 1 + Math.random() * 0.5 // random speed each frame
      if (Math.abs(prev - target) < speed) {
        updateTarget()
        return target
      }
      return prev + (prev < target ? speed : -speed)
    })
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [target])

  return (
    <img
      src="/pet.png"
      alt="Bunny"
      style={{
        position: "fixed",
        bottom: 20,
        left,
        width: 96,
        height: 96,
        cursor: "pointer",
        zIndex: 50,
        transform: `
          scaleX(${-direction})
          translateY(${hover ? -15 : hopOffset}px)
          ${clicked ? "rotate(20deg)" : ""}
        `,
        transition: "transform 0.2s",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setClicked(!clicked)}
    />
  )
}