import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight, User } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Kasun Perera",
      role: "Senior Developer at WSO2",
      company: "WSO2",
      image: "/images/testimonials/kasun.jpg",
      rating: 5,
      text: "Malith is an exceptional developer with a keen eye for detail. His work on React applications is outstanding, and his problem-solving skills are impressive. He consistently delivers high-quality code and is always eager to learn new technologies.",
      project: "React Dashboard Project",
      date: "2024-03-15"
    },
    {
      id: 2,
      name: "Priya Jayawardena",
      role: "UI/UX Designer",
      company: "Creative Labs",
      image: "/images/testimonials/priya.jpg",
      rating: 5,
      text: "Working with Malith was a fantastic experience. He perfectly translated our designs into beautiful, responsive web applications. His attention to user experience and modern design principles is remarkable.",
      project: "SoundWave Music App",
      date: "2024-02-20"
    },
    {
      id: 3,
      name: "Dr. Nimal Silva",
      role: "Lecturer at NIBM",
      company: "NIBM",
      image: "/images/testimonials/nimal.jpg",
      rating: 5,
      text: "Malith is one of the most dedicated students I've taught. His passion for software engineering and continuous learning mindset sets him apart. He consistently exceeds expectations in his projects.",
      project: "Academic Projects",
      date: "2024-01-10"
    },
    {
      id: 4,
      name: "Chaminda Rathnayake",
      role: "Full Stack Developer",
      company: "Tech Solutions",
      image: "/images/testimonials/chaminda.jpg",
      rating: 5,
      text: "Malith's technical skills in React and TypeScript are impressive for someone at his level. He writes clean, maintainable code and has a great understanding of modern development practices.",
      project: "Supermarket Management System",
      date: "2023-12-05"
    },
    {
      id: 5,
      name: "Sanduni Fernando",
      role: "Project Manager",
      company: "Digital Agency",
      image: "/images/testimonials/sanduni.jpg",
      rating: 5,
      text: "Malith is reliable, communicative, and delivers projects on time. His ability to understand requirements and implement them effectively makes him a valuable team member.",
      project: "AgroSmart 2.0",
      date: "2023-11-18"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-slate-400'}`}
      />
    ))
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Feedback from colleagues and mentors</p>
          <h2 className="section-title">
            What <span className="text-gradient">People Say</span>
          </h2>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="surface-card p-8 md:p-12 text-center relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-primary/20">
                  <Quote size={48} />
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <User size={32} className="text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-display font-bold text-white mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-primary font-medium mb-1">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {testimonials[currentIndex].company} • {testimonials[currentIndex].project}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center transition-all"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="surface-card p-6 hover:border-primary/50 transition-all cursor-pointer"
              onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === testimonial.id))}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Text */}
              <p className="text-slate-300 mb-4 line-clamp-3">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-white">{testimonial.name}</h5>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="surface-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold mb-4">
              Want to Work <span className="text-gradient">Together?</span>
            </h3>
            <p className="text-slate-400 mb-6">
              Join these satisfied clients and let's create something amazing together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-ink hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              <span>Start a Project</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials