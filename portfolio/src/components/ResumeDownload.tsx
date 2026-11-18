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
      title: "Full Stack Developer Intern @ Innovior | Software Engineer",
      email: "malithrajamanthri@gmail.com",
      phone: "+94 76 742 1844",
      location: "Kandy, Sri Lanka",
      website: "https://malithraja.netlify.app",
      linkedin: "https://www.linkedin.com/in/hashintha-malith-794823361",
      github: "https://github.com/Malith04"
    },
    summary: "Software Engineering undergraduate with hands-on experience in frontend and full-stack web application development using React.JS, Next.JS, Firebase, JavaScript, and REST API integration. Experienced in building scalable Progressive Web Applications (PWAs), cloud-connected dashboards, machine learning and IoT integrated smart monitoring systems. Currently working as an Intern Software Engineer, contributing to modern software engineering teams and building industry experience.",
    experience: [
      {
        title: "Full Stack Developer Intern",
        company: "Innovior (Pvt) Ltd",
        period: "May 2026 – November 2026",
        responsibilities: [
          "Currently contributing full-stack software development projects and working on real-world applications.",
          "Developing frontend applications using Next.js and backend services using Nest.JS.",
          "Working with MongoDB for database operations and AWS S3 for cloud storage solutions.",
          "Developing and integrating RESTful APIs for application functionality.",
          "Creating UI/UX designs and prototypes using Figma"
        ]
      }
    ],
    education: [
      {
        degree: "BSc (Hons) Computer Science (Reading)",
        institution: "National Institute of Business Management, Kandy",
        period: "Present",
        status: "Reading"
      },
      {
        degree: "Higher National Diploma in Software Engineering",
        institution: "National Institute of Business Management, Kandy",
        period: "2025 - 2026",
        status: "Higher National Diploma"
      },
      {
        degree: "Diploma in Software Engineering",
        institution: "National Institute of Business Management, Kandy",
        period: "2024 - 2025",
        status: "Diploma"
      },
      {
        degree: "Secondary Education",
        institution: "Dharmaraja College, Kandy",
        period: "Alumnus",
        status: "Completed"
      }
    ],
    projects: [
      {
        name: "ImpactEcho – Verified Social Impact & Volunteering Platform",
        tech: "Next.js, React, TypeScript, Tailwind CSS, Nest.js, PostgreSQL, Prisma, Python, FastAPI, Zustand, TanStack Query, Socket.IO, Dexie.js",
        description: "Developed responsive social platform interfaces using Next.js, React, TypeScript and Tailwind CSS, focused on real-world volunteering and community engagement. Implemented secure backend services with JWT authentication, 2FA, role-based access control, real-time WebSockets, and an AI-powered content moderation microservice using Python and FastAPI. Developed backend services using Nest.js, TypeScript, PostgreSQL and Prisma implementing REST APIs, authentication, real-time messaging, campaign management, and verified volunteer attendance. Implemented frontend state management, API integration, real-time interaction support, and offline caching using Zustand, TanStack Query, Socket.IO and Dexie.js."
      },
      {
        name: "SoundWave – Full-Stack Music Streaming Progressive Web Application",
        tech: "React, Firebase, Tailwind CSS, Howler.js, iTunes API, Jamendo API, YouTube Data API v3",
        description: "Developed Spotify-inspired Progressive Web App using React, Firebase, Tailwind CSS, and Howler.js. Integrated iTunes API, Jamendo API, YouTube Data API v3, and lyrics APIs. Implemented equalizer controls, spatial audio, create playlist, Music for mood fixing. Designed admin dashboard for managing users, songs, analytics, and uploads. Built recommendation engine using listening behaviour and genre-based scoring."
      },
      {
        name: "AgroSmart 2.0 – AR-Based Smart Agriculture Monitoring and Visualization Platform",
        tech: "Interactive Real-Time Visualization Dashboards, IoT, AR Visualization",
        description: "Enhanced AgroSmart using interactive real-time visualization dashboards. Designed data-driven monitoring interfaces for environmental condition tracking. Integrated analytics-based crop recommendation modules. Improved usability using advanced visualization techniques."
      }
    ],
    skills: {
      programming: ["JavaScript", "Java", "Python", "PHP", "C/C#"],
      frontend: ["React.js", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
      backend: ["Node.js", "Nest.js", "Firebase", "REST APIs", "AWS S3"],
      databases: ["MySQL", "MongoDB", "Firebase"],
      tools: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Android Studio", "Netlify", "Figma"]
    },
    competencies: [
      "Frontend & Full-Stack Web Application Development",
      "Progressive Web Applications (PWAs)",
      "RESTful API Development & Integration",
      "Cloud-Connected Dashboards & AWS S3 Storage",
      "Machine Learning & IoT Integrated Smart Systems",
      "UI/UX Design & Prototyping (Figma)",
      "Database Operations (MongoDB, MySQL, Firebase)",
      "Real-Time WebSockets & Audio Processing"
    ],
    activities: [
      "Member of Cricket Team - NIBM",
      "U15 Cricket – Dharmaraja College Kandy",
      "U19 Baseball – Dharmaraja College Kandy",
      "Organizing Team – Robotics Events, CYBOTS, Gaming Events"
    ],
    reference: {
      name: "Mrs. H. M. D. S. Abeywardhana",
      role: "Lecturer, NIBM Kandy",
      phone: "+94 76 975 8124"
    }
  }

  const downloadResume = (format: 'pdf' | 'docx') => {
    if (format === 'pdf') {
      const link = document.createElement('a')
      link.href = '/Malith_Rajamanthri_CV.pdf'
      link.download = 'Malith_Rajamanthri_CV.pdf'
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return
    }

    // Create a downloadable resume content
    const resumeContent = generateResumeContent()
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
        <h2>PROFESSIONAL EXPERIENCE</h2>
        ${resumeData.experience.map(exp => `
            <div class="experience-item">
                <h3>${exp.title} - <span class="company">${exp.company}</span></h3>
                <div class="period">${exp.period}</div>
                <ul>
                    ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
                </ul>
            </div>
        `).join('')}
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

    <div class="section">
        <h2>REFERENCES</h2>
        <div class="education-item">
            <h3>${resumeData.reference.name}</h3>
            <div class="institution">${resumeData.reference.role}</div>
            <div class="period">${resumeData.reference.phone}</div>
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2.5 sm:p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white text-black rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-primary to-accent flex-shrink-0">
              <div className="flex items-center justify-between text-black">
                <h2 className="text-xl sm:text-2xl font-bold">Resume Preview</h2>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1 rounded-lg text-black hover:opacity-70 transition-opacity text-xl font-bold"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Resume Content */}
            <div data-lenis-prevent className="p-4 sm:p-8 overflow-y-auto max-h-[68vh] space-y-5 sm:space-y-6 no-scrollbar">
              {/* Personal Info */}
              <div className="text-center border-b pb-5 sm:pb-6">
                <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{resumeData.personalInfo.name}</h1>
                <p className="text-sm sm:text-xl text-gray-600 mb-3 sm:mb-4">{resumeData.personalInfo.title}</p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{resumeData.personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone size={14} />
                    <span>{resumeData.personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail size={14} />
                    <span>{resumeData.personalInfo.email}</span>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mt-2">
                  <span className="truncate max-w-[280px] sm:max-w-none">LinkedIn: {resumeData.personalInfo.linkedin}</span>
                  <span className="truncate max-w-[280px] sm:max-w-none">GitHub: {resumeData.personalInfo.github}</span>
                  <span className="truncate max-w-[280px] sm:max-w-none">Portfolio: {resumeData.personalInfo.website}</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">Professional Summary</h3>
                <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
              </div>

              {/* Professional Experience */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">Professional Experience</h3>
                <div className="space-y-4">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <h4 className="font-semibold text-base text-gray-900">{exp.title}</h4>
                        <span className="text-xs text-gray-500 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-sm font-semibold text-primary mb-2">{exp.company}</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
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

              {/* References */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-primary">References</h3>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-gray-900">{resumeData.reference.name}</h4>
                  <p className="text-sm text-gray-600">{resumeData.reference.role}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{resumeData.reference.phone}</p>
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