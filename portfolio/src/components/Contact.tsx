import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSectionHeader from './AnimatedSectionHeader'
import { Phone, Mail, Linkedin, Instagram, Facebook, Copy, ExternalLink, MessageCircle, Send } from 'lucide-react'

const Contact = () => {
  const [activeContact, setActiveContact] = useState('phone')

  type ContactMethod = {
    icon: JSX.Element
    title: string
    subtitle: string
    value: string
    displayValue: string
    link: string
    color: string
    bgPattern: string
    whatsappLink?: string
  }

  const contactMethods: Record<string, ContactMethod> = {
    phone: {
      icon: <Phone size={32} />,
      title: 'Phone & WhatsApp',
      subtitle: 'Call or Message Me📞',
      value: '+94767421844',
      displayValue: '+94 76 742 1844',
      link: 'tel:+94767421844',
      whatsappLink: 'https://wa.me/94767421844',
      color: 'from-green-500 to-emerald-600',
      bgPattern: 'from-green-500/10 to-emerald-500/10'
    },
    email: {
      icon: <Mail size={32} />,
      title: 'Email Address',
      subtitle: 'Send me a message👋',
      value: 'malithrajamanthri@gmail.com',
      displayValue: 'malithrajamanthri@gmail.com',
      link: 'mailto:malithrajamanthri@gmail.com',
      color: 'from-blue-500 to-cyan-600',
      bgPattern: 'from-blue-500/10 to-cyan-500/10'
    },
    linkedin: {
      icon: <Linkedin size={32} />,
      title: 'LinkedIn Profile',
      subtitle: 'Professional Network🌐',
      value: 'hashintha-malith-794823361',
      displayValue: 'linkedin.com/in/hashintha-malith-794823361',
      link: 'https://www.linkedin.com/in/hashintha-malith-794823361/',
      color: 'from-blue-600 to-indigo-700',
      bgPattern: 'from-blue-600/10 to-indigo-600/10'
    },
    instagram: {
      icon: <Instagram size={32} />,
      title: 'Instagram',
      subtitle: 'Follow my journey',
      value: 'malith_raja',
      displayValue: '@malith_raja',
      link: 'https://www.instagram.com/malith_raja/?hl=en',
      color: 'from-pink-500 to-purple-600',
      bgPattern: 'from-pink-500/10 to-purple-500/10'
    },
    facebook: {
      icon: <Facebook size={32} />,
      title: 'Facebook',
      subtitle: 'Connect with me',
      value: 'malith.rajamanthri',
      displayValue: 'facebook.com/malith.rajamanthri',
      link: 'https://www.facebook.com/malith.rajamanthri',
      color: 'from-blue-500 to-blue-700',
      bgPattern: 'from-blue-500/10 to-blue-700/10'
    }
  }

  const contactTabs = [
    { key: 'phone', label: 'Phone', icon: <Phone size={18} /> },
    { key: 'email', label: 'Email', icon: <Mail size={18} /> },
    { key: 'linkedin', label: 'LinkedIn', icon: <Linkedin size={18} /> },
    { key: 'instagram', label: 'Instagram', icon: <Instagram size={18} /> },
    { key: 'facebook', label: 'Facebook', icon: <Facebook size={18} /> }
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // Add toast notification here if needed
  }

  const currentContact = contactMethods[activeContact]

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <AnimatedSectionHeader className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 mb-2 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.22em] font-display font-semibold text-primary">
              Initiate Contact &amp; Collaboration
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white leading-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-display leading-relaxed">
            Ready to collaborate on new engineering projects, discuss architecture, or explore full-stack development opportunities.
          </p>
        </AnimatedSectionHeader>

        {/* Contact Method Switcher */}
        <div className="mb-12">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 p-1.5 sm:p-2 bg-white/5 [.light_&]:bg-slate-200/50 backdrop-blur-sm rounded-2xl border border-white/10 [.light_&]:border-slate-300">
            {contactTabs.map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveContact(tab.key)}
                className={`relative flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl font-medium text-xs sm:text-sm transition-all hover:scale-105 ${
                  activeContact === tab.key
                    ? 'text-black font-semibold'
                    : 'text-slate-400 hover:text-slate-200 dark:hover:text-slate-200 [.light_&]:text-slate-600 [.light_&]:hover:text-slate-900'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeContact === tab.key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
              </motion.button>
            ))}
          </div>

          {/* Contact Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeContact}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden"
            >
              <div className={`surface-card overflow-hidden border-2 border-transparent bg-gradient-to-br ${currentContact.bgPattern}`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24" />
                </div>

                <div className="relative z-10 p-4 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${currentContact.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                        {currentContact.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-2xl font-display font-bold text-white [.light_&]:text-slate-900 mb-0.5 sm:mb-1">
                          {currentContact.title}
                        </h3>
                        <p className="text-slate-400 [.light_&]:text-slate-600 text-xs sm:text-sm">{currentContact.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Value */}
                  <div className="mb-6 sm:mb-8">
                    <div className="bg-white/10 dark:bg-white/10 [.light_&]:bg-white/80 backdrop-blur-sm rounded-xl p-3.5 sm:p-6 border border-white/20 dark:border-white/20 [.light_&]:border-slate-300 shadow-sm">
                      <p className="text-slate-300 dark:text-slate-300 [.light_&]:text-slate-900 text-sm sm:text-lg font-mono break-all font-medium">
                        {currentContact.displayValue}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2.5 sm:gap-4">
                    <motion.a
                      href={currentContact.link}
                      target={currentContact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={currentContact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${currentContact.color} rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all flex-1 justify-center min-w-[110px] sm:min-w-[140px] text-xs sm:text-sm hover:brightness-110`}
                    >
                      <ExternalLink size={18} />
                      <span>Open</span>
                    </motion.a>

                    {activeContact === 'phone' && currentContact.whatsappLink && (
                      <motion.a
                        href={currentContact.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all flex-1 justify-center min-w-[110px] sm:min-w-[140px] text-xs sm:text-sm"
                      >
                        <MessageCircle size={18} />
                        <span>WhatsApp</span>
                      </motion.a>
                    )}

                    <motion.button
                      onClick={() => copyToClipboard(currentContact.value)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 dark:bg-white/10 [.light_&]:bg-white hover:bg-white/20 [.light_&]:hover:bg-slate-100 border border-white/20 dark:border-white/20 [.light_&]:border-slate-300 rounded-xl font-semibold text-white dark:text-white [.light_&]:text-slate-800 transition-all hover:shadow-lg flex-1 justify-center min-w-[110px] sm:min-w-[140px] text-xs sm:text-sm"
                    >
                      <Copy size={18} />
                      <span>Copy</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Contact Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-4"
        >
          {contactTabs.map((tab) => {
            const contact = contactMethods[tab.key]
            return (
              <motion.button
                key={tab.key}
                onClick={() => setActiveContact(tab.key)}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`surface-card p-3 sm:p-4 text-center hover:border-primary/50 dark:hover:border-primary/50 [.light_&]:hover:border-teal-500/70 transition-all hover:shadow-lg ${
                  activeContact === tab.key ? 'border-primary/50 bg-primary/5 dark:border-primary/50 dark:bg-primary/5 [.light_&]:border-teal-600 [.light_&]:bg-teal-500/10' : ''
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mx-auto mb-2 sm:mb-3 text-white`}>
                  {tab.icon}
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-300 [.light_&]:text-slate-700">{tab.label}</p>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Quick Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="surface-card p-4 sm:p-8 max-w-2xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 sm:mb-4 text-white [.light_&]:text-slate-900">
                Quick <span className="text-gradient">Message</span>
              </h3>
              <p className="text-slate-400 [.light_&]:text-slate-600 text-xs sm:text-sm">
                Send me a quick message and I'll get back to you within 24 hours
              </p>
            </div>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 [.light_&]:text-slate-700 mb-1.5 sm:mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white/5 [.light_&]:bg-slate-100 border border-white/10 [.light_&]:border-slate-300 rounded-xl focus:border-primary focus:outline-none text-white [.light_&]:text-slate-900 placeholder-slate-400 [.light_&]:placeholder-slate-500 transition-colors text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-slate-300 [.light_&]:text-slate-700 mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white/5 [.light_&]:bg-slate-100 border border-white/10 [.light_&]:border-slate-300 rounded-xl focus:border-primary focus:outline-none text-white [.light_&]:text-slate-900 placeholder-slate-400 [.light_&]:placeholder-slate-500 transition-colors text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-300 [.light_&]:text-slate-700 mb-1.5 sm:mb-2">
                  Subject
                </label>
                <select className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white/5 [.light_&]:bg-slate-100 border border-white/10 [.light_&]:border-slate-300 rounded-xl focus:border-primary focus:outline-none text-white [.light_&]:text-slate-900 transition-colors text-sm">
                  <option value="" className="bg-slate-900 [.light_&]:bg-white text-white [.light_&]:text-slate-900">Select a subject</option>
                  <option value="Project" className="bg-slate-900 [.light_&]:bg-white text-white [.light_&]:text-slate-900">Project Collaboration</option>
                  <option value="job" className="bg-slate-900 [.light_&]:bg-white text-white [.light_&]:text-slate-900">Job Opportunity</option>
                  <option value="freelance" className="bg-slate-900 [.light_&]:bg-white text-white [.light_&]:text-slate-900">Freelance Work</option>
                  <option value="general" className="bg-slate-900 [.light_&]:bg-white text-white [.light_&]:text-slate-900">General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-300 [.light_&]:text-slate-700 mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-white/5 [.light_&]:bg-slate-100 border border-white/10 [.light_&]:border-slate-300 rounded-xl focus:border-primary focus:outline-none text-white [.light_&]:text-slate-900 placeholder-slate-400 [.light_&]:placeholder-slate-500 transition-colors resize-none text-sm"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-accent rounded-xl font-semibold text-black hover:shadow-lg hover:shadow-primary/50 transition-all text-sm sm:text-base"
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>

              <p className="text-center text-xs text-slate-500 [.light_&]:text-slate-500">
                Your message will be sent directly to my email. I typically respond within 24 hours.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact