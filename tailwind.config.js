/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': '#99ddff'
    },
    fontFamily: {
      sans: ['Abel','Roboto Condensed',...defaultTheme.fontFamily.sans],
      mono: ['Inconsolata', 'Roboto Mono',...defaultTheme.fontFamily.mono],
      monospace: ['Cutive Moneo',...defaultTheme.fontFamily.monospace],
      cursive: ['Tourney',...defaultTheme.fontFamily.cursive],
    },
  },
  plugins: [],
}
