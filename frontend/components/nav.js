import React from 'react';
import Link from "next/link";
import { IconButton, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import { AppBar, Toolbar } from '@mui/material';

export default function Nav(props) {
  const theme = useTheme();

  return (
    <AppBar position='static' sx={{
      background: (theme) => theme.palette.appbar,
      transition: 'background-color 0.2s, color 0.2s',
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
            <IconButton
              aria-label={'Dark Mode'}
              sx={{ ml: 1 }}
              onClick={props.toggleColorMode}
              size="large">
              {theme.palette.mode === 'dark' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon />}
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
