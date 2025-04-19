/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
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
      'background-bright': 'var(--background-bright)',
      'background-dark': 'var(--background-dark)',
      golden: 'var(--golden)',
    }
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        ':root': {
          '--primary-color': '#41ab5d',
          '--secondary-color': '#74c476',
          '--background-color': '#060a0d',
          '--white': '#EEE',
          '--black': '#000',
          '--gray': '#606060',
          '--gray-light': '#b3b3b3',
          '--background-bright': '#202935',
          '--background-dark': '#192029',
          '--golden': '#ffc100',
        }
      })
    }
  ],
}

