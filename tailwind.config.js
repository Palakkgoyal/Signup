/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(-65vh)' },
          '100%': { transform: 'translateY(-141vh)' },
        }
      },
      animation: {
        'scrolling': "scroll 0.4s linear 1"
      },
    },
  },
  plugins: [],
}
