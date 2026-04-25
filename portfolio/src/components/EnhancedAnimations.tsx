import { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

// Floating particles animation
export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-primary/20 rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [particle.y, particle.y - 100, particle.y],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Scroll-triggered reveal animation
export const ScrollReveal = ({ children, direction = 'up', delay = 0 }: {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation
export const StaggerContainer = ({ children, staggerDelay = 0.1 }: {
  children: React.ReactNode
  staggerDelay?: number
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {Array.isArray(children) ? 
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        )) :
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      }
    </motion.div>
  )
}

// Magnetic hover effect
export const MagneticHover = ({ children, strength = 0.3 }: {
  children: React.ReactNode
  strength?: number
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}

// Typewriter effect
export const TypewriterText = ({ 
  text, 
  delay = 0, 
  speed = 50 
}: {
  text: string
  delay?: number
  speed?: number
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, currentIndex === 0 ? delay : speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, delay, speed])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-primary ml-1"
      />
    </span>
  )
}

// Pulse animation
export const PulseAnimation = ({ children, scale = 1.05, duration = 2 }: {
  children: React.ReactNode
  scale?: number
  duration?: number
}) => {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  )
}

// Gradient text animation
export const AnimatedGradientText = ({ 
  children, 
  colors = ['#4DD0E1', '#F5C84B', '#FF7A59'] 
}: {
  children: React.ReactNode
  colors?: string[]
}) => {
  return (
    <motion.span
      className="bg-gradient-to-r bg-clip-text text-transparent"
      style={{
        backgroundImage: `linear-gradient(45deg, ${colors.join(', ')})`
      }}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.span>
  )
}

// Loading dots animation
export const LoadingDots = ({ size = 8, color = '#4DD0E1' }: {
  size?: number
  color?: string
}) => {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: color
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2
          }}
        />
      ))}
    </div>
  )
}

// Morphing shape animation
export const MorphingShape = ({ 
  paths, 
  duration = 3,
  className = "w-32 h-32 text-primary"
}: {
  paths: string[]
  duration?: number
  className?: string
}) => {
  const [currentPath, setCurrentPath] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPath(prev => (prev + 1) % paths.length)
    }, duration * 1000)

    return () => clearInterval(interval)
  }, [paths.length, duration])

  return (
    <svg className={className} viewBox="0 0 100 100">
      <motion.path
        d={paths[currentPath]}
        fill="currentColor"
        animate={{ d: paths[currentPath] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </svg>
  )
}