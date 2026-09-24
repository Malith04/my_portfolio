import React, { useEffect } from 'react'

/**
 * SmoothScroll component providing luxury 60fps/120fps inertial momentum scrolling
 * matching the Lesmana Framer template experience.
 * Smoothly interpolates mousewheel deltas with lerp physics, while preserving native
 * touch scrolling on mobile and anchor link navigation.
 */
export const SmoothScroll: React.FC = () => {
  useEffect(() => {
    // Only apply on non-touch desktop devices and when user has not requested reduced motion
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || prefersReducedMotion) return

    let currentY = window.scrollY
    let targetY = window.scrollY
    let isRunning = false
    let animationFrameId: number | null = null

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const onWheel = (e: WheelEvent) => {
      // Don't intercept if wheel event is inside a scrollable container with overflow
      let target = e.target as HTMLElement | null
      while (target && target !== document.body) {
        if (target.scrollHeight > target.clientHeight) {
          const overflowY = window.getComputedStyle(target).overflowY
          if (overflowY === 'auto' || overflowY === 'scroll') {
            return
          }
        }
        target = target.parentElement
      }

      e.preventDefault()

      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      // Dampened delta for silky smooth velocity
      const delta = e.deltaY
      targetY = Math.max(0, Math.min(maxScroll, targetY + delta * 1.15))

      if (!isRunning) {
        isRunning = true
        animationFrameId = requestAnimationFrame(updateScroll)
      }
    }

    const updateScroll = () => {
      // 0.085 interpolation factor produces the signature Framer inertia feel
      currentY = lerp(currentY, targetY, 0.085)

      window.scrollTo(0, currentY)

      if (Math.abs(targetY - currentY) > 0.6) {
        animationFrameId = requestAnimationFrame(updateScroll)
      } else {
        window.scrollTo(0, targetY)
        currentY = targetY
        isRunning = false
      }
    }

    // Keep targetY synchronized when user uses keyboard (PgUp/PgDn/Space), drags scrollbar, or clicks anchor link
    const onScroll = () => {
      if (!isRunning) {
        currentY = window.scrollY
        targetY = window.scrollY
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('scroll', onScroll)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return null
}

export default SmoothScroll
