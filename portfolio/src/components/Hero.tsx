import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Send } from 'lucide-react'
import ResumeDownload from './ResumeDownload'
import ElectricProfileCard from './ElectricProfileCard'
import ThunderStrike, { ThunderStrikeHandle } from './ThunderStrike'

const titles = [
  'Software Engineer',
  'Full-Stack Developer', 
  'Problem Solver',
  'Cricket Player',
  'Tech Innovator'
]

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const thunderRef = useRef<ThunderStrikeHandle | null>(null)

  const handleCardSwap = (rect: DOMRect) => {
    if (thunderRef.current) {
      const targetX = rect.left + rect.width / 2
      const targetY = rect.top + 15
      thunderRef.current.strike(targetX, targetY)
    }
  }

  useEffect(() => {
    const currentTitle = titles[index % titles.length]
    if (text.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText(currentTitle.slice(0, text.length + 1))
      }, 90)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setText('')
      setIndex(index + 1)
    }, 1800)
    return () => clearTimeout(timeout)
  }, [text, index])

  const stats = [
    { number: 15, label: 'Projects' },
    { number: 5, label: 'Technologies' },
    { number: 2, label: 'Years Learning' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="pill border-accent/40 text-accent">NIBM Undergraduate</span>
              <span className="hud-badge">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping inline-block" />
                SYSTEM://ACTIVE • OPEN TO OPPORTUNITIES
              </span>
            </div>
            <p className="text-primary font-display font-semibold text-sm sm:text-base tracking-[0.16em] uppercase">
              // Frontend Engineer &amp; UI/UX Designer
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight leading-[1.05]">
              <span className="text-gradient">Malith</span>
              <br />
              <span className="text-white">Rajamanthri</span>
            </h1>
            <div className="text-2xl md:text-3xl text-slate-200 h-10 font-display font-medium">
              {text}<span className="text-primary animate-pulse">_</span>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Frontend Engineer &amp; UI/UX Designer crafting high-performance digital ecosystems with Next.js 15, React 19, and cutting-edge animation physics. 
              Bridging visionary design with clean, scalable code.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-all hover:scale-105 glow-primary-hover shadow-lg"
            >
              Explore My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all hover:border-primary hover:text-primary hover:scale-105"
            >
              Let's Connect
              <Send size={18} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((stat, i) => (
              <div key={i} className="surface-card px-5 py-4 text-center border-primary/20 hover:border-primary/50 transition-colors">
                <div className="text-2xl font-display font-semibold text-primary">{stat.number}+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Resume Download Section */}
          <div className="mt-8">
            <ResumeDownload />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          {/* Top-of-Browser Thunder Strike Overlay */}
          <ThunderStrike ref={thunderRef} />

          {/* 3D Tilt Profile Card with Thunder Trigger on Swap */}
          <ElectricProfileCard onSwapTrigger={handleCardSwap} />
        </motion.div>
      </div>
    </section>
  )
}
export default Hero
