import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = (mode) => () => createMuiTheme({
  palette: mode == 'dark' ? {
    mode: 'dark',
    primary: {
      main: '#ffe082',
    },
    appbar: '#212121',
    /* secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      main: red.A400,
    }, */
  } : {
    mode: 'light',
    primary: {
      main: '#ffe082',
    },
    appbar: '#ffe082',
  },
});

export default theme;
