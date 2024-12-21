/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        primary: "#2D3748",
        secondary: "#CBD5E0",
        highlight: "#4A5568",
      },
      fontFamily: {
        montserrat: "Montserrat",
        open_sans: "Open Sans",
      },
    },
  },
  plugins: [],
};
