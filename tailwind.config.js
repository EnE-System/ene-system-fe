/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#FF9800",
        'secondary': "#4CAF50"
      },
    },
  },
  plugins: [],
}
