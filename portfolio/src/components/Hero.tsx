import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ResumeDownload from './ResumeDownload'
import ProfileCard from './ProfileCard'

const titles = [
  'Full Stack Developer Intern @ Innovior',
  'Software Engineering @ NIBM (Reading)',
  'Dharmaraja College Kandy Alumnus (11 Yrs)',
  'Next.js 15, React 19 & Nest.JS Architect',
  'SoundWave & AgroSmart System Creator'
]

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)

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
      className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-transparent select-none px-6 sm:px-10 lg:px-16 pt-28 pb-12 sm:pb-16"
    >
      {/* Subtle warm ambient lighting glow over center */}
      <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-tr from-[#C5A880]/15 via-primary/10 to-transparent blur-[150px] rounded-full pointer-events-none z-10" />
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[400px] bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />

      {/* ============================================================ */}
      {/* HERO 2-COLUMN DISPLAY (EDITORIAL TYPOGRAPHY + PROFILE CARD)  */}
      {/* ============================================================ */}
      <div className="max-w-7xl w-full mx-auto relative z-30 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12 pointer-events-none">
        {/* Left Column: Typography & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl lg:max-w-2xl relative pointer-events-auto space-y-3 sm:space-y-4"
        >
          {/* Signature Golden Illuminated Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/40 shadow-[0_0_20px_rgba(197,168,128,0.25)]">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_10px_#00F5D4] animate-pulse" />
            <span className="text-[#F3E5D0] font-display font-semibold text-[11px] sm:text-xs tracking-[0.25em] uppercase">
              HI, I'M MALITH
            </span>
          </div>

          {/* Large Editorial Headline with Maximum Pop */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.02] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            Full Stack <br />
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
            Full Stack Developer Intern at <strong className="text-white font-semibold underline decoration-primary/50 underline-offset-2">Innovior</strong> &amp; <strong className="text-white font-semibold inline-flex items-center gap-1.5"><img src="/images/nibm-logo.png" alt="NIBM" className="w-4 h-4 object-contain inline bg-white rounded-sm p-0.5" />NIBM</strong> undergraduate, grounded in an 11-year foundation at <strong className="text-[#E7CEAB] font-semibold inline-flex items-center gap-1.5"><img src="/images/dharmaraja-badge.jpg" alt="Dharmaraja" className="w-4 h-4 object-contain inline rounded-sm" />Dharmaraja College, Kandy (2013–2024)</strong>. Engineering Next.js 15, Nest.JS, React 19, and cloud-native full-stack systems.
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

        {/* Right Column: Holographic 3D Interactive ProfileCard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative pointer-events-auto flex items-center justify-center lg:justify-end flex-shrink-0"
        >
          <ProfileCard
            avatarUrl="/images/malith-cutout.png"
            miniAvatarUrl="/images/about-profile.jpg"
            iconUrl="/images/react-pattern.svg?v=3"
            name="Malith Rajamanthri"
            title="Full Stack Software Engineer"
            handle="malith_raja"
            status="Available for Roles"
            contactText="Contact Me"
            onContactClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            enableTilt={true}
            enableMobileTilt={false}
            behindGlowEnabled={true}
            behindGlowColor="rgba(0, 245, 212, 0.22)"
            behindGlowSize="32%"
            innerGradient="linear-gradient(145deg, rgba(0, 245, 212, 0.07) 0%, rgba(121, 40, 202, 0.09) 50%, rgba(197, 168, 128, 0.05) 100%)"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

