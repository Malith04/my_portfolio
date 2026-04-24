import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import StarField from './components/StarField'
import ActionButton from './components/ActionButton'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('light', savedTheme === 'light')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('light', newTheme === 'light')
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen overflow-x-hidden">
          <StarField />
          <Navbar />
          <ActionButton theme={theme} onToggleTheme={toggleTheme} />

          <main className="pt-6">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <footer className="mt-16 border-t border-white/10 bg-black/40 backdrop-blur-md py-10 text-center">
            <p className="text-slate-400">
              (c) {new Date().getFullYear()} Malith Rajamanthri. Built with React, TypeScript and Tailwind CSS.
            </p>
          </footer>
        </div>
      )}
    </>
  )
}

export default App
