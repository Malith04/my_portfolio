import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Briefcase, FolderGit2, Zap } from 'lucide-react'

interface MetricCardProps {
  kicker: string
  stat: string
  label: string
  description: string
  icon?: React.ReactNode
  image?: string
  accentColor: string
}

const metrics: MetricCardProps[] = [
  {
    kicker: 'CURRENT ROLE',
    stat: 'Innovior',
    label: 'Full Stack Developer Intern',
    description:
      'Engineering full-stack web applications with Next.js, Nest.JS, MongoDB database solutions, and AWS S3 cloud storage.',
    icon: <Briefcase size={22} />,
    accentColor: '#00F5D4' // Cyan
  },
  {
    kicker: 'PORTFOLIO VOLUME',
    stat: '15+',
    label: 'Shipped Projects & Systems',
    description:
      'From enterprise platforms and IoT telemetry to full-stack music streaming PWAs and social ecosystems.',
    icon: <FolderGit2 size={22} />,
    accentColor: '#00FF87' // Neon Green
  },
  {
    kicker: 'ALMA MATER FOUNDATION',
    stat: '11 Yrs',
    label: 'Dharmaraja College Kandy',
    description:
      '11-year foundation (2013–2024), G.C.E. A/L Physical Science, U15 Cricket & U19 Baseball teams.',
    image: '/images/dharmaraja-badge.jpg',
    accentColor: '#7928CA' // Violet
  },
  {
    kicker: 'CODE QUALITY & SPEED',
    stat: '100%',
    label: 'Type-Safe & 60fps Fluidity',
    description:
      'Zero runtime compromises, sub-second TTFB, sub-100ms response targets, and 95+ Lighthouse metrics.',
    icon: <Zap size={22} />,
    accentColor: '#38BDF8' // Sky
  }
]

export const MetricsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  // Scroll-linked animation tracking as section scrolls into viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'center 45%']
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001
  })

  // Header entrance
  const headerY = useTransform(smoothProgress, [0, 1], [35, 0])
  const headerOpacity = useTransform(smoothProgress, [0, 0.75], [0, 1])

  // Card 0: Innovior - Glides in from left
  const card0X = useTransform(smoothProgress, [0.05, 0.95], [-45, 0])
  const card0Opacity = useTransform(smoothProgress, [0.05, 0.75], [0, 1])
  const card0Scale = useTransform(smoothProgress, [0.05, 0.95], [0.93, 1])

  // Card 1: 15+ Shipped Projects - Glides up
  const card1Y = useTransform(smoothProgress, [0.15, 1], [40, 0])
  const card1Opacity = useTransform(smoothProgress, [0.15, 0.85], [0, 1])
  const card1Scale = useTransform(smoothProgress, [0.15, 1], [0.93, 1])

  // Card 2: 11 Yrs Dharmaraja - Glides up
  const card2Y = useTransform(smoothProgress, [0.2, 1], [40, 0])
  const card2Opacity = useTransform(smoothProgress, [0.2, 0.9], [0, 1])
  const card2Scale = useTransform(smoothProgress, [0.2, 1], [0.93, 1])

  // Card 3: 100% Quality - Glides in from right
  const card3X = useTransform(smoothProgress, [0.1, 0.95], [45, 0])
  const card3Opacity = useTransform(smoothProgress, [0.1, 0.8], [0, 1])
  const card3Scale = useTransform(smoothProgress, [0.1, 0.95], [0.93, 1])

  const cardStyles = [
    { x: card0X, opacity: card0Opacity, scale: card0Scale },
    { y: card1Y, opacity: card1Opacity, scale: card1Scale },
    { y: card2Y, opacity: card2Opacity, scale: card2Scale },
    { x: card3X, opacity: card3Opacity, scale: card3Scale }
  ]

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle backdrop grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Editorial Section Header */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10"
        >
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-xs font-display font-semibold uppercase tracking-[0.22em] text-primary">
                • • IMPACT &amp; ENGINEERING METRICS
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white leading-[1.1]">
              Engineering that drives <span className="text-gradient">real impact</span>.
            </h2>
          </div>

          <p className="text-slate-300 font-display text-sm md:text-base max-w-md leading-relaxed">
            Every product is architected with disciplined engineering principles, clean type safety, and seamless interactive execution.
          </p>
        </motion.div>

        {/* 4-Card Luxury Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              style={cardStyles[idx]}
              className="h-full flex"
            >
              <div className="group relative w-full p-7 rounded-3xl bg-[#090C16]/90 border border-white/10 hover:border-primary/50 backdrop-blur-2xl transition-all duration-300 ease-out hover:-translate-y-2.5 hover:shadow-[0_20px_45px_rgba(0,245,212,0.12)] flex flex-col justify-between">
                {/* Top Accent Icon & Kicker */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors">
                    {m.kicker}
                  </span>
                  {m.image ? (
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center border border-white/20 bg-white/10 p-1 transition-all overflow-hidden group-hover:scale-110">
                      <img src={m.image} alt={m.label} className="w-full h-full object-contain rounded-xl" />
                    </div>
                  ) : (
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/40 bg-white/5 transition-all group-hover:scale-110"
                      style={{ color: m.accentColor }}
                    >
                      {m.icon}
                    </div>
                  )}
                </div>

                {/* Big Display Stat */}
                <div className="space-y-1 mb-6">
                  <div className="text-4xl sm:text-5xl font-display font-semibold text-white tracking-tight group-hover:text-gradient transition-all">
                    {m.stat}
                  </div>
                  <h3 className="text-base font-display font-semibold text-slate-200">
                    {m.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 font-display leading-relaxed">
                  {m.description}
                </p>

                {/* Subtle hover corner glow */}
                <div
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ backgroundColor: m.accentColor }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MetricsSection
