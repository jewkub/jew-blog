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
    <AppBar position='relative' sx={{
      background: (theme) => theme.palette.appbar,
      transition: 'background-color 0.2s, color 0.2s',
      color: 'inherit',
      height: '6rem',
      zIndex: 10,
    }}>
      <Toolbar disableGutters>
        <div style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            p: 3,
          }}
        >
          <div>
            <Link href="/" passHref>
              <Button color={'inherit'}>My Blog</Button>
            </Link>
          </div>
          <div style={{marginLeft: 'auto'}}>
            <IconButton
              aria-label={'Dark Mode'}
              sx={{ ml: 1 }}
              onClick={props.toggleColorMode}
              size="large">
              {theme.palette.mode === 'dark' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon />}
            </IconButton>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
