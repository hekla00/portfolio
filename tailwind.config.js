module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    colors: {
      palePink: {
        DEFAULT: '#F8E0DE',
        dark: '#F7D6D6',
      },
      ghostWhite: {
        DEFAULT: '#F7FCFF',
      },
      water: {
        DEFAULT: '#D0EAFA'
      },
      purple: {
        DEFAULT: '#C5D2EF'
      },
      silverPink: {
        DEFAULT: '#BFABAD'
      },
      darkVanilla: {
        DEFAULT: '#D2BAAF'
      },
      alabaster: {
        DEFAULT: '#EFEDE7'
      },
      timberwolf: {
        DEFAULT: '#DAD8CD'
      },
      paleSilver: {
        DEFAULT: '#C7C7BA'
      },
      rosyBrown: {
        DEFAULT: '#E6D1D2'
      },
      lightGray: {
        DEFAULT: '#DAD5D6'
      },
      darkSlateGray: {
        DEFAULT: 'B2B5B9'
      },
    }
  },
},
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
