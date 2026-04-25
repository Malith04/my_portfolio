import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  Play, 
  Target, 
  Lightbulb, 
  Code, 
  CheckCircle, 
  TrendingUp,
  Users,
  Clock,
  Star
} from 'lucide-react'

const ProjectCaseStudies = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const caseStudies = [
    {
      id: 1,
      title: "SoundWave Music Streaming App",
      subtitle: "Spotify-Inspired Music Platform",
      category: "Web Application",
      image: "/images/projects/soundwave-hero.jpg",
      technologies: ["React 19", "TypeScript", "Web Audio API", "Tailwind CSS", "Framer Motion"],
      duration: "3 months",
      team: "Solo Project",
      status: "Live",
      
      overview: "A modern music streaming application that replicates Spotify's core functionality with a focus on user experience and performance.",
      
      problem: {
        title: "The Challenge",
        description: "Create a music streaming platform that provides seamless audio playback, intuitive playlist management, and a beautiful user interface that rivals industry standards.",
        points: [
          "Complex audio state management across components",
          "Real-time audio synchronization and controls",
          "Responsive design for all device sizes",
          "Performance optimization for large music libraries"
        ]
      },
      
      solution: {
        title: "The Solution",
        description: "Built a comprehensive music platform using modern React patterns and Web Audio API for professional-grade audio handling.",
        approach: [
          {
            title: "Architecture Design",
            description: "Implemented clean component architecture with proper separation of concerns",
            details: "Used custom hooks for audio management, Zustand for global state, and React Query for data fetching"
          },
          {
            title: "Audio Engine",
            description: "Developed robust audio playback system using Web Audio API",
            details: "Created custom audio context with volume control, equalizer, and crossfade capabilities"
          },
          {
            title: "User Experience",
            description: "Designed intuitive interface with smooth animations and responsive design",
            details: "Implemented drag-and-drop playlist management, keyboard shortcuts, and accessibility features"
          }
        ]
      },
      
      features: [
        "Real-time audio playback with Web Audio API",
        "Custom playlist creation and management",
        "Advanced search and filtering",
        "Responsive design for all devices",
        "Keyboard shortcuts and accessibility",
        "Volume control and audio effects"
      ],
      
      results: {
        metrics: [
          { label: "Performance Score", value: "95/100", icon: TrendingUp },
          { label: "Load Time", value: "< 2s", icon: Clock },
          { label: "User Rating", value: "4.8/5", icon: Star },
          { label: "Mobile Responsive", value: "100%", icon: Users }
        ],
        achievements: [
          "Achieved 95+ Lighthouse performance score",
          "Implemented complex audio state management",
          "Created reusable component library",
          "Built responsive design system"
        ]
      },
      
      learnings: [
        "Mastered Web Audio API and complex state management",
        "Learned advanced React patterns and performance optimization",
        "Gained experience in responsive design and accessibility",
        "Developed skills in modern CSS and animation libraries"
      ],
      
      links: {
        live: "https://soundwave-demo.vercel.app",
        github: "https://github.com/malith/soundwave",
        demo: "https://youtube.com/watch?v=demo"
      }
    },
    {
      id: 2,
      title: "Supermarket Management System",
      subtitle: "Complete Inventory & Sales Platform",
      category: "Business Application",
      image: "/images/projects/supermarket-hero.jpg",
      technologies: ["React", "Firebase", "Tailwind CSS", "Chart.js", "React Router"],
      duration: "4 months",
      team: "Team of 3",
      status: "Production",
      
      overview: "A comprehensive supermarket management system handling inventory, sales, customer management, and analytics for retail businesses.",
      
      problem: {
        title: "Business Challenge",
        description: "Local supermarkets needed a modern, efficient system to manage inventory, track sales, and analyze business performance in real-time.",
        points: [
          "Manual inventory tracking causing errors",
          "No real-time sales analytics",
          "Poor customer data management",
          "Inefficient staff workflow processes"
        ]
      },
      
      solution: {
        title: "Digital Transformation",
        description: "Developed a complete business management platform with real-time data synchronization and comprehensive analytics.",
        approach: [
          {
            title: "System Architecture",
            description: "Built scalable architecture using Firebase for real-time data management",
            details: "Implemented Firestore for data storage, Firebase Auth for security, and Cloud Functions for business logic"
          },
          {
            title: "User Interface Design",
            description: "Created intuitive dashboard for different user roles (admin, cashier, manager)",
            details: "Designed role-based access control with customizable dashboards and reporting tools"
          },
          {
            title: "Data Analytics",
            description: "Implemented comprehensive reporting and analytics system",
            details: "Built real-time charts, sales forecasting, and inventory optimization recommendations"
          }
        ]
      },
      
      features: [
        "Real-time inventory management",
        "Point of sale (POS) system",
        "Customer relationship management",
        "Sales analytics and reporting",
        "Staff management and roles",
        "Barcode scanning integration"
      ],
      
      results: {
        metrics: [
          { label: "Efficiency Gain", value: "40%", icon: TrendingUp },
          { label: "Error Reduction", value: "85%", icon: CheckCircle },
          { label: "User Satisfaction", value: "4.9/5", icon: Star },
          { label: "Active Users", value: "50+", icon: Users }
        ],
        achievements: [
          "Reduced inventory errors by 85%",
          "Improved checkout speed by 40%",
          "Automated reporting and analytics",
          "Streamlined staff workflows"
        ]
      },
      
      learnings: [
        "Gained experience in Firebase ecosystem and real-time databases",
        "Learned business process analysis and optimization",
        "Developed skills in data visualization and analytics",
        "Understood the importance of user training and change management"
      ],
      
      links: {
        live: "https://supermarket-system.vercel.app",
        github: "https://github.com/malith/supermarket-system",
        demo: "https://youtube.com/watch?v=demo2"
      }
    },
    {
      id: 3,
      title: "AgroSmart 2.0",
      subtitle: "Smart Agriculture Management Platform",
      category: "IoT Application",
      image: "/images/projects/agrosmart-hero.jpg",
      technologies: ["React", "Three.js", "Node.js", "MongoDB", "IoT Sensors"],
      duration: "6 months",
      team: "Team of 4",
      status: "Beta",
      
      overview: "An innovative agricultural management platform combining IoT sensors, 3D visualization, and AI-powered insights for modern farming.",
      
      problem: {
        title: "Agricultural Innovation",
        description: "Modern farmers need data-driven tools to optimize crop yields, monitor field conditions, and make informed decisions about their agricultural operations.",
        points: [
          "Limited real-time field monitoring capabilities",
          "Difficulty visualizing large farm areas",
          "Lack of predictive analytics for crop management",
          "Complex data from multiple IoT sensors"
        ]
      },
      
      solution: {
        title: "Smart Farming Solution",
        description: "Created an integrated platform combining IoT data collection, 3D field visualization, and AI-powered agricultural insights.",
        approach: [
          {
            title: "IoT Integration",
            description: "Connected multiple sensor types for comprehensive field monitoring",
            details: "Integrated soil moisture, temperature, humidity, and light sensors with real-time data transmission"
          },
          {
            title: "3D Visualization",
            description: "Built immersive 3D field representation using Three.js",
            details: "Created interactive 3D models showing crop health, sensor locations, and environmental data"
          },
          {
            title: "AI Analytics",
            description: "Implemented machine learning for predictive crop management",
            details: "Developed algorithms for yield prediction, disease detection, and irrigation optimization"
          }
        ]
      },
      
      features: [
        "Real-time IoT sensor monitoring",
        "Interactive 3D field visualization",
        "AI-powered crop health analysis",
        "Automated irrigation recommendations",
        "Weather integration and forecasting",
        "Mobile app for field workers"
      ],
      
      results: {
        metrics: [
          { label: "Yield Increase", value: "25%", icon: TrendingUp },
          { label: "Water Savings", value: "30%", icon: CheckCircle },
          { label: "Farmer Adoption", value: "4.7/5", icon: Star },
          { label: "Sensor Accuracy", value: "98%", icon: Target }
        ],
        achievements: [
          "Increased crop yields by 25% in pilot farms",
          "Reduced water usage by 30% through smart irrigation",
          "Successfully integrated 50+ IoT sensors",
          "Built scalable 3D visualization system"
        ]
      },
      
      learnings: [
        "Mastered 3D web development with Three.js and WebGL",
        "Gained experience in IoT systems and sensor integration",
        "Learned about agricultural processes and farming challenges",
        "Developed skills in data visualization and real-time systems"
      ],
      
      links: {
        live: "https://agrosmart-demo.vercel.app",
        github: "https://github.com/malith/agrosmart-2.0",
        demo: "https://youtube.com/watch?v=demo3"
      }
    }
  ]

  const selectedCase = selectedProject ? caseStudies.find(cs => cs.id === selectedProject) : null

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Deep Dive</p>
          <h2 className="section-title">
            Project <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Detailed analysis of my key projects, from problem identification to solution implementation and results.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="surface-card overflow-hidden hover:border-primary/50 transition-all group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Production' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">{project.subtitle}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 rounded text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 rounded text-xs text-slate-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Project Stats */}
                <div className="flex justify-between text-sm text-slate-400 mb-4">
                  <span>{project.duration}</span>
                  <span>{project.team}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium group-hover:underline">
                    View Case Study
                  </span>
                  <ExternalLink size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-black/95 border border-white/10 rounded-2xl max-w-6xl max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-display font-bold mb-2">{selectedCase.title}</h1>
                      <p className="text-slate-400">{selectedCase.subtitle}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-slate-400 hover:text-white transition-colors text-2xl"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-primary" />
                      <span>{selectedCase.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-primary" />
                      <span>{selectedCase.team}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target size={16} className="text-primary" />
                      <span>{selectedCase.status}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[70vh] space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Lightbulb className="text-primary" size={20} />
                      Project Overview
                    </h3>
                    <p className="text-slate-300 leading-relaxed">{selectedCase.overview}</p>
                  </div>

                  {/* Problem */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Target className="text-primary" size={20} />
                      {selectedCase.problem.title}
                    </h3>
                    <p className="text-slate-300 mb-4">{selectedCase.problem.description}</p>
                    <ul className="space-y-2">
                      {selectedCase.problem.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-300">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Code className="text-primary" size={20} />
                      {selectedCase.solution.title}
                    </h3>
                    <p className="text-slate-300 mb-6">{selectedCase.solution.description}</p>
                    <div className="space-y-4">
                      {selectedCase.solution.approach.map((approach, index) => (
                        <div key={index} className="surface-card p-4">
                          <h4 className="font-semibold text-primary mb-2">{approach.title}</h4>
                          <p className="text-slate-300 mb-2">{approach.description}</p>
                          <p className="text-sm text-slate-400">{approach.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className="text-primary" size={20} />
                      Results & Impact
                    </h3>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {selectedCase.results.metrics.map((metric, index) => (
                        <div key={index} className="surface-card p-4 text-center">
                          <metric.icon className="text-primary mx-auto mb-2" size={24} />
                          <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                          <div className="text-sm text-slate-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {selectedCase.results.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCase.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Learnings */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Key Learnings</h3>
                    <div className="space-y-2">
                      {selectedCase.learnings.map((learning, index) => (
                        <div key={index} className="flex items-start gap-2 text-slate-300">
                          <Star className="text-yellow-400 flex-shrink-0 mt-1" size={16} />
                          <span>{learning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-4 justify-center">
                    {selectedCase.links.live && (
                      <motion.a
                        href={selectedCase.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-xl font-semibold text-ink"
                      >
                        <ExternalLink size={20} />
                        View Live Project
                      </motion.a>
                    )}
                    {selectedCase.links.github && (
                      <motion.a
                        href={selectedCase.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white"
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                    )}
                    {selectedCase.links.demo && (
                      <motion.a
                        href={selectedCase.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white"
                      >
                        <Play size={20} />
                        Watch Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectCaseStudies