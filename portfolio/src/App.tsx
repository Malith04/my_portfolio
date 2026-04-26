import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectCaseStudies from './components/ProjectCaseStudies'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Blog from './components/Blog'
import StarField from './components/StarField'
import ActionButton from './components/ActionButton'
import LoadingScreen from './components/LoadingScreen'
import SEO from './components/SEO'
import GitHubStats from './components/GitHubStats'
import AchievementTimeline from './components/AchievementTimeline'
import TechStackComparison from './components/TechStackComparison'
import VisitorAnalytics from './components/VisitorAnalytics'
import MicroInteractions from './components/MicroInteractions'
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
          <StarField />
          <MicroInteractions />
          <Navbar />
          <ActionButton theme={theme} onToggleTheme={toggleTheme} />
          <VisitorAnalytics />

          <main className="pt-6">
            <Hero />
            <About />
            <Skills />
            <GitHubStats />
            <Projects />
            <ProjectCaseStudies />
            <TechStackComparison />
            <Experience />
            <AchievementTimeline />
            <Blog />
            <Contact />
          </main>

          <footer className="mt-16 border-t border-white/10 bg-black/40 backdrop-blur-md py-10 text-center">
            <p className="text-slate-400">
              © {new Date().getFullYear()} Malith Rajamanthri. Built with React, TypeScript and Tailwind CSS.
            </p>
          </footer>
        </div>
      )}
    </>
  )
}

export default App
