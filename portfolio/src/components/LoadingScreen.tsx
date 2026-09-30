import { motion } from 'framer-motion'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

interface Coords {
  startX: number
  startY: number
  destX: number
  destY: number
  targetScale: number
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [coords, setCoords] = useState<Coords>(() => {
    if (typeof window === 'undefined') {
      return { startX: 0, startY: 0, destX: 32, destY: 28, targetScale: 0.18 }
    }
    const estWidth = window.innerWidth < 640 ? 140 : 200
    const estHeight = window.innerWidth < 640 ? 90 : 130
    return {
      startX: (window.innerWidth - estWidth) / 2,
      startY: (window.innerHeight - estHeight) / 2 - 20,
      destX: window.innerWidth < 640 ? 16 : 32,
      destY: window.innerWidth < 640 ? 20 : 26,
      targetScale: 0.18
    }
  })
  const letterRef = useRef<HTMLDivElement>(null)

  // Measure initial center and navbar destination coordinates
  const measureCoords = () => {
    if (!letterRef.current) return
    const letterRect = letterRef.current.getBoundingClientRect()
    const navEl = document.getElementById('nav-brand-logo')
    const navRect = navEl?.getBoundingClientRect()

    const startX = (window.innerWidth - letterRect.width) / 2
    const startY = (window.innerHeight - letterRect.height) / 2 - 20 // subtle optical lift

    const destHeight = navRect && navRect.height > 0 ? navRect.height : 26
    const targetScale = letterRect.height > 0 ? (destHeight * 0.95) / letterRect.height : 0.18

    // Ensure destY centers vertically within the navbar logo container
    const destX = navRect ? navRect.left : window.innerWidth < 640 ? 16 : 32
    const destY = navRect
      ? navRect.top + (navRect.height - letterRect.height * targetScale) / 2
      : window.innerWidth < 640
      ? 20
      : 26

    setCoords({ startX, startY, destX, destY, targetScale })
  }

  useLayoutEffect(() => {
    measureCoords()
    window.addEventListener('resize', measureCoords)
    return () => window.removeEventListener('resize', measureCoords)
  }, [])

  // Smooth loading progression from 0 to 100%
  useEffect(() => {
    const startTime = performance.now()
    const duration = 1800 // 1.8s smooth loading curve

    const step = (now: number) => {
      const elapsed = now - startTime
      const raw = Math.min(1, elapsed / duration)
      // Ease out cubic for a silky deceleration near 100%
      const ease = 1 - Math.pow(1 - raw, 3)
      const currentPct = Math.min(100, Math.round(ease * 100))

      setProgress(currentPct)

      if (raw < 1) {
        requestAnimationFrame(step)
      } else {
        // Re-measure right before transition to ensure sub-pixel accuracy
        measureCoords()

        // Pause briefly at 100% so user sees full liquid charge
        setTimeout(() => {
          setIsTransitioning(true)

          // After MR glides into the navbar and curtain completes, finish loading
          setTimeout(() => {
            onLoadingComplete()
          }, 1100)
        }, 140)
      }
    }

    const frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-[99990] pointer-events-none select-none overflow-hidden">
      {/* ============================================================ */}
      {/* 1. SINGLE-COLOUR SOLID BACKGROUND CURTAIN                    */}
      {/* ============================================================ */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isTransitioning ? '-100%' : '0%' }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.35 // Starts lifting as the letters approach the navbar
        }}
        className="fixed inset-0 z-[99991] bg-[#060812] [.light_&]:bg-slate-50 pointer-events-auto shadow-2xl"
      >
        {/* Subtle, soft ambient vignette in the center */}
        <div className="absolute inset-0 bg-radial from-white/[0.02] to-transparent pointer-events-none" />
      </motion.div>

      {/* ============================================================ */}
      {/* 2. SPREADING CIRCULAR RIPPLE AURA BEHIND MR LETTERS         */}
      {/* ============================================================ */}
      <motion.div
        animate={{
          opacity: isTransitioning ? 0 : 1,
          scale: isTransitioning ? 0.8 : 1
        }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="fixed inset-0 z-[99993] flex items-center justify-center pointer-events-none"
        style={{ transform: 'translateY(-20px)' }}
      >
        {/* Concentric Expanding Ripple Ring 1 */}
        <motion.div
          animate={{
            scale: [0.35, 2.5],
            opacity: [0.85, 0],
            borderWidth: ['2px', '1px']
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: [0.1, 0.5, 0.3, 1]
          }}
          className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-primary/50 shadow-[0_0_45px_rgba(0,245,212,0.35)] pointer-events-none"
        />

        {/* Concentric Expanding Ripple Ring 2 */}
        <motion.div
          animate={{
            scale: [0.35, 2.5],
            opacity: [0.85, 0],
            borderWidth: ['2px', '1px']
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            delay: 0.93,
            ease: [0.1, 0.5, 0.3, 1]
          }}
          className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-cyber-sky/45 shadow-[0_0_45px_rgba(56,189,248,0.3)] pointer-events-none"
        />

        {/* Concentric Expanding Ripple Ring 3 */}
        <motion.div
          animate={{
            scale: [0.35, 2.5],
            opacity: [0.85, 0],
            borderWidth: ['2px', '1px']
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            delay: 1.86,
            ease: [0.1, 0.5, 0.3, 1]
          }}
          className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-accent/45 shadow-[0_0_45px_rgba(0,255,135,0.3)] pointer-events-none"
        />

        {/* Dynamic Glowing Energy Core */}
        <motion.div
          animate={{
            scale: [0.85, 1.25, 0.85],
            opacity: [0.3, 0.55, 0.3]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-primary/35 via-cyber-sky/25 to-accent/25 blur-3xl pointer-events-none"
        />
      </motion.div>

      {/* ============================================================ */}
      {/* 3. FLYING MR LETTERS -> NAVBAR WORDMARK                      */}
      {/* ============================================================ */}
      <motion.div
        ref={letterRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          transformOrigin: 'top left'
        }}
        initial={{
          x: coords.startX,
          y: coords.startY,
          scale: 1,
          opacity: 1
        }}
        animate={{
          x: isTransitioning ? coords.destX : coords.startX,
          y: isTransitioning ? coords.destY : coords.startY,
          scale: isTransitioning ? coords.targetScale : 1,
          opacity: 1
        }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1]
        }}
        className="z-[99999] pointer-events-none flex items-baseline select-none"
      >
        {/* Brand Container with Expanding Letters */}
        <div className="flex items-baseline font-display tracking-tight text-white [.light_&]:text-slate-900 leading-none">
          {/* Letter M Block */}
          <div className="relative inline-flex items-baseline">
            {/* Outline / Ghost Background */}
            <span className="text-8xl sm:text-9xl md:text-[130px] font-black text-white/10 [.light_&]:text-slate-200">
              M
            </span>
            {/* Liquid Fill Gradient */}
            <span
              className="absolute inset-0 text-8xl sm:text-9xl md:text-[130px] font-black text-transparent bg-clip-text bg-gradient-to-tr from-[#00F5D4] via-[#38BDF8] to-[#00FF87]"
              style={{
                clipPath: `inset(${100 - progress}% 0 0 0)`
              }}
            >
              M
            </span>

            {/* Unfolding "alith " */}
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={
                isTransitioning
                  ? { width: 'auto', opacity: 1 }
                  : { width: 0, opacity: 0 }
              }
              transition={{
                duration: 0.45,
                delay: 0.38,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="overflow-hidden whitespace-nowrap text-8xl sm:text-9xl md:text-[130px] font-semibold text-white [.light_&]:text-slate-900"
            >
              alith&nbsp;
            </motion.span>
          </div>

          {/* Letter R Block */}
          <div className="relative inline-flex items-baseline ml-1 sm:ml-2">
            {/* Outline / Ghost Background */}
            <span className="text-8xl sm:text-9xl md:text-[130px] font-black text-white/10 [.light_&]:text-slate-200">
              R
            </span>
            {/* Liquid Fill Gradient */}
            <span
              className="absolute inset-0 text-8xl sm:text-9xl md:text-[130px] font-black text-transparent bg-clip-text bg-gradient-to-tr from-[#00F5D4] via-[#38BDF8] to-[#00FF87]"
              style={{
                clipPath: `inset(${100 - progress}% 0 0 0)`
              }}
            >
              R
            </span>

            {/* Unfolding "ajamanthri" */}
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={
                isTransitioning
                  ? { width: 'auto', opacity: 1 }
                  : { width: 0, opacity: 0 }
              }
              transition={{
                duration: 0.5,
                delay: 0.44,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="overflow-hidden whitespace-nowrap text-8xl sm:text-9xl md:text-[130px] font-semibold text-white [.light_&]:text-slate-900"
            >
              ajamanthri
            </motion.span>
          </div>

          {/* Glowing Cyber Dot */}
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isTransitioning
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={{
              duration: 0.3,
              delay: 0.65,
              ease: 'easeOut'
            }}
            className="w-4 h-4 rounded-full bg-[#00F5D4] inline-block shadow-[0_0_12px_#00F5D4] ml-3 self-center shrink-0"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default LoadingScreen
