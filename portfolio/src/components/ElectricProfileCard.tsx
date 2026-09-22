import React, { useState, useRef, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Mail, Phone, MapPin, Award, ExternalLink } from 'lucide-react'

interface ElectricProfileCardProps {
  className?: string
  onSwapTrigger?: (rect: DOMRect) => void
}

const ElectricProfileCard: React.FC<ElectricProfileCardProps> = ({
  className = '',
  onSwapTrigger
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef<HTMLDivElement | null>(null)

  // Motion values for smooth 3D mouse tracking tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for natural inertia and bounce-back
  const springX = useSpring(mouseX, { stiffness: 220, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 220, damping: 20 })

  // Transform mouse coordinates into 3D tilt degrees
  const tiltX = useTransform(springY, [-0.5, 0.5], [12, -12])
  const tiltY = useTransform(springX, [-0.5, 0.5], [-14, 14])

  // Specular holographic glare coordinates (%)
  const glareX = useTransform(springX, [-0.5, 0.5], [10, 90])
  const glareY = useTransform(springY, [-0.5, 0.5], [10, 90])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseEnter = () => {
    setIsFlipped(true)
    if (cardRef.current && onSwapTrigger) {
      const rect = cardRef.current.getBoundingClientRect()
      onSwapTrigger(rect)
    }
  }

  const handleMouseLeave = () => {
    setIsFlipped(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  const handleCardClick = () => {
    const nextState = !isFlipped
    setIsFlipped(nextState)
    if (nextState && cardRef.current && onSwapTrigger) {
      const rect = cardRef.current.getBoundingClientRect()
      onSwapTrigger(rect)
    }
  }

  return (
    <div className={`relative flex justify-center items-center select-none ${className}`}>
      {/* Subtle Ambient Background Atmosphere */}
      <motion.div
        className="absolute -inset-4 rounded-[3rem] bg-gradient-to-b from-primary/20 via-secondary/15 to-transparent blur-3xl pointer-events-none"
        animate={{
          scale: isFlipped ? 1.08 : 1,
          opacity: isFlipped ? 0.75 : 0.4
        }}
        transition={{ duration: 0.6 }}
      />

      {/* 3D Perspective Tilt Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        className="relative w-80 h-[28rem] sm:w-[22rem] sm:h-[30rem] cursor-pointer perspective-1000"
        style={{ perspective: 1200 }}
      >
        {/* 3D Tilt Element */}
        <motion.div
          style={{
            rotateX: tiltX,
            rotateY: tiltY,
            transformStyle: 'preserve-3d'
          }}
          className="relative w-full h-full"
        >
          {/* 180deg Flip Container */}
          <motion.div
            className="relative w-full h-full"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 120, damping: 18 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* ============================================================ */}
            {/* FRONT FACE: Clean Portrait with Sleek Neon Border & Badge   */}
            {/* ============================================================ */}
            <div
              className="absolute inset-0 rounded-[2.5rem] overflow-hidden backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Clean Glowing Cyan Border (exact match to user screenshot) */}
              <div
                className={`absolute inset-0 rounded-[2.5rem] border-2 transition-all duration-300 z-20 pointer-events-none ${
                  isFlipped
                    ? 'border-primary shadow-[0_0_30px_rgba(0,245,212,0.6)]'
                    : 'border-primary/80 shadow-[0_0_20px_rgba(0,245,212,0.4)]'
                }`}
              />

              {/* Glass Base */}
              <div className="absolute inset-0 bg-[#050814]/90 backdrop-blur-md" />

              {/* Framed Profile Picture */}
              <div
                className="absolute inset-3 rounded-[2.1rem] overflow-hidden border border-white/10 shadow-xl bg-black"
                style={{ transform: 'translateZ(15px)' }}
              >
                <img
                  src="/images/hero-profile.jpg"
                  alt="Malith Rajamanthri"
                  className="w-full h-full object-cover object-center scale-[1.02] transition-transform duration-500 ease-out"
                />

                {/* Subtle vignette for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Bottom Badge: SF Pro Display Semibold */}
              <div
                className="absolute bottom-4 left-5 right-5 z-20"
                style={{ transform: 'translateZ(35px)' }}
              >
                <div className="bg-[#050814]/95 backdrop-blur-xl border border-primary/50 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(0,245,212,0.25)]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                    <p className="text-[11px] uppercase tracking-[0.18em] text-primary font-display font-semibold">
                      // CURRENTLY FOCUSED
                    </p>
                  </div>
                  <p className="text-sm font-display font-semibold text-white tracking-tight leading-snug">
                    Next.js 15, UI/UX &amp; High-Performance Web Apps
                  </p>
                </div>
              </div>

              {/* Specular Glare / Holographic Reflection */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-30 rounded-[2.5rem]"
                style={{
                  background: useTransform(
                    [glareX, glareY],
                    ([gx, gy]) =>
                      `radial-gradient(circle 260px at ${gx}% ${gy}%, rgba(0, 245, 212, 0.18), rgba(255, 255, 255, 0.06) 35%, transparent 70%)`
                  )
                }}
              />
            </div>

            {/* ============================================================ */}
            {/* BACK FACE: Clean Profile Face in Apple SF Pro               */}
            {/* ============================================================ */}
            <div
              className="absolute inset-0 rounded-[2.5rem] overflow-hidden backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Outer Border */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/70 shadow-[0_0_30px_rgba(0,245,212,0.5),0_0_15px_rgba(121,40,202,0.3)] z-20 pointer-events-none" />

              {/* Card Background */}
              <div className="absolute inset-0 bg-[#070b1c]/95 backdrop-blur-2xl" />

              {/* Ambient Radial Highlights */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/15 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary/20 rounded-full blur-2xl pointer-events-none" />

              {/* Profile Card Content */}
              <div
                className="relative h-full flex flex-col justify-between p-6 z-10"
                style={{ transform: 'translateZ(25px)' }}
              >
                {/* Header */}
                <div className="text-center pt-1">
                  <div className="relative inline-block mx-auto mb-2">
                    <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-primary via-white to-secondary shadow-[0_0_16px_rgba(0,245,212,0.4)]">
                      <div className="w-full h-full rounded-full overflow-hidden bg-black">
                        <img
                          src="/images/hero-profile.jpg"
                          alt="Malith"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-white tracking-tight">
                    Malith Rajamanthri
                  </h3>
                  <p className="text-primary text-xs font-display font-semibold tracking-wide uppercase mt-0.5">
                    Frontend Engineer &amp; UI/UX Designer
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30 mt-2 text-[10px] font-display font-semibold text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    SYSTEM ONLINE • AVAILABLE
                  </div>
                </div>

                {/* Details List */}
                <div className="space-y-2 my-auto">
                  <a
                    href="mailto:malithrajamanthri@gmail.com"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Mail size={15} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-gray-400 font-display">Email Contact</p>
                      <p className="text-xs text-white font-display font-medium truncate group-hover:text-primary transition-colors">
                        malithrajamanthri@gmail.com
                      </p>
                    </div>
                    <ExternalLink size={12} className="text-gray-500 group-hover:text-primary" />
                  </a>

                  <a
                    href="tel:+94767421844"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                      <Phone size={15} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-gray-400 font-display">Direct Phone</p>
                      <p className="text-xs text-white font-display font-medium group-hover:text-accent transition-colors">
                        +94 76 742 1844
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                      <MapPin size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-400 font-display">Location Base</p>
                      <p className="text-xs text-white font-display font-medium">Sri Lanka • Remote Worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <Award size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-400 font-display">Academic Background</p>
                      <p className="text-xs text-white font-display font-medium">NIBM Undergraduate</p>
                    </div>
                  </div>
                </div>

                {/* Footer Quote */}
                <div className="pt-2 border-t border-white/10 text-center">
                  <p className="text-[11px] text-slate-300 italic font-display">
                    &ldquo;Passionate about engineering next-gen digital experiences.&rdquo;
                  </p>
                </div>
              </div>

              {/* Specular Glare for Back Face */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-30 rounded-[2.5rem]"
                style={{
                  background: useTransform(
                    [glareX, glareY],
                    ([gx, gy]) =>
                      `radial-gradient(circle 240px at ${100 - Number(gx)}% ${gy}%, rgba(0, 245, 212, 0.16), rgba(255, 255, 255, 0.05) 40%, transparent 70%)`
                  )
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ElectricProfileCard
