const themeProprieties = {
  breakpoints: ['640px', '768px', '1024px', '1920px'],
  space: [
    0,
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '5rem',
    '6rem',
    '8rem',
    '10rem'
  ],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  shadows: {
    xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl:
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
    none: 'none'
  },
  buttons: {
    transparent: {
      '&:focus': {
        outline: 'none'
      },
      '&::-moz-focus-inner': {
        border: 'none'
      },
      bg: 'transparent'
    },
    primary: {
      '&:focus': {
        outline: 'none'
      },
      '&::-moz-focus-inner': {
        border: 'none'
      },
      bg: 'primary'
    }
  }
}

const darkTheme = {
  ...themeProprieties,
  colors: {
    primary: '#d14545',
    secondary: '#ffd045',
    accent: '',
    highlight: '',
    gradient: '',
    background: '#333',
    backgroundImage: 'dark-bg',
    text: '#a1a1a1'
  }
}

/*
mais claro
background-color: #fc9842;
background-image: linear-gradient(315deg, #fc9842 0%, #fe5f75 74%);

mais laranja
background-color: #d14545;
background-image: linear-gradient(316deg, #d14545 0%, #ff9933 74%);

mais vermelho
background-color: #ffd045;
background-image: linear-gradient(315deg, #ffd045 0%, #d14545 74%);

*/

const lightTheme = {
  ...themeProprieties,
  colors: {
    primary: '#d14545',
    secondary: '#ffd045',
    accent: '',
    highlight: '',
    gradient: '',
    background: '#e1e1e1',
    backgroundImage: 'light-bg',
    text: '#333'
  }
}

export { lightTheme, darkTheme }
