import { motion } from 'framer-motion'
import { GraduationCap, Code, Trophy, Briefcase, Sparkles } from 'lucide-react'

const About = () => {
  const cards = [
    {
      icon: <Briefcase size={26} />,
      title: 'Software Engineer Intern @ Innovior',
      description: 'Actively contributing to production web apps at Innovior. Engineering scalable frontend systems with Next.js 15, React 19, TypeScript, and high-performance UI/UX architectures.'
    },
    {
      icon: <GraduationCap size={26} />,
      title: 'Software Engineering (NIBM)',
      description: 'Undergraduate student pursuing BSc (Hons) in Software Engineering at NIBM with English certifications. Strong foundation in software architecture, cloud platforms, and full-stack engineering.'
    },
    {
      icon: <Trophy size={26} />,
      title: 'Dharmaraja College, Kandy (2013 - 2024)',
      description: 'Proud 11-year alumnus of Dharmaraja College, Kandy. Cultivated academic discipline, tech club participation, and competitive sports leadership in Cricket and Baseball.'
    }
  ]

  const stats = [
    { icon: <Briefcase size={22} />, number: 'Innovior', label: 'Current Internship', isText: true },
    { icon: <Code size={22} />, number: '15+', label: 'Projects Delivered', isText: true },
    { icon: <GraduationCap size={22} />, number: 'NIBM', label: 'BSc Software Eng (UG)', isText: true },
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
                Software Engineer Intern @ Innovior
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-semibold text-white tracking-tight leading-tight">
                Crafting <span className="text-gradient">high-performance</span> digital products with modern web tech.
              </h3>
              
              <p className="text-slate-300 leading-relaxed font-display text-base">
                I am a Software Engineer Intern at <strong className="text-white">Innovior</strong> and a Software Engineering undergraduate at <strong className="text-white">NIBM</strong>, following an enriching 11-year collegiate foundation at <strong className="text-white">Dharmaraja College, Kandy (2013–2024)</strong>.
              </p>

              <p className="text-slate-400 leading-relaxed font-display text-sm">
                My engineering focus bridges responsive, user-centered interface design with clean, scalable code. From building social-impact platforms like ImpactEcho to architecting enterprise web systems, I specialize in Next.js 15, React 19, TypeScript, and fluid Framer Motion animations.
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
                <div className="flex gap-4">
                  <div className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
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
