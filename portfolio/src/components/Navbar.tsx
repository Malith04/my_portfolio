import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, ArrowUpRight, MapPin } from 'lucide-react'

interface NavbarProps {
  isLoading?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ isLoading = false }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)

  // Scroll progress for subtle capsule progress bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section observer
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id)
      if (!el) return null
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { rootMargin: '-20% 0px -40% 0px' }
      )
      observer.observe(el)
      return { observer, el }
    })

    return () => {
      observers.forEach((item) => {
        if (item) item.observer.unobserve(item.el)
      })
    }
  }, [])

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Works', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ]

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const lenis = (window as any).lenis
      if (lenis) {
        lenis.scrollTo(targetElement, { offset: -88, duration: 1.0 })
      } else {
        const offsetTop = targetElement.offsetTop - 88
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    }
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500">
      <div
        className={`mx-auto transition-all duration-500 px-4 sm:px-6 ${
          scrolled ? 'pt-3 sm:pt-4 max-w-5xl' : 'pt-0 max-w-7xl'
        }`}
      >
        {/* Dynamic Island Cyber Capsule */}
        <motion.nav
          layout
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className={`pointer-events-auto relative w-full flex items-center justify-between transition-all duration-500 overflow-hidden ${
            scrolled
              ? 'h-14 sm:h-16 px-4 sm:px-6 rounded-full bg-[#060812]/85 [.light_&]:bg-white/90 backdrop-blur-2xl border border-white/10 [.light_&]:border-slate-300/80 shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(0,245,212,0.08)]'
              : 'h-20 px-4 sm:px-8 rounded-none bg-transparent border-b border-transparent'
          }`}
        >
          {/* Scroll Progress Micro-Line along capsule bottom */}
          {scrolled && (
            <motion.div
              style={{ scaleX }}
              className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-primary via-cyber-sky to-accent origin-left pointer-events-none rounded-full"
            />
          )}

          {/* Left Brand Wordmark: Malith Rajamanthri */}
          <motion.button
            id="nav-brand-logo"
            onClick={() => scrollToSection('#home')}
            className={`font-display text-sm sm:text-lg xl:text-xl font-semibold tracking-tight text-white [.light_&]:text-slate-900 cursor-pointer flex items-center gap-1.5 group shrink-0 transition-opacity duration-300 ${
              isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="whitespace-nowrap group-hover:text-white [.light_&]:group-hover:text-slate-950 transition-colors">
              Malith Rajamanthri
            </span>
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary inline-block shadow-[0_0_8px_#00F5D4] animate-pulse group-hover:scale-125 transition-transform" />
          </motion.button>

          {/* Expanded Editorial Info (Only visible when at top of page on large screens) */}
          {!scrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="hidden xl:flex items-center gap-10"
            >
              {/* Availability Chip */}
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400 [.light_&]:text-slate-500 font-display uppercase tracking-wider">
                  Available for roles
                </span>
                <span className="text-xs text-white [.light_&]:text-slate-900 font-display font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping inline-block shadow-[0_0_6px_#00FF87]" />
                  2 Slots Open
                </span>
              </div>

              {/* Location Chip */}
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400 [.light_&]:text-slate-500 font-display uppercase tracking-wider">
                  Based in
                </span>
                <span className="text-xs text-white [.light_&]:text-slate-900 font-display font-medium flex items-center gap-1">
                  <MapPin size={11} className="text-primary" />
                  Sri Lanka (Open Globally)
                </span>
              </div>
            </motion.div>
          )}

          {/* Interactive Horizontal Nav Links with Magnetic Sliding Spotlight */}
          <div className="hidden md:flex items-center gap-1 sm:gap-1.5 relative px-1 py-1 rounded-full bg-white/[0.03] [.light_&]:bg-slate-200/50 border border-white/5 [.light_&]:border-slate-300/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              const isHovered = hoveredNav === link.name

              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  onMouseEnter={() => setHoveredNav(link.name)}
                  onMouseLeave={() => setHoveredNav(null)}
                  className={`relative px-3.5 sm:px-4 py-1.5 text-xs font-display font-medium transition-colors cursor-pointer rounded-full select-none z-10 ${
                    isActive
                      ? 'text-white [.light_&]:text-slate-950 font-semibold'
                      : 'text-slate-300 [.light_&]:text-slate-600 hover:text-white [.light_&]:hover:text-slate-900'
                  }`}
                >
                  {/* Sliding Glowing Spotlight Pill */}
                  {(isHovered || (hoveredNav === null && isActive)) && (
                    <motion.div
                      layoutId="nav-spotlight-pill"
                      className="absolute inset-0 rounded-full bg-white/10 [.light_&]:bg-white border border-white/15 [.light_&]:border-slate-300 shadow-[0_0_15px_rgba(0,245,212,0.18)] pointer-events-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-20 flex items-center gap-1">
                    {link.name}
                    {isActive && (
                      <span className="w-1 h-1 rounded-full bg-primary inline-block shadow-[0_0_4px_#00F5D4]" />
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Action: Availability beacon + Magnetic "Start a project" Pill */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Scrolled Compact Status Beacon */}
            {scrolled && (
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-display text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_6px_#00FF87]" />
                <span>Available</span>
              </div>
            )}

            {/* Aerodynamic CTA Pill */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white hover:bg-primary text-black px-4 sm:px-4.5 py-1.5 sm:py-2 text-xs font-display font-semibold transition-all shadow-md hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] cursor-pointer shrink-0"
            >
              <span>Start a project</span>
              <span className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] group-hover:bg-black group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                <ArrowUpRight size={12} />
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white [.light_&]:text-slate-900 p-2 cursor-pointer focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Drawer with Glass Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="pointer-events-auto md:hidden mx-4 mt-2 rounded-3xl border border-white/10 [.light_&]:border-slate-300 bg-[#060812]/95 [.light_&]:bg-white/95 backdrop-blur-2xl p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 [.light_&]:border-slate-200">
              <span className="text-xs font-display uppercase tracking-widest text-slate-400">
                Navigation
              </span>
              <div className="flex items-center gap-1.5 text-xs text-accent font-display">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                Available for roles
              </div>
            </div>

            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left text-sm font-display font-medium py-2.5 px-3.5 rounded-xl transition-all cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-white/10 text-white [.light_&]:bg-slate-200 [.light_&]:text-slate-900 font-semibold'
                      : 'text-slate-300 [.light_&]:text-slate-600 hover:text-white [.light_&]:hover:text-slate-900 hover:bg-white/5 [.light_&]:hover:bg-slate-100'
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span>{link.name}</span>
                    {activeSection === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_#00F5D4]" />
                    )}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 [.light_&]:border-slate-200">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-white hover:bg-primary text-black [.light_&]:bg-slate-900 [.light_&]:hover:bg-teal-600 [.light_&]:text-white py-2.5 text-xs font-display font-semibold transition-all shadow-md"
              >
                <span>Start a project</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar