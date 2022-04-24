import React from 'react';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
// const theme = (mode) => () => createTheme(adaptV4Theme({
//   palette: mode == 'dark' ? {
//     mode: 'dark',
//     primary: {
//       main: '#4caf50',
//     },
//     appbar: '#212121',
//     code: '#303030'
//   } : {
//     mode: 'light',
//     primary: {
//       main: '#087f23',
//     },
//     appbar: '#4caf50',
//     code: '#ddd'
//   },
// }));

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? {
        // palette values for light mode
      primary: {
        main: '#087f23',
      },
      appbar: '#4caf50',
      code: '#ddd'
    } : {
      // palette values for dark mode
      mode: 'dark',
      primary: {
        main: '#4caf50',
      },
      appbar: '#212121',
      code: '#303030',
    }),
  },
});

const loadTheme = mode => React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

export default loadTheme;
