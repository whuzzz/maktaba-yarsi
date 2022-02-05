const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.jsx', './src/components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0F172A',
        light: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        poppins: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
};
