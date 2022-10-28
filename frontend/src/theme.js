import React from 'react';
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? {
        // palette values for light mode
      primary: {
        main: '#087f23',
      },
      appbar: '#4caf50',
      code: '#ddd',
      bg: '#c7e5c8',
      about: '#98ee99',
    } : {
      // palette values for dark mode
      mode: 'dark',
      primary: {
        main: '#4caf50',
      },
      appbar: '#212121',
      code: '#303030',
      bg: '#121212',
      about: '#1e1e1e',
    }),
  },
});

const loadTheme = mode => React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

export default loadTheme;
