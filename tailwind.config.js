/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        primary: "#64B5F6",
        secondary: "#1e293b",
        lightSlate: "#4A5568",
        highlight: "#3b82f6",
      },
      fontFamily: {
        kanit: "Kanit",
        open_sans: "Open Sans",
      },
    },
  },
  plugins: [],
};
