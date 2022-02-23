const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.jsx', './src/common/**/*.{js,jsx}', './src/features/**/*.jsx'],
  theme: {
    extend: {
      backgroundImage: () => ({
        hero: "url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')",
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        poppins: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
};
