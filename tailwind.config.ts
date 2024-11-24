import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF',        // Azul cielo
        success: '#34C759',        // Verde
        danger: '#FF3B30',         // Rojo suave
        black: '#1C1C1E',          // Negro suave
        white: '#FFFFFF',          // Blanco
        grayLight: '#F2F2F7',      // Gris claro
        grayMedium: '#D1D1D6',     // Gris medio
        grayDark: '#3A3A3C',       // Gris oscuro
        smokeWhite: '#F5F5F7'      // Blanco humo
      },
    },
  },
  plugins: [],
};
export default config;
