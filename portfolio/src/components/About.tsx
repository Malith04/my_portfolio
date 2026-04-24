import { motion } from 'framer-motion'
import { GraduationCap, Code, Trophy, Heart } from 'lucide-react'

const About = () => {
  const cards = [
    {
      icon: <GraduationCap size={28} />,
      title: 'Academic Excellence',
      description: 'Undergraduate student at NIBM with English certificate course and multiple achievements. Building expertise in programming, web development, and software engineering principles.'
    },
    {
      icon: <Code size={28} />,
      title: 'Creative Developer',
      description: 'Love creating websites and software solutions with a focus on user experience. Combining technical skills with creativity to build meaningful digital experiences.'
    },
    {
      icon: <Trophy size={28} />,
      title: 'Sports & Strategy',
      description: 'Active cricket player and chess enthusiast with sports certificates. These strategic games enhance my analytical thinking and problem-solving skills.'
    }
  ]

  const stats = [
    { icon: <Code size={22} />, number: 15, label: 'Projects Completed', progress: 90 },
    { icon: <GraduationCap size={22} />, number: 5, label: 'Certificates Earned', progress: 80 },
    { icon: <Trophy size={22} />, number: 2, label: 'Years Learning', progress: 60 },
    { icon: <Heart size={22} />, number: 100, label: 'Passion Level', progress: 100 }
  ]

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">About</p>
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-display font-semibold">
                <span className="text-primary">Hello!</span> I'm Malith Rajamanthri
              </h3>
              <p className="text-lg text-accent">
                NIBM Undergraduate | Future Software Engineer | Kind & Selfless Creator
              </p>
              <p className="text-slate-300 leading-relaxed">
                A passionate undergraduate student at the National Institute of Business Management (NIBM) 
                with a clear ambition to become a Software Engineer. I'm a kind, lovely, and selfless person 
                who loves creating websites and software solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="surface-card p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-display font-semibold text-primary">
                        {stat.number}{stat.number === 100 ? '%' : '+'}
                      </div>
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 w-full rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="surface-card p-6 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/80 to-accent/80 text-ink">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-100 mb-2">{card.title}</h4>
                    <p className="text-slate-300">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="surface-card p-6">
              <div className="flex items-center gap-5">
                <div className="h-20 w-20 rounded-2xl overflow-hidden border border-white/20">
                  <img src="/images/Me Profile Photo.jpg" alt="Malith" className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="section-kicker">Personal Focus</p>
                  <p className="text-slate-200">Balancing academics, sports, and building meaningful software.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
