import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const MicroInteractions = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 4 + 2,
    speed: Math.random() * 2 + 1
  }))

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y
            }}
            animate={{
              y: [particle.y, particle.y - 100, particle.y],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: particle.speed * 3,
              repeat: Infinity,
              delay: particle.id * 0.2
            }}
            style={{
              width: particle.size,
              height: particle.size
            }}
          />
        ))}
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary z-50 origin-left"
        style={{
          scaleX: typeof window !== 'undefined' ? 
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0
        }}
      />

      {/* Interactive Elements */}
      <div className="fixed inset-0 pointer-events-none z-20">
        {/* Ripple Effect on Click */}
        <motion.div
          className="absolute w-32 h-32 border border-primary/30 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64
          }}
        />
      </div>
    </>
  )
}

export default MicroInteractions