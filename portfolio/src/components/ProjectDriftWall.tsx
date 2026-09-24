import React from 'react'
import { motion } from 'framer-motion'
import { Layers, ArrowRight, Sparkles } from 'lucide-react'
import DriftWall, { DriftWallItem } from './DriftWall'

const driftProjectItems: DriftWallItem[] = [
  { image: '/images/mockup-phone.jpg', title: 'ImpactEcho Cause Network', href: '#projects' },
  { image: '/images/mockup-laptop.jpg', title: 'Digital Platform Architecture', href: '#projects' },
  { image: '/images/soundwave-app.avif', title: 'SoundWave Music Ecosystem', href: '#projects' },
  { image: '/images/mockup-mobile.jpg', title: 'Studio Interactive System', href: '#projects' },
  { image: '/images/car-rental-service.jpg', title: 'DriveLanka Smart Fleet', href: '#projects' },
  { image: '/images/agrosmart-system.webp', title: 'AgroSmart IoT Telemetry', href: '#projects' },
  { image: '/images/impactecho-app.png', title: 'ImpactEcho Web Platform', href: '#projects' },
  { image: '/images/supermarket-system.png', title: 'Supermarket POS System', href: '#projects' },
  { image: '/images/impactecho-preview.png', title: 'ImpactEcho Stories Feature', href: '#projects' },
  { image: '/images/portfolio.jpg', title: 'Design System & UI/UX', href: '#projects' },
  { image: '/images/about-profile.jpg', title: 'Full-Stack Engineering', href: '#projects' },
  { image: '/images/hero-profile.jpg', title: 'Next.js 15 & React 19 Architecture', href: '#projects' }
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

      {/* 3D DriftWall Interactive Canvas */}
      <div className="relative w-full h-[620px] sm:h-[680px] lg:h-[720px] overflow-hidden">
        {/* Top & Bottom Ambient Edge Fade */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-ink via-ink/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-ink via-ink/80 to-transparent z-10 pointer-events-none" />

        {/* Ambient Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-primary/10 via-secondary/10 to-transparent blur-[120px] rounded-full pointer-events-none z-0" />

        {/* React Bits DriftWall Component */}
        <DriftWall
          items={driftProjectItems}
          columns={5}
          tileWidth={230}
          tileHeight={150}
          gap={20}
          radius={16}
          tilt={14}
          turn={-12}
          roll={0}
          perspective={1200}
          depth={120}
          speed={42}
          direction="up"
          variance={0.45}
          parallax={0.65}
          lift={68}
          fade={0.65}
          dim={0.6}
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
