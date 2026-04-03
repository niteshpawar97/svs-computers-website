/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a192f',
          50: '#e8edf4',
          100: '#c5d0e3',
          200: '#9fb2d0',
          300: '#7994bd',
          400: '#5c7eaf',
          500: '#3f68a1',
          600: '#365b8e',
          700: '#2b4a76',
          800: '#1f395f',
          900: '#0a192f',
          950: '#050d18',
        },
        accent: {
          DEFAULT: '#00bcd4',
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#00bcd4',
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
        },
        secondary: '#ffffff',
        background: '#F4F7FA',
        surface: '#ffffff',
        highlight: {
          DEFAULT: '#FCD34D',
          light: '#FEF3C7',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.25', fontWeight: '700' }],
        'heading': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        'section': '5rem',
        'section-lg': '7rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.08)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.08)',
        'elevated': '0 20px 40px -12px rgb(0 0 0 / 0.15)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0a192f 0%, #1c3f6c 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00bcd4 0%, #0097a7 100%)',
        'gradient-hero': 'linear-gradient(to bottom, rgba(10,25,47,0.7), rgba(10,25,47,0.95))',
      },
    },
  },
  plugins: [],
};
