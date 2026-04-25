// API Configuration and Services
const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:3001/api'

// Types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
  author: {
    name: string
    avatar: string
  }
}

export interface ProjectData {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl: string
  featured: boolean
}

export interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  topPages: Array<{ path: string; views: number }>
  referrers: Array<{ source: string; visits: number }>
  countries: Array<{ country: string; visits: number }>
}

// API Client
class ApiClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // Contact Form
  async submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Blog Posts
  async getBlogPosts(limit?: number, category?: string): Promise<BlogPost[]> {
    const params = new URLSearchParams()
    if (limit) params.append('limit', limit.toString())
    if (category) params.append('category', category)
    
    return this.request(`/blog?${params.toString()}`)
  }

  async getBlogPost(slug: string): Promise<BlogPost> {
    return this.request(`/blog/${slug}`)
  }

  async createBlogPost(data: Omit<BlogPost, 'id' | 'publishedAt'>): Promise<BlogPost> {
    return this.request('/blog', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  // Projects
  async getProjects(): Promise<ProjectData[]> {
    return this.request('/projects')
  }

  async getFeaturedProjects(): Promise<ProjectData[]> {
    return this.request('/projects?featured=true')
  }

  // Analytics
  async getAnalytics(period: '7d' | '30d' | '90d' = '30d'): Promise<AnalyticsData> {
    return this.request(`/analytics?period=${period}`)
  }

  async trackPageView(path: string): Promise<void> {
    return this.request('/analytics/pageview', {
      method: 'POST',
      body: JSON.stringify({ path, timestamp: new Date().toISOString() }),
    })
  }

  // Newsletter
  async subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    return this.request('/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  }

  // File Upload
  async uploadFile(file: File, type: 'image' | 'document' = 'image'): Promise<{ url: string }> {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('type', type)

    return this.request('/upload', {
      method: 'POST',
      body: formData,
      headers: {}, // Remove Content-Type to let browser set it for FormData
    })
  }
}

// Create API client instance
export const apiClient = new ApiClient(API_BASE_URL)

// React Query hooks for better data management
export const useContactForm = () => {
  const submitForm = async (data: ContactFormData) => {
    try {
      const result = await apiClient.submitContactForm(data)
      return result
    } catch (error) {
      // Fallback: Send email using mailto
      const subject = encodeURIComponent(data.subject)
      const body = encodeURIComponent(`From: ${data.name} (${data.email})\n\n${data.message}`)
      window.location.href = `mailto:malithrajamanthri@gmail.com?subject=${subject}&body=${body}`
      
      return { success: true, message: 'Email client opened. Please send the email manually.' }
    }
  }

  return { submitForm }
}

// Local storage utilities for offline functionality
export const localStorageService = {
  // Cache blog posts
  cacheBlogPosts: (posts: BlogPost[]) => {
    localStorage.setItem('cached_blog_posts', JSON.stringify({
      data: posts,
      timestamp: Date.now()
    }))
  },

  getCachedBlogPosts: (): BlogPost[] | null => {
    const cached = localStorage.getItem('cached_blog_posts')
    if (!cached) return null

    const { data, timestamp } = JSON.parse(cached)
    const isExpired = Date.now() - timestamp > 24 * 60 * 60 * 1000 // 24 hours

    return isExpired ? null : data
  },

  // Cache projects
  cacheProjects: (projects: ProjectData[]) => {
    localStorage.setItem('cached_projects', JSON.stringify({
      data: projects,
      timestamp: Date.now()
    }))
  },

  getCachedProjects: (): ProjectData[] | null => {
    const cached = localStorage.getItem('cached_projects')
    if (!cached) return null

    const { data, timestamp } = JSON.parse(cached)
    const isExpired = Date.now() - timestamp > 24 * 60 * 60 * 1000 // 24 hours

    return isExpired ? null : data
  },

  // Store form drafts
  saveDraft: (formName: string, data: any) => {
    localStorage.setItem(`draft_${formName}`, JSON.stringify(data))
  },

  getDraft: (formName: string) => {
    const draft = localStorage.getItem(`draft_${formName}`)
    return draft ? JSON.parse(draft) : null
  },

  clearDraft: (formName: string) => {
    localStorage.removeItem(`draft_${formName}`)
  }
}

// Mock data for development/fallback
export const mockData = {
  blogPosts: [
    {
      id: '1',
      title: 'Building Modern React Applications',
      slug: 'building-modern-react-applications',
      excerpt: 'Learn the latest patterns and best practices for React development.',
      content: '# Building Modern React Applications\n\nReact has evolved significantly...',
      category: 'tech',
      tags: ['React', 'JavaScript', 'Web Development'],
      publishedAt: '2024-04-20T10:00:00Z',
      readTime: 8,
      author: {
        name: 'Malith Rajamanthri',
        avatar: '/images/profile.jpg'
      }
    }
  ] as BlogPost[],

  projects: [
    {
      id: '1',
      title: 'SoundWave Music App',
      description: 'A Spotify-inspired music streaming application built with React and Web Audio API.',
      technologies: ['React', 'TypeScript', 'Web Audio API', 'Tailwind CSS'],
      githubUrl: 'https://github.com/malith/soundwave',
      liveUrl: 'https://soundwave-demo.vercel.app',
      imageUrl: '/images/projects/soundwave.jpg',
      featured: true
    }
  ] as ProjectData[]
}

// Environment-specific configurations
export const config = {
  isDevelopment: (import.meta as any).env?.DEV,
  isProduction: (import.meta as any).env?.PROD,
  apiUrl: API_BASE_URL,
  enableAnalytics: (import.meta as any).env?.VITE_ENABLE_ANALYTICS === 'true',
  enableMockData: (import.meta as any).env?.VITE_USE_MOCK_DATA === 'true'
}