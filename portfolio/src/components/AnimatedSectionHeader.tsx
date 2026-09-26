import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface AnimatedSectionHeaderProps {
  children: React.ReactNode
  className?: string
}

export const AnimatedSectionHeader: React.FC<AnimatedSectionHeaderProps> = ({
  children,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null)

  // Scroll-linked animation matching the "Engineering that drives real impact" entrance
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 92%', 'center 52%']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001
  })

  // Header entrance: slides up smoothly and fades in as you scroll
  const y = useTransform(smoothProgress, [0, 1], [35, 0])
  const opacity = useTransform(smoothProgress, [0, 0.75], [0, 1])

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  )
}

export default AnimatedSectionHeader
