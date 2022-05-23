module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: "'Plus Jakarta Sans', sans-serif",
    },
    extend: {
      colors: {
        primary: {
          100: '#E7FBFA',
          400: '#0BD6CA',
          700: '#0AC2B7',
        },
        textPrimary: '#333',
        textSecondary: '#666666',
        textLight: '#808080',
      },
    },
  },
  plugins: [],
};
