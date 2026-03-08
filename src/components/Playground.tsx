import { useState, useEffect, useRef } from "react"

interface Carrot {
  id: number
  x: number
}

export default function BunnyPlayground() {
  const [left, setLeft] = useState(50)
  const [target, setTarget] = useState(200)
  const [direction, setDirection] = useState(1)
  const [hopOffset, setHopOffset] = useState(0)
  const [paused, setPaused] = useState(false)

  const [carrots, setCarrots] = useState<Carrot[]>([])

  const requestRef = useRef<number>(0)

  const grassHeight = 62

  // Spawn carrots (random 8–14 seconds)
  useEffect(() => {
    let timeout: number

    const spawnCarrot = () => {
      const maxX = window.innerWidth - 100

      const newCarrot = {
        id: Date.now(),
        x: Math.random() * maxX,
      }

      setCarrots(prev => [...prev, newCarrot].slice(-5))

      const nextSpawn = 8000 + Math.random() * 6000
      timeout = window.setTimeout(spawnCarrot, nextSpawn)
    }

    spawnCarrot()

    return () => clearTimeout(timeout)
  }, [])

  // Bunny hop animation
  useEffect(() => {
    let hopTimeout: number

    const hopFunc = () => {
      if (!paused) {
        const hopHeight = 3 + Math.random() * 6
        setHopOffset(hopHeight)

        const hopDuration = 200 + Math.random() * 300
        setTimeout(() => setHopOffset(0), hopDuration)
      }

      const nextHop = 1000 + Math.random() * 1000
      hopTimeout = window.setTimeout(hopFunc, nextHop)
    }

    hopFunc()

    return () => clearTimeout(hopTimeout)
  }, [paused])

  // Update target
  const updateTarget = (currentLeft: number) => {
    if (carrots.length > 0) {
      const closest = carrots.reduce((a, b) =>
        Math.abs(b.x - currentLeft) < Math.abs(a.x - currentLeft) ? b : a
      )

      setTarget(closest.x)
      setDirection(currentLeft < closest.x ? -1 : 1)
    } else {
      const maxX = window.innerWidth - 100
      const newTarget = Math.random() * maxX

      setTarget(newTarget)
      setDirection(currentLeft < newTarget ? -1 : 1)
    }
  }

  // Movement animation
  useEffect(() => {
    const animate = () => {
      if (!paused) {
        setLeft(prev => {
          const speed = 2

          const newLeft =
            Math.abs(prev - target) < speed
              ? target
              : prev + (prev < target ? speed : -speed)

          // 🥕 check carrot collection here
          setCarrots(prevCarrots =>
            prevCarrots.filter(carrot => Math.abs(carrot.x - newLeft) >= 40)
          )

          if (Math.abs(newLeft - target) < speed) {
            updateTarget(newLeft)
          }

          return newLeft
        })
      }

      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(requestRef.current)
  }, [paused, target, carrots])

  // Click hop
  const handleClick = () => {
    setHopOffset(15)
    setTimeout(() => setHopOffset(0), 300)
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        pointerEvents: "none",
      }}
    >
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

      {/* Carrots */}
      {carrots.map(carrot => (
        <img
          key={carrot.id}
          src="/carrot.png"
          alt="Carrot"
          style={{
            position: "absolute",
            bottom: 15,
            left: carrot.x,
            width: 40,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Bunny */}
      <img
        src="/pet.png"
        alt="Bunny"
        style={{
          position: "absolute",
          bottom: -20,
          left,
          width: 126,
          height: 126,
          cursor: "pointer",
          transform: `scaleX(${direction}) translateY(${hopOffset}px)`,
          transition: "transform 0.2s",
          zIndex: 2,
          pointerEvents: "auto",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onClick={handleClick}
      />
    </div>
  )
}