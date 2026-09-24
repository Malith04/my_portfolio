import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, Eye, Share2, MapPin, Mail, Phone } from 'lucide-react'

interface ResumeDownloadProps {
  variant?: 'compact' | 'full'
}

const ResumeDownload = ({ variant = 'compact' }: ResumeDownloadProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const resumeData = {
    personalInfo: {
      name: "Malith Rajamanthri",
      title: "Software Engineer Intern @ Innovior | Frontend & UI/UX Engineer",
      email: "malithrajamanthri@gmail.com",
      phone: "+94 76 742 1844",
      location: "Kandy, Sri Lanka",
      website: "malithrajamanthri.netlify.app",
      linkedin: "https://www.linkedin.com/in/hashintha-malith-794823361",
      github: "https://github.com/Malith04"
    },
    summary: "Software Engineer Intern at Innovior and Software Engineering undergraduate with hands-on experience in production frontend systems, Next.js 15, React 19, TypeScript, Tailwind CSS, and REST API integration. Experienced in architecting scalable Progressive Web Applications (PWAs), UI/UX design systems, and cloud-connected platforms.",
    experience: [
      {
        title: "Software Engineer Intern",
        company: "Innovior",
        period: "2024 - Present",
        description: "Engineering production frontend systems, scalable React 19 / Next.js 15 web applications, and intuitive UI/UX workflows. Developing core features for ImpactEcho and enterprise client platforms."
      },
      {
        title: "Software Engineering Student",
        company: "National Institute of Business Management (NIBM)",
        period: "2024 - Present",
        description: "Pursuing BSc (Hons) in Software Engineering with focus on modern web technologies, full-stack development, algorithms, and software engineering practices."
      },
      {
        title: "Full-Stack Developer",
        company: "Independent Projects",
        period: "2023 - Present",
        description: "Developed multiple web applications including social-impact platforms, music streaming PWAs, and cloud monitoring solutions using React, Next.js, and TypeScript."
      }
    ],
    education: [
      {
        degree: "BSc (Hons) Software Engineering (Reading)",
        institution: "National Institute of Business Management (NIBM)",
        period: "2024 - Present",
        status: "Current"
      },
      {
        degree: "Higher National Diploma in Software Engineering",
        institution: "National Institute of Business Management, Kandy",
        period: "2024 - 2025",
        status: "Completed"
      },
      {
        degree: "Collegiate Education (Primary & Secondary)",
        institution: "Dharmaraja College, Kandy",
        period: "2013 - 2024",
        status: "Alumnus (11 Years)"
      }
    ],
    projects: [
      {
        name: "ImpactEcho - Cause Social & Verified Volunteering",
        tech: "Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion 12, GSAP, Dexie.js, Zustand",
        description: "Cause-driven social platform turning grassroots activism into verified volunteer hours. Served as Frontend Engineer & UI/UX Designer: built custom design system, multi-theme engine (dark/light/mono), vertical Reels player with custom ReelActionBar, 24h Stories studio, and Dexie.js offline caching."
      },
      {
        name: "SoundWave - Music Streaming PWA",
        tech: "React, Firebase, Tailwind CSS, Howler.js",
        description: "Spotify-inspired Progressive Web App with iTunes API, Jamendo API, YouTube Data API v3 integration, equalizer controls, spatial audio, and recommendation engine"
      },
      {
        name: "AgroSmart 2.0 - Smart Agriculture Platform",
        tech: "IoT Sensors, Real-time Dashboard, AR Visualization",
        description: "IoT-based agriculture monitoring with environmental sensors, smart irrigation logic, and AI-based crop recommendations with AR visualization"
      }
    ],
    skills: {
      programming: ["TypeScript", "JavaScript", "Java", "Python", "PHP", "C#"],
      frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Zustand", "HTML5/CSS3"],
      backend: ["Node.js", "Firebase Authentication", "Firestore Database", "REST APIs", "Prisma"],
      databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore", "Dexie.js (IndexedDB)"],
      tools: ["Git", "GitHub", "VS Code", "Figma", "Vite", "Netlify", "Vercel"]
    },
    competencies: [
      "Frontend Web Development (React, Tailwind CSS)",
      "Full-Stack Application Development", 
      "Progressive Web Application (PWA) Development",
      "REST API Integration",
      "Firebase Cloud Integration",
      "UI/UX Focused Interface Development",
      "IoT-Integrated Smart Systems",
      "Real-Time Data Processing Applications"
    ],
    activities: [
      "Member - Cricket Team, NIBM",
      "U15 Cricket - Dharmaraja College Kandy",
      "Committee Member - IT Society, NIBM",
      "Organizing Team - Robotics Events, CYBOTS, Gaming Events"
    ]
  }

  const downloadResume = (format: 'pdf' | 'docx') => {
    // Create a downloadable resume content
    const resumeContent = generateResumeContent()
    
    if (format === 'pdf') {
      // For PDF, we'll create a simple HTML version and let the browser handle it
      const printWindow = window.open('', '_blank')
      if (printWindow) {
        printWindow.document.write(resumeContent)
        printWindow.document.close()
        printWindow.focus()
        setTimeout(() => {
          printWindow.print()
        }, 250)
      }
    } else {
      // For DOCX, create a downloadable HTML file that can be opened in Word
      const blob = new Blob([resumeContent], { type: 'application/msword' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `Malith_Rajamanthri_Resume.${format}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
  }

  const generateResumeContent = () => {
    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Malith Rajamanthri - Resume</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
        .header { text-align: center; border-bottom: 2px solid #4DD0E1; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { margin: 0; font-size: 28px; color: #2c3e50; }
        .header .title { font-size: 18px; color: #4DD0E1; margin: 5px 0; }
        .contact-info { font-size: 14px; color: #666; }
        .section { margin-bottom: 25px; }
        .section h2 { color: #4DD0E1; border-bottom: 1px solid #4DD0E1; padding-bottom: 5px; margin-bottom: 15px; }
        .experience-item, .education-item, .project-item { margin-bottom: 15px; }
        .experience-item h3, .project-item h3 { margin: 0; color: #2c3e50; }
        .experience-item .company, .education-item .institution { color: #4DD0E1; font-weight: bold; }
        .experience-item .period, .education-item .period { color: #666; font-style: italic; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .skill-category h4 { margin: 0 0 8px 0; color: #2c3e50; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .skill-tag { background: #f0f9ff; color: #4DD0E1; padding: 3px 8px; border-radius: 12px; font-size: 12px; }
        .competencies ul, .activities ul { list-style-type: none; padding: 0; }
        .competencies li, .activities li { padding: 5px 0; border-left: 3px solid #4DD0E1; padding-left: 15px; margin-bottom: 8px; }
        @media print { body { margin: 20px; } }
    </style>
</head>
<body>
    <div class="header">
        <h1>${resumeData.personalInfo.name}</h1>
        <div class="title">${resumeData.personalInfo.title}</div>
        <div class="contact-info">
            ${resumeData.personalInfo.location} | ${resumeData.personalInfo.phone} | ${resumeData.personalInfo.email}<br>
            LinkedIn: ${resumeData.personalInfo.linkedin}<br>
            GitHub: ${resumeData.personalInfo.github} | Portfolio: ${resumeData.personalInfo.website}
        </div>
    </div>

    <div class="section">
        <h2>PROFESSIONAL SUMMARY</h2>
        <p>${resumeData.summary}</p>
    </div>

    <div class="section">
        <h2>CORE COMPETENCIES</h2>
        <div class="competencies">
            <ul>
                ${resumeData.competencies.map(comp => `<li>${comp}</li>`).join('')}
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>TECHNICAL SKILLS</h2>
        <div class="skills-grid">
            <div class="skill-category">
                <h4>Programming</h4>
                <div class="skill-tags">
                    ${resumeData.skills.programming.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="skill-category">
                <h4>Frontend</h4>
                <div class="skill-tags">
                    ${resumeData.skills.frontend.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="skill-category">
                <h4>Backend & Cloud</h4>
                <div class="skill-tags">
                    ${resumeData.skills.backend.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="skill-category">
                <h4>Databases</h4>
                <div class="skill-tags">
                    ${resumeData.skills.databases.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="skill-category">
                <h4>Tools</h4>
                <div class="skill-tags">
                    ${resumeData.skills.tools.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>PROJECTS</h2>
        ${resumeData.projects.map(project => `
            <div class="project-item">
                <h3>${project.name}</h3>
                <div class="company">${project.tech}</div>
                <p>${project.description}</p>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h2>EDUCATION</h2>
        ${resumeData.education.map(edu => `
            <div class="education-item">
                <h3>${edu.degree}</h3>
                <div class="institution">${edu.institution}</div>
                <div class="period">${edu.period} • ${edu.status}</div>
            </div>
        `).join('')}
    </div>

    <div class="section">
        <h2>EXTRA-CURRICULAR ACTIVITIES</h2>
        <div class="activities">
            <ul>
                ${resumeData.activities.map(activity => `<li>${activity}</li>`).join('')}
            </ul>
        </div>
    </div>
</body>
</html>
    `
  }

  const shareResume = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Malith Rajamanthri - Resume',
          text: 'Check out my resume and portfolio',
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Portfolio link copied to clipboard!')
    }
  }

  return (
    <div className="space-y-4">
      {variant === 'compact' ? (
        <div className="flex flex-wrap items-center gap-2.5">
          <motion.button
            onClick={() => setIsPreviewOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-primary/50 text-xs font-display font-medium text-slate-300 hover:text-white transition-all shadow-md cursor-pointer"
          >
            <Eye size={13} className="text-primary" />
            <span>View CV &amp; Resume</span>
          </motion.button>

          <motion.button
            onClick={() => downloadResume('pdf')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-primary/30 bg-primary/10 hover:bg-primary/20 text-xs font-display font-semibold text-primary transition-all cursor-pointer"
            title="Download PDF"
          >
            <Download size={13} />
            <span>PDF</span>
          </motion.button>
        </div>
      ) : (
        /* Download Buttons */
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.button
            onClick={() => downloadResume('pdf')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-xl font-semibold text-ink shadow-lg hover:shadow-xl transition-all"
          >
            <Download size={20} />
            <span>Download PDF</span>
          </motion.button>

          <motion.button
            onClick={() => downloadResume('docx')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white transition-all"
          >
            <FileText size={20} />
            <span>Download DOCX</span>
          </motion.button>

          <motion.button
            onClick={() => setIsPreviewOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white transition-all"
          >
            <Eye size={20} />
            <span>Preview</span>
          </motion.button>

          <motion.button
            onClick={shareResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-white transition-all"
          >
            <Share2 size={20} />
            <span>Share</span>
          </motion.button>
        </div>
      )}

      {/* Resume Preview Modal */}
      {isPreviewOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white text-black rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 bg-gradient-to-r from-primary to-accent">
              <div className="flex items-center justify-between text-black">
                <h2 className="text-2xl font-bold">Resume Preview</h2>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="text-black hover:text-gray-700 text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="p-8 overflow-y-auto max-h-[70vh] space-y-6">
              {/* Personal Info */}
              <div className="text-center border-b pb-6">
                <h1 className="text-3xl font-bold mb-2">{resumeData.personalInfo.name}</h1>
                <p className="text-xl text-gray-600 mb-4">{resumeData.personalInfo.title}</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{resumeData.personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone size={16} />
                    <span>{resumeData.personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail size={16} />
                    <span>{resumeData.personalInfo.email}</span>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mt-2">
                  <span>LinkedIn: {resumeData.personalInfo.linkedin}</span>
                  <span>GitHub: {resumeData.personalInfo.github}</span>
                  <span>Portfolio: {resumeData.personalInfo.website}</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">Professional Summary</h3>
                <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
              </div>

              {/* Core Competencies */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">Core Competencies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {resumeData.competencies.map((competency, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{competency}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">Technical Skills</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Programming</h4>
                    <div className="flex flex-wrap gap-1">
                      {resumeData.skills.programming.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-1">
                      {resumeData.skills.frontend.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend & Cloud</h4>
                    <div className="flex flex-wrap gap-1">
                      {resumeData.skills.backend.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Databases</h4>
                    <div className="flex flex-wrap gap-1">
                      {resumeData.skills.databases.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-1">
                      {resumeData.skills.tools.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">Key Projects</h3>
                <div className="space-y-4">
                  {resumeData.projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-lg mb-1">{project.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{project.tech}</p>
                      <p className="text-gray-700">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">Education</h3>
                <div className="space-y-3">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.period} • {edu.status}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra-Curricular Activities */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">Extra-Curricular Activities</h3>
                <div className="space-y-2">
                  {resumeData.activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 border-t">
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => downloadResume('pdf')}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Download size={16} />
                  Download PDF
                </button>
                <button
                  onClick={() => downloadResume('docx')}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FileText size={16} />
                  Download DOCX
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default ResumeDownload