/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // enables dark mode support via class
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',       // Deep navy
        secondary: '#f3f4f6',     // Soft gray-white
        accent: '#fbbf24',        // Amber/golden
        textMain: '#e5e7eb',      // Light gray text
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        growLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        growLine: 'growLine 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
};

