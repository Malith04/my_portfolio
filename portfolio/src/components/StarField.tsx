import { useEffect, useRef } from 'react'

interface QuantumNode {
  x: number
  y: number
  originX: number
  originY: number
  size: number
  vx: number
  vy: number
  color: string
  opacity: number
  pulseSpeed: number
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    const mouse = { x: -1000, y: -1000, radius: 180 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const colors = ['#00f5d4', '#7928ca', '#38bdf8', '#00ff87']
    const nodes: QuantumNode[] = []
    
    // Balanced node density for peak 60-120fps performance
    const count = Math.min(85, Math.floor((canvas.width * canvas.height) / 16000))

    for (let i = 0; i < count; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      nodes.push({
        x,
        y,
        originX: x,
        originY: y,
        size: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', resize)

    let frame = 0

    const animate = () => {
      frame++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 1. Atmospheric Ambient Aurora Nebula Gradients
      const t = frame * 0.003
      const auroraX1 = canvas.width * 0.25 + Math.cos(t * 0.7) * 120
      const auroraY1 = canvas.height * 0.2 + Math.sin(t * 0.5) * 80
      const grad1 = ctx.createRadialGradient(auroraX1, auroraY1, 20, auroraX1, auroraY1, 450)
      grad1.addColorStop(0, 'rgba(0, 245, 212, 0.06)')
      grad1.addColorStop(0.5, 'rgba(121, 40, 202, 0.04)')
      grad1.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = grad1
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const auroraX2 = canvas.width * 0.8 + Math.sin(t * 0.6) * 100
      const auroraY2 = canvas.height * 0.65 + Math.cos(t * 0.8) * 90
      const grad2 = ctx.createRadialGradient(auroraX2, auroraY2, 20, auroraX2, auroraY2, 500)
      grad2.addColorStop(0, 'rgba(121, 40, 202, 0.07)')
      grad2.addColorStop(0.5, 'rgba(0, 255, 135, 0.03)')
      grad2.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = grad2
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // 2. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        node.x += node.vx
        node.y += node.vy

        // Wrap around boundaries
        if (node.x < 0) node.x = canvas.width
        if (node.x > canvas.width) node.x = 0
        if (node.y < 0) node.y = canvas.height
        if (node.y > canvas.height) node.y = 0

        // Gentle mouse interaction (gravitational deflection)
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const distToMouse = Math.hypot(dx, dy)
        if (distToMouse < mouse.radius) {
          const force = (mouse.radius - distToMouse) / mouse.radius
          node.x -= (dx / distToMouse) * force * 2.2
          node.y -= (dy / distToMouse) * force * 2.2
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.shadowColor = node.color
        ctx.shadowBlur = 8
        ctx.globalAlpha = node.opacity * (0.8 + 0.2 * Math.sin(frame * node.pulseSpeed))
        ctx.fill()
      }

      // Soft ambient particles only - clean and elegant matching Lesmana
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0

      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.95 }}
    />
  )
}

export default StarField
