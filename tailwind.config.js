/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      
      "logo-back": '#1A1A1A',
      "btn-back": '#ff715d',
      "btn-hover": '#442925',
      
    },

    borderRadius: {
      '4xl': '2rem',
    },
  },
  },
  plugins: [],
}