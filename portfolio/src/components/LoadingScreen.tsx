import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

interface QuantumParticle {
  angle: number
  radius: number
  targetRadius: number
  speed: number
  size: number
  color: string
  alpha: number
  spiralSpeed: number
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animFrameId = useRef<number | null>(null)

  // Progress counter with smooth easing
  useEffect(() => {
    const startTime = performance.now()
    const duration = 2000 // 2 seconds silky smooth load

    const step = (time: number) => {
      const elapsed = time - startTime
      const rawPct = Math.min(100, Math.floor((elapsed / duration) * 100))

      setProgress(rawPct)

      if (rawPct < 100) {
        requestAnimationFrame(step)
      } else {
        setIsReady(true)
        // Smooth transition to main app
        setTimeout(() => {
          onLoadingComplete()
        }, 400)
      }
    }

    const frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [onLoadingComplete])

  // Canvas Quantum Inflow Particle Convergence
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Generate 120 quantum inflow particles
    const particles: QuantumParticle[] = []
    const numParticles = 110
    const colors = ['#00F5D4', '#7928CA', '#00FF87', '#FFFFFF', '#38BDF8']

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        angle: Math.random() * Math.PI * 2,
        radius: 120 + Math.random() * Math.max(width, height) * 0.6,
        targetRadius: 40 + Math.random() * 25,
        speed: 0.8 + Math.random() * 2.2,
        size: 1 + Math.random() * 2.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 0.2 + Math.random() * 0.7,
        spiralSpeed: (0.015 + Math.random() * 0.02) * (Math.random() > 0.5 ? 1 : -1)
      })
    }

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2

      // 1. Quantum Inflow Particles
      particles.forEach((p) => {
        p.angle += p.spiralSpeed * (1 + (progress / 100) * 1.5)
        p.radius -= p.speed * (0.8 + (progress / 100) * 2.2)

        if (p.radius <= p.targetRadius) {
          p.radius = Math.max(width, height) * 0.55 + Math.random() * 100
          p.angle = Math.random() * Math.PI * 2
        }

        const px = cx + Math.cos(p.angle) * p.radius
        const py = cy + Math.sin(p.angle) * p.radius

        ctx.save()
        ctx.globalAlpha = p.alpha * (0.4 + (progress / 100) * 0.6)
        ctx.fillStyle = p.color
        ctx.shadowColor = p.color
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // 2. Gravitational Singularity Energy Core Glow
      const corePulse = Math.sin(time * 0.006) * 6
      const coreRadius = 38 + (progress / 100) * 20 + corePulse

      const radGlow = ctx.createRadialGradient(cx, cy, 5, cx, cy, coreRadius * 2.2)
      radGlow.addColorStop(0, 'rgba(0, 245, 212, 0.45)')
      radGlow.addColorStop(0.35, 'rgba(121, 40, 202, 0.3)')
      radGlow.addColorStop(0.7, 'rgba(0, 255, 135, 0.1)')
      radGlow.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.save()
      ctx.fillStyle = radGlow
      ctx.beginPath()
      ctx.arc(cx, cy, coreRadius * 2.5, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      animFrameId.current = requestAnimationFrame(render)
    }

    animFrameId.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [progress])

  // System telemetry status message based on progress
  const getTelemetryMessage = () => {
    if (progress < 25) return 'SYS://BOOT: INITIALIZING QUANTUM RUNTIME...'
    if (progress < 50) return 'SYS://CALIBRATE: ALIGNING PHOTONIC SHADERS...'
    if (progress < 75) return 'SYS://NEURAL: SYNCHRONIZING UI SUBSYSTEMS...'
    if (progress < 95) return 'SYS://ENERGY: COMPILING RUNTIME CACHE...'
    if (progress < 100) return 'SYS://SINGULARITY: FULL CAPACITY REACHED'
    return 'SYS://READY: SYSTEM ONLINE • WELCOME'
  }

  // Calculate SVG circular arc offset
  const circleRadius = 90
  const circumference = 2 * Math.PI * circleRadius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#04060e] text-white select-none overflow-hidden"
    >
      {/* Dynamic Quantum Inflow Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none w-full h-full z-0"
      />

      {/* Subtle Background Radial Energy Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-primary/15 via-secondary/15 to-transparent rounded-full blur-[100px]" />
      </div>

      {/* ============================================================ */}
      {/* TOP HUD TELEMETRY BAR                                       */}
      {/* ============================================================ */}
      <div className="relative z-10 w-full px-8 pt-8 flex justify-between items-center text-[11px] font-display font-medium uppercase tracking-[0.2em] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="text-white font-semibold">MALITH.DEV</span>
          <span className="text-primary/70">// QUANTUM RUNTIME v2.5</span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <span className="text-slate-500">GEO: 6.9271° N, 79.8612° E</span>
          <span className="text-primary">•</span>
          <span className="text-slate-400 font-mono">LATENCY: &lt;1ms</span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CENTER: 3D HOLOGRAPHIC GYROSCOPE & SINGULARITY MONOGRAM     */}
      {/* ============================================================ */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
          {/* Outer SVG Circular Progress Arc */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            {/* Background Track */}
            <circle
              cx="50%"
              cy="50%"
              r={circleRadius}
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="3"
            />
            {/* Progress Arc */}
            <circle
              cx="50%"
              cy="50%"
              r={circleRadius}
              fill="none"
              stroke="url(#arcGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{
                transition: 'stroke-dashoffset 0.1s linear',
                filter: 'drop-shadow(0 0 10px rgba(0, 245, 212, 0.8))'
              }}
            />
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F5D4" />
                <stop offset="60%" stopColor="#7928CA" />
                <stop offset="100%" stopColor="#00FF87" />
              </linearGradient>
            </defs>
          </svg>

          {/* 3D Holographic Gyro Ring 1 (X-Z Rotation) */}
          <motion.div
            className="absolute w-52 h-52 rounded-full border border-primary/40 pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 0 20px rgba(0, 245, 212, 0.2)'
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 180],
              rotateZ: [0, 360]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }}
          />

          {/* 3D Holographic Gyro Ring 2 (Y-Z Counter-Rotation) */}
          <motion.div
            className="absolute w-44 h-44 rounded-full border border-secondary/50 pointer-events-none"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 0 20px rgba(121, 40, 202, 0.25)'
            }}
            animate={{
              rotateX: [360, 0],
              rotateY: [0, 360],
              rotateZ: [180, -180]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear'
            }}
          />

          {/* Center Quantum Monogram Core */}
          <motion.div
            className="relative w-28 h-28 rounded-full p-[2px] bg-gradient-to-tr from-primary via-white to-secondary flex items-center justify-center shadow-[0_0_35px_rgba(0,245,212,0.45)]"
            animate={{
              scale: isReady ? [1, 1.1] : [1, 1.05, 1]
            }}
            transition={{
              duration: 2,
              repeat: isReady ? 0 : Infinity,
              ease: 'easeInOut'
            }}
          >
            <div className="w-full h-full rounded-full bg-[#050814]/90 backdrop-blur-xl flex items-center justify-center border border-white/20">
              <span className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-gradient">
                MR
              </span>
            </div>
          </motion.div>
        </div>

        {/* Identity & Subtitle in Apple SF Pro */}
        <div className="text-center mt-6 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight text-white">
            Malith Rajamanthri
          </h2>
          <p className="text-xs font-display font-medium tracking-[0.22em] uppercase text-primary">
            Frontend Engineer &amp; UI/UX Designer
          </p>
        </div>

        {/* Digital Percentage & Live Frequency Bars */}
        <div className="flex flex-col items-center mt-6">
          <div className="flex items-baseline">
            <span className="text-4xl sm:text-5xl font-display font-semibold tracking-tight text-white">
              {progress}
            </span>
            <span className="text-primary font-display font-semibold text-lg ml-1">%</span>
          </div>

          {/* Oscillating Audio/Frequency Telemetry Waves */}
          <div className="flex items-center gap-1.5 h-6 mt-2">
            {[...Array(14)].map((_, i) => (
              <motion.span
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-primary to-accent"
                animate={{
                  height: [
                    '4px',
                    `${8 + Math.sin(i * 0.8 + progress * 0.1) * 16}px`,
                    '4px'
                  ]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: 'easeInOut'
                }}
              />
            ))}
          </div>

          {/* Dynamic Console Telemetry Message */}
          <p className="text-[11px] font-display font-semibold tracking-wider text-slate-400 uppercase mt-3 h-4">
            {getTelemetryMessage()}
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* BOTTOM FOOTER TELEMETRY                                      */}
      {/* ============================================================ */}
      <div className="relative z-10 w-full px-8 pb-8 flex justify-between items-center text-[10px] font-display font-medium uppercase tracking-[0.2em] text-slate-500">
        <div>CORE FREQUENCY: 120 FPS // STABLE</div>
        <div className="text-primary font-semibold tracking-widest">
          {progress === 100 ? '● SYSTEM INITIALIZED' : '● LOADING RUNTIME'}
        </div>
        <div className="hidden sm:block">STATUS: READY FOR INTERACTION</div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
