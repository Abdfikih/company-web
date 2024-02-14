module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
      colors: {
        bglight: "#F9FAFB",
        marrslight: "#1766e5", // Ubah dari merah menjadi biru
        marrsgreen: "#1d45da", // Ubah dari merah menjadi biru
        marrsdark: "#002080", // Ubah dari merah menjadi biru
        cardlight: "#EFF3F3",
    
        // bgdark: "#2D2D2D",
        bgdark: "#1D2A35",
        carrilight: "#1766e5",
        carrigreen: "#1d45da",
        carridark: "#002080",
    
        // carddark: "#383838",
        carddark: "#1d45da",
        textlight: "#F9FAFB",
    },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
