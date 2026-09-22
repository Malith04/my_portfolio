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
  baseOpacity: number
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
    const mouse = { x: -1000, y: -1000, radius: 150 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const colors = ['#00f5d4', '#7928ca', '#38bdf8', '#00ff87']
    const nodes: QuantumNode[] = []
    
    // Balanced node density for peak 60fps performance
    const count = Math.min(85, Math.floor((canvas.width * canvas.height) / 16000))

    for (let i = 0; i < count; i++) {
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const baseOpacity = Math.random() * 0.5 + 0.3
      nodes.push({
        x,
        y,
        originX: x,
        originY: y,
        size: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: baseOpacity,
        baseOpacity,
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

      // 1. Update and draw nodes
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
        const distToMouse = Math.sqrt(dx * dx + dy * dy)
        if (distToMouse < mouse.radius) {
          const force = (mouse.radius - distToMouse) / mouse.radius
          node.x -= (dx / distToMouse) * force * 1.5
          node.y -= (dy / distToMouse) * force * 1.5
        }

        // Pulse opacity
        node.opacity = node.baseOpacity + Math.sin(frame * node.pulseSpeed) * 0.2

        ctx.save()
        ctx.globalAlpha = Math.max(0.1, Math.min(1, node.opacity))
        ctx.fillStyle = node.color
        ctx.shadowBlur = 8
        ctx.shadowColor = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()

        // 2. Connect nearby nodes with neural filaments
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j]
          const ndx = node.x - nodeB.x
          const ndy = node.y - nodeB.y
          const nodeDist = Math.sqrt(ndx * ndx + ndy * ndy)

          if (nodeDist < 110) {
            const alpha = (1 - nodeDist / 110) * 0.22
            ctx.save()
            ctx.globalAlpha = alpha
            ctx.strokeStyle = node.color
            ctx.lineWidth = 0.75
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(nodeB.x, nodeB.y)
            ctx.stroke()
            ctx.restore()
          }
        }

        // 3. Connect to mouse cursor if nearby
        if (distToMouse < mouse.radius) {
          const mouseAlpha = (1 - distToMouse / mouse.radius) * 0.4
          ctx.save()
          ctx.globalAlpha = mouseAlpha
          ctx.strokeStyle = '#00f5d4'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
          ctx.restore()
        }
      }

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
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  )
}

export default StarField
