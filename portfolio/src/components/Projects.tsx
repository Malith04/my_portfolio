import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Radio, Music, Sprout, Code, Image, Play, ChevronLeft, ChevronRight } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [currentScreenshot, setCurrentScreenshot] = useState(0)
  const projects = [
    {
      title: 'ImpactEcho — Cause Social & Verified Volunteering',
      description: 'A revolutionary cause-driven social platform transforming grassroots activism into verified volunteer hours. Built under Innovior Interns Group One, where I served as the Frontend Engineer & UI/UX Designer. I architected the design system, multi-theme engine (dark/light/mono), fluid Framer Motion & GSAP animations, responsive Reels player with custom ReelActionBar, 24-hour ephemeral Stories creator, and Dexie.js offline caching.',
      image: '/images/impactecho-app.png',
      screenshots: [
        '/images/impactecho-app.png',
        '/images/impactecho-preview.png',
        '/images/portfolio.jpg'
      ],
      demoGif: '/images/impactecho-app.png',
      tech: ['Next.js 15', 'React 19', 'TypeScript', 'TailwindCSS', 'Framer Motion 12', 'GSAP', 'Zustand', 'Dexie.js', 'TanStack Query'],
      github: 'https://github.com/Malith04/ImpactEcho.git',
      live: '#',
      category: 'featured',
      role: 'Frontend Engineer & UI/UX Designer',
      icon: <Radio size={24} />,
      features: [
        'Custom Design System & Theme Engine (Dark, Light, Monochrome modes)',
        'Mobile-first vertical Reels player with snap gestures (@use-gesture/react)',
        'Custom ReelActionBar overlay with optimistic like, comment tray & Echo reposting',
        '24-Hour ephemeral Stories creator with media upload, stickers & drawing canvas',
        'Dexie.js (IndexedDB) client-side offline persistence & MiniSearch fast lookup',
        'Fluid micro-interactions & physics-based spring animations with Framer Motion 12 & GSAP'
      ],
      codeSnippet: `// ImpactEcho — ReelActionBar & Optimistic Reaction Engine
// Role: Malith Rajamanthri — Frontend Engineer & UI/UX Designer
export const ReelActionBar = ({ reelId, initialLiked, echoesCount }: ReelProps) => {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [echoCount, setEchoCount] = useState(echoesCount);

  const handleEcho = async () => {
    // Optimistic UI update with Framer Motion spring pop
    setEchoCount((prev) => prev + 1);
    toast.success("Echoed to your cause network!");
    
    // Broadcast via real-time gateway & update cache
    await echoService.repost(reelId);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="absolute right-4 bottom-24 flex flex-col items-center gap-5 z-30"
    >
      <motion.button 
        whileTap={{ scale: 0.8 }}
        onClick={() => setIsLiked(!isLiked)}
        className={\`p-3.5 rounded-full backdrop-blur-xl border transition-all \${
          isLiked 
            ? 'bg-rose-500/20 border-rose-500/50 text-rose-400' 
            : 'bg-black/40 border-white/10 text-white hover:bg-white/10'
        }\`}
      >
        <Heart size={24} fill={isLiked ? "currentColor" : "none"} />
      </motion.button>

      <motion.button 
        whileTap={{ scale: 0.85 }}
        onClick={handleEcho}
        className="p-3.5 rounded-full backdrop-blur-xl bg-black/40 border border-white/10 text-primary hover:border-primary/40"
      >
        <Repeat2 size={24} />
        <span className="text-xs font-mono mt-1">{echoCount}</span>
      </motion.button>
    </motion.div>
  );
};`
    },
    {
      title: 'SoundWave Music App',
      description: 'A full-stack Spotify-inspired music streaming web app with PWA support. Features 10-band equalizer, AI recommendations, lyrics sync, and comprehensive admin dashboard.',
      image: '/images/soundwave-ui.jpg',
      screenshots: [
        '/images/soundwave-ui.jpg',
        '/images/mockup-phone.jpg',
        '/images/portfolio-ui.jpg'
      ],
      demoGif: '/images/soundwave-ui.jpg',
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
      ],
      codeSnippet: `// 10-Band Equalizer Implementation
const createEqualizer = (audioContext, source) => {
  const filters = [];
  const frequencies = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];
  
  frequencies.forEach((freq, index) => {
    const filter = audioContext.createBiquadFilter();
    filter.type = index === 0 ? 'lowshelf' : index === frequencies.length - 1 ? 'highshelf' : 'peaking';
    filter.frequency.value = freq;
    filter.Q.value = 1;
    filter.gain.value = 0;
    filters.push(filter);
  });
  
  // Connect filters in series
  source.connect(filters[0]);
  for (let i = 0; i < filters.length - 1; i++) {
    filters[i].connect(filters[i + 1]);
  }
  filters[filters.length - 1].connect(audioContext.destination);
  
  return filters;
};`
    },
    {
      title: 'AgroSmart 2.0',
      description: 'Enhanced agricultural monitoring system with 3D digital twin visualization using React Three Fiber. Real-time IoT sensor integration with AI-based crop recommendations.',
      image: '/images/agrosmart-ui.jpg',
      screenshots: [
        '/images/agrosmart-ui.jpg',
        '/images/mockup-laptop.jpg',
        '/images/portfolio-ui.jpg'
      ],
      demoGif: '/images/agrosmart-ui.jpg',
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
      ],
      codeSnippet: `// 3D Farm Visualization with Three.js
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const FarmModel = ({ sensorData }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {sensorData.map((sensor, index) => (
        <mesh key={index} position={sensor.position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color={sensor.status === 'active' ? '#10b981' : '#ef4444'} 
          />
          <Text position={[0, 1.5, 0]} fontSize={0.5}>
            {sensor.temperature}°C
          </Text>
        </mesh>
      ))}
    </group>
  );
};`
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
              className="surface-card overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 light:hover:border-slate-400/70 transition-all group h-full flex flex-col hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Demo GIF Preview */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 mix-blend-multiply" />
                
                {/* Project-specific background patterns */}
                {project.title.includes('ImpactEcho') && (
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-violet-600/20 to-primary/30 flex items-center justify-center">
                    <Radio size={80} className="text-primary/30 animate-pulse" />
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
                    project.category === 'featured'
                      ? 'border-primary/60 text-primary bg-primary/10 font-semibold'
                      : project.category === 'personal' 
                        ? 'border-primary/40 text-primary' 
                        : 'border-accent/40 text-accent'
                  }`}>
                    {project.category === 'featured' ? '★ Featured UI/UX Lead' : project.category === 'personal' ? 'Personal' : 'Group'} Project
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  {project.icon}
                </div>

                {/* View Details Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm">
                    <Image size={16} />
                    <span>View Details</span>
                  </div>
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
                {/* View Details Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm">
                    <Image size={16} />
                    <span>View Details</span>
                  </div>
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

        {/* View on GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6 font-mono text-sm tracking-wider">// WANT TO EXPLORE MORE CODE REPOSITORIES?</p>
          <motion.a
            href="https://github.com/Malith04"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-ink hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
          >
            <Github size={20} />
            <span>View All Repositories on GitHub</span>
          </motion.a>
        </motion.div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-ink/95 backdrop-blur-xl border border-white/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-ink">
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-semibold text-white">{selectedProject.title}</h3>
                      <p className="text-primary text-xs font-mono mt-0.5">
                        {selectedProject.role ? `${selectedProject.role} • ` : ''}
                        {selectedProject.category === 'featured' ? '★ Featured Lead' : selectedProject.category === 'personal' ? 'Personal Project' : 'Group Project'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white transition-colors text-xl"
                  >
                    ×
                  </button>
                </div>

                {/* Modal Tabs */}
                <div className="flex border-b border-white/10">
                  {['overview', 'screenshots', 'code'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-sm font-medium capitalize transition-colors ${
                        activeTab === tab
                          ? 'text-primary border-b-2 border-primary'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab === 'screenshots' ? 'Screenshots' : tab === 'code' ? 'Code Snippets' : 'Overview'}
                    </button>
                  ))}
                </div>

                {/* Modal Content */}
                <div className="p-6 max-h-[60vh] overflow-y-auto">
                  {activeTab === 'overview' && (
                    <div className="space-y-6">
                      <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features & Architecture</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {selectedProject.features.map((feature: string, index: number) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                              <span className="text-primary mt-0.5">▹</span>
                              <span className="text-slate-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech: string, index: number) => (
                            <span
                              key={index}
                              className="px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-lg text-primary text-xs font-mono font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'screenshots' && (
                    <div className="space-y-6">
                      {/* Screenshot Gallery */}
                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden">
                          <img
                            src={selectedProject.screenshots?.[currentScreenshot] || selectedProject.image}
                            alt={`${selectedProject.title} screenshot ${currentScreenshot + 1}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        
                        {/* Screenshot Navigation */}
                        <div className="flex items-center justify-between mt-4">
                          <button
                            onClick={() => setCurrentScreenshot(Math.max(0, currentScreenshot - 1))}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                            disabled={currentScreenshot === 0}
                          >
                            <ChevronLeft size={16} />
                            Previous
                          </button>
                          
                          <div className="flex gap-2">
                            {[0, 1, 2].map((index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentScreenshot(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                  currentScreenshot === index ? 'bg-primary' : 'bg-white/30'
                                }`}
                              />
                            ))}
                          </div>
                          
                          <button
                            onClick={() => setCurrentScreenshot(Math.min(2, currentScreenshot + 1))}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                            disabled={currentScreenshot === 2}
                          >
                            Next
                            <ChevronRight size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'code' && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Code size={20} />
                          Code Implementation
                        </h4>
                        <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto">
                          <pre className="text-sm text-slate-300">
                            <code>{selectedProject.codeSnippet}</code>
                          </pre>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white/5 rounded-xl">
                          <h5 className="font-semibold text-white mb-2">Architecture</h5>
                          <p className="text-slate-400 text-sm">Modern component-based architecture with clean separation of concerns</p>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl">
                          <h5 className="font-semibold text-white mb-2">Performance</h5>
                          <p className="text-slate-400 text-sm">Optimized for speed with lazy loading and efficient state management</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between p-6 border-t border-white/10">
                  <div className="flex gap-3">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                    {selectedProject.live !== '#' && (
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg text-black transition-colors"
                      >
                        <Play size={16} />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
