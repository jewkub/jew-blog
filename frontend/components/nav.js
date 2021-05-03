import React from 'react';
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { useTheme, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Nav(props) {
  const theme = useTheme();

  return (
  <AppBar position='static'>
    <Toolbar disableGutters>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          // bgcolor: 'background.default',
          color: 'text.primary',
          p: 3,
        }}
      >
        <Box>
          <Link href="/" passHref>
            <Typography variant="h6" component="p" sx={{ }}>
              My blog
            </Typography>
          </Link>
        </Box>
        <Box sx={{marginLeft: 'auto'}}>
          <IconButton aria-label={'Dark Mode'} sx={{ ml: 1 }} onClick={props.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon />}
          </IconButton>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
  );
}
