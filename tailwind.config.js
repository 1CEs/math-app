/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      background: 'var(--background-color)',
      white: 'var(--white)',
      black: 'var(--black)',
      gray: 'var(--gray)',
      'gray-light': 'var(--gray-light)',
    }
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        ':root': {
          '--primary-color': '#41ab5d',
          '--secondary-color': '#74c476',
          '--background-color': '#060a0d',
          '--white': '#fff',
          '--black': '#000',
          '--gray': '#606060',
          '--gray-light': '#b3b3b3',
        }
      })
    }
  ],
}

