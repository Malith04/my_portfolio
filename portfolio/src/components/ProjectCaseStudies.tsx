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
      image: "/images/soundwave-app.avif",
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
        live: "https://amazing-soundwave.netlify.app",
        github: "https://github.com/Malith04/SoundWave.git",
        demo: "https://amazing-soundwave.netlify.app"
      }
    },
    {
      id: 2,
      title: "ImpactEcho — Verified Volunteerism & Cause Network",
      subtitle: "Next-Gen Social Ecosystem for Real-World Action",
      category: "Social Platform & Web App",
      image: "/images/impactecho-app.png",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion 12", "GSAP", "Zustand", "Dexie.js", "TanStack Query"],
      duration: "Active Development",
      team: "Innovior Interns Group One | Malith: Frontend Engineer & UI/UX Designer",
      status: "In Development",
      
      overview: "A high-performance cause-centered social platform providing Feeds, Reels, 24h Stories, Communities, and organizer-verified check-ins that turn real volunteer hours into legitimate credentials. As Frontend Engineer & UI/UX Designer, I architected the design system, multi-theme engine, Reels player, 24h Stories creator, and client offline persistence.",
      
      problem: {
        title: "The Core Problem",
        description: "Traditional social platforms reward superficial vanity metrics and performative activism. Grassroots organizers struggle to recruit dependable volunteers, while passionate volunteers lack a unified, verified record of their real-world contributions.",
        points: [
          "Vanity metrics prioritized over verified community impact",
          "Grassroots organizers lack tamper-proof volunteer attendance check-ins",
          "Volunteers have no unified, auditable credential of volunteer hours",
          "Complex feed algorithms reward clickbait rather than authentic local causes"
        ]
      },
      
      solution: {
        title: "Frontend Architecture & UI/UX Engineering",
        description: "Crafted a modern, responsive frontend using Next.js 15 App Router, React 19, and TailwindCSS with fluid Framer Motion & GSAP animations, Dexie.js offline caching, and a multi-theme engine.",
        approach: [
          {
            title: "Custom Design System & Multi-Theme Engine",
            description: "Architected a comprehensive CSS variable design system in globals.css supporting Dark, Light, and Monochrome themes.",
            details: "Engineered glassmorphic surfaces, semantic design tokens, and fluid responsive layouts paired with Lucide React and Phosphor Icons."
          },
          {
            title: "Immersive Reels Player & ReelActionBar",
            description: "Built mobile-first short-form vertical video experience with snap navigation and gesture physics using @use-gesture/react.",
            details: "Created the custom overlay ReelActionBar with optimistic like feedback, comment tray modal portals, and Echo reposting lineage."
          },
          {
            title: "24-Hour Ephemeral Stories & Canvas Studio",
            description: "Engineered Instagram-style 24-hour expiring stories creation pipeline (/stories/create).",
            details: "Implemented interactive stickers, media upload, geolocation tags, user mentions, and HTML5 canvas drawing overlays."
          },
          {
            title: "Client Offline Persistence & Optimistic Sync",
            description: "Implemented client-side caching with Dexie.js (IndexedDB) and MiniSearch full-text search.",
            details: "Utilized Zustand for reactive client state and TanStack Query v5 for optimistic server cache updates and seamless offline fallbacks."
          }
        ]
      },
      
      features: [
        "Mobile-first vertical Reels player with snap gestures (@use-gesture/react)",
        "Custom ReelActionBar with optimistic likes, echoes & modal portals",
        "24-Hour Stories creation studio with stickers & drawing tools",
        "Theme engine with real-time Dark, Light, and Monochrome switching",
        "Dexie.js (IndexedDB) offline database & MiniSearch client search",
        "Cause Hubs & Communities discovery, creation flows & permissions"
      ],
      
      results: {
        metrics: [
          { label: "Gesture FPS", value: "60 FPS", icon: TrendingUp },
          { label: "Theme Switch", value: "<16ms", icon: CheckCircle },
          { label: "Optimistic UI", value: "<50ms", icon: Star },
          { label: "Core Modules", value: "8+", icon: Users }
        ],
        achievements: [
          "Architected complete frontend design system with multi-theme engine",
          "Built high-performance vertical Reels player with gesture snap navigation",
          "Implemented full 24h Stories creation pipeline with drawing canvas & stickers",
          "Integrated Dexie.js IndexedDB client offline persistence and search"
        ]
      },
      
      learnings: [
        "Mastered Next.js 15 App Router and React 19 concurrent features",
        "Deepened expertise in physics-based animations with Framer Motion 12 & GSAP",
        "Implemented client-side offline storage with Dexie.js IndexedDB",
        "Designed scalable component architectures with Zustand and TanStack Query"
      ],
      
      links: {
        live: "#",
        github: "https://github.com/Malith04/ImpactEcho",
        demo: "https://github.com/Malith04/ImpactEcho"
      }
    },
    {
      id: 3,
      title: "AgroSmart 2.0",
      subtitle: "Smart Agriculture Management Platform",
      category: "IoT Application",
      image: "/images/agrosmart-system.webp",
      technologies: ["React 19", "Three.js", "Node.js", "MongoDB", "IoT Sensors"],
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
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
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
