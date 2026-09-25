import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, FolderGit2, GraduationCap, Zap } from 'lucide-react'

interface MetricCardProps {
  kicker: string
  stat: string
  label: string
  description: string
  icon: React.ReactNode
  image?: string
  accentColor: string
}

const metrics: MetricCardProps[] = [
  {
    kicker: 'CURRENT ROLE',
    stat: 'Innovior',
    label: 'Full Stack Developer Intern',
    description: 'Engineering full-stack web applications with Next.js, Nest.JS, MongoDB database solutions, and AWS S3 cloud storage.',
    icon: <Briefcase size={22} />,
    accentColor: '#00F5D4' // Cyan
  },
  {
    kicker: 'PORTFOLIO VOLUME',
    stat: '15+',
    label: 'Shipped Projects & Systems',
    description: 'From enterprise platforms and IoT telemetry to full-stack music streaming PWAs and social ecosystems.',
    icon: <FolderGit2 size={22} />,
    accentColor: '#00FF87' // Neon Green
  },
  {
    kicker: 'ALMA MATER FOUNDATION',
    stat: '11 Yrs',
    label: 'Dharmaraja College Kandy',
    description: '11-year foundation (2013–2024), G.C.E. A/L Physical Science, U15 Cricket & U19 Baseball teams.',
    icon: <GraduationCap size={22} />,
    image: '/images/dharmaraja-badge.jpg',
    accentColor: '#7928CA' // Violet
  },
  {
    kicker: 'CODE QUALITY & SPEED',
    stat: '100%',
    label: 'Type-Safe & 60fps Fluidity',
    description: 'Zero runtime compromises, sub-second TTFB, sub-100ms response targets, and 95+ Lighthouse metrics.',
    icon: <Zap size={22} />,
    accentColor: '#38BDF8' // Sky
  }
]

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Subtle backdrop grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Editorial Section Header - Lesmana Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <p className="text-xs font-display font-semibold uppercase tracking-[0.22em] text-primary">
                • IMPACT &amp; ENGINEERING METRICS
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white leading-[1.1]">
              Engineering that drives <span className="text-gradient">real impact</span>.
            </h2>
          </div>

          <p className="text-slate-300 font-display text-sm md:text-base max-w-md leading-relaxed">
            Every product is architected with disciplined engineering principles, clean type safety, and seamless interactive execution.
          </p>
        </div>

        {/* 4-Card Luxury Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative p-7 rounded-3xl bg-[#090C16]/90 border border-white/10 hover:border-primary/50 backdrop-blur-2xl transition-all shadow-[0_12px_36px_rgba(0,0,0,0.4)] flex flex-col justify-between"
            >
              {/* Top Accent Icon & Kicker */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors">
                  {m.kicker}
                </span>
                {m.image ? (
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center border border-white/20 bg-white/10 p-1 transition-all overflow-hidden group-hover:scale-105">
                    <img src={m.image} alt={m.label} className="w-full h-full object-contain rounded-xl" />
                  </div>
                ) : (
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary/40 bg-white/5 transition-all"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MetricsSection
