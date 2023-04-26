import { createTheme } from '@gliondar/fe/mui';
import { red, turquoise } from './colours';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: turquoise[500],
      contrastText: '#FFFFFF',
    },
    // secondary: {
    //   main: '#FFFFFF',
    //   contrastText: '#2C404A',
    // },
    text: {
      primary: '#2C404A',
      secondary: '#646464',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FAFAFA',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    divider: '#ECECEC',
    error: {
      main: red[500],
    },
  },
  typography: {
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: '3rem',
      fontWeight: 900,
      lineHeight: '3.5rem',
    },
    h2: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: '2.25rem',
      fontWeight: 900,
      lineHeight: '2.75rem',
    },
    h3: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: '2rem',
    },
    h4: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: '1.75rem',
      letterSpacing: '0.25px',
    },
    h5: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1.25rem',
      letterSpacing: '0.25px',
    },
    h6: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.25rem',
      letterSpacing: '0.25px',
    },
    body1: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.5rem',
      letterSpacing: '0.25px',
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  // TODO add default overrides for buttons
});
