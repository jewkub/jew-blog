import React from 'react';
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { useTheme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

// const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
// import { ColorModeContext } from '../pages/_app';

export default function Nav(props) {
  const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);
  return (
  <AppBar>
    <Toolbar>
      <Link href="/" sx={{ flexGrow: 1 }} passHref>
        <Typography variant="h6" component="a" sx={{ flexGrow: 1 }}>
          My blog
        </Typography>
      </Link>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={props.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
    </Toolbar>
  </AppBar>
  );
}
