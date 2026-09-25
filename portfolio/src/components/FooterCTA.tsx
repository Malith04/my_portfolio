import React, { useState } from 'react'
import { ArrowUpRight, Copy, Check, Github, Linkedin, Instagram } from 'lucide-react'

export const FooterCTA: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('malithrajamanthri@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="relative pt-28 pb-16 px-4 overflow-hidden border-t border-white/10 bg-[#060810]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Top Status Pill */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
            <span className="text-xs font-display font-semibold uppercase tracking-[0.24em] text-slate-300">
              AVAILABLE FOR PROJECTS &amp; ROLES • 2 SLOTS
            </span>
          </div>
          <span className="text-xs font-display text-slate-400">
            Colombo, Sri Lanka • GMT+5:30
          </span>
        </div>

        {/* Signature Giant Editorial Title: "Let's Collab" */}
        <div className="space-y-4">
          <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-semibold tracking-tight text-white leading-[0.95] select-none">
            Let's <span className="text-gradient">Collab.</span>
          </h2>
          <p className="text-slate-300 font-display text-base sm:text-lg max-w-xl">
            Have a product idea, an open software engineering role, or a complex interaction system to build? Let's bring it to life.
          </p>
        </div>

        {/* 3-Column Editorial Grid: Left (Contact Info), Center (Portrait / Brand Anchor), Right (Navigation & Action) */}
        <div className="grid md:grid-cols-3 gap-10 items-center pt-8 border-t border-white/10">
          {/* Column 1: Mail & WhatsApp */}
          <div className="space-y-6">
            <div className="space-y-1.5">
              <p className="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-primary">
                MAIL
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:malithrajamanthri@gmail.com"
                  className="text-lg sm:text-xl font-display font-semibold text-white hover:text-primary transition-colors truncate"
                >
                  malithrajamanthri@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-accent" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-accent">
                WHATSAPP / PHONE
              </p>
              <a
                href="https://wa.me/94767421844"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-display font-semibold text-white hover:text-accent transition-colors block"
              >
                +94 76 742 1844
              </a>
            </div>
          </div>

          {/* Column 2: Centered Portrait / Brand Token */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_25px_rgba(0,245,212,0.3)]">
              <img
                src="/images/hero-profile.jpg"
                alt="Malith Rajamanthri"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <h4 className="text-base font-display font-semibold text-white">
                Malith Rajamanthri
              </h4>
              <p className="text-xs text-slate-400 font-display">
                Software Engineer Intern @ Innovior
              </p>
              <p className="text-[11px] text-slate-400 font-display mt-0.5">
                Dharmaraja College, Kandy (2013–2024)
              </p>
            </div>
          </div>

          {/* Column 3: Navigation & Action Button */}
          <div className="space-y-6 md:text-right flex flex-col md:items-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-display font-semibold text-xs uppercase tracking-[0.18em] hover:bg-primary hover:text-black transition-all hover:scale-105 shadow-xl"
            >
              Start a project
              <ArrowUpRight size={16} />
            </a>

            <div className="space-y-2">
              <p className="text-[11px] font-display font-semibold uppercase tracking-[0.2em] text-slate-400">
                NAVIGATION
              </p>
              <div className="flex md:justify-end gap-5 text-sm font-display font-medium text-slate-300">
                <a href="#about" className="hover:text-primary transition-colors">About</a>
                <a href="#projects" className="hover:text-primary transition-colors">Works</a>
                <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex md:justify-end gap-3 pt-1">
              <a
                href="https://github.com/Malith04"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-slate-300 hover:text-primary transition-all"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/hashintha-malith-794823361/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-slate-300 hover:text-primary transition-all"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://www.instagram.com/malith_raja/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 flex items-center justify-center text-slate-300 hover:text-primary transition-all"
                title="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-display text-slate-400">
          <p>
            © {new Date().getFullYear()} Malith Rajamanthri. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Built with React 19, TypeScript &amp; Next-Gen CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterCTA
