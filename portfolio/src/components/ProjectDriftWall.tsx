import React from 'react'
import { motion } from 'framer-motion'
import { Layers, ArrowRight, Sparkles } from 'lucide-react'
import DriftWall, { DriftWallItem } from './DriftWall'

const driftProjectItems: DriftWallItem[] = [
  { image: '/images/impactecho-app.png', title: 'ImpactEcho — Cause Network Platform', href: '#projects' },
  { image: '/images/soundwave-ui.jpg', title: 'SoundWave — Music Streaming Ecosystem', href: '#projects' },
  { image: '/images/agrosmart-ui.jpg', title: 'AgroSmart 2.0 — 3D IoT Farm System', href: '#projects' },
  { image: '/images/drivelanka-ui.jpg', title: 'DriveLanka — Smart Fleet Management', href: '#projects' },
  { image: '/images/impactecho-preview.png', title: 'ImpactEcho — 24h Stories & Reels', href: '#projects' },
  { image: '/images/mockup-phone.jpg', title: 'ImpactEcho — Mobile Experience', href: '#projects' },
  { image: '/images/mockup-laptop.jpg', title: 'Innovior — Enterprise Cloud Platform', href: '#projects' },
  { image: '/images/mockup-mobile.jpg', title: 'Studio Interactive — UI/UX Design System', href: '#projects' },
  { image: '/images/portfolio-ui.jpg', title: 'Next.js 15 & React 19 Architecture', href: '#projects' },
  { image: '/images/impactecho-app.png', title: 'ImpactEcho — Verified Volunteering Engine', href: '#projects' }
]

const ProjectDriftWall: React.FC = () => {
  return (
    <section id="drift-showcase" className="relative w-full py-20 overflow-hidden bg-transparent">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-10 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Section Kicker Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/35 shadow-[0_0_20px_rgba(197,168,128,0.2)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4] animate-pulse" />
            <span className="text-[#E7CEAB] font-display font-semibold text-xs tracking-[0.25em] uppercase">
              3D Interactive Spatial Drift
            </span>
            <Sparkles size={12} className="text-[#C5A880]" />
          </div>

          {/* Section Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-white leading-tight">
            Featured <span className="text-gradient">Projects &amp; Architectures</span>
          </h2>

          <p className="mt-3 text-slate-300/90 text-sm sm:text-base max-w-2xl font-display leading-relaxed">
            A dynamic, perspective-tilted spatial wall displaying real-world web applications, IoT telemetries, and design systems. Hover any tile to lift and illuminate; click to explore in depth.
          </p>
        </motion.div>
      </div>

      {/* 3D DriftWall Interactive Canvas (Edge-to-Edge Full Screen Width) */}
      <div className="relative w-full h-[640px] sm:h-[700px] lg:h-[760px] overflow-hidden">
        {/* Top & Bottom Ambient Edge Fade */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-ink via-ink/75 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-ink via-ink/75 to-transparent z-10 pointer-events-none" />

        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent blur-[130px] rounded-full pointer-events-none z-0" />

        {/* React Bits DriftWall Component */}
        <DriftWall
          items={driftProjectItems}
          columns={8}
          tileWidth={230}
          tileHeight={148}
          gap={18}
          radius={16}
          tilt={10}
          turn={-6}
          roll={0}
          perspective={1400}
          depth={80}
          speed={36}
          direction="up"
          variance={0.4}
          parallax={0.5}
          lift={68}
          fade={0.15}
          dim={0.65}
          overlayColor="#070914"
        />
      </div>

      {/* Action Footer Button to full projects */}
      <div className="mt-8 flex justify-center relative z-20">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary/60 px-6 py-3 text-xs sm:text-sm font-display font-semibold uppercase tracking-[0.16em] text-white transition-all backdrop-blur-md shadow-xl"
        >
          <Layers size={16} className="text-[#00F5D4]" />
          <span>View Detailed Case Studies &amp; Code</span>
          <ArrowRight size={15} />
        </motion.a>
      </div>
    </section>
  )
}

export default ProjectDriftWall
