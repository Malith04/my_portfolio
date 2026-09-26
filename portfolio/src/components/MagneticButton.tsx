import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number // Sensitivity of magnetic pull (default: 0.35)
  innerStrength?: number // Inner text parallax factor (default: 0.15)
  href?: string
  onClick?: (e: React.MouseEvent) => void
  ariaLabel?: string
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.35,
  innerStrength = 0.15,
  href,
  onClick,
  ariaLabel
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const innerX = useMotionValue(0)
  const innerY = useMotionValue(0)

  // Spring physics configuration for a snappy, luxurious feel
  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const springInnerX = useSpring(innerX, springConfig)
  const springInnerY = useSpring(innerY, springConfig)

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = clientX - centerX
    const deltaY = clientY - centerY

    x.set(deltaX * strength)
    y.set(deltaY * strength)
    innerX.set(deltaX * innerStrength)
    innerY.set(deltaY * innerStrength)
  }

  const handlePointerLeave = () => {
    x.set(0)
    y.set(0)
    innerX.set(0)
    innerY.set(0)
  }

  const content = (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none transition-shadow ${className}`}
    >
      <motion.span
        style={{ x: springInnerX, y: springInnerY }}
        className="inline-flex items-center gap-2 pointer-events-none"
      >
        {children}
      </motion.span>
    </motion.div>
  )

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className="inline-block"
      >
        {content}
      </a>
    )
  }

  return (
    <div onClick={onClick} role={onClick ? 'button' : undefined} aria-label={ariaLabel} className="inline-block">
      {content}
    </div>
  )
}

export default MagneticButton
