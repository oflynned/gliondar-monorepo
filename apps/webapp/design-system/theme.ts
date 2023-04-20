import { createTheme } from '@mui/material';
import { red, turquoise } from './colours';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: turquoise[500],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#2C404A',
    },
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
      fontSize: '48px',
      fontWeight: 900,
      lineHeight: '56px',
    },
    h2: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      fontSize: '36px',
      fontWeight: 900,
      lineHeight: '44px',
    },
    h3: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '32px',
    },
    h4: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '28px',
      letterSpacing: '0.25px',
    },
    h5: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    h6: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    body1: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.25px',
    },
    body2: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  // TODO add default overrides for buttons
});
