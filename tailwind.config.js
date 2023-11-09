/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",
  './node_modules/components-name/**/*.{html,js,ts}',
  './projects/my-lib/**/*.{html,js,ts}',
  './**/*.{html,ts,css,scss}',"./**/*.{icon, svg}"],
  theme: {
    extend: {},
  },
  plugins: [],
}


