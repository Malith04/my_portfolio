import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'blog', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      
      // Track section navigation
      if (typeof window !== 'undefined' && (window as any).analyticsService) {
        ;(window as any).analyticsService.trackPageView(href)
      }
    }
    
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.button
          onClick={() => scrollToSection('#home')}
          className="font-display text-lg font-semibold tracking-tight text-white cursor-pointer flex items-center gap-2.5"
          whileHover={{ scale: 1.02 }}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_#00f5d4] animate-pulse" />
          <span>Malith <span className="text-primary font-mono text-sm tracking-normal font-normal">// UI/UX</span></span>
        </motion.button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm uppercase tracking-[0.2em] transition-all cursor-pointer hover:scale-105 ${
                activeSection === link.href.substring(1)
                  ? 'text-primary font-semibold'
                  : 'text-slate-300 hover:text-primary dark:text-slate-300 dark:hover:text-primary light:text-slate-700 light:hover:text-teal-600'
              }`}
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <span className="hud-badge">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            AVAILABLE
          </span>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 bg-ink/95 backdrop-blur-xl"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary bg-white/5 dark:text-primary dark:bg-white/5 light:text-yellow-600 light:bg-slate-200/80'
                    : 'text-slate-300 hover:text-primary hover:bg-white/5 dark:text-slate-300 dark:hover:text-primary dark:hover:bg-white/5 light:text-slate-700 light:hover:text-yellow-600 light:hover:bg-slate-200/60'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar