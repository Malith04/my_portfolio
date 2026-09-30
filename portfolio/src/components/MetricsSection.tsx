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
        
        {/* Pure Solid Black Background Canvas (Grid squares completely removed - 100% clean solid black) */}
        <motion.div
          style={{ opacity: canvasOpacity }}
          className="absolute inset-0 bg-black [.light_&]:bg-[#F6F4EE] transition-colors pointer-events-none"
        />

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

          {/* CENTER HERO CARD: Compact, refined proportions with words centered in container */}
          <motion.div
            style={{
              scale: cardScale,
            }}
            className="relative w-[350px] xl:w-[380px] h-[380px] xl:h-[400px] shrink-0 flex flex-col items-center justify-between p-6 sm:p-7 overflow-hidden rounded-[24px] z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Layer 1: Website Container Styling (Visible initially at start on website background) */}
            <div className="absolute inset-0 bg-[#090C16]/90 [.light_&]:bg-white/95 border border-white/10 [.light_&]:border-slate-300/70 backdrop-blur-2xl rounded-[inherit]" />
            <div className="absolute top-0 right-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            {/* Layer 2: Deep Black Card Overlay (Fades in when animation begins) */}
            <motion.div
              style={{ opacity: cardBlackOpacity }}
              className="absolute inset-0 bg-[#030408] [.light_&]:bg-white border border-white/[0.12] [.light_&]:border-slate-300/80 rounded-[inherit] shadow-[0_30px_100px_rgba(0,0,0,0.95)] [.light_&]:shadow-[0_20px_50px_rgba(0,0,0,0.08)] pointer-events-none"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-accent/[0.02]" />
            </motion.div>

            {/* CENTERED HEADLINE & KICKER BLOCK: Positioned in the center of the container */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center space-y-3.5 my-auto">
              {/* Kicker badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 [.light_&]:bg-teal-50 border border-white/10 [.light_&]:border-teal-200 backdrop-blur-md mx-auto">
                <span className="w-2 h-2 rounded-full bg-primary [.light_&]:bg-teal-500 animate-pulse shadow-[0_0_8px_#00F5D4]" />
                <span className="text-[10px] xl:text-[11px] font-display font-semibold uppercase tracking-[0.22em] text-primary [.light_&]:text-teal-700">
                  • • • IMPACT &amp; ENGINEERING METRICS
                </span>
              </div>

              {/* Editorial Headline: Exact Center, Zero Descender Clipping */}
              <div className="space-y-0.5 flex flex-col items-center text-center w-full">
                <div className="text-2xl sm:text-[28px] xl:text-[32px] font-display font-semibold tracking-tight text-white [.light_&]:text-slate-900 leading-snug">
                  Engineering that
                </div>
                <div className="text-2xl sm:text-[28px] xl:text-[32px] font-display font-semibold tracking-tight text-gradient leading-[1.32] pb-2 px-1 overflow-visible">
                  drives real impact.
                </div>
              </div>
            </div>

            {/* BOTTOM / EDITORIAL STATEMENT */}
            <motion.div
              style={{
                opacity: bottomContentOpacity,
                y: bottomContentY,
              }}
              className="relative z-10 w-full pt-2 pb-1 flex justify-center text-center"
            >
              <p className="text-[11px] xl:text-[12px] text-slate-300 [.light_&]:text-slate-600 font-display leading-relaxed max-w-[270px] text-center">
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
              <div className="text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold tracking-tight leading-none select-none text-white [.light_&]:text-slate-900 hover:text-gradient transition-all">
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
      <div className="lg:hidden py-16 px-4 sm:px-8 relative z-10 space-y-10 max-w-2xl mx-auto">
        {/* Mobile Header Card */}
        <div className="relative w-full rounded-3xl p-6 sm:p-10 bg-[#090C16]/95 [.light_&]:bg-white/95 border border-white/10 [.light_&]:border-slate-300/80 shadow-2xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 [.light_&]:bg-teal-50 border border-white/10 [.light_&]:border-teal-200">
            <span className="w-2 h-2 rounded-full bg-primary [.light_&]:bg-teal-500 animate-pulse" />
            <span className="text-[10px] font-display font-semibold uppercase tracking-[0.22em] text-primary [.light_&]:text-teal-700">
              • • • IMPACT &amp; ENGINEERING METRICS
            </span>
          </div>

          <div className="space-y-1 text-center flex flex-col items-center">
            <div className="text-2xl sm:text-4xl font-display font-semibold tracking-tight text-white [.light_&]:text-slate-900 leading-snug">
              Engineering that
            </div>
            <div className="text-2xl sm:text-4xl font-display font-semibold tracking-tight text-gradient leading-[1.32] pb-1 px-1">
              drives real impact.
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 [.light_&]:text-slate-600 font-display leading-relaxed text-center max-w-lg mx-auto">
            Every project is approached with disciplined engineering, clean execution, and a strong focus on usability.
          </p>
        </div>

        {/* Mobile Typographic Stats with Count-Up */}
        <div className="grid grid-cols-2 gap-5 sm:gap-8 pt-2">
          <div className="space-y-1.5">
            <div className="text-3xl sm:text-5xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <AnimatedCounter value={15} suffix="+" duration={1.2} trigger={true} />
            </div>
            <div className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-600 leading-relaxed">
              SHIPPED FULL-STACK SYSTEMS
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="text-3xl sm:text-5xl font-display font-bold bg-gradient-to-r from-cyber-sky to-primary bg-clip-text text-transparent">
              <AnimatedCounter value={100} suffix="%" duration={1.5} trigger={true} />
            </div>
            <div className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-600 leading-relaxed">
              TYPE-SAFE 60FPS FLUIDITY
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="text-3xl sm:text-5xl font-display font-bold bg-gradient-to-r from-secondary via-cyber-sky to-primary bg-clip-text text-transparent">
              <AnimatedCounter value={11} suffix=" Yrs" duration={1.1} trigger={true} />
            </div>
            <div className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-600 leading-relaxed">
              ACADEMIC FOUNDATION
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="text-3xl sm:text-5xl font-display font-bold text-white [.light_&]:text-slate-900">
              Innovior
            </div>
            <div className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 [.light_&]:text-slate-600 leading-relaxed">
              FULL STACK DEVELOPER INTERN
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MetricsSection