/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      backgroundColor: {
        'Body': '#041C32',
        'Secd': '#04293A',
        'Thir': '#064663',
        'Text': '#ECB365',
      },
      colors: {
        'Body': '#041C32',
        'Secd': '#04293A',
        'Thir': '#064663',
        'Text': '#ECB365',
      },
      fontFamily: {
        'Comf': ['Comfortaa', 'sans-serif'],
        'Oswd': ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'Curves': "url('./src/assets/Cuves.svg')"
      },
      boxShadow: {
        'Neon': '0 0 10px #00b3ff, 0 0 20px #040482, 0 0 40px #040482, 0 0 80px #040482,0 0 120px #040482'
      },
      keyframes: {
        LiftUp: {
          '0%': { 
            transform: 'translateY(150%)',
          }, '40%': {
            transform: 'translateY(-25%)',
          }, '60%': {
            transformOrigin: 'center',
            transform: 'translateY(0%)',
          }, '90%': {
            transform: 'scale(1.025)',
          }, '100%': {
            transform: 'scale(1)',
          }
        },
        Bounce: {
          '0%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      }
    },
  },
  plugins: [],
}
