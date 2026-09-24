import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface ProjectRingItem {
  id: string
  title: string
  image: string
  link: string
}

const ringProjects: ProjectRingItem[] = [
  {
    id: 'mockup-phone',
    title: 'Mobile App Experience',
    image: '/images/mockup-phone.jpg',
    link: '#projects'
  },
  {
    id: 'impactecho',
    title: 'ImpactEcho Cause Network',
    image: '/images/impactecho-app.png',
    link: '#projects'
  },
  {
    id: 'mockup-laptop',
    title: 'Digital Platform Architecture',
    image: '/images/mockup-laptop.jpg',
    link: '#projects'
  },
  {
    id: 'soundwave',
    title: 'SoundWave Music Ecosystem',
    image: '/images/soundwave-app.avif',
    link: '#projects'
  },
  {
    id: 'mockup-mobile',
    title: 'Interactive Studio System',
    image: '/images/mockup-mobile.jpg',
    link: '#projects'
  },
  {
    id: 'drivelanka',
    title: 'DriveLanka Smart Fleet',
    image: '/images/car-rental-service.jpg',
    link: '#projects'
  },
  {
    id: 'agrosmart',
    title: 'AgroSmart IoT Telemetry',
    image: '/images/agrosmart-system.webp',
    link: '#projects'
  }
]

export const CurvedProjectRing: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false)

  // Repeat for continuous seamless horizontal ribbon
  const displayItems = [...ringProjects, ...ringProjects, ...ringProjects]

  return (
    <div
      className="relative w-full overflow-hidden select-none py-6 pointer-events-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        perspective: 1200,
        WebkitPerspective: 1200,
        maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
      }}
    >
      {/* Edge vignette gradients for seamless depth blend */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      {/* 3D Curved Cylindrical Arch Plane */}
      <div
        className="w-full flex items-center justify-center transition-transform duration-700 ease-out"
        style={{
          transform: 'perspective(1200px) rotateX(6deg) scale(0.97)',
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d'
        }}
      >
        <motion.div
          className="flex gap-5 sm:gap-6 will-change-transform items-center"
          animate={{
            x: isPaused ? undefined : ['0%', '-33.333%']
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 36,
              ease: 'linear'
            }
          }}
          style={{
            width: 'max-content',
            transformStyle: 'preserve-3d'
          }}
        >
          {displayItems.map((project, idx) => {
            return (
              <motion.a
                key={`${project.id}-${idx}`}
                href={project.link}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                  transition: { duration: 0.25 }
                }}
                className="group relative flex-shrink-0 w-56 sm:w-64 md:w-72 h-[300px] sm:h-[340px] md:h-[380px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 hover:border-white/40 bg-[#0E0D0D] shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all cursor-pointer block"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Clean, Full-bleed Device Mockup Screen */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle glass reflection glare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

                  {/* Minimal hover caption at very bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                    <span className="text-xs font-display font-medium text-white tracking-wide">
                      {project.title}
                    </span>
                    <span className="text-[11px] text-primary font-display font-semibold">
                      View &rarr;
                    </span>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default CurvedProjectRing
