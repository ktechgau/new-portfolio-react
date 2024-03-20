/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1280px',
      xl:'1024px',
      xxl: '1440px',
    },
    fontFamily:{
      serif:['Playfair Display', 'serif'],
      sans:['Roboto Mono','monospace'],
    },
    extend: {
      colors:{
        tan: 'rgb(202 138 4)',
        black:'#000000',
        white: 'rgb(253 242 248)',
        grey: 'rgb(63 63 70)',
      },
    },
    darkMode:'class',
  },
  plugins: [],
}

