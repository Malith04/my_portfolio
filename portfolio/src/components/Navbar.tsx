import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Works', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-[#090808]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
        {/* Exact Lesmana Wordmark */}
        <motion.button
          onClick={() => scrollToSection('#home')}
          className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white cursor-pointer flex items-center gap-1 group"
          whileHover={{ scale: 1.02 }}
        >
          <span>Malith</span>
          <span className="text-[#C5A880] text-3xl leading-none">.</span>
        </motion.button>

        {/* Center Lesmana Signature Columns (Desktop) */}
        <div className="hidden lg:flex items-center gap-12 xl:gap-16">
          {/* Column 1: Availability */}
          <div className="flex flex-col text-left">
            <span className="text-[11px] text-slate-400 font-display">Available for roles</span>
            <span className="text-xs text-white font-display font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping inline-block" />
              2 Slots
            </span>
          </div>

          {/* Column 2: Location */}
          <div className="flex flex-col text-left">
            <span className="text-[11px] text-slate-400 font-display">Based in</span>
            <span className="text-xs text-white font-display font-medium">
              Sri Lanka (Open Globally)
            </span>
          </div>

          {/* Column 3: Editorial Nav Links */}
          <div className="flex flex-col text-left gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-xs text-slate-300 hover:text-white font-display transition-colors text-left cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Medium Screen Nav Links (Tablets) */}
        <div className="hidden md:flex lg:hidden items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-xs uppercase tracking-[0.18em] text-slate-300 hover:text-white font-display transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right CTA Button: Exact Lesmana "Start a project" pill button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white hover:bg-[#C5A880] text-black pl-5 pr-2 py-2 text-xs font-display font-semibold transition-all shadow-md cursor-pointer"
          >
            <span>Start a project</span>
            <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
              <ArrowUpRight size={13} />
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 bg-[#0A0909]/98 backdrop-blur-2xl px-6 py-6 space-y-4"
        >
          <div className="space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-base font-display font-medium text-slate-200 hover:text-white transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-white text-black py-3 text-xs font-display font-semibold uppercase tracking-wider"
            >
              Start a project &rarr;
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar