/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate: ['peer-focus', 'peer-not-placeholder-shown'],
      fontSize: ['peer-focus', 'peer-not-placeholder-shown'],
    },
  },
  plugins: [],
}

