import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'h-120': '48rem'
      },
      backgroundImage: {
        'background-home': "url('/images/background.gif')",
        'page-video': "url('/images/page-video.gif')",
        'background-home-opacity': "url('/images/background-home-opacity.gif')",
        'background-about': "url('/images/background-about.jpg')"
      },
      borderWidth: {
        'b-bottom': '0 0 0.2px 0',
        'b-sm': '0.2px',
        'b-top-sm': '0.2px 0 0 0',
        'border-1': '1px'
      },
      keyframes: {
        'loopAnimation': {
          'to': { transform: 'translateX(0)' },
          'from, 10%': { transform: 'translateX(-100%)' }
        },
        'scaleAnimation': {
          '0, 100%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(0.9)' }
        }
      },
      animation: {
        'looping-image': 'loopAnimation 30s linear infinite',
        'scale-animation': 'scaleAnimation 3s ease-in-out infinite'
      },
      colors: {
        background: '#E1E1E6',
        primary: {
          700: '#92A0AD'
        },
        secondary: {
          700: '#213A5C'
        },
        red: {
          700: '#ec1c24',
          850: '#A7191F',
        },
        gray: {
          700: '#121214',
          600: '#202024',
          500: '#29292E',
          400: '#323238',
          300: '#7C7C8A',
          200: '#C4C4CC',
          150: '#D9D9D9',
          100: '#E1E1E6'
        },
        green: {
          500: '#007b00',
          300: '#92e27a'
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
