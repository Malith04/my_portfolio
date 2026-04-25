import { motion } from 'framer-motion'
import { ExternalLink, Github, ShoppingCart, Music, Sprout } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Supermarket System',
      description: 'A comprehensive e-commerce platform with public product browsing, cart management, and admin portal. Features role-based access, Firebase integration, and complete order management system.',
      image: '/images/supermarket-system.jpg',
      tech: ['React 19', 'Vite', 'Firebase', 'React Router', 'Lucide React', 'JavaScript'],
      github: 'https://github.com/Malith04/Supermarket-System.git',
      live: '#',
      category: 'personal',
      icon: <ShoppingCart size={24} />,
      features: [
        'Product catalog & categories',
        'Cart & checkout flow',
        'Admin dashboard with metrics',
        'Order tracking & status updates',
        'Role-based access control',
        'Responsive UI with dark mode'
      ]
    },
    {
      title: 'SoundWave Music App',
      description: 'A full-stack Spotify-inspired music streaming web app with PWA support. Features 10-band equalizer, AI recommendations, lyrics sync, and comprehensive admin dashboard.',
      image: '/images/soundwave-app.jpg',
      tech: ['React 18', 'Tailwind CSS', 'Firebase', 'Howler.js', 'Web Audio API', 'YouTube API'],
      github: 'https://github.com/Malith04/SoundWave.git',
      live: 'https://amazing-soundwave.netlify.app',
      category: 'personal',
      icon: <Music size={24} />,
      features: [
        'Music streaming with iTunes & Jamendo APIs',
        '10-band equalizer & audio effects',
        'AI-powered recommendations',
        'Synced lyrics & video playback',
        'PWA with offline support',
        'Comprehensive admin dashboard'
      ]
    },
    {
      title: 'AgroSmart 2.0',
      description: 'Enhanced agricultural monitoring system with 3D digital twin visualization using React Three Fiber. Real-time IoT sensor integration with AI-based crop recommendations.',
      image: '/images/agrosmart-system.jpg',
      tech: ['React', 'Three.js', 'React Three Fiber', 'IoT Integration', 'AI Analytics', 'Real-time Data'],
      github: 'https://github.com/JayamalNarampanawa/AgroSmart.git',
      live: '#',
      category: 'group',
      icon: <Sprout size={24} />,
      features: [
        '3D digital twin farm visualization',
        'Real-time IoT sensor data integration',
        'AI-based crop recommendations',
        'Interactive simulation environment',
        'Data-driven visual feedback',
        'Enhanced decision-making interface'
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="surface-card overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 light:hover:border-slate-400/70 transition-all group h-full flex flex-col hover:shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30" />
                
                {/* Project-specific background patterns */}
                {project.title === 'Supermarket System' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                    <ShoppingCart size={80} className="text-white/20" />
                  </div>
                )}
                {project.title === 'SoundWave Music App' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Music size={80} className="text-white/20" />
                  </div>
                )}
                {project.title === 'AgroSmart 2.0' && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-500/20 flex items-center justify-center">
                    <Sprout size={80} className="text-white/20" />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className={`pill text-xs ${
                    project.category === 'personal' 
                      ? 'border-primary/40 text-primary' 
                      : 'border-accent/40 text-accent'
                  }`}>
                    {project.category === 'personal' ? 'Personal' : 'Group'} Project
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  {project.icon}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-bold mb-3 flex items-center gap-2 text-white">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed text-sm flex-1">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.slice(0, 4).map((tech, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-white/10 border border-primary/30 rounded-md text-xs text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-white/5 border border-white/20 rounded-md text-xs text-slate-400">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-primary dark:hover:text-black rounded-lg transition-all font-medium text-sm flex-1 justify-center border border-transparent hover:border-slate-400 dark:hover:border-primary"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  {project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-black hover:bg-yellow-600 dark:hover:bg-accent rounded-lg transition-all font-medium text-sm flex-1 justify-center shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/Malith04"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-black hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-primary/50 light:hover:shadow-slate-400/50 transition-all hover:from-yellow-600 hover:to-cyan-600"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects