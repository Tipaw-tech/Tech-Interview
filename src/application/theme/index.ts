import { createTheme } from '@mui/material/styles';
import {
  grey, red,
} from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      mode: string,
      primary: {
        main: string,
        contrastText: string,
      },
      error: {
        main: string,
        contrastText: string,
      },
      warning: {
        main: string,
        contrastText: string,
      },
      secondary: {
        main: string,
        contrastText: string,
        light?: string;
        dark?: string;
        50: string,
        100: string,
        200: string,
        300: string,
        400: string,
        500: string,
        600: string,
        700: string,
        800: string,
        900: string,
      },
      success: {
        main: string,
        dark: string,
        contrastText: string,
      },
      background: {
        default: string,
      },
      green: {
        main: string,
        dark: string,
        contrastText: string,
      },
      text: {
        primary: string,
      },
      tonalOffset: number,
    };
    typography: {
      htmlFontSize: number,
      fontSize: number,
    };
  }
}

export default createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5ACEE8',
    },
    success: {
      main: '#03C9A9'
    },
    text: {
      primary: '#616B77',
    },
  },
  typography: {
    htmlFontSize: 14,
    fontSize: 14,
    fontFamily: "'Open Sans', 'Helvetica', sans-serif",
  },
  zIndex: {
    tooltip: 2100,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 14,
          textTransform: 'none',
          fontWeight: 400,
          color: '#616B77',
        },
      },
    },
  },
});

