// TODO: fix theme to use system UI

import Nav from './nav';
import React, { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import getDesignTokens from '../src/theme';
import Footer from './footer';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function Layout({ children }) {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
  //   noSsr: true,
  // });
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // useEffect(() => {
  let prefersDarkMode = true;
  
  // });
  // const prefersDarkMode = true;

  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');

  if (typeof window !== 'undefined') {
    prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const curMode = prefersDarkMode ? 'dark' : 'light';
    if (curMode != mode) setMode(prefersDarkMode ? 'dark' : 'light');
  }

  const colorMode = React.useMemo(() => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode(prevMode => prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  console.log('mode = ' + mode);
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  console.log('theme = ' + JSON.stringify(theme.palette.bg));

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline enableColorScheme={true}/>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: theme.palette.bg,
          transition: 'background-color 0.2s, color 0.2s',
        }}>
          <Nav toggleColorMode={colorMode.toggleColorMode}/>
            {children}
          <Footer />
        </div>
        
      </ThemeProvider>
      </ColorModeContext.Provider>
  );
};
