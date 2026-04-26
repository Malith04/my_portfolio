interface VisitorData {
  sessionId: string
  timestamp: number
  page: string
  userAgent: string
  referrer: string
  screenResolution: string
  language: string
  timezone: string
  country?: string
  city?: string
}

interface PageView {
  page: string
  timestamp: number
  sessionId: string
  timeSpent?: number
}

interface AnalyticsData {
  totalViews: number
  uniqueVisitors: number
  avgSessionTime: string
  bounceRate: number
  topCountries: Array<{ name: string; percentage: number; flag: string }>
  deviceBreakdown: Array<{ type: string; percentage: number }>
  popularSections: Array<{ name: string; views: number; percentage: number }>
  recentVisitors: number
  todayViews: number
}

class AnalyticsService {
  private readonly STORAGE_KEY = 'portfolio_analytics'
  private readonly SESSION_KEY = 'portfolio_session'
  private readonly API_ENDPOINT = '/api/analytics' // For future backend integration
  
  private sessionId: string
  private startTime: number
  private currentPage: string = ''

  constructor() {
    this.sessionId = this.getOrCreateSession()
    this.startTime = Date.now()
    this.initializeTracking()
  }

  private getOrCreateSession(): string {
    let sessionId = sessionStorage.getItem(this.SESSION_KEY)
    if (!sessionId) {
      sessionId = this.generateSessionId()
      sessionStorage.setItem(this.SESSION_KEY, sessionId)
    }
    return sessionId
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }

  private initializeTracking() {
    // Track initial page load
    this.trackPageView(window.location.pathname)
    
    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        this.trackTimeSpent()
      }
    })

    // Track before page unload
    window.addEventListener('beforeunload', () => {
      this.trackTimeSpent()
    })

    // Track hash changes for SPA navigation
    window.addEventListener('hashchange', () => {
      this.trackPageView(window.location.hash || '/')
    })
  }

  private async getLocationData(): Promise<{ country: string; city: string }> {
    try {
      // Using a free IP geolocation service
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      return {
        country: data.country_name || 'Unknown',
        city: data.city || 'Unknown'
      }
    } catch (error) {
      console.log('Location detection failed:', error)
      return { country: 'Unknown', city: 'Unknown' }
    }
  }

  async trackPageView(page: string) {
    this.currentPage = page
    this.startTime = Date.now()

    const locationData = await this.getLocationData()
    
    const visitorData: VisitorData = {
      sessionId: this.sessionId,
      timestamp: Date.now(),
      page,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenResolution: `${screen.width}x${screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      country: locationData.country,
      city: locationData.city
    }

    // Store locally
    this.storeVisitorData(visitorData)
    
    // Send to backend (if available)
    this.sendToBackend(visitorData)
  }

  private trackTimeSpent() {
    if (!this.currentPage) return
    
    const timeSpent = Date.now() - this.startTime
    const pageView: PageView = {
      page: this.currentPage,
      timestamp: this.startTime,
      sessionId: this.sessionId,
      timeSpent
    }

    this.storePageView(pageView)
  }

  private storeVisitorData(data: VisitorData) {
    const stored = localStorage.getItem(this.STORAGE_KEY)
    const analytics = stored ? JSON.parse(stored) : { visitors: [], pageViews: [] }
    
    // Check if this is a unique visitor (new session)
    const existingVisitor = analytics.visitors.find((v: VisitorData) => v.sessionId === data.sessionId)
    if (!existingVisitor) {
      analytics.visitors.push(data)
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(analytics))
  }

  private storePageView(data: PageView) {
    const stored = localStorage.getItem(this.STORAGE_KEY)
    const analytics = stored ? JSON.parse(stored) : { visitors: [], pageViews: [] }
    
    analytics.pageViews.push(data)
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(analytics))
  }

  private async sendToBackend(data: VisitorData) {
    try {
      // This will work when you have a backend API
      await fetch(this.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
    } catch (error) {
      // Silently fail if no backend is available
      console.log('Backend analytics not available:', error)
    }
  }

  getAnalytics(): AnalyticsData {
    const stored = localStorage.getItem(this.STORAGE_KEY)
    if (!stored) {
      return this.getDefaultAnalytics()
    }

    const data = JSON.parse(stored)
    const visitors = data.visitors || []
    const pageViews = data.pageViews || []

    // Calculate metrics
    const totalViews = pageViews.length
    const uniqueVisitors = visitors.length
    const avgSessionTime = this.calculateAverageSessionTime(pageViews)
    const bounceRate = this.calculateBounceRate(visitors, pageViews)
    const topCountries = this.getTopCountries(visitors)
    const deviceBreakdown = this.getDeviceBreakdown(visitors)
    const popularSections = this.getPopularSections(pageViews)
    const todayViews = this.getTodayViews(pageViews)
    const recentVisitors = this.getRecentVisitors(visitors)

    return {
      totalViews,
      uniqueVisitors,
      avgSessionTime,
      bounceRate,
      topCountries,
      deviceBreakdown,
      popularSections,
      recentVisitors,
      todayViews
    }
  }

  private calculateAverageSessionTime(pageViews: PageView[]): string {
    if (pageViews.length === 0) return '0:00'
    
    const totalTime = pageViews.reduce((sum, view) => sum + (view.timeSpent || 0), 0)
    const avgTime = totalTime / pageViews.length
    
    const minutes = Math.floor(avgTime / 60000)
    const seconds = Math.floor((avgTime % 60000) / 1000)
    
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  private calculateBounceRate(visitors: VisitorData[], pageViews: PageView[]): number {
    if (visitors.length === 0) return 0
    
    const sessionsWithOneView = visitors.filter(visitor => {
      const sessionViews = pageViews.filter(view => view.sessionId === visitor.sessionId)
      return sessionViews.length === 1
    }).length

    return Math.round((sessionsWithOneView / visitors.length) * 100)
  }

  private getTopCountries(visitors: VisitorData[]): Array<{ name: string; percentage: number; flag: string }> {
    const countryCount: Record<string, number> = {}
    
    visitors.forEach(visitor => {
      const country = visitor.country || 'Unknown'
      countryCount[country] = (countryCount[country] || 0) + 1
    })

    const total = visitors.length
    const countries = Object.entries(countryCount)
      .map(([name, count]) => ({
        name,
        percentage: Math.round((count / total) * 100),
        flag: this.getCountryFlag(name)
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5)

    return countries
  }

  private getCountryFlag(country: string): string {
    const flags: Record<string, string> = {
      'Sri Lanka': '🇱🇰',
      'India': '🇮🇳',
      'United States': '🇺🇸',
      'United Kingdom': '🇬🇧',
      'Canada': '🇨🇦',
      'Australia': '🇦🇺',
      'Germany': '🇩🇪',
      'France': '🇫🇷',
      'Japan': '🇯🇵',
      'Singapore': '🇸🇬',
      'Unknown': '🌍'
    }
    return flags[country] || '🌍'
  }

  private getDeviceBreakdown(visitors: VisitorData[]): Array<{ type: string; percentage: number }> {
    const deviceCount: Record<string, number> = {}
    
    visitors.forEach(visitor => {
      const deviceType = this.getDeviceTypeFromUserAgent(visitor.userAgent)
      deviceCount[deviceType] = (deviceCount[deviceType] || 0) + 1
    })

    const total = visitors.length
    return Object.entries(deviceCount).map(([type, count]) => ({
      type,
      percentage: Math.round((count / total) * 100)
    }))
  }

  private getDeviceTypeFromUserAgent(userAgent: string): string {
    const ua = userAgent.toLowerCase()
    if (/tablet|ipad/.test(ua)) return 'Tablet'
    if (/mobile|android|iphone/.test(ua)) return 'Mobile'
    return 'Desktop'
  }

  private getPopularSections(pageViews: PageView[]): Array<{ name: string; views: number; percentage: number }> {
    const sectionCount: Record<string, number> = {}
    
    pageViews.forEach(view => {
      const section = this.getSection(view.page)
      sectionCount[section] = (sectionCount[section] || 0) + 1
    })

    const total = pageViews.length
    const sections = Object.entries(sectionCount)
      .map(([name, views]) => ({
        name,
        views,
        percentage: Math.round((views / total) * 100)
      }))
      .sort((a, b) => b.views - a.views)

    return sections
  }

  private getSection(page: string): string {
    if (page.includes('#projects') || page.includes('projects')) return 'Projects'
    if (page.includes('#about') || page.includes('about')) return 'About'
    if (page.includes('#skills') || page.includes('skills')) return 'Skills'
    if (page.includes('#contact') || page.includes('contact')) return 'Contact'
    if (page.includes('#blog') || page.includes('blog')) return 'Blog'
    if (page.includes('#experience') || page.includes('experience')) return 'Experience'
    return 'Home'
  }

  private getTodayViews(pageViews: PageView[]): number {
    const today = new Date().toDateString()
    return pageViews.filter(view => 
      new Date(view.timestamp).toDateString() === today
    ).length
  }

  private getRecentVisitors(visitors: VisitorData[]): number {
    const oneHourAgo = Date.now() - (60 * 60 * 1000)
    return visitors.filter(visitor => visitor.timestamp > oneHourAgo).length
  }

  private getDefaultAnalytics(): AnalyticsData {
    return {
      totalViews: 0,
      uniqueVisitors: 0,
      avgSessionTime: '0:00',
      bounceRate: 0,
      topCountries: [],
      deviceBreakdown: [],
      popularSections: [],
      recentVisitors: 0,
      todayViews: 0
    }
  }

  // Method to clear analytics (for testing)
  clearAnalytics() {
    localStorage.removeItem(this.STORAGE_KEY)
    sessionStorage.removeItem(this.SESSION_KEY)
  }
}

export const analyticsService = new AnalyticsService()
export type { AnalyticsData }