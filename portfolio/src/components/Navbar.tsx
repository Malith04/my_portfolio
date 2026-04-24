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
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
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
          className="font-display text-lg font-semibold tracking-tight text-white cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          Malith Rajamanthri
        </motion.button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm uppercase tracking-[0.2em] transition-colors cursor-pointer ${
                activeSection === link.href.substring(1)
                  ? 'text-primary'
                  : 'text-slate-300 hover:text-primary'
              }`}
              whileHover={{ y: -2 }}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <span className="pill border-primary/40 text-primary">Available</span>
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
                className={`block w-full text-left rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary bg-white/5'
                    : 'text-slate-300 hover:text-primary hover:bg-white/5'
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