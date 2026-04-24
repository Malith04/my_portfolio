import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => onLoadingComplete(), 500)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-ink via-surface to-ink overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Logo/Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="relative"
        >
          {/* Rotating Ring */}
          <motion.div
            className="absolute inset-0 w-32 h-32 border-4 border-t-primary border-r-accent border-b-secondary border-l-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner Circle */}
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-1 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-ink flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-5xl font-display font-bold text-gradient"
              >
                MR
              </motion.div>
            </div>
          </div>

          {/* Orbiting Dots */}
          {[0, 120, 240].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary rounded-full"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: [
                  Math.cos((angle * Math.PI) / 180) * 60,
                  Math.cos(((angle + 360) * Math.PI) / 180) * 60,
                ],
                y: [
                  Math.sin((angle * Math.PI) / 180) * 60,
                  Math.sin(((angle + 360) * Math.PI) / 180) * 60,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
            <span className="text-gradient">Malith Rajamanthri</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-slate-400 text-sm uppercase tracking-[0.3em]"
          >
            Portfolio
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-64 md:w-80"
        >
          {/* Progress Container */}
          <div className="relative">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>
            
            {/* Progress Text */}
            <motion.div
              className="mt-3 text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-primary font-semibold text-lg">{progress}%</span>
              <span className="text-slate-400 text-sm ml-2">Loading...</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Text Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex gap-2"
        >
          {['C', 'r', 'a', 'f', 't', 'i', 'n', 'g', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'].map((letter, i) => (
            <motion.span
              key={i}
              className="text-slate-300 text-sm"
              animate={{
                y: [0, -5, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Corner Decorations */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-accent/30 rounded-br-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </motion.div>
  )
}

export default LoadingScreen
