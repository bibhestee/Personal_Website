/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'lightBlue': '#99ddff'
        },
        fontFamily: {
          abel: ['Abel', 'sans-serif'],
          cutive: ['Cutive Mono', 'monospace'],
          inco: ['Inconsolata', 'monospace'],
          robo: ['Roboto Condensed', 'sans-serif'],
          robo_mono: ['Roboto Mono', 'monospace'],
          cursive: ['Tourney', 'cursive'],
        },
    },
  },
  plugins: [],
}
