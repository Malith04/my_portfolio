import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, GitBranch, Star, Users, Calendar, TrendingUp, Code, Coffee } from 'lucide-react'

const GitHubStats = () => {
  const [stats] = useState({
    totalRepos: 15,
    totalCommits: 342,
    totalStars: 28,
    totalForks: 12,
    contributionsThisYear: 156,
    longestStreak: 23,
    currentStreak: 7,
    languagesUsed: 8
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const statCards = [
    {
      icon: <Github size={26} className="text-cyan-400" />,
      label: 'Public Repos',
      value: stats.totalRepos,
      bgColor: 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-400'
    },
    {
      icon: <GitBranch size={26} className="text-emerald-400" />,
      label: 'Total Commits',
      value: stats.totalCommits,
      bgColor: 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
    },
    {
      icon: <Star size={26} className="text-amber-400" />,
      label: 'Stars Earned',
      value: stats.totalStars,
      bgColor: 'bg-amber-500/15 border border-amber-500/30 text-amber-400'
    },
    {
      icon: <Users size={26} className="text-purple-400" />,
      label: 'Forks',
      value: stats.totalForks,
      bgColor: 'bg-purple-500/15 border border-purple-500/30 text-purple-400'
    }
  ]

  const activityData = [
    { day: 'Mon', commits: 5 },
    { day: 'Tue', commits: 8 },
    { day: 'Wed', commits: 3 },
    { day: 'Thu', commits: 12 },
    { day: 'Fri', commits: 7 },
    { day: 'Sat', commits: 4 },
    { day: 'Sun', commits: 6 }
  ]

  const languages = [
    { name: 'JavaScript', percentage: 35, color: '#f7df1e' },
    { name: 'TypeScript', percentage: 25, color: '#3178c6' },
    { name: 'React', percentage: 20, color: '#61dafb' },
    { name: 'CSS', percentage: 10, color: '#1572b6' },
    { name: 'HTML', percentage: 6, color: '#e34f26' },
    { name: 'Others', percentage: 4, color: '#6b7280' }
  ]

  return (
    <section id="github" className="py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 relative z-10">
          <p className="section-kicker mb-3 font-display font-semibold tracking-[0.22em] text-[#00f5d4]">
            Development Activity
          </p>
          <h2 className="section-title text-white text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight">
            GitHub <span className="text-gradient">Statistics</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl mx-auto font-display text-sm sm:text-base leading-relaxed">
            Real-time insights into my coding journey and contribution patterns
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="surface-card p-6 text-center hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl ${stat.bgColor} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-display font-bold text-white mb-2">
                {isLoading ? (
                  <div className="h-8 bg-slate-700 rounded animate-pulse" />
                ) : (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {stat.value}
                  </motion.span>
                )}
              </div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contribution Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="surface-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="text-green-400" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-white">Weekly Activity</h3>
                <p className="text-slate-400 text-sm">Commits this week</p>
              </div>
            </div>

            <div className="space-y-4">
              {activityData.map((day, index) => (
                <div key={day.day} className="flex items-center gap-4">
                  <span className="text-slate-400 text-sm w-8">{day.day}</span>
                  <div className="flex-1 h-6 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(day.commits / 12) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                    />
                  </div>
                  <span className="text-green-400 text-sm font-medium w-8">{day.commits}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{stats.contributionsThisYear}</div>
                <div className="text-xs text-slate-400">This Year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{stats.longestStreak}</div>
                <div className="text-xs text-slate-400">Longest Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{stats.currentStreak}</div>
                <div className="text-xs text-slate-400">Current Streak</div>
              </div>
            </div>
          </motion.div>

          {/* Language Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="surface-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Code className="text-purple-400" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold text-white">Languages Used</h3>
                <p className="text-slate-400 text-sm">Most used technologies</p>
              </div>
            </div>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-slate-300 text-sm">{lang.name}</span>
                    </div>
                    <span className="text-slate-400 text-sm">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <div className="flex items-center justify-center gap-2 text-slate-400">
                <Coffee size={16} />
                <span className="text-sm">Powered by passion for coding</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12 relative z-20">
          <a
            href="https://github.com/Malith04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:to-slate-700 rounded-full font-display font-semibold text-white border border-slate-600/80 hover:border-primary/60 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl hover:shadow-[0_0_30px_rgba(0,245,212,0.25)]"
          >
            <Github size={20} className="text-primary" />
            <span>View Full GitHub Profile</span>
            <TrendingUp size={16} className="text-[#00FF87]" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default GitHubStats