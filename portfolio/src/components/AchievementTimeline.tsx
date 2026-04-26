import { motion } from 'framer-motion'
import { Award, Calendar, Trophy, Star, Zap, Target, BookOpen, Code } from 'lucide-react'

const AchievementTimeline = () => {
  const achievements = [
    {
      year: '2024',
      title: 'Advanced React Development',
      category: 'Technical Milestone',
      description: 'Mastered React 18 with TypeScript, built 3 major projects including SoundWave Music App with 10-band equalizer',
      icon: <Code size={20} />,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      skills: ['React 18', 'TypeScript', 'Web Audio API', 'PWA']
    },
    {
      year: '2024',
      title: 'Firebase Integration Expert',
      category: 'Backend Achievement',
      description: 'Successfully integrated Firebase authentication, Firestore database, and real-time features in multiple projects',
      icon: <Zap size={20} />,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/20',
      skills: ['Firebase Auth', 'Firestore', 'Real-time DB', 'Cloud Functions']
    },
    {
      year: '2023',
      title: '3D Visualization Mastery',
      category: 'Innovation Award',
      description: 'Implemented complex 3D farm visualization using React Three Fiber for AgroSmart 2.0 project',
      icon: <Trophy size={20} />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      skills: ['Three.js', 'React Three Fiber', '3D Modeling', 'IoT Integration']
    },
    {
      year: '2023',
      title: 'NIBM Software Engineering',
      category: 'Education',
      description: 'Started Bachelor of Software Engineering at NIBM, focusing on modern web technologies and software architecture',
      icon: <BookOpen size={20} />,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/20',
      skills: ['Software Architecture', 'Database Design', 'System Analysis', 'Project Management']
    },
    {
      year: '2023',
      title: 'Full-Stack Development',
      category: 'Technical Growth',
      description: 'Expanded skills to full-stack development with Node.js, Express, and modern frontend frameworks',
      icon: <Target size={20} />,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-500/20',
      skills: ['Node.js', 'Express', 'REST APIs', 'Database Integration']
    },
    {
      year: '2022',
      title: 'Web Development Foundation',
      category: 'Learning Milestone',
      description: 'Built strong foundation in HTML5, CSS3, JavaScript, and responsive design principles',
      icon: <Star size={20} />,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/20',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
    }
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-kicker mb-3">Journey</p>
          <h2 className="section-title">
            Achievement <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Key milestones and accomplishments in my software development journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg shadow-primary/50" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="surface-card p-6 hover:shadow-2xl transition-all"
                  >
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 ${achievement.bgColor} border border-current/30`}>
                      <Calendar size={14} />
                      <span>{achievement.year}</span>
                    </div>

                    {/* Achievement Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${achievement.bgColor} flex items-center justify-center flex-shrink-0`}>
                        <div className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-display font-bold text-white mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-primary text-sm font-medium">
                          {achievement.category}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {achievement.description}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {achievement.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-slate-300 font-medium"
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

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="surface-card p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Award className="text-blue-400" size={24} />
            </div>
            <div className="text-2xl font-bold text-white">{achievements.length}</div>
            <div className="text-slate-400 text-sm">Achievements</div>
          </div>
          
          <div className="surface-card p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Code className="text-green-400" size={24} />
            </div>
            <div className="text-2xl font-bold text-white">15+</div>
            <div className="text-slate-400 text-sm">Technologies</div>
          </div>
          
          <div className="surface-card p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Trophy className="text-purple-400" size={24} />
            </div>
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-slate-400 text-sm">Major Projects</div>
          </div>
          
          <div className="surface-card p-6 text-center">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Star className="text-orange-400" size={24} />
            </div>
            <div className="text-2xl font-bold text-white">2+</div>
            <div className="text-slate-400 text-sm">Years Learning</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementTimeline