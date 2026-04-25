import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, Sun, Moon, MessageCircle, X, Send } from 'lucide-react'

interface ActionButtonProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

const ActionButton = ({ theme, onToggleTheme }: ActionButtonProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    { text: "Hi there! 👋 I'm Malith's AI assistant. I can tell you about his skills in React & TypeScript, his latest projects like SoundWave Music App, or how to connect with him. What interests you most? 🚀", isBot: true }
  ])
  const [input, setInput] = useState('')

  const responses: Record<string, string[]> = {
    skills: [
      "Malith is skilled in React, TypeScript, JavaScript, Python, Java, Node.js, and modern web technologies. He's also proficient with Git, VS Code, and Figma!",
      "His technical stack includes React 18, TypeScript, Tailwind CSS, Framer Motion, and Vite. He's passionate about creating modern, responsive web applications!",
      "Malith excels in full-stack development with expertise in both frontend (React, CSS3, HTML5) and backend (Node.js, Python) technologies."
    ],
    projects: [
      "Malith has built amazing projects including: Supermarket System (React 19 + Firebase), SoundWave Music App (Spotify-inspired), and AgroSmart 2.0 (3D visualization)!",
      "His portfolio showcases modern web applications with features like real-time data, 3D visualizations, and responsive design. Check out his Projects section!",
      "Recent projects include this portfolio (React + TypeScript), music streaming app with live demo, and agricultural management system with 3D models."
    ],
    education: [
      "Malith is an undergraduate Software Engineering student at NIBM, passionate about learning cutting-edge technologies and building innovative solutions!",
      "He's committed to continuous learning with 2+ years of development experience and expertise in modern web development frameworks."
    ],
    contact: [
      "You can reach Malith at malithrajamanthri@gmail.com or call/WhatsApp him at +94 76 742 1844. He's also active on LinkedIn and social media!",
      "Connect with Malith through the contact switcher below - choose Phone, Email, LinkedIn, Instagram, or Facebook. He responds quickly!"
    ],
    experience: [
      "Malith has 2+ years of learning experience in software development, with hands-on projects in React, TypeScript, and full-stack development.",
      "His experience includes building modern web applications, working with databases, and creating responsive user interfaces with the latest technologies."
    ],
    technologies: [
      "Malith works with React 18, TypeScript, Tailwind CSS, Framer Motion, Vite, Node.js, Python, Java, Git, and modern development tools.",
      "He's experienced with modern build tools like Vite, styling frameworks like Tailwind CSS, and animation libraries like Framer Motion."
    ],
    sports: [
      "Besides coding, Malith enjoys playing Cricket and Baseball! He believes sports help develop teamwork and strategic thinking skills.",
      "Malith is passionate about Cricket and Baseball, which complement his problem-solving skills in software development."
    ],
    default: [
      "That's an interesting question! I can tell you about Malith's skills, projects, education, experience, or contact information. What would you like to know?",
      "I'd be happy to help! Ask me about Malith's technical skills, recent projects, education background, or how to get in touch with him.",
      "Feel free to ask about Malith's expertise in React, TypeScript, his latest projects, or his journey as a Software Engineering student!"
    ]
  }

  const getBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase()
    if (msg.includes('skill') || msg.includes('technology') || msg.includes('tech') || msg.includes('programming')) {
      return responses.skills[Math.floor(Math.random() * responses.skills.length)]
    } else if (msg.includes('project') || msg.includes('work') || msg.includes('portfolio') || msg.includes('app')) {
      return responses.projects[Math.floor(Math.random() * responses.projects.length)]
    } else if (msg.includes('education') || msg.includes('study') || msg.includes('university') || msg.includes('nibm')) {
      return responses.education[Math.floor(Math.random() * responses.education.length)]
    } else if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach')) {
      return responses.contact[Math.floor(Math.random() * responses.contact.length)]
    } else if (msg.includes('experience') || msg.includes('background') || msg.includes('career')) {
      return responses.experience[Math.floor(Math.random() * responses.experience.length)]
    } else if (msg.includes('react') || msg.includes('typescript') || msg.includes('javascript') || msg.includes('python')) {
      return responses.technologies[Math.floor(Math.random() * responses.technologies.length)]
    } else if (msg.includes('sport') || msg.includes('cricket') || msg.includes('baseball') || msg.includes('hobby')) {
      return responses.sports[Math.floor(Math.random() * responses.sports.length)]
    } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "Hello! 👋 I'm here to help you learn about Malith. Ask me about his skills, projects, or experience!"
    } else if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're welcome! Feel free to ask me anything else about Malith's work or background! 😊"
    }
    return responses.default[Math.floor(Math.random() * responses.default.length)]
  }

  const handleSend = () => {
    if (!input.trim()) return
    
    setMessages([...messages, { text: input, isBot: false }])
    setInput('')
    
    setTimeout(() => {
      const botResponse = getBotResponse(input)
      setMessages(prev => [...prev, { text: botResponse, isBot: true }])
    }, 1000)
  }

  return (
    <>
      {/* Action Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-primary/50 transition-all"
        >
          <Settings size={24} />
        </motion.button>

        {/* Action Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-20 right-0 bg-black/90 backdrop-blur-md border border-white/10 rounded-xl p-2 space-y-2 min-w-[200px]"
            >
              <button
                onClick={() => {
                  onToggleTheme()
                  setIsMenuOpen(false)
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-all"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span>Change Theme</span>
              </button>
              <button
                onClick={() => {
                  setIsChatOpen(true)
                  setIsMenuOpen(false)
                }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 rounded-lg transition-all"
              >
                <MessageCircle size={20} />
                <span>Open Chat</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed bottom-8 right-8 w-96 h-[500px] bg-black/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="font-bold flex items-center gap-2">
                💬 Chat with Malith
              </h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="hover:bg-white/10 p-2 rounded-lg transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-xl ${
                      msg.isBot
                        ? 'bg-white/10 text-white'
                        : 'bg-gradient-to-r from-primary to-accent text-black'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg text-black hover:scale-105 transition-transform"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ActionButton
