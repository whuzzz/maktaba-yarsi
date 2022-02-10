const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.jsx",
    "./src/common/**/*.{js,jsx}",
    "./src/features/**/*.jsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        poppins: "Poppins, sans-serif",
      },
    },
  },
  plugins: [],
};
