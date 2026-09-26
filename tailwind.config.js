/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        dnd: {
          red: '#58180D',
          redHover: '#792314',
          redDark: '#3b0f08',
          gold: '#C99A3E',
          goldLight: '#E5B758',
          goldDark: '#8C6B23',
          parchment: '#F5EED9',
          parchmentDark: '#E8DDBE',
          ink: '#231815',
          leather: '#18120C',
          wood: '#0F0B08',
          slate: '#2B231D'
        }
      }
    }
  },
  plugins: [],
}
