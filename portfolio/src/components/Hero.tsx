import { useState, useEffect, useRef, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import ResumeDownload from './ResumeDownload'

const titles = [
  'Software Engineer Intern @ Innovior',
  'Frontend Engineer & UI/UX Specialist',
  'Next.js 15 & React 19 Architect',
  'Dharmaraja College Kandy Alumnus',
  'Full-Stack Problem Solver'
]

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const heroRef = useRef<HTMLDivElement | null>(null)

  // Motion values for smooth 3D interactive cursor parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 140, damping: 24 })
  const springY = useSpring(mouseY, { stiffness: 140, damping: 24 })

  const portraitTiltX = useTransform(springY, [-0.5, 0.5], [3, -3])
  const portraitTiltY = useTransform(springX, [-0.5, 0.5], [-5, 5])
  const portraitShiftX = useTransform(springX, [-0.5, 0.5], [-6, 6])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  useEffect(() => {
    const currentTitle = titles[index % titles.length]
    if (text.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText(currentTitle.slice(0, text.length + 1))
      }, 70)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setText('')
      setIndex(index + 1)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [text, index])

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen min-h-[700px] max-h-[1080px] flex flex-col justify-end overflow-hidden bg-transparent select-none px-6 sm:px-10 lg:px-16 pt-24 pb-8 sm:pb-12"
    >
      {/* Subtle warm ambient lighting glow over center */}
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-[#C5A880]/15 via-primary/10 to-transparent blur-[150px] rounded-full pointer-events-none z-10" />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[400px] bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />

      {/* ============================================================ */}
      {/* 2. MALITH STUDIO CUTOUT PORTRAIT (Anchored at bottom-0)       */}
      {/*    High Visibility with Studio Rim Glow & Depth Separation  */}
      {/* ============================================================ */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          rotateX: portraitTiltX,
          rotateY: portraitTiltY,
          x: portraitShiftX,
          transformStyle: 'preserve-3d'
        }}
        className="absolute bottom-0 right-0 sm:right-[2%] lg:right-[4%] xl:right-[7%] z-20 flex flex-col items-center justify-end pointer-events-none w-auto"
      >
        <div className="relative w-[300px] sm:w-[380px] md:w-[440px] lg:w-[31rem] xl:w-[37rem] h-[54vh] sm:h-[64vh] md:h-[72vh] lg:h-[80vh] xl:h-[86vh] max-h-[900px] min-h-[460px]">
          {/* Studio Backlight Rim Glow - Luminous aura separating curly hair & silhouette */}
          <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[90%] h-[78%] bg-gradient-to-t from-primary/35 via-[#C5A880]/40 to-secondary/35 blur-[85px] rounded-full pointer-events-none -z-10" />
          <div className="absolute top-[22%] left-[54%] -translate-x-1/2 w-[70%] h-[60%] bg-[#00F5D4]/30 blur-[95px] rounded-full pointer-events-none -z-10" />

          {/* Studio Portrait Cutout - Prominently illuminated with high contrast & multi-layer rim glow */}
          <img
            src="/images/malith-cutout.png?v=6"
            alt="Malith Rajamanthri - Professional Portrait"
            className="w-full h-full object-contain object-bottom select-none brightness-110 contrast-108 saturate-105"
            style={{
              filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.98)) drop-shadow(0 0 35px rgba(0,245,212,0.35)) drop-shadow(0 0 70px rgba(197,168,128,0.25))',
              maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
            }}
          />

          {/* Under-portrait ground shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-black/90 blur-2xl rounded-full pointer-events-none" />
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 3. EDITORIAL TYPOGRAPHY & BUTTONS (Highlighted Glass Card)    */}
      {/* ============================================================ */}
      <div className="max-w-7xl w-full mx-auto relative z-30 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl lg:max-w-2xl relative p-5 sm:p-7 md:p-8 rounded-3xl backdrop-blur-xl border border-white/12 pointer-events-auto space-y-2.5 sm:space-y-3"
          style={{
            background: 'linear-gradient(135deg, rgba(8, 10, 18, 0.88) 0%, rgba(14, 17, 28, 0.78) 100%)',
            boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.95), 0 0 40px rgba(0, 245, 212, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
          }}
        >
          {/* Signature Golden Illuminated Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 shadow-[0_0_20px_rgba(197,168,128,0.25)]">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_10px_#00F5D4] animate-pulse" />
            <span className="text-[#F3E5D0] font-display font-semibold text-[11px] sm:text-xs tracking-[0.25em] uppercase">
              HI, I'M MALITH
            </span>
            <Sparkles size={11} className="text-[#C5A880]" />
          </div>

          {/* Large Editorial Headline with Maximum Pop */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.02] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            Product &amp; <br />
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
              Software Engineer.
            </span>
          </h1>

          {/* Dynamic Typewriter Subtitle */}
          <div className="text-sm sm:text-base md:text-lg text-[#00F5D4] h-7 font-display font-semibold flex items-center drop-shadow-[0_2px_12px_rgba(0,245,212,0.3)]">
            <span>{text}</span>
            <span className="text-[#C5A880] animate-pulse ml-0.5">_</span>
          </div>

          {/* High-Contrast Story Narrative with Highlighted Credentials */}
          <p className="text-slate-100/95 text-xs sm:text-sm md:text-[15px] leading-relaxed font-display max-w-lg pt-0.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Software Engineer Intern at <strong className="text-white font-semibold underline decoration-primary/50 underline-offset-2">Innovior</strong> &amp; <strong className="text-white font-semibold underline decoration-primary/50 underline-offset-2">NIBM</strong> undergraduate, grounded in an 11-year foundation at <strong className="text-[#E7CEAB] font-semibold">Dharmaraja College, Kandy (2013–2024)</strong>. Architecting high-velocity digital experiences with Next.js 15, React 19, and interactive design systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-display font-semibold uppercase tracking-[0.16em] text-black transition-all hover:bg-[#C5A880] hover:text-black hover:scale-105 shadow-[0_10px_30px_rgba(255,255,255,0.25)]"
            >
              Explore Featured Works
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={15} />
            </a>

            <ResumeDownload variant="compact" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
