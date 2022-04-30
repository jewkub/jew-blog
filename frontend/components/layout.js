import Nav from './nav';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import loadTheme from '../src/theme';
import Footer from './footer';

export default function Layout({ children }) {
  /* const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    noSsr: true,
  }); */
  const prefersDarkMode = true;

  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');

  const colorMode = React.useMemo(() => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode(prevMode => prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // const toggleColorMode = () => {
  //   setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  // }

  // const theme = React.useMemo(
  //   loadTheme(mode),
  //   [mode, prefersDarkMode],
  // );

  // Update the theme only if the mode changes
  const theme = loadTheme(mode);

  return (
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
  );
};
