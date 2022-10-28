import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconButton, Button, Container, AppBar, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';

export default function Nav(props) {
  const theme = useTheme();
  const router = useRouter();
  const isHomePage = router.pathname == '/';

  // https://stackoverflow.com/a/60708895
  const [transparent, setTransparent] = useState(isHomePage);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setTransparent(position < Math.min(window.innerHeight, window.innerWidth));
  };

  useEffect(() => {
    if (!isHomePage) {
      setTransparent(false);
      window.removeEventListener('scroll', handleScroll);
      return ;
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <AppBar sx={{
      position: 'fixed',
      background: transparent ? 'rgba(0, 0, 0, 0)' : theme.palette.appbar,
      ...(transparent ? {
        boxShadow: 'none'
      } : null),
      transition: 'background-color 0.2s, color 0.2s',
      color: 'inherit',
      height: '6rem',
      zIndex: 10,
    }}>
      <Toolbar disableGutters>
        <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            p: 3,
          }}
        >
          <Link href='/' passHref>
            <Button color={'inherit'}>My Blog</Button>
          </Link>
          <IconButton
            aria-label={'Dark Mode'}
            sx={{ ml: 'auto' }}
            onClick={props.toggleColorMode}
            size='large'>
            {theme.palette.mode === 'dark' ? <Brightness4RoundedIcon /> : <Brightness7RoundedIcon />}
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
