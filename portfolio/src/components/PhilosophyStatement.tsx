import React from 'react'
import { Terminal } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const PhilosophyStatement: React.FC = () => {
  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-transparent">
      {/* Ambient center background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-primary/15 via-secondary/15 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center relative z-10">
        {/* Kicker Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
          <Terminal size={13} className="text-[#00F5D4]" />
          <span className="text-slate-300 font-display font-medium text-xs tracking-[0.2em] uppercase">
            Engineering Manifesto
          </span>
        </div>

        {/* Scroll Reveal Text */}
        <ScrollReveal
          baseOpacity={0.35}
          enableBlur={true}
          baseRotation={2}
          blurStrength={3}
          containerClassName="my-0"
          textClassName="text-2xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-[1.35] tracking-tight"
          rotationEnd="bottom bottom"
          wordAnimationEnd="bottom bottom-=15%"
        >
          I craft high-performance web architectures and immersive digital experiences — turning complex engineering challenges into fluid, verified software that scales effortlessly.
        </ScrollReveal>

        {/* Subtitle / Signature line */}
        <p className="mt-8 text-sm sm:text-base text-slate-400 font-display font-light max-w-xl mx-auto tracking-wide">
          Bridging design intuition with scalable full-stack architectures &amp; real-time telemetry.
        </p>
      </div>
    </section>
  )
}

export default PhilosophyStatement
