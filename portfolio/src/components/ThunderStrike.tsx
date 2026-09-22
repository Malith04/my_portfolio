import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'

export interface ThunderStrikeHandle {
  strike: (targetX: number, targetY: number) => void
}

interface Point {
  x: number
  y: number
}

interface Spark {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
}

interface LightningBranch {
  points: Point[]
  width: number
  alpha: number
}

export const ThunderStrike = forwardRef<ThunderStrikeHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animFrameId = useRef<number | null>(null)
  const isStrikingRef = useRef(false)
  const strikeStartRef = useRef(0)
  const mainBoltsRef = useRef<LightningBranch[][]>([])
  const sparksRef = useRef<Spark[]>([])
  const impactPointRef = useRef<Point | null>(null)

  // Recursive fractal midpoint displacement algorithm
  const createLightningPath = (
    start: Point,
    end: Point,
    displace: number,
    minDisplace = 5
  ): Point[] => {
    const points: Point[] = [start, end]
    let currentDisplace = displace

    while (currentDisplace > minDisplace) {
      const nextPoints: Point[] = []
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i]
        const p2 = points[i + 1]
        const midX = (p1.x + p2.x) / 2
        const midY = (p1.y + p2.y) / 2

        const dx = p2.x - p1.x
        const dy = p2.y - p1.y
        const len = Math.hypot(dx, dy) || 1
        const nx = -dy / len
        const ny = dx / len
        const offset = (Math.random() - 0.5) * currentDisplace

        nextPoints.push(p1)
        nextPoints.push({
          x: midX + nx * offset,
          y: midY + ny * offset
        })
      }
      nextPoints.push(points[points.length - 1])
      points.length = 0
      points.push(...nextPoints)
      currentDisplace *= 0.52
    }

    return points
  }

  // Branching forks generator
  const createBranch = (start: Point, angle: number, length: number): Point[] => {
    const points: Point[] = [start]
    let curr = { ...start }
    const segments = 4 + Math.floor(Math.random() * 4)
    const segLen = length / segments

    for (let i = 0; i < segments; i++) {
      const currentAngle = angle + (Math.random() - 0.5) * 0.7
      curr = {
        x: curr.x + Math.cos(currentAngle) * segLen,
        y: curr.y + Math.sin(currentAngle) * segLen
      }
      points.push(curr)
    }
    return points
  }

  const triggerStrike = (targetX: number, targetY: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    isStrikingRef.current = true
    strikeStartRef.current = performance.now()
    impactPointRef.current = { x: targetX, y: targetY }

    // Generate 2 layered bolts (main trunk and trailing discharge)
    const boltSets: LightningBranch[][] = []

    for (let b = 0; b < 2; b++) {
      const startX = targetX + (Math.random() - 0.5) * 120
      const startY = 0 // Top of the browser!
      const endPoint: Point = {
        x: targetX + (Math.random() - 0.5) * 20,
        y: targetY
      }

      const trunk = createLightningPath({ x: startX, y: startY }, endPoint, 85, 6)
      const branches: LightningBranch[] = [
        { points: trunk, width: b === 0 ? 3.5 : 2, alpha: 1 }
      ]

      // Generate 4-7 forks shooting outwards from the trunk
      const numForks = 4 + Math.floor(Math.random() * 4)
      for (let f = 0; f < numForks; f++) {
        const segIdx = Math.floor((trunk.length * (f + 1)) / (numForks + 1.5))
        if (trunk[segIdx]) {
          const origin = trunk[segIdx]
          // Angle outward and downwards
          const side = f % 2 === 0 ? 1 : -1
          const branchAngle = Math.PI / 2 + side * (0.45 + Math.random() * 0.5)
          const branchLen = 60 + Math.random() * 90
          const forkPoints = createBranch(origin, branchAngle, branchLen)
          branches.push({
            points: forkPoints,
            width: 1.4,
            alpha: 0.8
          })
        }
      }

      boltSets.push(branches)
    }

    mainBoltsRef.current = boltSets

    // Generate impact sparks
    const sparks: Spark[] = []
    for (let i = 0; i < 30; i++) {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.4
      const speed = 3 + Math.random() * 8
      sparks.push({
        x: targetX + (Math.random() - 0.5) * 30,
        y: targetY + (Math.random() - 0.5) * 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 20 + Math.random() * 20,
        size: 1.5 + Math.random() * 2.5,
        color: Math.random() > 0.3 ? '#00F5D4' : '#FFFFFF'
      })
    }
    sparksRef.current = sparks
  }

  useImperativeHandle(ref, () => ({
    strike: triggerStrike
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    const render = (time: number) => {
      if (!isStrikingRef.current) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        animFrameId.current = requestAnimationFrame(render)
        return
      }

      const elapsed = time - strikeStartRef.current
      const strikeDuration = 380 // 380ms total animation duration

      if (elapsed > strikeDuration) {
        isStrikingRef.current = false
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        animFrameId.current = requestAnimationFrame(render)
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Thunder flicker intensity calculation
      // Simulates real multi-stroke atmospheric lightning flicker
      let flicker = 1
      if (elapsed < 60) {
        flicker = 1
      } else if (elapsed < 110) {
        flicker = 0.3
      } else if (elapsed < 170) {
        flicker = 0.95
      } else if (elapsed < 230) {
        flicker = 0.5
      } else {
        flicker = Math.max(0, (strikeDuration - elapsed) / (strikeDuration - 230))
      }

      // 1. Atmospheric Sky Flash (lights up the upper screen like real thunder)
      const flashOpacity = flicker * 0.22
      if (flashOpacity > 0.01) {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.6)
        gradient.addColorStop(0, `rgba(0, 245, 212, ${flashOpacity * 0.7})`)
        gradient.addColorStop(0.3, `rgba(121, 40, 202, ${flashOpacity * 0.5})`)
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // 2. Draw Lightning Bolts
      mainBoltsRef.current.forEach((branches) => {
        branches.forEach((br) => {
          if (br.points.length < 2) return

          // Outer Glow
          ctx.save()
          ctx.globalAlpha = flicker * br.alpha * 0.65
          ctx.strokeStyle = 'rgba(0, 245, 212, 0.6)'
          ctx.lineWidth = br.width * 5
          ctx.lineCap = 'round'
          ctx.lineJoin = 'round'
          ctx.shadowColor = '#00F5D4'
          ctx.shadowBlur = 24

          ctx.beginPath()
          ctx.moveTo(br.points[0].x, br.points[0].y)
          for (let i = 1; i < br.points.length; i++) {
            ctx.lineTo(br.points[i].x, br.points[i].y)
          }
          ctx.stroke()
          ctx.restore()

          // Mid Neon Stroke
          ctx.save()
          ctx.globalAlpha = flicker * br.alpha * 0.95
          ctx.strokeStyle = '#38BDF8'
          ctx.lineWidth = br.width * 1.8
          ctx.lineCap = 'round'
          ctx.lineJoin = 'round'

          ctx.beginPath()
          ctx.moveTo(br.points[0].x, br.points[0].y)
          for (let i = 1; i < br.points.length; i++) {
            ctx.lineTo(br.points[i].x, br.points[i].y)
          }
          ctx.stroke()
          ctx.restore()

          // Pure Hot White Core
          ctx.save()
          ctx.globalAlpha = flicker * br.alpha
          ctx.strokeStyle = '#FFFFFF'
          ctx.lineWidth = Math.max(1, br.width * 0.7)
          ctx.lineCap = 'round'
          ctx.lineJoin = 'round'

          ctx.beginPath()
          ctx.moveTo(br.points[0].x, br.points[0].y)
          for (let i = 1; i < br.points.length; i++) {
            ctx.lineTo(br.points[i].x, br.points[i].y)
          }
          ctx.stroke()
          ctx.restore()
        })
      })

      // 3. Impact Flash at the top of the card
      if (impactPointRef.current) {
        const { x, y } = impactPointRef.current
        ctx.save()
        const impactRadius = 80 * flicker
        const radial = ctx.createRadialGradient(x, y, 2, x, y, impactRadius)
        radial.addColorStop(0, `rgba(255, 255, 255, ${flicker * 0.9})`)
        radial.addColorStop(0.3, `rgba(0, 245, 212, ${flicker * 0.7})`)
        radial.addColorStop(0.7, `rgba(121, 40, 202, ${flicker * 0.3})`)
        radial.addColorStop(1, 'rgba(0, 0, 0, 0)')
        ctx.fillStyle = radial
        ctx.beginPath()
        ctx.arc(x, y, impactRadius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // 4. Update & Draw Impact Sparks
      const aliveSparks: Spark[] = []
      ctx.save()
      sparksRef.current.forEach((s) => {
        s.x += s.vx
        s.y += s.vy
        s.vx *= 0.93
        s.vy += 0.2 // subtle gravity
        s.life -= 1 / s.maxLife

        if (s.life > 0) {
          aliveSparks.push(s)
          ctx.globalAlpha = Math.max(0, s.life)
          ctx.fillStyle = s.color
          ctx.shadowColor = s.color
          ctx.shadowBlur = 6
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2)
          ctx.fill()
        }
      })
      sparksRef.current = aliveSparks
      ctx.restore()

      animFrameId.current = requestAnimationFrame(render)
    }

    animFrameId.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('resize', updateSize)
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-screen h-screen"
    />
  )
})

ThunderStrike.displayName = 'ThunderStrike'

export default ThunderStrike
