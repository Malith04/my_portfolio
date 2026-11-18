import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
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
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [coords, setCoords] = useState<Coords>(() => {
    if (typeof window === 'undefined') {
      return { startX: 0, startY: 0, destX: 32, destY: 28, targetScale: 0.18 }
    }
    const estWidth = window.innerWidth < 640 ? 150 : 210
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
  const countRef = useRef<HTMLSpanElement>(null)

  // Direct GPU-driven motion values (0 React re-renders during progress charge)
  const progress = useMotionValue(0)
  const clipProgress = useTransform(progress, (v) => `inset(${100 - v}% 0 0 0)`)
  const scaleProgress = useTransform(progress, (v) => v / 100)

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

  // Energetic, high-performance loading sequence
  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 1.15, // Fast, punchy, energetic charge (1.15s)
      ease: [0.16, 1, 0.3, 1], // Custom energetic cubic ease
      onUpdate: (latest) => {
        if (countRef.current) {
          countRef.current.textContent = `${Math.round(latest)}%`
        }
      },
      onComplete: () => {
        measureCoords()
        // Brief pulse at 100% before launching the curtain
        setTimeout(() => {
          setIsTransitioning(true)
          // Curtain finishes lifting and unveils full site
          setTimeout(() => {
            onLoadingComplete()
          }, 700)
        }, 90)
      }
    })

    return () => controls.stop()
  }, [onLoadingComplete, progress])

  return (
    <div className="fixed inset-0 z-[99990] pointer-events-none select-none overflow-hidden">
      {/* ============================================================ */}
      {/* 1. SINGLE-COLOUR SOLID BACKGROUND CURTAIN                    */}
      {/* ============================================================ */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isTransitioning ? '-100%' : '0%' }}
        transition={{
          duration: 0.65,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.15 // Glides up right as the letters arrive at the navbar
        }}
        className="fixed inset-0 z-[99991] bg-[#060812] [.light_&]:bg-slate-50 pointer-events-auto shadow-2xl transform-gpu will-change-transform"
      >
        {/* Soft ambient vignette */}
        <div className="absolute inset-0 bg-radial from-white/[0.03] to-transparent pointer-events-none" />
      </motion.div>

      {/* ============================================================ */}
      {/* 2. ENERGETIC CYBER AURA BEHIND MR MONOGRAM                  */}
      {/* ============================================================ */}
      <motion.div
        animate={{
          opacity: isTransitioning ? 0 : 1,
          scale: isTransitioning ? 0.85 : 1
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed inset-0 z-[99993] flex items-center justify-center pointer-events-none"
        style={{ transform: 'translateY(-20px)' }}
      >
        {/* Soft Cyber Ambient Glow */}
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#00F5D4]/25 via-[#38BDF8]/20 to-transparent blur-2xl pointer-events-none transform-gpu" />

        {/* Dynamic Expanding Cyber Pulse Ring */}
        <motion.div
          animate={{
            scale: [0.65, 1.85],
            opacity: [0.8, 0]
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#00F5D4]/45 shadow-[0_0_25px_rgba(0,245,212,0.3)] pointer-events-none transform-gpu"
        />
      </motion.div>

      {/* ============================================================ */}
      {/* 3. FLYING MR MONOGRAM -> NAVBAR BRAND WORDMARK              */}
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
          opacity: isTransitioning ? 0 : 1
        }}
        transition={{
          duration: 0.65,
          ease: [0.76, 0, 0.24, 1]
        }}
        className="z-[99999] pointer-events-none flex flex-col items-center select-none transform-gpu"
      >
        {/* Brand Monogram */}
        <div className="flex items-baseline font-display tracking-tight text-white [.light_&]:text-slate-900 leading-none">
          {/* Letter M */}
          <div className="relative inline-flex items-baseline">
            <span className="text-8xl sm:text-9xl md:text-[130px] font-black text-white/10 [.light_&]:text-slate-200">
              M
            </span>
            <motion.span
              className="absolute inset-0 text-8xl sm:text-9xl md:text-[130px] font-black text-transparent bg-clip-text bg-gradient-to-tr from-[#00F5D4] via-[#38BDF8] to-[#00FF87]"
              style={{
                clipPath: clipProgress
              }}
            >
              M
            </motion.span>
          </div>

          {/* Letter R */}
          <div className="relative inline-flex items-baseline ml-3 sm:ml-5">
            <span className="text-8xl sm:text-9xl md:text-[130px] font-black text-white/10 [.light_&]:text-slate-200">
              R
            </span>
            <motion.span
              className="absolute inset-0 text-8xl sm:text-9xl md:text-[130px] font-black text-transparent bg-clip-text bg-gradient-to-tr from-[#00F5D4] via-[#38BDF8] to-[#00FF87]"
              style={{
                clipPath: clipProgress
              }}
            >
              R
            </motion.span>
          </div>

          {/* Glowing Cyber Dot */}
          <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#00F5D4] inline-block shadow-[0_0_15px_#00F5D4] ml-3 sm:ml-4 self-center shrink-0" />
        </div>

        {/* Energetic Progress Rail & HUD Telemetry */}
        <motion.div
          animate={{
            opacity: isTransitioning ? 0 : 1,
            y: isTransitioning ? 10 : 0
          }}
          transition={{ duration: 0.2 }}
          className="mt-6 sm:mt-8 flex flex-col items-center gap-2.5 w-52 sm:w-64"
        >
          {/* Progress Bar Track */}
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/5">
            <motion.div
              style={{ scaleX: scaleProgress }}
              className="h-full bg-gradient-to-r from-[#00F5D4] via-[#38BDF8] to-[#00FF87] rounded-full origin-left shadow-[0_0_12px_rgba(0,245,212,0.9)]"
            />
          </div>

          {/* HUD Status & Percentage */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-wider text-slate-400">
            <span className="text-[#00F5D4] flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
              SYSTEM CHARGE
            </span>
            <span ref={countRef} className="font-semibold text-white font-mono">
              0%
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default LoadingScreen
