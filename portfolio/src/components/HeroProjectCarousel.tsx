import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowUpRight } from 'lucide-react'

interface ProjectCardData {
  id: string
  title: string
  category: string
  badge: string
  image: string
  tag: string
  link: string
}

const marqueeProjects: ProjectCardData[] = [
  {
    id: 'impactecho',
    title: 'ImpactEcho',
    category: 'Full-Stack Cause Network',
    badge: 'FLAGSHIP • INNOVIOR',
    image: '/images/impactecho-app.png',
    tag: 'Next.js 15 • React 19 • TypeScript',
    link: '#projects'
  },
  {
    id: 'soundwave',
    title: 'SoundWave',
    category: 'Real-Time Audio Ecosystem',
    badge: 'SPOTIFY-INSPIRED PWA',
    image: '/images/soundwave-app.avif',
    tag: 'React 18 • Web Audio API • Firebase',
    link: '#projects'
  },
  {
    id: 'drivelanka',
    title: 'DriveLanka',
    category: 'Smart Fleet & Vehicle Booking',
    badge: 'ENTERPRISE SYSTEM',
    image: '/images/car-rental-service.jpg',
    tag: 'Spring Boot • Angular • MySQL',
    link: '#projects'
  },
  {
    id: 'agrosmart',
    title: 'AgroSmart',
    category: 'IoT Precision Agriculture',
    badge: 'IOT & CLOUD TELEMETRY',
    image: '/images/agrosmart-system.webp',
    tag: 'Node.js • Express • MongoDB • IoT',
    link: '#projects'
  },
  {
    id: 'supermarket',
    title: 'Supermarket POS',
    category: 'Enterprise Billing & Analytics',
    badge: 'DESKTOP SYSTEM',
    image: '/images/supermarket-system.png',
    tag: 'JavaFX • MySQL • JasperReports',
    link: '#projects'
  },
  {
    id: 'impactecho-stories',
    title: 'ImpactEcho Stories',
    category: '24H Ephemeral Content',
    badge: 'INNOVIOR INTERN PROJECT',
    image: '/images/impactecho-preview.png',
    tag: 'Canvas API • Dexie.js • Framer Motion',
    link: '#projects'
  }
]

export const HeroProjectCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate for seamless infinite marquee loop
  const displayProjects = [...marqueeProjects, ...marqueeProjects]

  return (
    <div
      className="relative w-full overflow-hidden py-4 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        perspective: '1200px'
      }}
    >
      {/* Subtle vignette gradients on sides */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-ink via-ink/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-ink via-ink/80 to-transparent z-20 pointer-events-none" />

      {/* 3D Perspective Plane */}
      <div
        className="w-full flex items-center transition-transform duration-700 ease-out"
        style={{
          transform: 'rotateX(3deg) rotateY(-4deg) rotateZ(-0.5deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.div
          className="flex gap-5 sm:gap-6 will-change-transform"
          animate={{
            x: isPaused ? undefined : ['0%', '-50%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 36,
              ease: 'linear'
            }
          }}
          style={{ width: 'max-content' }}
        >
          {displayProjects.map((project, idx) => (
            <motion.a
              key={`${project.id}-${idx}`}
              href={project.link}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group relative flex-shrink-0 w-72 sm:w-80 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/60 bg-[#0A0D18]/90 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all cursor-pointer block"
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Card Thumbnail Container */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-black/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Subtle sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] via-black/20 to-transparent" />

                {/* Badge Pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-display font-semibold uppercase tracking-wider text-slate-200 group-hover:text-primary group-hover:border-primary/40 transition-colors">
                    <Sparkles size={10} className="text-primary" />
                    {project.badge}
                  </span>
                </div>

                {/* Arrow Action Icon */}
                <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-black/70 backdrop-blur-md border border-white/15 flex items-center justify-center text-slate-300 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/20 transition-all">
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="p-4 bg-gradient-to-b from-transparent to-[#0A0D18]/95 space-y-1">
                <p className="text-[10px] font-display font-semibold uppercase tracking-[0.16em] text-primary/80">
                  {project.category}
                </p>
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-display font-semibold text-white group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </h4>
                  <span className="text-[11px] text-slate-400 font-display">
                    View &rarr;
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-display truncate">
                  {project.tag}
                </p>
              </div>

              {/* Glowing Bottom Line on Hover */}
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default HeroProjectCarousel
