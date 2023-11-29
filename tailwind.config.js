/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins500: ["Poppins", "sans-serif"],
        poppins400: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
