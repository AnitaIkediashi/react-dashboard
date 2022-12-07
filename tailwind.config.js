/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-blue-50": "#ebf0f0",
        "color-blue-100": "#0052ff",
        "color-black-50": "#747a80",
        "color-black-100": "#000",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
