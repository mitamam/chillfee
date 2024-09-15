import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
          main: '#B5BDAC',
          accent: '#4C5B3A',
          accent2: '#392E26',
          bg: '#F5F2ED',
          textbk: '#333333',
      },
      backfaceVisibility: {
        'backface-hidden': '-webkit-backface-visibility: hidden; backface-visibility: hidden;',
      }
    }
  },
  plugins: [
    function({ addUtilities }: {addUtilities: any}) {
      const newUtilities = {
        '.backface-hidden': {
          '-webkit-backface-visibility': 'hidden',
          'backface-visibility': 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
export default config;