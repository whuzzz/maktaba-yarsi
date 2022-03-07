module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.tsx', './src/common/**/*.{ts,tsx}', './src/features/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: () => ({
        hero: "url('/bg-hero.webp')",
      }),
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        LPMQ: ['LPMQ Isep Misbah', 'Traditional Arabic', 'Tahoma', 'sans-serif'],
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
