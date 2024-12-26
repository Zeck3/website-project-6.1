/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      "drop-shadow" : "linear-gradient(0deg, rgba(8,4,1,0) 50%, rgba(8,4,1,1) 100%), linear-gradient(0deg, rgba(8,1,1,0.5) 0%, rgba(8,4,1,0) 50%)",
    },
  },
  plugins: [],
}

