import React, { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

/**
 * SmoothScroll integrates Lenis smooth inertia scrolling across the website.
 * Emulates the exact weightless, buttery 60/120fps scrolling feel of the Lesmana template.
 * Eliminates browser native wheel stutter and hitching during scroll-linked animations.
 */
export const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // Disable native CSS smooth scroll to prevent conflicting with Lenis
    document.documentElement.style.scrollBehavior = 'auto'

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Lesmana-style exponential ease
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
      infinite: false,
    })

    // Expose lenis instance globally for anchor navigation & interactive triggers
    ;(window as any).lenis = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Intercept anchor link clicks to use Lenis smooth navigation with navbar offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('#') || href === '#') return

      const targetElement = document.querySelector(href)
      if (targetElement) {
        e.preventDefault()
        lenis.scrollTo(targetElement as HTMLElement, {
          offset: -88,
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })
        window.history.pushState(null, '', href)
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      delete (window as any).lenis
    }
  }, [])

  return null
}

export default SmoothScroll
