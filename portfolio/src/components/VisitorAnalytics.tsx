import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Eye, Users, TrendingUp, Smartphone, Monitor } from 'lucide-react'
import { analyticsService, type AnalyticsData } from '../services/analytics'

const VisitorAnalytics = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalViews: 0,
    uniqueVisitors: 0,
    avgSessionTime: '0:00',
    bounceRate: 0,
    topCountries: [],
    deviceBreakdown: [],
    popularSections: [],
    recentVisitors: 0,
    todayViews: 0
  })

  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Initial load
    loadAnalytics()
    
    // Update analytics every 30 seconds
    const interval = setInterval(() => {
      loadAnalytics()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const loadAnalytics = () => {
    try {
      const data = analyticsService.getAnalytics()
      setAnalytics(data)
      setIsLoading(false)
    } catch (error) {
      console.error('Failed to load analytics:', error)
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="fixed bottom-4 left-4 z-40"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="surface-card p-4 max-w-sm cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
            <Eye className="text-green-400" size={16} />
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm">Portfolio Analytics</h4>
            <p className="text-slate-400 text-xs">
              {isLoading ? 'Loading...' : 'Real visitor data'}
            </p>
          </div>
        </div>

        {isVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="space-y-3"
          >
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Users size={12} className="text-blue-400" />
                  <span className="text-xs text-slate-400">Total Views</span>
                </div>
                <div className="text-lg font-bold text-white">
                  {isLoading ? (
                    <div className="h-6 bg-slate-700 rounded animate-pulse" />
                  ) : (
                    analytics.totalViews.toLocaleString()
                  )}
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={12} className="text-green-400" />
                  <span className="text-xs text-slate-400">Unique</span>
                </div>
                <div className="text-lg font-bold text-white">
                  {isLoading ? (
                    <div className="h-6 bg-slate-700 rounded animate-pulse" />
                  ) : (
                    analytics.uniqueVisitors.toLocaleString()
                  )}
                </div>
              </div>
            </div>

            {/* Today's Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-sm font-bold text-primary">{analytics.todayViews}</div>
                <div className="text-xs text-slate-400">Today</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-sm font-bold text-orange-400">{analytics.recentVisitors}</div>
                <div className="text-xs text-slate-400">Recent</div>
              </div>
            </div>

            {/* Popular Sections */}
            {analytics.popularSections.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold text-slate-300 mb-2">Popular Sections</h5>
                <div className="space-y-1">
                  {analytics.popularSections.slice(0, 3).map((section, index) => (
                    <div key={section.name} className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{section.name}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${section.percentage}%` }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          />
                        </div>
                        <span className="text-xs text-primary font-medium">{section.views}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Top Countries */}
            {analytics.topCountries.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold text-slate-300 mb-2">Top Locations</h5>
                <div className="space-y-1">
                  {analytics.topCountries.slice(0, 3).map((country) => (
                    <div key={country.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{country.flag}</span>
                        <span className="text-xs text-slate-400">{country.name}</span>
                      </div>
                      <span className="text-xs text-primary font-medium">{country.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Device Breakdown */}
            {analytics.deviceBreakdown.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold text-slate-300 mb-2">Devices</h5>
                <div className="flex gap-2">
                  {analytics.deviceBreakdown.map((device) => (
                    <div key={device.type} className="flex items-center gap-1 text-xs">
                      {device.type === 'Mobile' ? <Smartphone size={10} /> : <Monitor size={10} />}
                      <span className="text-slate-400">{device.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Session Info */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
              <div className="text-center">
                <div className="text-sm font-bold text-cyan-400">{analytics.avgSessionTime}</div>
                <div className="text-xs text-slate-400">Avg Time</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-red-400">{analytics.bounceRate}%</div>
                <div className="text-xs text-slate-400">Bounce Rate</div>
              </div>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-white/10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400">Real-Time Analytics</span>
            </div>

            {/* Debug Info (only in development) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={() => {
                    analyticsService.clearAnalytics()
                    loadAnalytics()
                  }}
                  className="text-xs text-red-400 hover:text-red-300"
                >
                  Clear Analytics (Dev)
                </button>
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default VisitorAnalytics