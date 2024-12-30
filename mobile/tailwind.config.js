/** @type {import('tailwindcss').Config} */

import theme from "./src/theme" // Importando o tema do arquivo

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: theme.COLORS, // Usando as cores personalizadas do arquivo de tema
      fontFamily: theme.FONT_FAMILY, // Usando as fontes personalizadas do arquivo de tema
      fontSize: theme.FONT_SIZE, // Usando os tamanhos de fonte personalizados do arquivo de tema
    },
  },
  plugins: [],
};