import React from 'react'
import { Terminal, ArrowUpRight, Cpu, Sparkles, Layers } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import MagneticButton from './MagneticButton'

const PhilosophyStatement: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden border-y border-white/10 [.light_&]:border-slate-300/80 bg-[#060810] [.light_&]:bg-slate-100/80 transition-colors duration-300">
      {/* Background ambient lighting matching Let's Collab section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-b from-primary/15 via-secondary/10 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle radial center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center relative z-10 space-y-10">
        {/* Magnetic Kicker Tag */}
        <div className="flex justify-center">
          <MagneticButton strength={0.35} innerStrength={0.15}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 [.light_&]:bg-white/80 border border-white/15 [.light_&]:border-slate-300/80 hover:border-primary/50 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] [.light_&]:shadow-md transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4] animate-pulse" />
              <Terminal size={14} className="text-[#00F5D4] [.light_&]:text-teal-600" />
              <span className="text-slate-200 [.light_&]:text-slate-800 font-display font-semibold text-xs tracking-[0.22em] uppercase">
                Engineering Manifesto
              </span>
            </div>
          </MagneticButton>
        </div>

        {/* Scroll Reveal Text with High-Contrast Typography */}
        <ScrollReveal
          baseOpacity={0.3}
          enableBlur={true}
          baseRotation={2}
          blurStrength={3}
          containerClassName="my-0"
          textClassName="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white [.light_&]:text-slate-900 leading-[1.35] tracking-tight"
          rotationEnd="bottom bottom"
          wordAnimationEnd="bottom bottom-=15%"
        >
          I craft high-performance web architectures and immersive digital experiences — turning complex engineering challenges into fluid, verified software that scales effortlessly.
        </ScrollReveal>

        {/* Subtitle / Signature line */}
        <p className="text-sm sm:text-base text-slate-300 [.light_&]:text-slate-600 font-display font-normal max-w-2xl mx-auto tracking-wide leading-relaxed">
          Bridging design intuition with scalable full-stack architectures, 3D spatial visualizers, and sub-16ms micro-interactions.
        </p>

        {/* Magnetic Capability Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <MagneticButton strength={0.25} innerStrength={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 [.light_&]:bg-white/80 [.light_&]:hover:bg-white border border-white/10 [.light_&]:border-slate-300/80 hover:border-primary/40 text-xs font-display text-slate-300 [.light_&]:text-slate-700 transition-colors shadow-sm">
              <Cpu size={13} className="text-[#00F5D4] [.light_&]:text-teal-600" />
              <span>Next.js 15 &amp; React 19 Architecture</span>
            </div>
          </MagneticButton>

          <MagneticButton strength={0.25} innerStrength={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 [.light_&]:bg-white/80 [.light_&]:hover:bg-white border border-white/10 [.light_&]:border-slate-300/80 hover:border-accent/40 text-xs font-display text-slate-300 [.light_&]:text-slate-700 transition-colors shadow-sm">
              <Layers size={13} className="text-[#00FF87] [.light_&]:text-emerald-600" />
              <span>Spatial 3D Canvas &amp; WebGL</span>
            </div>
          </MagneticButton>

          <MagneticButton strength={0.25} innerStrength={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 [.light_&]:bg-white/80 [.light_&]:hover:bg-white border border-white/10 [.light_&]:border-slate-300/80 hover:border-secondary/50 text-xs font-display text-slate-300 [.light_&]:text-slate-700 transition-colors shadow-sm">
              <Sparkles size={13} className="text-[#7928CA]" />
              <span>Sub-16ms Micro-Interactions</span>
            </div>
          </MagneticButton>
        </div>

        {/* Magnetic Primary CTA Button */}
        <div className="pt-4 flex justify-center">
          <MagneticButton
            href="#projects"
            strength={0.4}
            innerStrength={0.2}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-display font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] hover:bg-[#00F5D4] hover:text-black transition-all hover:scale-105 shadow-xl hover:shadow-[0_0_30px_rgba(0,245,212,0.4)]"
          >
            <span>Explore Flagship Projects</span>
            <ArrowUpRight size={16} />
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}

export default PhilosophyStatement

