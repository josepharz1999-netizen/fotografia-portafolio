/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fafafa',
          100: '#f5f5f5',
          900: '#1a1a1a',
        },
        accent: {
          gold: '#d4af37',
          silver: '#c0c0c0',
        },
        text: {
          primary: '#1a1a1a',
          secondary: '#4a4a4a',
          light: '#8a8a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'md': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'lg': '0 10px 30px rgba(0, 0, 0, 0.2)',
        'xl': '0 20px 50px rgba(0, 0, 0, 0.25)',
      },
      backdropFilter: {
        'blur-sm': 'blur(4px)',
        'blur-md': 'blur(8px)',
        'blur-lg': 'blur(12px)',
      }
    },
  },
  plugins: [],
}
