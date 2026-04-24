import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, Linkedin, Instagram, Facebook, Copy, ExternalLink, MessageCircle } from 'lucide-react'

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
      link: 'tel:+94716108102',
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
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Connect</p>
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Ready to collaborate or have a question? Choose your preferred way to connect with me.
          </p>
        </div>

        {/* Contact Method Switcher */}
        <div className="mb-12">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 p-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            {contactTabs.map((tab) => (
              <motion.button
                key={tab.key}
                onClick={() => setActiveContact(tab.key)}
                className={`relative flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                  activeContact === tab.key
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
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
                <span className="relative z-10 flex items-center gap-2">
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

                <div className="relative z-10 p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentContact.color} flex items-center justify-center text-white shadow-lg`}>
                        {currentContact.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-display font-bold text-white mb-1">
                          {currentContact.title}
                        </h3>
                        <p className="text-slate-400">{currentContact.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Value */}
                  <div className="mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                      <p className="text-slate-300 text-lg font-mono break-all">
                        {currentContact.displayValue}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={currentContact.link}
                      target={currentContact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={currentContact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 px-6 py-4 bg-gradient-to-r ${currentContact.color} rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all flex-1 justify-center min-w-[140px]`}
                    >
                      <ExternalLink size={20} />
                      <span>Open</span>
                    </motion.a>

                    {activeContact === 'phone' && currentContact.whatsappLink && (
                      <motion.a
                        href={currentContact.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all flex-1 justify-center min-w-[140px]"
                      >
                        <MessageCircle size={20} />
                        <span>WhatsApp</span>
                      </motion.a>
                    )}

                    <motion.button
                      onClick={() => copyToClipboard(currentContact.value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white transition-all"
                    >
                      <Copy size={20} />
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
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {contactTabs.map((tab) => {
            const contact = contactMethods[tab.key]
            return (
              <motion.button
                key={tab.key}
                onClick={() => setActiveContact(tab.key)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`surface-card p-4 text-center hover:border-primary/50 transition-all ${
                  activeContact === tab.key ? 'border-primary/50 bg-primary/5' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center mx-auto mb-3 text-white`}>
                  {tab.icon}
                </div>
                <p className="text-sm font-medium text-slate-300">{tab.label}</p>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="surface-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-4">
              Let's Build Something <span className="text-gradient">Amazing</span> Together
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'm always excited to connect with fellow developers and innovators.
            </p>
            <motion.a
              href="mailto:malithrajamanthri@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-ink hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              <Mail size={20} />
              <span>Send me an Email</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact