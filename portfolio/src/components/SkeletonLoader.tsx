import { motion } from 'framer-motion'

interface SkeletonLoaderProps {
  type: 'card' | 'text' | 'avatar' | 'button' | 'stats'
  count?: number
  className?: string
}

const SkeletonLoader = ({ type, count = 1, className = '' }: SkeletonLoaderProps) => {
  const skeletonVariants = {
    pulse: {
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className={`surface-card p-6 ${className}`}>
            <motion.div
              variants={skeletonVariants}
              animate="pulse"
              className="space-y-4"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-xl" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-slate-700 rounded w-3/4" />
                  <div className="h-3 bg-slate-700 rounded w-1/2" />
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2">
                <div className="h-3 bg-slate-700 rounded w-full" />
                <div className="h-3 bg-slate-700 rounded w-5/6" />
                <div className="h-3 bg-slate-700 rounded w-4/6" />
              </div>
              
              {/* Tags */}
              <div className="flex gap-2">
                <div className="h-6 bg-slate-700 rounded-full w-16" />
                <div className="h-6 bg-slate-700 rounded-full w-20" />
                <div className="h-6 bg-slate-700 rounded-full w-14" />
              </div>
              
              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <div className="h-10 bg-slate-700 rounded-lg flex-1" />
                <div className="h-10 bg-slate-700 rounded-lg flex-1" />
              </div>
            </motion.div>
          </div>
        )

      case 'text':
        return (
          <motion.div
            variants={skeletonVariants}
            animate="pulse"
            className={`space-y-2 ${className}`}
          >
            {Array.from({ length: count }).map((_, i) => (
              <div
                key={i}
                className={`h-4 bg-slate-700 rounded ${
                  i === count - 1 ? 'w-3/4' : 'w-full'
                }`}
              />
            ))}
          </motion.div>
        )

      case 'avatar':
        return (
          <motion.div
            variants={skeletonVariants}
            animate="pulse"
            className={`w-16 h-16 bg-slate-700 rounded-full ${className}`}
          />
        )

      case 'button':
        return (
          <motion.div
            variants={skeletonVariants}
            animate="pulse"
            className={`h-12 bg-slate-700 rounded-xl ${className}`}
          />
        )

      case 'stats':
        return (
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${className}`}>
            {Array.from({ length: 4 }).map((_, i) => (
              <motion.div
                key={i}
                variants={skeletonVariants}
                animate="pulse"
                className="surface-card p-6 text-center"
              >
                <div className="w-12 h-12 bg-slate-700 rounded-xl mx-auto mb-4" />
                <div className="h-8 bg-slate-700 rounded mb-2" />
                <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto" />
              </motion.div>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {renderSkeleton()}
        </div>
      ))}
    </>
  )
}

export default SkeletonLoader