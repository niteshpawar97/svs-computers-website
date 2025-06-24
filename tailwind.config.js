/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f", // or your brand color
        secondary: "#ffffff",
        accent: "#00bcd4", // cyan or your highlight color
        // primary: "#1A73E8", // blue
        // secondary: "#0A0A0A", // near-black
        // accent: "#FFC107", // yellow
        background: "#F4F7FA", // light gray background
        highlightBg: "#FCD34D", // soft yellow for highlighted text
      },
      spacing: {
        highlightPaddingX: "0.5rem", // padding-x (px-2) for highlighted word
        highlightPaddingY: "0.25rem", // padding-y (py-1) for highlighted word
      },
      borderRadius: {
        highlight: "0.25rem", // rounded corners for highlighted word
      },
    },
  },
  plugins: [],
};
