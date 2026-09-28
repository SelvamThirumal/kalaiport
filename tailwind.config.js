/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#070b19',
          900: '#0c1329',
          800: '#141e3d',
          700: '#1d2b56',
        },
        brand: {
          blue: '#3b82f6',
          indigo: '#6366f1',
          purple: '#8b5cf6',
          violet: '#a855f7',
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite 1s',
        'float-reverse': 'floatRev 5s ease-in-out infinite 0.5s',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
