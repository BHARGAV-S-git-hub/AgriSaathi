/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#228B22", // Forest Green
        secondary: "#8B4513", // Earth Brown
        accent: "#FFD700", // Golden Yellow
        lightGreen: "#90EE90",
        cream: "#F5F5DC",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['Roboto', 'monospace'],
      },
    },
  },
  plugins: [],
}
