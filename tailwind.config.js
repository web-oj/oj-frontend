import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "light",
    themes: {
      dark: {
        extend: "light",
        colors: {
          primary: {
            DEFAULT: "#21F733",
            foreground: "#011903",
            50: "#E6FEE8",
            100: "#B5FCBB",
            200: "#84FB8D",
            300: "#52F960",
            400: "#21F733",
            500: "#08DE19",
            600: "#06AD14",
            700: "#047B0E",
            800: "#034A08",
            900: "#011903",
          },
          secondary: {
            DEFAULT: "#C4E600",
            foreground: "#011903",
            50: "#FBFFE5",
            100: "#F4FFB3",
            200: "#EDFF80",
            300: "#E5FF4D",
            400: "#DEFF1A",
            500: "#C4E600",
            600: "#99B300",
            700: "#6D8000",
            800: "#414D00",
            900: "#161A00",
          },
          focus: {
            DEFAULT: "#21F733",
          },
          foreground: {
            DEFAULT: "#11181C"
          },
          background: {
            DEFAULT: "#E0E3DF",
          }
        }
      }
    }
  })],
}
