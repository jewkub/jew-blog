import React from 'react';
import Link from "next/link";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function Nav(props) {
  const theme = useTheme();

  return (
  <AppBar position='static' sx={{
    background: theme.palette.appbar,
    transition: 'background-color 0.5s, color 0.5s',
    color: 'inherit',
    height: '6rem'
  }}>
    <Toolbar disableGutters>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          p: 3,
        }}
      >
        <Box>
          <Link href="/" passHref>
            <Button color={'inherit'}>My Blog</Button>
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
