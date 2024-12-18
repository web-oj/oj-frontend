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
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "light",
    themes: {
      dark: {
        extend: "dark",
        colors: {
          primary: {
            DEFAULT: "#A4F226",
            foreground: "#011903",
            50: "#F5FEE7",
            100: "#E1FBB7",
            200: "#B8F557",
            300: "#A4F226",
            400: "#8AD90D",
            500: "#6CA80A",
            600: "#4D7807",
            700: "#2E4804",
            800: "#0F1801",
            900: "#011903",
          }
        }
      },
      light: {
        extend: "light",
        colors: {
          primary: {
            DEFAULT: "#A4F226",
            foreground: "#011903",
            50: "#F5FEE7",
            100: "#E1FBB7",
            200: "#B8F557",
            300: "#A4F226",
            400: "#8AD90D",
            500: "#6CA80A",
            600: "#4D7807",
            700: "#2E4804",
            800: "#0F1801",
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
            DEFAULT: "#A4F226",
          },
          foreground: {
            DEFAULT: "#11181C",
          },
          background: {
            DEFAULT: "#E9F1E9",
          }
        }
      }
    }
  })],
}
