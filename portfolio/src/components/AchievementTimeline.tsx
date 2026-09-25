import React from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  Calendar,
  Trophy,
  Star,
  Zap,
  BookOpen,
  Code,
  Briefcase,
  GraduationCap,
  Users
} from 'lucide-react'

interface AchievementItem {
  year: string
  title: string
  category: string
  description: string
  icon: React.ReactNode
  badgeImage?: string
  color: string
  bgColor: string
  skills: string[]
}

const AchievementTimeline: React.FC = () => {
  const achievements: AchievementItem[] = [
    {
      year: 'May 2026 – Present',
      title: 'Full Stack Developer Intern @ Innovior',
      category: 'Professional Experience',
      description:
        'Contributing to production-grade software applications at Innovior (Pvt) Ltd. Architecting frontends with Next.js, building backend microservices with Nest.JS, managing MongoDB and AWS S3 cloud storage, and developing RESTful APIs.',
      icon: <Briefcase size={20} className="text-[#00F5D4]" />,
      color: 'from-[#00F5D4] to-[#38BDF8]',
      bgColor: 'bg-primary/20',
      skills: ['Next.js', 'Nest.JS', 'MongoDB', 'AWS S3', 'REST APIs', 'Figma']
    },
    {
      year: '2025 – 2026',
      title: 'HND in Software Engineering & BSc (Hons) Reading',
      category: 'Higher Education (NIBM)',
      description:
        'Higher National Diploma in Software Engineering (2025–2026) at National Institute of Business Management (NIBM), Kandy, and actively reading for BSc (Hons) in Computer Science, mastering distributed architecture and system design.',
      icon: <GraduationCap size={20} className="text-blue-400" />,
      badgeImage: '/images/nibm-logo.png',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-500/20',
      skills: ['BSc (Hons) Reading', 'HNDSE', 'Software Architecture', 'System Analysis', 'Cloud Solutions']
    },
    {
      year: '2025',
      title: 'SoundWave — Music Streaming PWA',
      category: 'Full-Stack Project',
      description:
        'Engineered a Spotify-inspired Progressive Web Application using React, Firebase, Tailwind CSS, and Howler.js. Features 10-band equalizer, spatial audio, mood-based music curation, audio queue, and comprehensive admin analytics dashboard.',
      icon: <Code size={20} className="text-cyan-400" />,
      color: 'from-cyan-500 to-teal-400',
      bgColor: 'bg-cyan-500/20',
      skills: ['React', 'Firebase Auth & Firestore', 'Tailwind CSS', 'Howler.js', 'PWA']
    },
    {
      year: '2025',
      title: 'AgroSmart & AgroSmart 2.0 — Smart IoT Agriculture',
      category: 'IoT & Telemetry Engineering',
      description:
        'Developed an IoT smart agriculture monitoring system integrating environmental sensors, real-time dashboard for soil moisture, temperature, and humidity, automated irrigation thresholds, and interactive data-driven visualization dashboards.',
      icon: <Zap size={20} className="text-emerald-400" />,
      color: 'from-emerald-500 to-green-400',
      bgColor: 'bg-emerald-500/20',
      skills: ['IoT Sensors', 'Real-Time Telemetry', 'Automated Irrigation', 'Data Visualization']
    },
    {
      year: '2024 – 2025',
      title: 'Diploma in Software Engineering (DSE)',
      category: 'Academic Program (NIBM)',
      description:
        'Enrolled in Diploma in Software Engineering at National Institute of Business Management (NIBM), Kandy, building core proficiencies in object-oriented programming, Java, JavaScript, relational databases (MySQL), and web development.',
      icon: <BookOpen size={20} className="text-purple-400" />,
      badgeImage: '/images/nibm-logo.png',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/20',
      skills: ['Java', 'JavaScript', 'MySQL', 'OOP Design', 'Web Engineering']
    },
    {
      year: '2024',
      title: 'Committee Member – IT Society & CYBOTS Robotics',
      category: 'Leadership & Events (NIBM)',
      description:
        'Elected Committee Member of the NIBM IT Society. Served as a lead organizer for flagship collegiate technology initiatives including CYBOTS robotics competitions, gaming tournaments, and technical workshops.',
      icon: <Users size={20} className="text-amber-400" />,
      badgeImage: '/images/nibm-logo.png',
      color: 'from-amber-500 to-orange-400',
      bgColor: 'bg-amber-500/20',
      skills: ['IT Society Committee', 'Robotics Organizing', 'CYBOTS', 'Event Management']
    },
    {
      year: '2023 – 2024',
      title: 'G.C.E. Advanced Level — Physical Science Stream',
      category: 'Dharmaraja College, Kandy',
      description:
        'Completed collegiate secondary education in the rigorous Physical Science stream at Dharmaraja College, Kandy, developing mathematical discipline, analytical problem solving, and scientific foundations.',
      icon: <Award size={20} className="text-[#C5A880]" />,
      badgeImage: '/images/dharmaraja-badge.jpg',
      color: 'from-[#C5A880] to-[#E7CEAB]',
      bgColor: 'bg-[#C5A880]/20',
      skills: ['Physical Science', 'Advanced Mathematics', 'Analytical Reasoning', 'Problem Solving']
    },
    {
      year: '2013 – 2024',
      title: '11-Year Collegiate Foundation & Sports Leadership',
      category: 'Dharmaraja College, Kandy',
      description:
        'An 11-year foundation (2013–2024) at Dharmaraja College, completing G.C.E. Ordinary Level (2020) and representing the college in U15 Cricket and U19 Baseball (later joining the NIBM Cricket Team), cultivating team leadership and endurance.',
      icon: <Star size={20} className="text-emerald-400" />,
      badgeImage: '/images/dharmaraja-badge.jpg',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/20',
      skills: ['11 Yrs Collegiate Heritage', 'U15 Cricket', 'U19 Baseball', 'NIBM Cricket', 'Team Leadership']
    }
  ]

  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Authentic Milestones &amp; Journey</p>
          <h2 className="section-title text-white">
            Achievement <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto font-display text-sm sm:text-base leading-relaxed">
            Key professional, academic, leadership, and athletic milestones verified from my engineering journey.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Central Timeline Gradient Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg shadow-primary/50" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.015 }}
                    className="surface-card p-6 sm:p-7 hover:border-primary/50 hover:shadow-2xl transition-all"
                  >
                    {/* Year Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${achievement.bgColor} border border-white/10 text-white`}
                    >
                      <Calendar size={13} className="text-primary" />
                      <span className="font-display tracking-wide">{achievement.year}</span>
                    </div>

                    {/* Achievement Header with Icon or Official School Crest */}
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      {achievement.badgeImage ? (
                        <div className="w-14 h-14 rounded-2xl bg-white p-1.5 border border-white/40 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                          <img
                            src={achievement.badgeImage}
                            alt={achievement.title}
                            className="w-full h-full object-contain rounded-xl"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-12 h-12 rounded-xl ${achievement.bgColor} border border-white/10 flex items-center justify-center flex-shrink-0 shadow-md`}
                        >
                          {achievement.icon}
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1 leading-snug">
                          {achievement.title}
                        </h3>
                        <p className="text-primary text-xs sm:text-sm font-medium font-display">
                          {achievement.category}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-4 text-xs sm:text-sm font-display">
                      {achievement.description}
                    </p>

                    {/* Skills Tags */}
                    <div className={`flex flex-wrap gap-1.5 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      {achievement.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded-full text-[11px] text-slate-300 font-display font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats Grounded in Authentic CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="surface-card p-6 text-center border border-white/10 hover:border-primary/40 transition-all">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Award className="text-primary" size={24} />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">8</div>
            <div className="text-slate-400 text-xs sm:text-sm font-display mt-1">Verified Milestones</div>
          </div>

          <div className="surface-card p-6 text-center border border-white/10 hover:border-primary/40 transition-all">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="text-blue-400" size={24} />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">BSc &amp; HND</div>
            <div className="text-slate-400 text-xs sm:text-sm font-display mt-1">NIBM Software Eng</div>
          </div>

          <div className="surface-card p-6 text-center border border-white/10 hover:border-primary/40 transition-all">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Trophy className="text-emerald-400" size={24} />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">11 Years</div>
            <div className="text-slate-400 text-xs sm:text-sm font-display mt-1">Dharmaraja Heritage</div>
          </div>

          <div className="surface-card p-6 text-center border border-white/10 hover:border-primary/40 transition-all">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Briefcase className="text-purple-400" size={24} />
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-display text-white">Innovior</div>
            <div className="text-slate-400 text-xs sm:text-sm font-display mt-1">Full Stack Intern</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementTimeline