import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// Animated Counter component with smooth exponential easing
const AnimatedCounter: React.FC<{
  value: number
  suffix?: string
  duration?: number
  trigger: boolean
}> = ({ value, suffix = '', duration = 1.3, trigger }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) {
      setCount(0)
      return
    }

    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = (timestamp - startTime) / 1000
      const progress = Math.min(elapsed / duration, 1)

      // Smooth ease-out cubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(easeProgress * value)
      setCount(current)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      }
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [trigger, value, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export const MetricsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isCounting, setIsCounting] = useState(false)

  // Track dynamic window dimensions for responsive card bounds
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1440,
    height: typeof window !== 'undefined' ? window.innerHeight : 900
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Scroll tracking throughout the pinned section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  // Responsive, silky physics-based spring smoothing
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.15
  })

  // Trigger number count-up when the side columns animate into view
  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      if (latest >= 0.10 && !isCounting) {
        setIsCounting(true)
      } else if (latest < 0.05 && isCounting) {
        setIsCounting(false)
      }
    })
    return () => unsubscribe()
  }, [smoothProgress, isCounting])

  // 1. Black Background Canvas Appearance
  // At the start (0.0 to 0.08): Opacity 0 -> Website's Silk fluid background is visible
  // After scrolling (0.08 to 0.28): Fades into a 100% solid pitch-black architectural grid canvas
  // STAYS SOLID PURE BLACK throughout the entire remainder of the section!
  const canvasOpacity = useTransform(
    smoothProgress,
    [0.0, 0.08, 0.28],
    [0, 0, 1]
  )

  // 2. Center Card Styling Transition:
  // Starts with the portfolio container styling, then deepens to pitch-black card and STAYS settled
  const cardBlackOpacity = useTransform(
    smoothProgress,
    [0.06, 0.26],
    [0, 1]
  )

  const cardScale = useTransform(
    smoothProgress,
    [0.0, 0.10, 0.28],
    [0.97, 0.97, 1.0]
  )

  // 3. Initial Teaser inside center card (fades out as side cards & signature appear)
  const initialTeaserOpacity = useTransform(
    smoothProgress,
    [0.05, 0.18],
    [1, 0]
  )

  // 4. Center Card Bottom Content (Signature & Statement - fades in and STAYS visible)
  const bottomContentOpacity = useTransform(
    smoothProgress,
    [0.14, 0.28],
    [0, 1]
  )
  const bottomContentY = useTransform(
    smoothProgress,
    [0.14, 0.28],
    [16, 0]
  )

  // 5. FOUR CORNERS CONVERGENCE ANIMATION:
  // Each stat flies in from its corner, converges near each other, and STAYS PERMANENTLY ASSEMBLED!
  
  // Top-Left (15+): flies in from upper-left corner towards center and stays permanently
  const topLeftOpacity = useTransform(smoothProgress, [0.08, 0.28], [0, 1])
  const topLeftX = useTransform(smoothProgress, [0.08, 0.28], [-80, 0])
  const topLeftY = useTransform(smoothProgress, [0.08, 0.28], [-50, 0])

  // Bottom-Left (100%): flies in from lower-left corner towards center and stays permanently
  const bottomLeftOpacity = useTransform(smoothProgress, [0.08, 0.28], [0, 1])
  const bottomLeftX = useTransform(smoothProgress, [0.08, 0.28], [-80, 0])
  const bottomLeftY = useTransform(smoothProgress, [0.08, 0.28], [50, 0])

  // Top-Right (11 Yrs): flies in from upper-right corner towards center and stays permanently
  const topRightOpacity = useTransform(smoothProgress, [0.08, 0.28], [0, 1])
  const topRightX = useTransform(smoothProgress, [0.08, 0.28], [80, 0])
  const topRightY = useTransform(smoothProgress, [0.08, 0.28], [-50, 0])

  // Bottom-Right (Innovior): flies in from lower-right corner towards center and stays permanently
  const bottomRightOpacity = useTransform(smoothProgress, [0.08, 0.28], [0, 1])
  const bottomRightX = useTransform(smoothProgress, [0.08, 0.28], [80, 0])
  const bottomRightY = useTransform(smoothProgress, [0.08, 0.28], [50, 0])

  return (
    <section
      ref={sectionRef}
      id="metrics"
      className="relative w-full lg:h-[220vh] bg-transparent"
    >
      {/* Desktop Sticky Stage: Padded top (pt-20) to ensure zero navbar collision on all laptop heights */}
      <div className="hidden lg:flex sticky top-0 h-screen w-full items-center justify-center overflow-hidden z-20 pt-20 pb-8">
        
        {/* Cinematic Pure Pitch-Black Architectural Canvas (Zero Blue Vignette/Bleed) */}
        <motion.div
          style={{ opacity: canvasOpacity }}
          className="absolute inset-0 bg-black [.light_&]:bg-[#F6F4EE] transition-colors pointer-events-none"
        >
          {/* Edge-to-edge crisp architectural grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] [.light_&]:bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
          
          {/* Subtle center spotlight for deep spatial contrast */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-r from-primary/[0.04] via-accent/[0.02] to-transparent blur-[140px] pointer-events-none rounded-full" />
        </motion.div>

        {/* 3-Column Stage: Balanced and comfortable spacing fitting every screen height */}
        <div className="relative z-10 w-full max-w-[1300px] mx-auto flex items-center justify-center gap-10 xl:gap-14 px-6">
          
          {/* LEFT COLUMN: Top-Left (15+) and Bottom-Left (100%) converged near each other */}
          <div className="w-[260px] xl:w-[290px] shrink-0 flex flex-col justify-center gap-10 xl:gap-12 py-2 pointer-events-auto">
            
            {/* CORNER 1: TOP-LEFT (15+ Shipped Systems with Count-Up) */}
            <motion.div
              style={{
                opacity: topLeftOpacity,
                x: topLeftX,
                y: topLeftY
              }}
              className="space-y-2 flex flex-col items-end text-right"
            >
              <div className="text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold tracking-tight leading-none select-none bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <AnimatedCounter value={15} suffix="+" duration={1.2} trigger={isCounting} />
              </div>
              <div className="text-[10px] xl:text-[11px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-600 max-w-[190px] leading-relaxed">
                SUCCESSFULLY SHIPPED A TOTAL OF 15+ PRODUCTION SYSTEMS
              </div>
            </motion.div>

            {/* CORNER 2: BOTTOM-LEFT (100% Quality & Fluidity with Count-Up) */}
            <motion.div
              style={{
                opacity: bottomLeftOpacity,
                x: bottomLeftX,
                y: bottomLeftY
              }}
              className="space-y-2 flex flex-col items-end text-right"
            >
              <div className="text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold tracking-tight leading-none select-none bg-gradient-to-r from-cyber-sky to-primary bg-clip-text text-transparent">
                <AnimatedCounter value={100} suffix="%" duration={1.5} trigger={isCounting} />
              </div>
              <div className="text-[10px] xl:text-[11px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-600 max-w-[190px] leading-relaxed">
                PRODUCTION TYPE-SAFETY &amp; ZERO RUNTIME COMPROMISES
              </div>
            </motion.div>

          </div>

          {/* CENTER HERO CARD: Perfectly proportioned with comfortable internal padding (Zero Text Clipping) */}
          <motion.div
            style={{
              scale: cardScale,
            }}
            className="relative w-[420px] xl:w-[450px] h-[490px] xl:h-[510px] shrink-0 flex flex-col justify-between overflow-hidden rounded-[26px] z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Layer 1: Website Container Styling (Visible initially at start on website background) */}
            <div className="absolute inset-0 bg-[#090C16]/90 [.light_&]:bg-white/95 border border-white/10 [.light_&]:border-slate-300/70 backdrop-blur-2xl rounded-[inherit]" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Layer 2: Deep Black Card Overlay (Fades in when animation begins) */}
            <motion.div
              style={{ opacity: cardBlackOpacity }}
              className="absolute inset-0 bg-[#030408] border border-white/[0.12] rounded-[inherit] shadow-[0_30px_100px_rgba(0,0,0,0.95)] pointer-events-none"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-accent/[0.02]" />
            </motion.div>

            {/* TOP / HEADER AREA */}
            <div className="relative z-10 w-full p-6 sm:p-7 xl:p-8 space-y-3 text-left">
              {/* Kicker badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#00F5D4]" />
                <span className="text-[10px] xl:text-[11px] font-display font-semibold uppercase tracking-[0.22em] text-primary">
                  • • • IMPACT &amp; ENGINEERING METRICS
                </span>
              </div>

              {/* Large Editorial Headline */}
              <div className="space-y-1 pt-0.5">
                <div className="text-2xl sm:text-3xl xl:text-[35px] font-display font-semibold tracking-tight text-white leading-tight">
                  Engineering that
                </div>
                <div className="text-2xl sm:text-3xl xl:text-[35px] font-display font-semibold tracking-tight text-gradient leading-tight">
                  drives real impact.
                </div>
              </div>
            </div>

            {/* MIDDLE: Initial teaser at start -> Breathing room when animation begins */}
            <div className="relative z-10 px-6 sm:p-7 xl:p-8 my-auto">
              <motion.p
                style={{ opacity: initialTeaserOpacity }}
                className="text-xs sm:text-[13px] text-slate-300 font-display leading-relaxed border-l-2 border-primary/50 pl-3 max-w-[320px]"
              >
                Disciplined engineering principles, full-stack cloud architectures, and seamless 60fps interactive execution.
              </motion.p>
            </div>

            {/* BOTTOM / SIGNATURE & EDITORIAL STATEMENT (Clean, safe padding: Zero Text Cutoff) */}
            <motion.div
              style={{
                opacity: bottomContentOpacity,
                y: bottomContentY,
              }}
              className="relative z-10 p-6 sm:p-7 xl:p-8 pt-0 pb-6 flex items-end justify-between gap-4"
            >
              {/* Handwritten signature in SVG */}
              <div className="shrink-0 space-y-1">
                <svg
                  className="w-28 xl:w-32 h-8 text-primary/90"
                  viewBox="0 0 170 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 36C14 20 22 8 30 12C36 16 32 36 26 40C22 42 18 32 24 20C30 8 38 14 44 24C50 34 56 38 62 30C68 22 74 10 80 16C86 22 88 34 94 36C100 36 106 28 112 24C118 20 124 22 130 28C134 32 140 38 146 34C152 30 158 18 164 22"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-primary/80">
                  Malith Raja
                </div>
              </div>

              {/* Statement description with comfortable line-clamp protection */}
              <p className="text-[11px] xl:text-[12px] text-slate-300 font-display leading-relaxed max-w-[195px] text-right border-r-2 border-primary/50 pr-2.5">
                Every project is approached with disciplined engineering, clean execution, and a strong focus on usability.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Top-Right (11 Yrs) and Bottom-Right (Innovior) converged near each other */}
          <div className="w-[260px] xl:w-[290px] shrink-0 flex flex-col justify-center gap-10 xl:gap-12 py-2 pointer-events-auto">
            
            {/* CORNER 3: TOP-RIGHT (11 Yrs Alma Mater with Count-Up) */}
            <motion.div
              style={{
                opacity: topRightOpacity,
                x: topRightX,
                y: topRightY
              }}
              className="space-y-2 flex flex-col items-start text-left"
            >
              <div className="text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold tracking-tight leading-none select-none bg-gradient-to-r from-secondary via-cyber-sky to-primary bg-clip-text text-transparent">
                <AnimatedCounter value={11} suffix=" Yrs" duration={1.1} trigger={isCounting} />
              </div>
              <div className="text-[10px] xl:text-[11px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-600 max-w-[190px] leading-relaxed">
                ALMA MATER FOUNDATION DHARMARAJA COLLEGE KANDY
              </div>
            </motion.div>

            {/* CORNER 4: BOTTOM-RIGHT (Innovior Role) */}
            <motion.div
              style={{
                opacity: bottomRightOpacity,
                x: bottomRightX,
                y: bottomRightY
              }}
              className="space-y-2 flex flex-col items-start text-left"
            >
              <div className="text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold tracking-tight leading-none select-none text-white hover:text-gradient transition-all">
                Innovior
              </div>
              <div className="text-[10px] xl:text-[11px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-600 max-w-[190px] leading-relaxed">
                FULL STACK DEVELOPER INTERN &amp; ENTERPRISE SYSTEMS
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Mobile & Tablet Responsive Layout (< lg screens) */}
      <div className="lg:hidden py-24 px-5 sm:px-8 relative z-10 space-y-12 max-w-2xl mx-auto">
        {/* Mobile Header Card */}
        <div className="relative w-full rounded-3xl p-8 sm:p-10 bg-[#090C16]/95 border border-white/10 shadow-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-display font-semibold uppercase tracking-[0.22em] text-primary">
              • • • IMPACT &amp; ENGINEERING METRICS
            </span>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-white leading-tight">
              Engineering that
            </div>
            <div className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-gradient leading-tight">
              drives real impact.
            </div>
          </div>

          <p className="text-sm text-slate-300 font-display leading-relaxed border-l-2 border-primary/60 pl-3">
            Every project is approached with disciplined engineering, clean execution, and a strong focus on usability.
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/[0.08]">
            <div className="text-xs font-display font-semibold text-primary">Malith Raja</div>
            <span className="text-[10px] font-mono text-slate-400">Full Stack Engineer</span>
          </div>
        </div>

        {/* Mobile Typographic Stats with Count-Up */}
        <div className="grid grid-cols-2 gap-8 pt-4">
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <AnimatedCounter value={15} suffix="+" duration={1.2} trigger={true} />
            </div>
            <div className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 leading-relaxed">
              SHIPPED FULL-STACK SYSTEMS
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-cyber-sky to-primary bg-clip-text text-transparent">
              <AnimatedCounter value={100} suffix="%" duration={1.5} trigger={true} />
            </div>
            <div className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 leading-relaxed">
              TYPE-SAFE 60FPS FLUIDITY
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-display font-bold bg-gradient-to-r from-secondary via-cyber-sky to-primary bg-clip-text text-transparent">
              <AnimatedCounter value={11} suffix=" Yrs" duration={1.1} trigger={true} />
            </div>
            <div className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 leading-relaxed">
              ACADEMIC FOUNDATION
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-display font-bold text-white">
              Innovior
            </div>
            <div className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 leading-relaxed">
              FULL STACK DEVELOPER INTERN
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MetricsSection