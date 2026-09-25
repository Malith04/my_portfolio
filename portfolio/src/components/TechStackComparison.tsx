import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Zap, Shield, TrendingUp, CheckCircle, XCircle } from 'lucide-react'

const TechStackComparison = () => {
  const [activeComparison, setActiveComparison] = useState<keyof typeof comparisons>('react-vs-angular')

  const comparisons = {
    'react-vs-angular': {
      title: 'React vs Angular',
      subtitle: 'Why I chose React for modern web development',
      tech1: {
        name: 'React',
        logo: '⚛️',
        color: 'from-blue-400 to-cyan-400',
        bgColor: 'bg-blue-500/20',
        chosen: true,
        pros: [
          'Lightweight and flexible',
          'Huge ecosystem and community',
          'Easy to learn and implement',
          'Excellent performance with Virtual DOM',
          'Great developer tools',
          'Component reusability'
        ],
        cons: [
          'Requires additional libraries for full functionality',
          'Rapid ecosystem changes'
        ],
        useCases: ['SPA development', 'Component-based architecture', 'Fast prototyping'],
        performance: 95,
        learningCurve: 85,
        community: 98,
        jobMarket: 92
      },
      tech2: {
        name: 'Angular',
        logo: '🅰️',
        color: 'from-red-400 to-pink-400',
        bgColor: 'bg-red-500/20',
        chosen: false,
        pros: [
          'Full-featured framework',
          'TypeScript by default',
          'Powerful CLI tools',
          'Enterprise-ready',
          'Built-in testing utilities'
        ],
        cons: [
          'Steep learning curve',
          'Heavy framework overhead',
          'Complex for simple projects',
          'Frequent major updates'
        ],
        useCases: ['Enterprise applications', 'Large-scale projects', 'Team development'],
        performance: 88,
        learningCurve: 65,
        community: 85,
        jobMarket: 88
      },
      reasoning: "I chose React and Next.js because of their unmatched performance, rich ecosystem, and flexible architecture. For modern applications like ImpactEcho and SoundWave, React's component-driven paradigm and cutting-edge animation libraries like Framer Motion and GSAP allowed me to build ultra-responsive, immersive user interfaces with maintainable code."
    },
    'typescript-vs-javascript': {
      title: 'TypeScript vs JavaScript',
      subtitle: 'The evolution to type-safe development',
      tech1: {
        name: 'TypeScript',
        logo: '🔷',
        color: 'from-blue-500 to-indigo-500',
        bgColor: 'bg-blue-500/20',
        chosen: true,
        pros: [
          'Static type checking',
          'Better IDE support and autocomplete',
          'Catches errors at compile time',
          'Improved code documentation',
          'Better refactoring capabilities',
          'Enhanced team collaboration'
        ],
        cons: [
          'Additional compilation step',
          'Learning curve for type system'
        ],
        useCases: ['Large applications', 'Team projects', 'Long-term maintenance'],
        performance: 90,
        learningCurve: 75,
        community: 95,
        jobMarket: 94
      },
      tech2: {
        name: 'JavaScript',
        logo: '🟨',
        color: 'from-yellow-400 to-orange-400',
        bgColor: 'bg-yellow-500/20',
        chosen: false,
        pros: [
          'No compilation needed',
          'Faster development for small projects',
          'Universal browser support',
          'Simpler syntax',
          'Immediate execution'
        ],
        cons: [
          'Runtime errors',
          'No type safety',
          'Harder to maintain large codebases',
          'Limited IDE assistance'
        ],
        useCases: ['Quick prototypes', 'Small projects', 'Learning web development'],
        performance: 85,
        learningCurve: 95,
        community: 98,
        jobMarket: 90
      },
      reasoning: 'TypeScript has become my go-to choice for all serious projects. The type safety and enhanced developer experience significantly reduce bugs and improve code quality. In my portfolio project, TypeScript helped catch potential issues early and made the codebase more maintainable.'
    },
    'tailwind-vs-bootstrap': {
      title: 'Tailwind CSS vs Bootstrap',
      subtitle: 'Modern utility-first vs component-first approach',
      tech1: {
        name: 'Tailwind CSS',
        logo: '🎨',
        color: 'from-cyan-400 to-teal-400',
        bgColor: 'bg-cyan-500/20',
        chosen: true,
        pros: [
          'Utility-first approach',
          'Highly customizable',
          'Smaller bundle size (with purging)',
          'No pre-built component constraints',
          'Excellent developer experience',
          'Modern design system'
        ],
        cons: [
          'Learning curve for utility classes',
          'Verbose HTML initially'
        ],
        useCases: ['Custom designs', 'Modern web apps', 'Design systems'],
        performance: 95,
        learningCurve: 80,
        community: 92,
        jobMarket: 88
      },
      tech2: {
        name: 'Bootstrap',
        logo: '🅱️',
        color: 'from-purple-400 to-indigo-400',
        bgColor: 'bg-purple-500/20',
        chosen: false,
        pros: [
          'Pre-built components',
          'Quick prototyping',
          'Established ecosystem',
          'Easy to learn',
          'Good documentation'
        ],
        cons: [
          'Generic look without customization',
          'Larger bundle size',
          'Less flexibility',
          'jQuery dependency (v4 removed)'
        ],
        useCases: ['Rapid prototyping', 'Admin dashboards', 'Traditional websites'],
        performance: 82,
        learningCurve: 90,
        community: 88,
        jobMarket: 85
      },
      reasoning: 'Tailwind CSS gives me complete control over the design while maintaining consistency. For my portfolio and projects, the utility-first approach allows me to create unique, modern interfaces without being constrained by pre-built components. The developer experience and customization capabilities are unmatched.'
    }
  }

  const comparisonTabs: Array<{key: keyof typeof comparisons, label: string, icon: JSX.Element}> = [
    { key: 'react-vs-angular', label: 'React vs Angular', icon: <Code size={16} /> },
    { key: 'typescript-vs-javascript', label: 'TypeScript vs JS', icon: <Shield size={16} /> },
    { key: 'tailwind-vs-bootstrap', label: 'Tailwind vs Bootstrap', icon: <Zap size={16} /> }
  ]

  const current = comparisons[activeComparison]

  return (
    <section id="tech-comparison" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-2 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.22em] font-display font-semibold text-primary">
              Framework &amp; Architecture Trade-Offs
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white leading-tight">
            Comparing <span className="text-gradient">Frameworks &amp; Stacks</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-display leading-relaxed">
            Direct side-by-side evaluations: Why I chose React 19 over Angular, TypeScript over JavaScript, and Tailwind CSS over Bootstrap for high-performance production applications.
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {comparisonTabs.map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveComparison(tab.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeComparison === tab.key
                  ? 'bg-gradient-to-r from-primary to-accent text-black font-semibold shadow-lg shadow-primary/20'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeComparison}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Comparison Header */}
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 text-primary text-xs font-display font-semibold uppercase tracking-[0.2em] mb-3">
                <Code size={14} className="text-primary" />
                Active Evaluation: {current.title}
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 tracking-tight">
                {current.title}
              </h3>
              <p className="text-slate-300 font-display text-sm sm:text-base max-w-xl mx-auto">{current.subtitle}</p>
            </div>

            {/* Comparison Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {[current.tech1, current.tech2].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`surface-card overflow-hidden ${
                    tech.chosen ? 'ring-2 ring-primary/50' : ''
                  }`}
                >
                  {/* Tech Header */}
                  <div className={`p-6 bg-gradient-to-r ${tech.bgColor} border-b border-white/10`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{tech.logo}</div>
                        <div>
                          <h4 className="text-2xl font-display font-bold text-white">
                            {tech.name}
                          </h4>
                          {tech.chosen && (
                            <div className="flex items-center gap-2 text-primary text-sm font-medium">
                              <CheckCircle size={16} />
                              <span>My Choice</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Performance Metrics */}
                    <div>
                      <h5 className="font-semibold text-white mb-4">Performance Metrics</h5>
                      <div className="space-y-3">
                        {[
                          { label: 'Performance', value: tech.performance },
                          { label: 'Learning Curve', value: tech.learningCurve },
                          { label: 'Community', value: tech.community },
                          { label: 'Job Market', value: tech.jobMarket }
                        ].map((metric) => (
                          <div key={metric.label} className="flex items-center justify-between">
                            <span className="text-slate-300 text-sm">{metric.label}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${metric.value}%` }}
                                  transition={{ delay: 0.5, duration: 0.8 }}
                                  className={`h-full bg-gradient-to-r ${tech.color} rounded-full`}
                                />
                              </div>
                              <span className="text-primary text-sm font-medium w-8">
                                {metric.value}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pros */}
                    <div>
                      <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <CheckCircle className="text-green-400" size={16} />
                        Advantages
                      </h5>
                      <ul className="space-y-2">
                        {tech.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                            <span className="text-green-400 mt-1">•</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div>
                      <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <XCircle className="text-red-400" size={16} />
                        Considerations
                      </h5>
                      <ul className="space-y-2">
                        {tech.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                            <span className="text-red-400 mt-1">•</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h5 className="font-semibold text-white mb-3">Best Use Cases</h5>
                      <div className="flex flex-wrap gap-2">
                        {tech.useCases.map((useCase, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs font-medium border ${
                              tech.chosen
                                ? 'bg-primary/20 border-primary/30 text-primary'
                                : 'bg-white/10 border-white/20 text-slate-300'
                            }`}
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decision Reasoning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="surface-card p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-white mb-3">
                    My Decision Process
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {current.reasoning}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default TechStackComparison