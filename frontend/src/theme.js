import { createMuiTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = (mode) => () => createMuiTheme({
  palette: mode == 'dark' ? {
    mode: 'dark',
    primary: {
      main: '#4caf50',
    },
    appbar: '#212121',
    code: '#303030'
  } : {
    mode: 'light',
    primary: {
      main: '#087f23',
    },
    appbar: '#4caf50',
    code: '#ddd'
  },
});

export default theme;
