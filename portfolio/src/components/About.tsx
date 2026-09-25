import { motion } from 'framer-motion'
import { GraduationCap, Code, Trophy, Briefcase, Sparkles } from 'lucide-react'

const About = () => {
  const cards = [
    {
      icon: <Briefcase size={26} />,
      title: 'Full Stack Developer Intern @ Innovior',
      description: 'Contributing to full-stack software development projects and working on real-world applications at Innovior (Pvt) Ltd. Engineering with Next.js, Nest.JS, MongoDB, AWS S3, and Figma.'
    },
    {
      badgeImage: '/images/nibm-logo.png',
      icon: <GraduationCap size={26} />,
      title: 'BSc Computer Science (Reading) & HNDSE (NIBM)',
      description: 'Higher National Diploma in Software Engineering (2025–2026) and actively reading for BSc (Hons) in Computer Science at NIBM Kandy. Committee Member of the NIBM IT Society and member of NIBM Cricket Team.'
    },
    {
      badgeImage: '/images/dharmaraja-badge.jpg',
      icon: <Trophy size={26} />,
      title: 'Dharmaraja College, Kandy (2013 – 2024)',
      description: 'Proud 11-year alumnus of Dharmaraja College, Kandy. Completed G.C.E. Advanced Level in Physical Science Stream (2023/2024) and G.C.E. Ordinary Level (2020), while representing the college in U15 Cricket & U19 Baseball.'
    }
  ]

  const stats = [
    { icon: <Briefcase size={22} />, number: 'Innovior', label: 'Full Stack Intern', isText: true },
    { icon: <Code size={22} />, number: '15+', label: 'Projects Delivered', isText: true },
    { icon: <GraduationCap size={22} />, number: 'NIBM', label: 'BSc & HNDSE (UG)', isText: true },
    { icon: <Sparkles size={22} />, number: '11 Yrs', label: 'Dharmaraja College', isText: true }
  ]

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <p className="section-kicker">// About Malith Rajamanthri</p>
          <h2 className="section-title text-white">
            Engineering <span className="text-gradient">With Purpose</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-display font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                Full Stack Developer Intern @ Innovior
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight leading-tight">
                Crafting <span className="text-gradient">high-performance</span> digital products with modern web tech.
              </h3>
              
              <p className="text-slate-300 leading-relaxed font-display text-base">
                I am a Full Stack Developer Intern at <strong className="text-white">Innovior</strong> and a Computer Science undergraduate at <strong className="text-white">NIBM</strong>, following an enriching 11-year collegiate foundation at <strong className="text-white">Dharmaraja College, Kandy (2013–2024)</strong>.
              </p>

              <p className="text-slate-400 leading-relaxed font-display text-sm">
                My engineering focus bridges modern, user-centered interface design with clean, scalable code. From building full-stack platforms with Next.js and Nest.JS to cloud-connected IoT monitoring systems like AgroSmart and Progressive Web Apps like SoundWave, I deliver robust, type-safe solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="surface-card p-5 border border-white/10 hover:border-primary/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary group-hover:scale-105 transition-transform">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xl font-display font-semibold text-white group-hover:text-primary transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-xs uppercase tracking-[0.15em] text-slate-400 font-display">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="surface-card p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex gap-4 items-start">
                  {card.badgeImage ? (
                    <div className="w-12 h-12 rounded-xl bg-white p-1 border border-white/40 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <img
                        src={card.badgeImage}
                        alt={card.title}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                      {card.icon}
                    </div>
                  )}
                  <div>
                    <h4 className="text-lg font-display font-semibold text-white mb-1.5 group-hover:text-primary transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-display">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
