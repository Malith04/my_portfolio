import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

const Experience = () => {
  const timeline = [
    {
      type: 'work',
      title: 'Full Stack Developer Intern',
      organization: 'Innovior (Pvt) Ltd',
      period: 'May 2026 – Present',
      location: 'Sri Lanka',
      badge: 'Current Role',
      description: 'Contributing to full-stack software development projects and engineering real-world production applications at Innovior.',
      achievements: [
        'Developing frontend applications using Next.js and backend services using Nest.JS',
        'Working with MongoDB for database operations and AWS S3 for cloud storage solutions',
        'Developing and integrating RESTful APIs for application functionality',
        'Creating UI/UX designs and high-fidelity interactive prototypes using Figma'
      ],
      color: 'from-primary via-cyan-400 to-accent',
      current: true
    },
    {
      type: 'education',
      title: 'BSc (Hons) Computer Science & HNDSE',
      organization: 'National Institute of Business Management (NIBM)',
      logo: '/images/nibm-logo.png',
      period: '2025 – 2026 / Present',
      location: 'Kandy, Sri Lanka',
      badge: 'Degree & HND (Reading)',
      description: 'Higher National Diploma in Software Engineering (2025–2026) and actively reading for BSc (Hons) in Computer Science at NIBM Kandy. Committee member of the NIBM IT Society and member of the NIBM Cricket Team.',
      achievements: [
        'Reading for BSc (Hons) Computer Science degree',
        'Higher National Diploma in Software Engineering (2025–2026)',
        'Committee Member – IT Society, NIBM',
        'Member of Cricket Team – NIBM & organizer for CYBOTS robotics competitions'
      ],
      color: 'from-blue-500 via-indigo-500 to-purple-600',
      current: true
    },
    {
      type: 'education',
      title: 'Primary & Secondary Collegiate Education',
      organization: 'Dharmaraja College, Kandy',
      logo: '/images/dharmaraja-badge.jpg',
      period: '2013 – 2024',
      location: 'Kandy, Sri Lanka',
      badge: 'Alumnus (11 Years)',
      description: 'Completed 11 years of primary and secondary schooling (2013–2024) at the historic Dharmaraja College, Kandy. Fostered strong physical science discipline, analytical rigor, and competitive sports leadership.',
      achievements: [
        'G.C.E. Advanced Level in Physical Science Stream (2023/2024)',
        'G.C.E. Ordinary Level (2020)',
        'Represented Dharmaraja College in U15 Cricket & U19 Baseball',
        '11-year dedicated academic, ethical, and athletic collegiate foundation'
      ],
      color: 'from-emerald-500 via-teal-500 to-primary',
      current: false
    },
    {
      type: 'education',
      title: 'Diploma in Software Engineering (DSE)',
      organization: 'National Institute of Business Management (NIBM)',
      logo: '/images/nibm-logo.png',
      period: '2024 – 2025',
      location: 'Kandy, Sri Lanka',
      badge: 'Diploma Studies (Enrolled)',
      description: 'Pursuing foundational software engineering curriculum focusing on object-oriented programming in Java, web engineering with JavaScript & modern frontend tooling, and relational databases with MySQL.',
      achievements: [
        'Diploma in Software Engineering (DSE) coursework & software fundamentals',
        'Built full-stack software and database architectures with Java, React, and MySQL',
        'Active participant in collegiate robotics events and gaming tournaments'
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

        <ScrollStack
          useWindowScroll={true}
          itemDistance={40}
          itemStackDistance={36}
          stackPosition="14%"
          scaleEndPosition="8%"
          baseScale={0.88}
          itemScale={0.035}
          rotationAmount={0}
          blurAmount={0}
        >
          {timeline.map((item, i) => (
            <ScrollStackItem key={i}>
              <div className="relative group">
                {/* Main Card */}
                <div className="surface-card overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.7)] group-hover:shadow-[0_20px_50px_-10px_rgba(0,245,212,0.25)]">
                  {/* Header with Gradient */}
                  <div className={`relative p-6 sm:p-8 bg-gradient-to-r ${item.color} overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-15">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-16 translate-x-16 blur-xl" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-black rounded-full translate-y-12 -translate-x-12 blur-lg" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                        <div className="flex items-start gap-4">
                          {item.logo && (
                            <div className="w-14 h-14 rounded-2xl bg-white p-1.5 border border-white/40 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                              <img
                                src={item.logo}
                                alt={item.organization}
                                className="w-full h-full object-contain rounded-xl"
                              />
                            </div>
                          )}
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-white text-xs font-display font-semibold uppercase tracking-wider">
                                <Calendar size={12} />
                                {item.period}
                              </span>
                              <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-display font-semibold uppercase tracking-wider">
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
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

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