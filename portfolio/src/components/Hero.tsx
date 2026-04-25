import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Send, Mail, Phone, MapPin, Award, Heart } from 'lucide-react'
import ResumeDownload from './ResumeDownload'

const titles = [
  'Software Engineer',
  'Full-Stack Developer', 
  'Problem Solver',
  'Cricket Player',
  'Tech Innovator'
]

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const currentTitle = titles[index % titles.length]
    if (text.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText(currentTitle.slice(0, text.length + 1))
      }, 90)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setText('')
      setIndex(index + 1)
    }, 1800)
    return () => clearTimeout(timeout)
  }, [text, index])

  const stats = [
    { number: 15, label: 'Projects' },
    { number: 5, label: 'Technologies' },
    { number: 2, label: 'Years Learning' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="pill border-accent/40 text-accent">NIBM Undergraduate</span>
            <p className="text-primary text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05]">
              <span className="text-gradient">Malith</span>
              <br />
              Rajamanthri
            </h1>
            <div className="text-2xl md:text-3xl text-slate-200 h-10">
              {text}<span className="animate-pulse">|</span>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Passionate Software Engineering student crafting digital experiences with modern technologies. 
              I blend creativity with code to build innovative solutions while pursuing excellence in sports and life.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-all hover:scale-105 hover:bg-yellow-600 dark:hover:bg-primary light:hover:bg-yellow-600 glow-primary-hover hover:shadow-xl"
            >
              Explore My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 dark:border-white/20 light:border-slate-300/60 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white dark:text-white light:text-slate-900 transition-all hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary light:hover:border-yellow-600 light:hover:text-yellow-600 hover:scale-105 hover:shadow-lg"
            >
              Let's Connect
              <Send size={18} />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {stats.map((stat, i) => (
              <div key={i} className="surface-card px-5 py-4 text-center">
                <div className="text-2xl font-display font-semibold text-primary">{stat.number}+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Resume Download Section */}
          <div className="mt-8">
            <ResumeDownload />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center"
        >
          {/* Magical Flip Card Container */}
          <div 
            className="relative w-80 h-80 sm:w-96 sm:h-96 cursor-pointer perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            {/* Glow Effect */}
            <motion.div 
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-accent/30 via-primary/20 to-secondary/30 blur-3xl"
              animate={{
                scale: isFlipped ? 1.1 : 1,
                opacity: isFlipped ? 0.8 : 0.5
              }}
              transition={{ duration: 0.6 }}
            />

            {/* Flip Card Inner */}
            <motion.div
              className="relative w-full h-full"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side - Profile Picture */}
              <motion.div
                className="absolute inset-0 backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="relative w-full h-full">
                  {/* Animated Border */}
                  <motion.div 
                    className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/50"
                    animate={{
                      boxShadow: isFlipped 
                        ? "0 0 40px rgba(0, 212, 255, 0.6)" 
                        : "0 0 20px rgba(0, 212, 255, 0.3)"
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Glass Background */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10" />
                  
                  {/* Profile Image */}
                  <div className="absolute inset-6 rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl">
                    <motion.img
                      src="/images/me (2).jpg"
                      alt="Malith Rajamanthri"
                      className="w-full h-full object-cover"
                      animate={{ scale: isFlipped ? 1.1 : 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isFlipped ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white text-lg font-semibold">Hover to see details ✨</p>
                    </motion.div>
                  </div>

                  {/* Bottom Badge */}
                  <motion.div 
                    className="absolute -bottom-6 left-6 right-6 bg-ink/90 backdrop-blur-xl border-2 border-primary/50 rounded-2xl px-6 py-5 shadow-xl"
                    animate={{ y: isFlipped ? -10 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-xs uppercase tracking-wider text-primary font-bold mb-1">Currently Focused</p>
                    <p className="text-sm font-semibold text-white">Modern web apps, UX, and clean systems.</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Back Side - Personal Details Card */}
              <motion.div
                className="absolute inset-0 backface-hidden"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <div className="relative w-full h-full">
                  {/* Magical Gradient Background */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-purple-500/20 to-accent/30 backdrop-blur-xl border-2 border-primary/50 shadow-2xl" />
                  
                  {/* Content */}
                  <div className="absolute inset-4 flex flex-col justify-center space-y-3 p-3">
                    {/* Header */}
                    <div className="text-center space-y-1.5">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: isFlipped ? 1 : 0 }}
                        transition={{ delay: 0.3, type: "spring" }}
                        className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      >
                        <Heart className="text-black" size={24} fill="currentColor" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-white">Malith Rajamanthri</h3>
                      <p className="text-primary text-xs font-semibold">Software Engineering Student</p>
                    </div>

                    {/* Details */}
                    <div className="space-y-2.5">
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: isFlipped ? 0 : -20, opacity: isFlipped ? 1 : 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-2.5 bg-white/10 rounded-lg p-2.5 backdrop-blur-sm"
                      >
                        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Mail className="text-primary" size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-gray-400">Email</p>
                          <p className="text-xs text-white font-medium truncate">malithrajamanthri@gmail.com</p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: isFlipped ? 0 : -20, opacity: isFlipped ? 1 : 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center gap-2.5 bg-white/10 rounded-lg p-2.5 backdrop-blur-sm"
                      >
                        <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Phone className="text-accent" size={16} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] text-gray-400">Phone</p>
                          <p className="text-xs text-white font-medium">+94 76 742 1844</p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: isFlipped ? 0 : -20, opacity: isFlipped ? 1 : 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm"
                      >
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <MapPin className="text-secondary" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Location</p>
                          <p className="text-sm text-white font-medium">Sri Lanka</p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: isFlipped ? 0 : -20, opacity: isFlipped ? 1 : 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center gap-3 bg-white/10 rounded-xl p-3 backdrop-blur-sm"
                      >
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <Award className="text-purple-400" size={18} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400">Institution</p>
                          <p className="text-sm text-white font-medium">NIBM</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Footer */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: isFlipped ? 0 : 20, opacity: isFlipped ? 1 : 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-center pt-4 border-t border-white/20"
                    >
                      <p className="text-xs text-gray-400 italic">
                        "Passionate about creating amazing digital experiences"
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
