import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectDriftWall from './components/ProjectDriftWall'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectCaseStudies from './components/ProjectCaseStudies'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Silk from './components/Silk'
import ActionButton from './components/ActionButton'
import LoadingScreen from './components/LoadingScreen'
import SEO from './components/SEO'
import GitHubStats from './components/GitHubStats'
import AchievementTimeline from './components/AchievementTimeline'
import TechStackComparison from './components/TechStackComparison'
import VisitorAnalytics from './components/VisitorAnalytics'
import MicroInteractions from './components/MicroInteractions'
import MetricsSection from './components/MetricsSection'
import ServicesAccordion from './components/ServicesAccordion'
import FooterCTA from './components/FooterCTA'
import SmoothScroll from './components/SmoothScroll'
import { analyticsService } from './services/analytics'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('light', savedTheme === 'light')

    // Initialize analytics tracking
    analyticsService.trackPageView(window.location.pathname)
    
    // Make analytics available globally for navigation tracking
    ;(window as any).analyticsService = analyticsService
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('light', newTheme === 'light')
  }

  return (
    <>
      <SEO />
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen overflow-x-hidden">
          <SmoothScroll />
          
          {/* Ambient Silk Fluid WebGL Background (Portfolio Signature Cyber Sky Blue) */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <Silk
              speed={3.5}
              scale={1}
              color="#38bdf8"
              noiseIntensity={1.4}
              rotation={0.1}
            />
            <div className="absolute inset-0 bg-ink/70" />
          </div>

          <MicroInteractions />
          <Navbar />
          <ActionButton theme={theme} onToggleTheme={toggleTheme} />
          <VisitorAnalytics />

          <main>
            <Hero />
            <ProjectDriftWall />
            <MetricsSection />
            <About />
            <Skills />
            <GitHubStats />
            <Projects />
            <ServicesAccordion />
            <ProjectCaseStudies />
            <TechStackComparison />
            <Experience />
            <AchievementTimeline />
            <Blog />
            <Contact />
          </main>

          <FooterCTA />
        </div>
      )}
    </>
  )
}

export default App
