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
      colors: {
        primary: {
          light: '#059669',
          dark: '#10b981',
        },
        light: {
          100: '#f8fafc',
          200: '#f1f5f9',
          300: '#e2e8f0',
          400: '#cbd5e1',
        },
        dark: {
          100: '#0f172a',
          200: '#1e293b',
          300: '#334155',
          400: '#475569',
        },
      },
    },
  },
  plugins: [],
};
