/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'btn-color': "#FF9800",
        'primary': "#4CAF50"
      },
    },
  },
  plugins: [],
}
