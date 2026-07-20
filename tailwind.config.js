/** @type {import('tailwindcss').Config} */
import tailwindTypography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {

      colors: {

        primary: {
          50: "#F5F9FF",
          100: "#E8F2FF",
          200: "#CFE3FF",
          300: "#9EC6FF",
          400: "#5EA5FF",
          500: "#2F7CF6",
          600: "#1557B0",
          700: "#114999",
          800: "#0C3775",
          900: "#082851",
        },

        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#3FD3C8",
          500: "#14B8A6",
          600: "#0E9E90",
        },

      },

      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },

      maxWidth: {
        site: "1380px",
      },

      borderRadius: {
        card: "28px",
        button: "9999px",
      },

      boxShadow: {
        card: "0 20px 60px rgba(15,23,42,.08)",
        floating: "0 40px 80px rgba(15,23,42,.15)",
        navbar: "0 8px 30px rgba(15,23,42,.06)",
      },

      spacing: {
        section: "120px",
      },

    },
  },

  plugins: [
    tailwindTypography,
  ],
}