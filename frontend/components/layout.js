import Nav from "./nav";
import React from 'react';
import { useTheme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import loadTheme from '../src/theme';
import Footer from './footer';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function Layout({ children }) {
  /* const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
    noSsr: true,
  }); */
  const prefersDarkMode = true;

  const [mode, setMode] = React.useState(prefersDarkMode ? 'dark' : 'light');

  const toggleColorMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  }

  const theme = React.useMemo(
    loadTheme(mode),
    [mode, prefersDarkMode],
  );

  return (
    // <ColorModeContext.Provider value={colorMode}>
    
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div style={{
          display:'flex',
          flexDirection:'column',
          minHeight: '100vh'
        }}>
          <Nav toggleColorMode={toggleColorMode}/>
          {children}
        
        <Footer />
        </div>
        
      </ThemeProvider>
    // </ColorModeContext.Provider>
  )
};
