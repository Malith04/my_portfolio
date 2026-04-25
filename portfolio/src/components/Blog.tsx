import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern React Applications with TypeScript",
      excerpt: "Learn how to create scalable and maintainable React applications using TypeScript, covering best practices and advanced patterns.",
      content: `
# Building Modern React Applications with TypeScript

TypeScript has revolutionized the way we build React applications. In this comprehensive guide, I'll share my experience and best practices for creating robust, scalable React applications.

## Why TypeScript?

TypeScript provides several key benefits:
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Improved Code Quality**: Self-documenting code with interfaces
- **Team Collaboration**: Clear contracts between components

## Setting Up Your Project

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
\`\`\`

## Key Concepts

### 1. Component Props with Interfaces

\`\`\`typescript
interface ButtonProps {
  variant: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick: () => void
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ variant, size = 'md', onClick, children }) => {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
\`\`\`

### 2. State Management with TypeScript

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
}

const [users, setUsers] = useState<User[]>([])
const [loading, setLoading] = useState<boolean>(false)
\`\`\`

## Best Practices

1. **Use Strict Mode**: Enable strict TypeScript settings
2. **Define Clear Interfaces**: Create reusable type definitions
3. **Leverage Union Types**: Use union types for component variants
4. **Generic Components**: Create flexible, reusable components

## Conclusion

TypeScript transforms React development by providing type safety and better developer experience. Start small, gradually adopt more advanced features, and enjoy building more reliable applications!
      `,
      category: "tech",
      date: "2024-04-20",
      readTime: 8,
      tags: ["React", "TypeScript", "Web Development"],
      image: "/images/blog/react-typescript.jpg"
    },
    {
      id: 2,
      title: "My Journey Learning Full-Stack Development",
      excerpt: "From HTML basics to modern React applications - sharing my learning path, challenges, and key milestones in becoming a full-stack developer.",
      content: `
# My Journey Learning Full-Stack Development

Starting my journey in web development has been an incredible adventure filled with challenges, discoveries, and countless "aha!" moments.

## The Beginning

It all started with curiosity about how websites work. My first line of code was a simple HTML "Hello World" - little did I know it would spark a passion that would shape my career.

## Key Milestones

### 1. HTML & CSS Foundations (Month 1-2)
- Learning semantic HTML
- Understanding CSS layouts
- Building my first static websites

### 2. JavaScript Magic (Month 3-4)
- DOM manipulation
- Event handling
- Async programming with promises

### 3. React Revolution (Month 5-6)
- Component-based thinking
- State management
- Building interactive UIs

### 4. Backend Adventures (Month 7-8)
- Node.js and Express
- Database design
- API development

## Challenges Faced

1. **Imposter Syndrome**: Feeling like I didn't belong
2. **Information Overload**: Too many technologies to learn
3. **Debugging Frustration**: Spending hours on simple bugs
4. **Project Scope Creep**: Starting projects too ambitious

## Lessons Learned

- **Consistency beats intensity**: Daily practice is key
- **Build projects**: Theory without practice is useless
- **Join communities**: Learning with others accelerates growth
- **Embrace failure**: Every bug is a learning opportunity

## Current Focus

Now I'm focusing on:
- Advanced React patterns
- TypeScript mastery
- System design principles
- Open source contributions

## Advice for Beginners

1. Start with the fundamentals
2. Build lots of projects
3. Don't skip the basics
4. Find a mentor or community
5. Be patient with yourself

The journey continues, and I'm excited about what's next!
      `,
      category: "learning",
      date: "2024-04-15",
      readTime: 6,
      tags: ["Learning", "Career", "Web Development"],
      image: "/images/blog/learning-journey.jpg"
    },
    {
      id: 3,
      title: "Building SoundWave: A Spotify-Inspired Music App",
      excerpt: "Deep dive into creating a modern music streaming application with React, featuring real-time audio playback and beautiful UI design.",
      content: `
# Building SoundWave: A Spotify-Inspired Music App

Creating SoundWave was one of my most exciting projects - a music streaming application that combines modern web technologies with beautiful design.

## Project Overview

SoundWave is a Spotify-inspired music application built with:
- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Audio**: Web Audio API
- **State Management**: Zustand
- **Animations**: Framer Motion

## Key Features

### 1. Music Player
- Play/pause functionality
- Progress tracking
- Volume control
- Shuffle and repeat modes

### 2. Playlist Management
- Create custom playlists
- Add/remove songs
- Drag and drop reordering

### 3. Search & Discovery
- Real-time search
- Genre filtering
- Artist recommendations

## Technical Challenges

### Audio Synchronization
Managing audio state across components was tricky:

\`\`\`typescript
interface AudioState {
  currentTrack: Track | null
  isPlaying: boolean
  currentTime: number
  duration: number
  volume: number
}

const useAudioStore = create<AudioState>((set, get) => ({
  currentTrack: null,
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 1,
  
  play: () => set({ isPlaying: true }),
  pause: () => set({ isPlaying: false }),
  setCurrentTime: (time) => set({ currentTime: time })
}))
\`\`\`

### Performance Optimization
- Lazy loading for large playlists
- Virtual scrolling for song lists
- Image optimization and caching

## Design Decisions

### Color Scheme
- Dark theme for better focus
- Gradient accents for visual appeal
- High contrast for accessibility

### Layout
- Sidebar navigation
- Main content area
- Bottom player controls

## Lessons Learned

1. **Audio APIs are complex**: Web Audio API has many gotchas
2. **State management matters**: Complex apps need proper state architecture
3. **Performance is crucial**: Large lists need optimization
4. **User experience first**: Beautiful design means nothing without good UX

## Future Enhancements

- Social features (sharing playlists)
- Offline playback
- Advanced audio effects
- Mobile app version

Building SoundWave taught me so much about modern web development and user experience design!
      `,
      category: "projects",
      date: "2024-04-10",
      readTime: 10,
      tags: ["React", "Audio", "UI/UX", "TypeScript"],
      image: "/images/blog/soundwave-project.jpg"
    },
    {
      id: 4,
      title: "Essential VS Code Extensions for React Developers",
      excerpt: "Boost your productivity with these must-have VS Code extensions specifically chosen for React and TypeScript development.",
      content: `
# Essential VS Code Extensions for React Developers

As a React developer, having the right tools can significantly boost your productivity. Here are my top VS Code extensions that I can't live without.

## Must-Have Extensions

### 1. ES7+ React/Redux/React-Native snippets
- **What it does**: Provides useful code snippets
- **Key snippets**: \`rafce\`, \`useState\`, \`useEffect\`
- **Why I love it**: Saves tons of typing time

### 2. Auto Rename Tag
- **What it does**: Automatically renames paired HTML/JSX tags
- **Why it's essential**: Prevents mismatched tags
- **Time saved**: Countless hours of debugging

### 3. Bracket Pair Colorizer 2
- **What it does**: Colors matching brackets
- **Benefit**: Easier to track nested components
- **Visual clarity**: Reduces cognitive load

### 4. GitLens
- **What it does**: Supercharges Git capabilities
- **Features**: Blame annotations, commit history
- **Team work**: Essential for collaboration

## TypeScript Specific

### 5. TypeScript Importer
- **Auto imports**: Automatically adds import statements
- **Path resolution**: Handles complex import paths
- **Productivity boost**: Focus on code, not imports

### 6. Error Lens
- **Inline errors**: Shows TypeScript errors inline
- **Quick feedback**: Immediate error visibility
- **Better DX**: Improved developer experience

## Styling & Design

### 7. Tailwind CSS IntelliSense
- **Autocomplete**: Class name suggestions
- **Documentation**: Hover for CSS properties
- **Productivity**: Faster styling workflow

### 8. Color Highlight
- **Visual colors**: Shows actual colors in code
- **Design consistency**: Easier color management
- **Quick reference**: No need to check color values

## Code Quality

### 9. ESLint
- **Code quality**: Enforces coding standards
- **Error prevention**: Catches common mistakes
- **Team consistency**: Shared coding rules

### 10. Prettier
- **Code formatting**: Consistent code style
- **Auto format**: Format on save
- **Team harmony**: No more style debates

## Productivity Boosters

### 11. Thunder Client
- **API testing**: Test APIs directly in VS Code
- **No Postman needed**: Lightweight alternative
- **Integrated workflow**: Stay in your editor

### 12. Live Server
- **Local development**: Instant preview
- **Hot reload**: Automatic refresh
- **Quick testing**: Fast feedback loop

## My Setup Tips

### Settings Configuration
\`\`\`json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
\`\`\`

### Keyboard Shortcuts
- \`Ctrl+Shift+P\`: Command palette
- \`Ctrl+\`\`: Toggle terminal
- \`Alt+Shift+F\`: Format document

## Conclusion

These extensions have transformed my development workflow. Start with the essentials and gradually add more based on your needs.

Remember: Tools should enhance your workflow, not complicate it. Choose extensions that solve real problems you face daily.

Happy coding! 🚀
      `,
      category: "tips",
      date: "2024-04-05",
      readTime: 5,
      tags: ["VS Code", "Productivity", "Tools", "React"],
      image: "/images/blog/vscode-extensions.jpg"
    }
  ]

  const categories = [
    { id: 'all', name: 'All', count: blogPosts.length },
    { id: 'tech', name: 'Technology', count: blogPosts.filter(p => p.category === 'tech').length },
    { id: 'learning', name: 'Learning', count: blogPosts.filter(p => p.category === 'learning').length },
    { id: 'projects', name: 'Projects', count: blogPosts.filter(p => p.category === 'projects').length },
    { id: 'tips', name: 'Tips', count: blogPosts.filter(p => p.category === 'tips').length }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-kicker mb-3">Sharing my learning journey</p>
          <h2 className="section-title">
            Blog <span className="text-gradient">& Insights</span>
          </h2>
        </div>

        {/* Filters and Search */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-primary focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-accent text-black'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="surface-card overflow-hidden hover:border-primary/50 transition-all group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Post Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 rounded text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium group-hover:underline">
                    Read More
                  </span>
                  <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">No posts found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Blog Post Modal */}
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black/95 border border-white/10 rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{selectedPost.readTime} min read</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <h1 className="text-3xl font-display font-bold mb-4">{selectedPost.title}</h1>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="prose prose-invert max-w-none">
                  <div className="whitespace-pre-wrap">{selectedPost.content}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Blog