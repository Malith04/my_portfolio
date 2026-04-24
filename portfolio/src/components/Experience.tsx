import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Users } from 'lucide-react'

const Experience = () => {
  const timeline = [
    {
      type: 'education',
      title: 'Software Engineering Student',
      organization: 'National Institute of Business Management (NIBM)',
      period: '2023 - Present',
      location: 'Sri Lanka',
      description: 'Pursuing undergraduate degree in Software Engineering with focus on modern web technologies and software development practices.',
      achievements: [
        'Completed multiple web development projects',
        'Achieved excellence in programming courses',
        'Active participant in tech workshops'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      type: 'education',
      title: 'English Certificate Course',
      organization: 'NIBM',
      period: '2023',
      location: 'Sri Lanka',
      description: 'Enhanced communication skills and English proficiency for professional development.',
      achievements: [
        'Improved written and verbal communication',
        'Professional presentation skills',
        'Business English proficiency'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      type: 'experience',
      title: 'Sports Achievements',
      organization: 'Cricket & Baseball',
      period: '2020 - Present',
      location: 'Local Clubs',
      description: 'Active participation in sports developing leadership and strategic thinking.',
      achievements: [
        'Cricket team player with multiple certificates',
        'Baseball enthusiast with strategic gameplay',
        'Team leadership and coordination'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ]

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Journey</p>
          <h2 className="section-title">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </div>

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="surface-card overflow-hidden hover:border-primary/50 transition-all duration-500 group-hover:shadow-2xl">
                  {/* Header with Gradient */}
                  <div className={`relative p-6 bg-gradient-to-r ${item.color} overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-3">
                            <Calendar size={12} />
                            {item.period}
                          </span>
                          <h3 className="text-2xl font-display font-bold text-white mb-1">
                            {item.title}
                          </h3>
                          <p className="text-white/90 font-semibold text-lg">
                            {item.organization}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-white/80 text-sm">
                            <MapPin size={14} />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="text-primary" size={18} />
                        <h4 className="font-semibold text-slate-200">Key Achievements</h4>
                      </div>
                      
                      <div className="grid gap-3">
                        {item.achievements.map((achievement, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + j * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-primary/30 transition-all"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-slate-300 text-sm leading-relaxed">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                </div>

                {/* Connection Line (except for last item) */}
                {i < timeline.length - 1 && (
                  <div className="flex justify-center py-6">
                    <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="surface-card p-6 text-center hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-ink" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">5+</h3>
            <p className="text-slate-400 text-sm">Certificates Earned</p>
          </div>
          
          <div className="surface-card p-6 text-center hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">2+</h3>
            <p className="text-slate-400 text-sm">Years Learning</p>
          </div>
          
          <div className="surface-card p-6 text-center hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-orange-400 mb-2">100%</h3>
            <p className="text-slate-400 text-sm">Passion Level</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience