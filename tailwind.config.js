/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "*",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'icons': 'rgb(148 163 184 / var(--tw-text-opacity))',
        ln: {
          bg: '#1B1F23',
          surface: '#1D2226',
          'surface-2': '#222629',
          hover: '#2A2E32',
          border: '#38434F',
          'border-subtle': 'rgba(255,255,255,0.08)',
          text: '#E7E9EA',
          muted: '#B0B5BB',
          dim: '#8B95A1',
          blue: '#70B5F9',
          'blue-hover': '#8FC4FA',
          'blue-soft': 'rgba(112,181,249,0.12)',
        },
      },
      screens:{
        xs:"530px"
      }
    },
  },
  plugins: [],
};
