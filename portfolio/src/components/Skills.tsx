import { motion } from 'framer-motion'
import { Code, Laptop, Trophy, Wrench, Star } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={28} />,
      title: 'Programming Languages',
      description: 'Proficient in modern programming languages with strong problem-solving abilities.',
      skills: [
        { name: 'JavaScript', level: 85, category: 'Advanced' },
        { name: 'HTML5', level: 90, category: 'Advanced' },
        { name: 'CSS3', level: 88, category: 'Advanced' },
        { name: 'C#', level: 70, category: 'Intermediate' },
        { name: 'Spring-Boot', level: 65, category: 'Intermediate' },
        { name: 'Java', level: 75, category: 'Intermediate' }
      ]
    },
    {
      icon: <Laptop size={28} />,
      title: 'Frameworks & Libraries',
      description: 'Experience with popular frameworks for building scalable applications.',
      skills: [
        { name: 'React', level: 90, category: 'Advanced' },
        { name: 'Node.js', level: 75, category: 'Intermediate' },
        { name: 'Express', level: 70, category: 'Intermediate' },
        { name: 'Bootstrap', level: 85, category: 'Advanced' },
        { name: 'jQuery', level: 80, category: 'Advanced' }
      ]
    },
    {
      icon: <Trophy size={28} />,
      title: 'Sports & Leadership',
      description: 'Active in sports with strong leadership and strategic thinking abilities.',
      skills: [
        { name: 'Cricket', level: 85, category: 'Advanced' },
        { name: 'Baseball', level: 80, category: 'Advanced' },
        { name: 'Team Leadership', level: 88, category: 'Advanced' },
        { name: 'Strategic Thinking', level: 90, category: 'Advanced' },
        { name: 'Problem Solving', level: 92, category: 'Expert' },
        { name: 'Communication', level: 85, category: 'Advanced' },
        { name: 'Time Management', level: 88, category: 'Advanced' },
        { name: 'Adaptability', level: 90, category: 'Advanced' }
      ]
    },
    {
      icon: <Wrench size={28} />,
      title: 'Tools & Learning',
      description: 'Experienced with development tools and committed to continuous learning.',
      skills: [
        { name: 'Git', level: 85, category: 'Advanced' },
        { name: 'VS Code', level: 95, category: 'Expert' },
        { name: 'Figma', level: 75, category: 'Intermediate' },
        { name: 'English Knowledge', level: 90, category: 'Advanced' },
        { name: 'Self-Learning', level: 95, category: 'Expert' },
        { name: 'AI Handling', level: 80, category: 'Advanced' }
      ]
    }
  ]

  const getStarRating = (level: number) => {
    if (level >= 90) return 5
    if (level >= 80) return 4
    if (level >= 70) return 3
    if (level >= 60) return 2
    return 1
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Expert': return 'text-green-400 bg-green-400/20 border-green-400/30'
      case 'Advanced': return 'text-blue-400 bg-blue-400/20 border-blue-400/30'
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30'
      default: return 'text-slate-400 bg-slate-400/20 border-slate-400/30'
    }
  }

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Expertise</p>
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="surface-card overflow-hidden"
            >
              <div className="p-6 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-slate-100">{category.title}</h3>
                    <p className="text-slate-400">{category.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.05 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(skill.category)}`}>
                        {skill.category}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {/* Star Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={14}
                            className={`${
                              starIndex < getStarRating(skill.level)
                                ? 'text-primary fill-primary'
                                : 'text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + j * 0.05 + 0.3, duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                      
                      {/* Percentage */}
                      <span className="text-primary font-semibold text-sm w-10 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
