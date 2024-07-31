/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'be-vietnam-pro': ['Be Vietnam Pro', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'custom-orange': '#ED6D4A',
        'gradient-start': '#6a41fb',
        'gradient-mid': '#f49959',
        'gradient-end': '#6a41fb',
        'custom-gray': '#f7f7f7', 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(270deg, #f22fb0 .48%, #ff7426 93.92%)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hover\\:bg-gradient-custom': {
          '&:hover': {
            backgroundImage: 'linear-gradient(90deg, #6a41fb, #f49959, #6a41fb) !important',
          },
        },
        '.text-gradient': {
          background: 'linear-gradient(90deg, #6a41fb, #f49959, #6a41fb)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}
// tailwind.config.js