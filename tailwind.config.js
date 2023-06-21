/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          base: '#F8FAF9',
          dark: '#002B28',
          gray: '#6A716E',
          pink: '#EA0B2C',
        },
      },
    },
  },
  plugins: [],
};
