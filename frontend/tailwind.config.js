/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#2b87d1',
        customYellow: '#ffd154',
      },
    },
  },
  plugins: [],
}

