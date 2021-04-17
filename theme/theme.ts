import { createMuiTheme } from '@material-ui/core/styles';

// https://www.schemecolor.com/light-dark-blue-gradient.php

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#C9DCE9',
      main: '#2A63AB',
      dark: '#001842',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      secondary: '#FFFFFF',
      primary: '#000000',
    },
  },
});
