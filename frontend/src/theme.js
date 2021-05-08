import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

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
