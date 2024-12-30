/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        WHITE: '#FFFFFF',
        BRAND_LIGHT: '#00B37E',
        BRAND_MID: '#00875F',
        GRAY_100: '#E1E1E6',
        GRAY_200: '#C4C4CC',
        GRAY_300: '#8D8D99',
        GRAY_400: '#7C7C8A',
        GRAY_500: '#505059',
        GRAY_800: '#202024',
        GRAY_700: '#29292E',
        GRAY_600: '#323238',
      },
      fontFamily: {
        REGULAR: ['Roboto_400Regular', 'sans-serif'],
        BOLD: ['Roboto_700Bold', 'sans-serif'],
      },
      fontSize: {
        XS: '12px',
        SM: '14px',
        MD: '16px',
        LG: '18px',
        XL: '20px',
        XXL: '24px',
        XXXL: '32px',
      }
    }
  },
  plugins: [],
};
