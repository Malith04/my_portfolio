import { motion } from 'framer-motion'
import { Code, Laptop, Trophy, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={28} />,
      title: 'Programming Languages',
      description: 'Proficient in modern programming languages with strong problem-solving abilities.',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'C#', 'Spring-Boot', 'Java']
    },
    {
      icon: <Laptop size={28} />,
      title: 'Frameworks & Libraries',
      description: 'Experience with popular frameworks for building scalable applications.',
      skills: ['React', 'Node.js', 'Express', 'Bootstrap', 'jQuery']
    },
    {
      icon: <Trophy size={28} />,
      title: 'Sports & Leadership',
      description: 'Active in sports with strong leadership and strategic thinking abilities.',
      skills: ['Cricket', 'Baseball', 'Team Leadership', 'Strategic Thinking', 'Problem Solving', 'Communication', 'Time Management', 'Adaptability']
    },
    {
      icon: <Wrench size={28} />,
      title: 'Tools & Learning',
      description: 'Experienced with development tools and committed to continuous learning.',
      skills: ['Git', 'VS Code', 'Figma', 'English Knowledge', 'Self-Learning', 'AI Handling']
    }
  ]

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

              <div className="p-6 flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.03 }}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-200"
                  >
                    {skill}
                  </motion.span>
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
