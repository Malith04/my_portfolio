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
    { text: "Hi! I'm Malith's AI assistant. Ask me anything about his skills, projects, or experience! 🚀", isBot: true }
  ])
  const [input, setInput] = useState('')

  const responses: Record<string, string[]> = {
    skills: [
      "Malith is proficient in JavaScript, HTML5, CSS3, Python, Java, React, and Node.js. He's also skilled in tools like Git, VS Code, Figma!",
      "His technical skills include modern web development frameworks and languages. He's also great at sports like Cricket and Chess!"
    ],
    projects: [
      "Malith has worked on several exciting projects including this portfolio website, a student registration system, gym management system, and car rental application!",
      "His projects showcase his full-stack development skills, from frontend design to backend functionality!"
    ],
    education: [
      "Malith is currently an undergraduate student at NIBM, pursuing his dream of becoming a Software Engineer!",
      "He's committed to continuous learning and has completed various courses including English proficiency and web development certifications."
    ],
    contact: [
      "You can reach Malith at thegr8malith@gmail.com or call him at 0767421844. He's also active on LinkedIn and GitHub!",
      "Feel free to connect with Malith through the contact form or reach out directly via email!"
    ],
    default: [
      "That's an interesting question! You can learn more about Malith by exploring his portfolio sections.",
      "I'd be happy to tell you more about Malith's skills, projects, education, or experience. What interests you most?"
    ]
  }

  const getBotResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase()
    if (msg.includes('skill') || msg.includes('technology')) {
      return responses.skills[Math.floor(Math.random() * responses.skills.length)]
    } else if (msg.includes('project') || msg.includes('work')) {
      return responses.projects[Math.floor(Math.random() * responses.projects.length)]
    } else if (msg.includes('education') || msg.includes('study')) {
      return responses.education[Math.floor(Math.random() * responses.education.length)]
    } else if (msg.includes('contact') || msg.includes('email')) {
      return responses.contact[Math.floor(Math.random() * responses.contact.length)]
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
