import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Code2, Palette, Gauge, Network, CheckCircle2, ArrowRight } from 'lucide-react'

interface ServiceItem {
  id: string
  title: string
  category: string
  icon: React.ReactNode
  bullets: string[]
  previewImage: string
  previewBadge: string
  previewDesc: string
}

const services: ServiceItem[] = [
  {
    id: 'fullstack',
    title: 'Full-Stack Web Engineering',
    category: 'NEXT.JS 15 • REACT 19 • TYPESCRIPT',
    icon: <Code2 size={20} className="text-primary" />,
    bullets: [
      'Next.js 15 App Router, React Server Components & Server Actions',
      'React 19 concurrent rendering with strict TypeScript type safety',
      'Node.js & Express microservices with RESTful and GraphQL endpoints',
      'Database modeling with PostgreSQL, Supabase, MongoDB & Dexie.js',
      'Full-stack architecture deployed on Vercel Edge & Cloudflare networks'
    ],
    previewImage: '/images/impactecho-app.png',
    previewBadge: 'PRODUCTION FULL-STACK',
    previewDesc: 'Architecting scalable server-rendered web applications with instant page loads and zero hydration bottlenecks.'
  },
  {
    id: 'uiux',
    title: 'Interactive UI/UX & Design Systems',
    category: 'FIGMA • FRAMER MOTION • TAILWIND',
    icon: <Palette size={20} className="text-accent" />,
    bullets: [
      'Apple SF Pro typographic design tokens with -0.025em tracking',
      'Tailored dark/light multi-theme engines with instant switching',
      'Framer Motion 12 & GSAP physics-based 60fps micro-animations',
      'Mobile-first responsive layouts with intuitive touch gesture physics',
      'Reusable component library built with accessibility (a11y) standards'
    ],
    previewImage: '/images/impactecho-preview.png',
    previewBadge: 'DESIGN SYSTEM & THEMES',
    previewDesc: 'Translating complex UX workflows into intuitive, visually breathtaking digital products that captivate users.'
  },
  {
    id: 'performance',
    title: 'Performance & Core Web Vitals Tuning',
    category: 'LIGHTHOUSE 95+ • SUB-SECOND TTFB',
    icon: <Gauge size={20} className="text-cyan-400" />,
    bullets: [
      'Sub-second TTFB and sub-100ms Interaction to Next Paint (INP)',
      'Lighthouse 95+ score targets across Performance, SEO & Best Practices',
      'SSR, SSG, ISR and edge streaming cache invalidation patterns',
      'Offline-first IndexedDB client persistence with Dexie.js & MiniSearch',
      'Aggressive bundle tree-shaking, AVIF image optimization & font preloading'
    ],
    previewImage: '/images/soundwave-app.avif',
    previewBadge: 'HIGH VELOCITY ASSETS',
    previewDesc: 'Fine-tuning every millisecond to ensure users on any network experience instantaneous, frictionless interactions.'
  },
  {
    id: 'realtime',
    title: 'API Architecture & Real-Time Ecosystems',
    category: 'WEBSOCKETS • WEB AUDIO • AUTH',
    icon: <Network size={20} className="text-purple-400" />,
    bullets: [
      'Real-time bidirectional event streaming via WebSockets & SSE',
      'Web Audio API integration with 10-band equalizers & visualizers',
      'Optimistic mutation engines with auto-revert on network failure',
      'Secure OAuth 2.0, JWT token rotation & session management',
      'Third-party SDK integrations (Stripe, YouTube, Firebase, Cloudinary)'
    ],
    previewImage: '/images/car-rental-service.jpg',
    previewBadge: 'ENTERPRISE CONNECTIVITY',
    previewDesc: 'Connecting mission-critical data pipelines with reliable real-time event distribution and secure integrations.'
  }
]

export const ServicesAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string>('fullstack')

  const activeService = services.find((s) => s.id === openId) || services[0]

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id))
  }

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="text-xs font-display font-semibold uppercase tracking-[0.22em] text-accent">
                • SPECIALIZED CAPABILITIES
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white leading-[1.1]">
              Expertise to ship <br className="hidden sm:inline" />
              <span className="text-gradient">quality products</span>.
            </h2>
          </div>
          <p className="text-slate-300 font-display text-sm md:text-base max-w-md leading-relaxed">
            Delivering end-to-end engineering excellence from initial design system architecture to cloud-native production deployments.
          </p>
        </div>

        {/* 2-Column Layout: Left Accordion Drawer, Right Interactive Visual Preview */}
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-start">
          {/* Left Column: Accordion List */}
          <div className="space-y-4">
            {services.map((service) => {
              const isOpen = openId === service.id

              return (
                <div
                  key={service.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0B0F1C]/95 border-primary/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                      : 'bg-[#080B14]/60 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Accordion Toggle Header */}
                  <button
                    onClick={() => toggleAccordion(service.id)}
                    className="w-full p-6 sm:p-7 flex items-center justify-between text-left gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-display font-semibold uppercase tracking-[0.18em] text-slate-400 mb-0.5">
                          {service.category}
                        </p>
                        <h3 className={`text-lg sm:text-xl font-display font-semibold transition-colors ${
                          isOpen ? 'text-white' : 'text-slate-200'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Plus/Minus Toggle Icon */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen
                        ? 'border-primary/50 bg-primary/20 text-primary rotate-180'
                        : 'border-white/15 bg-white/5 text-slate-400'
                    }`}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  {/* Accordion Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 sm:px-7 sm:pb-7 space-y-3 border-t border-white/5">
                          <p className="text-xs sm:text-sm text-slate-300 font-display leading-relaxed">
                            {service.previewDesc}
                          </p>
                          <ul className="space-y-2 pt-2">
                            {service.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400 font-display">
                                <CheckCircle2 size={15} className="text-primary flex-shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* Right Column: Dynamic Preview Display Card */}
          <div className="sticky top-28 hidden lg:block">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl border border-white/15 bg-[#090C18]/90 backdrop-blur-2xl p-6 shadow-2xl space-y-5"
            >
              {/* Preview Image with Device Frame styling */}
              <div className="relative h-60 rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-inner">
                <img
                  src={activeService.previewImage}
                  alt={activeService.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090C18] via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-display font-semibold uppercase tracking-wider text-primary">
                    {activeService.previewBadge}
                  </span>
                </div>
              </div>

              {/* Summary Details */}
              <div className="space-y-2">
                <p className="text-[10px] font-display font-semibold uppercase tracking-[0.2em] text-primary">
                  {activeService.category}
                </p>
                <h4 className="text-xl font-display font-semibold text-white tracking-tight">
                  {activeService.title}
                </h4>
                <p className="text-xs text-slate-300 font-display leading-relaxed">
                  {activeService.previewDesc}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-[0.18em] text-primary hover:text-white transition-colors"
                >
                  Consult for your project
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesAccordion
