import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Sparkles } from 'lucide-react'

const Experience = () => {
  const timeline = [
    {
      type: 'work',
      title: 'Software Engineer Intern',
      organization: 'Innovior',
      period: '2024 - Present',
      location: 'Colombo, Sri Lanka',
      badge: 'Current Position',
      description: 'Engineering scalable frontend and full-stack solutions, designing responsive UI/UX systems, and building production web applications for client and enterprise projects.',
      achievements: [
        'Developing production-grade web applications with React 19, Next.js 15, TypeScript, and Tailwind CSS',
        'Engineering core features for ImpactEcho (social activism & verified volunteering platform)',
        'Designing intuitive, high-performance UI/UX interfaces with Framer Motion animations',
        'Collaborating on REST API integrations, robust state management, and production QA troubleshooting'
      ],
      color: 'from-primary via-cyan-400 to-accent',
      current: true
    },
    {
      type: 'education',
      title: 'Software Engineering Undergraduate',
      organization: 'National Institute of Business Management (NIBM)',
      period: '2024 - Present',
      location: 'NIBM, Sri Lanka',
      badge: 'Higher Education',
      description: 'Pursuing BSc (Hons) degree in Software Engineering with an intensive focus on modern software architecture, algorithms, cloud systems, and full-stack development.',
      achievements: [
        'Completed Higher Diploma in Software Engineering with academic excellence',
        'Built full-stack web and desktop applications using Java, React, and MySQL',
        'Active collaborator in technology workshops and hackathon initiatives'
      ],
      color: 'from-blue-500 via-indigo-500 to-purple-600',
      current: false
    },
    {
      type: 'education',
      title: 'Primary & Secondary Collegiate Education',
      organization: 'Dharmaraja College, Kandy',
      period: '2013 - 2024',
      location: 'Kandy, Sri Lanka',
      badge: 'Alumnus (11 Years)',
      description: 'Completed primary and secondary schooling (2013–2024) at the historic Dharmaraja College, Kandy. Cultivated academic discipline, technology passion, and sports leadership.',
      achievements: [
        '11-year dedicated academic journey fostering computational and analytical thinking',
        'Active member of the College ICT and Technology Societies',
        'Represented the college in Cricket and Baseball with strategic team leadership awards',
        'Developed lifelong values of teamwork, resilience, and ethical leadership'
      ],
      color: 'from-emerald-500 via-teal-500 to-primary',
      current: false
    },
    {
      type: 'certification',
      title: 'English Certificate Course',
      organization: 'National Institute of Business Management (NIBM)',
      period: '2024',
      location: 'NIBM, Sri Lanka',
      badge: 'Professional Certification',
      description: 'Enhanced communication skills, technical documentation, and professional English proficiency for global engineering collaboration.',
      achievements: [
        'Mastered professional technical writing and presentation delivery',
        'Effective global cross-functional team communication',
        'Business and workplace English proficiency'
      ],
      color: 'from-purple-500 via-pink-500 to-secondary',
      current: false
    }
  ]

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <p className="section-kicker">// Professional &amp; Academic Journey</p>
          <h2 className="section-title text-white">
            Experience &amp; <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-display">
            From foundation years at Dharmaraja College, Kandy to engineering production web applications at Innovior and advanced degree studies at NIBM.
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="surface-card overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_15px_40px_-10px_rgba(0,245,212,0.2)]">
                  {/* Header with Gradient */}
                  <div className={`relative p-6 sm:p-8 bg-gradient-to-r ${item.color} overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-15">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-16 translate-x-16 blur-xl" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-black rounded-full translate-y-12 -translate-x-12 blur-lg" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-display font-semibold uppercase tracking-wider">
                              <Calendar size={12} />
                              {item.period}
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-display font-semibold uppercase tracking-wider">
                              <Sparkles size={11} />
                              {item.badge}
                            </span>
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white tracking-tight mb-1">
                            {item.title}
                          </h3>
                          <p className="text-white/95 font-display font-medium text-base sm:text-lg flex items-center gap-2">
                            {item.type === 'work' ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                            {item.organization}
                          </p>
                        </div>
                        <div className="text-left sm:text-right">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-white/90 text-xs font-display font-medium">
                            <MapPin size={13} className="text-primary" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <p className="text-slate-300 leading-relaxed font-display text-sm sm:text-base">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="text-primary" size={18} />
                        <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
                          Key Highlights &amp; Achievements
                        </h4>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-3">
                        {item.achievements.map((achievement, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all"
                          >
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-slate-300 text-xs sm:text-sm leading-relaxed font-display">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                </div>

                {/* Connection Line */}
                {i < timeline.length - 1 && (
                  <div className="flex justify-center py-4">
                    <div className="w-px h-6 bg-gradient-to-b from-primary/50 to-transparent" />
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
          <div className="surface-card p-6 text-center border-primary/20 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Briefcase size={22} />
            </div>
            <h3 className="text-2xl font-display font-semibold text-white mb-1">Innovior</h3>
            <p className="text-slate-400 text-xs uppercase tracking-wider font-display font-semibold text-primary">
              Software Engineer Intern
            </p>
          </div>
          
          <div className="surface-card p-6 text-center border-primary/20 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mx-auto mb-3">
              <GraduationCap size={22} />
            </div>
            <h3 className="text-2xl font-display font-semibold text-white mb-1">NIBM &amp; Dharmaraja</h3>
            <p className="text-slate-400 text-xs uppercase tracking-wider font-display font-semibold text-accent">
              BSc SE (UG) &amp; 11-Yr Alumnus
            </p>
          </div>
          
          <div className="surface-card p-6 text-center border-primary/20 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-secondary/20 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Award size={22} />
            </div>
            <h3 className="text-2xl font-display font-semibold text-white mb-1">Production Ready</h3>
            <p className="text-slate-400 text-xs uppercase tracking-wider font-display font-semibold text-secondary">
              Next.js 15 &amp; Modern UI/UX
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience