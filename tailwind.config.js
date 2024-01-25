/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FF4900",
        labelCOlor: "#697386",
        borderColor: "#A3ACB9",
        checkboxColor: "#D9D9D9",
        linkColor: "#000AFF",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif", "Inter"],
      },
    },
  },
  plugins: [],
};
