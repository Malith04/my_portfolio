# ⚡ Quick Reference Card

## 🚀 Essential Commands

```bash
# First time setup
npm install                    # Install dependencies (run once)

# Development
npm run dev                    # Start dev server (http://localhost:5173)
npm run build                  # Build for production
npm run preview                # Preview production build

# Troubleshooting
npm run dev -- --port 3000     # Use different port
rm -rf node_modules && npm install  # Reinstall dependencies
```

## 📁 File Structure

```
portfolio/
├── src/
│   ├── components/           # All UI components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Hero section (name, title)
│   │   ├── About.tsx        # About section (bio)
│   │   ├── Skills.tsx       # Skills showcase
│   │   ├── Projects.tsx     # Project portfolio
│   │   ├── Experience.tsx   # Timeline
│   │   ├── Contact.tsx      # Contact form
│   │   ├── StarField.tsx    # Background animation
│   │   └── ActionButton.tsx # Theme toggle & chatbot
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/
│   └── images/              # Your images go here
├── package.json             # Dependencies
├── tailwind.config.js       # Colors & styling
└── vite.config.ts           # Build config
```

## 🎨 Customization Quick Guide

### 1. Update Your Name & Info
**File:** `src/components/Hero.tsx`
```typescript
<h1>
  <span>Malith</span>        // ← Change your first name
  <span>Rajamanthri</span>   // ← Change your last name
</h1>
```

### 2. Update Your Bio
**File:** `src/components/About.tsx`
```typescript
<p>
  A passionate undergraduate...  // ← Change your bio
</p>
```

### 3. Add Your Projects
**File:** `src/components/Projects.tsx`
```typescript
const projects = [
  {
    title: 'Your Project',           // ← Project name
    description: 'Description...',   // ← What it does
    image: '/images/project.jpg',    // ← Screenshot
    tech: ['React', 'TypeScript'],   // ← Technologies used
    github: 'github-url',            // ← GitHub link
    live: 'live-url'                 // ← Live demo link
  }
]
```

### 4. Update Contact Info
**File:** `src/components/Contact.tsx`
```typescript
const contactInfo = [
  { label: 'Email', value: 'your@email.com' },     // ← Your email
  { label: 'Phone', value: '+1234567890' },        // ← Your phone
  { label: 'Location', value: 'Your City' }        // ← Your location
]
```

### 5. Change Colors
**File:** `tailwind.config.js`
```javascript
colors: {
  primary: {
    DEFAULT: '#00d4ff',  // ← Your primary color
  },
  secondary: '#ff6b6b',  // ← Your secondary color
  accent: '#ffd93d',     // ← Your accent color
}
```

### 6. Add Your Images
1. Put images in `public/images/` folder
2. Reference them: `/images/your-image.jpg`

## 🎯 Common Tasks

### Add a New Section
1. Create `src/components/NewSection.tsx`
2. Import in `src/App.tsx`
3. Add to the page

### Change Font
**File:** `src/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

### Update Skills
**File:** `src/components/Skills.tsx`
```typescript
skills: ['JavaScript', 'React', 'Your Skill']  // ← Add your skills
```

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port already in use | `npm run dev -- --port 3000` |
| npm command not found | Install Node.js from nodejs.org |
| Build errors | `rm -rf node_modules && npm install` |
| Changes not showing | Hard refresh: Ctrl+Shift+R |
| TypeScript errors | Check file imports and types |

## 📱 Testing Checklist

```
□ Run npm run dev
□ Open http://localhost:5173
□ Test all sections
□ Test navigation
□ Test theme toggle
□ Test chatbot
□ Test contact form
□ Test on mobile (F12 → Device toolbar)
□ Check console for errors (F12)
□ Test all links
```

## 🚀 Deployment Steps

### Vercel (Easiest)
1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Deploy

### Netlify
1. `npm run build`
2. Go to netlify.com
3. Drag `dist` folder
4. Deploy

### GitHub Pages
1. `npm install -D gh-pages`
2. Add to package.json: `"deploy": "vite build && gh-pages -d dist"`
3. Update vite.config.ts: `base: '/repo-name/'`
4. `npm run deploy`

## 🎨 Tailwind Classes Quick Reference

```
Spacing:
p-4    = padding: 1rem
m-4    = margin: 1rem
px-4   = padding left/right
py-4   = padding top/bottom

Text:
text-sm, text-base, text-lg, text-xl, text-2xl
font-bold, font-semibold, font-normal
text-center, text-left, text-right

Colors:
text-primary, text-secondary, text-accent
bg-primary, bg-secondary, bg-accent

Layout:
flex, grid
items-center, justify-center
gap-4, space-x-4, space-y-4

Responsive:
sm:text-lg   = small screens
md:text-xl   = medium screens
lg:text-2xl  = large screens

Hover:
hover:bg-primary
hover:scale-105
hover:text-white
```

## 🔑 Keyboard Shortcuts

```
Ctrl + C         = Stop dev server
Ctrl + Shift + R = Hard refresh browser
F12              = Open DevTools
Ctrl + /         = Comment code
Ctrl + S         = Save (auto-reload)
```

## 📚 Documentation Links

- React: https://react.dev
- TypeScript: https://typescriptlang.org
- Tailwind: https://tailwindcss.com
- Vite: https://vitejs.dev
- Framer Motion: https://framer.com/motion

## 💡 Pro Tips

1. **Keep dev server running** - Changes auto-reload
2. **Use TypeScript autocomplete** - Press Ctrl+Space
3. **Check browser console** - F12 for errors
4. **Test mobile first** - Use DevTools device mode
5. **Commit often** - Save your progress with Git
6. **Read error messages** - They usually tell you what's wrong
7. **Use components** - Don't repeat code
8. **Follow naming conventions** - PascalCase for components

## 🎯 File Naming Conventions

```
Components:     PascalCase    (Hero.tsx, Navbar.tsx)
Functions:      camelCase     (getUserData, handleClick)
Constants:      UPPER_CASE    (API_URL, MAX_ITEMS)
CSS classes:    kebab-case    (hero-section, nav-link)
```

## 🌟 Component Template

```typescript
import { motion } from 'framer-motion'

const YourComponent = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Your <span className="text-gradient">Title</span>
        </h2>
        
        {/* Your content here */}
      </div>
    </section>
  )
}

export default YourComponent
```

## 📊 Performance Checklist

```
□ Images optimized (< 500KB each)
□ No console errors
□ Fast load time (< 2s)
□ Smooth animations
□ Mobile responsive
□ Lighthouse score > 90
```

## 🎨 Color Palette

```
Primary:   #00d4ff  (Cyan)
Secondary: #ff6b6b  (Red)
Accent:    #ffd93d  (Yellow)
Black:     #000000
White:     #ffffff
Gray:      #6b7280
```

## 🔗 Useful URLs

```
Dev Server:     http://localhost:5173
Preview:        http://localhost:4173
Vercel:         https://vercel.com
Netlify:        https://netlify.com
GitHub:         https://github.com
```

---

## 🆘 Need More Help?

1. **START-HERE.md** - Complete getting started guide
2. **SETUP-GUIDE.md** - Detailed setup instructions
3. **WHATS-NEW.md** - See all new features
4. **README-NEW.md** - Full technical documentation
5. **COMPARISON.md** - Old vs new comparison

---

**Print this page and keep it handy! 📄**
