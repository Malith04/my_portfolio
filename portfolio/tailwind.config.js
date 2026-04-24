/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0c1117',
        surface: '#111a24',
        primary: '#f5c84b',
        secondary: '#ff7a59',
        accent: '#4dd0e1',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(245, 200, 75, 0.4)' },
          '100%': { boxShadow: '0 0 20px rgba(245, 200, 75, 0.8)' },
        },
        'fade-in': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
