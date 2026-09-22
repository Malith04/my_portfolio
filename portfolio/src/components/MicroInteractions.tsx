import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const MicroInteractions = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  // Smooth scroll progress with Framer Motion spring physics
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Detect hover over interactive elements
      const target = e.target as HTMLElement | null
      const isInteractive = target?.closest('a, button, [role="button"], input, textarea, .surface-card')
      setIsHovering(!!isInteractive)
    }

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true)
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY }
      setRipples((prev) => [...prev.slice(-4), newRipple])
    }

    const handleMouseUp = () => {
      setIsClicking(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Precision Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 40 }}
      />

      {/* Cyber Reticle Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 border border-primary/40"
        style={{
          boxShadow: isHovering 
            ? '0 0 20px rgba(0, 245, 212, 0.4), inset 0 0 10px rgba(121, 40, 202, 0.2)' 
            : '0 0 10px rgba(0, 245, 212, 0.15)',
        }}
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 16),
          y: mousePosition.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          borderColor: isHovering ? 'rgba(0, 245, 212, 0.8)' : 'rgba(0, 245, 212, 0.3)',
          backgroundColor: isHovering ? 'rgba(0, 245, 212, 0.08)' : 'transparent',
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      />

      {/* Futuristic Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary via-cyan-400 to-secondary z-50 origin-left shadow-[0_0_12px_rgba(0,245,212,0.8)]"
        style={{ scaleX }}
      />

      {/* Quantum Shockwave Click Ripples */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full border border-primary/50"
            initial={{ width: 0, height: 0, opacity: 0.9, x: ripple.x, y: ripple.y }}
            animate={{
              width: 160,
              height: 160,
              opacity: 0,
              x: ripple.x - 80,
              y: ripple.y - 80,
            }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          />
        ))}
      </div>
    </>
  )
}

export default MicroInteractions