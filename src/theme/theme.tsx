import { createTheme } from '@mui/material/styles';

import { colorPalette } from './colorPalette';
import { typography } from './typography';

export const theme = createTheme({
  palette: {
    primary: {
      main: colorPalette.primary,
      light: colorPalette.primaryLight,
      dark: colorPalette.primaryDark,
      contrastText: colorPalette.primaryText,
    },
    secondary: {
      main: colorPalette.secondary,
      light: colorPalette.secondaryLight,
      dark: colorPalette.secondaryDark,
      contrastText: colorPalette.secondaryText,
    },
    background: {
      default: colorPalette.background,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      typography['Roboto'],
      typography['Helvetica Neue'],
      typography['sans-serif'],
    ].join(','),
    h1: {
      color: colorPalette.primary,
    },
    h2: {
      color: colorPalette.primary,
    },
    h3: {
      color: colorPalette.primary,
    },
    h4: {
      color: colorPalette.primary,
    },
    h5: {
      color: colorPalette.primary,
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "32px"
    },
    h6: {
      color: colorPalette.primary,
      fontWeight: 500,
      fontSize: 20,
      lineHeight: "32px"
    },
    subtitle1:{

    },
    subtitle2:{
      fontSize: 20,
      fontFamily: [
        typography['Times New Roman'],
        typography['serif'],
      ].join(',')
    },
    body1:{
      color: colorPalette.body1Color,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px"
    },
    body2:{
      color: colorPalette.body2Color,
      fontFamily: [
        typography['Inter'],
        typography['serif'],
      ].join(',')
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          color: colorPalette.header,
        },
      },
    },
  },
});
