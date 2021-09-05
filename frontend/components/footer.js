import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Stack } from '@material-ui/core';
import Link from '../src/link';

export default function Footer() {
  const theme = useTheme();
  return (
    <Box py={4} mt={'auto'} sx={{background: theme.palette.appbar, }}>
      <Container>
        <Stack direction='row'>
          <Typography variant="body2" color="textSecondary">
            { `© Jew • ${new Date().getFullYear()}` }
          </Typography>
          <Typography variant="body2" color="textSecondary" ml={'auto'}>
            <Link href="https://www.facebook.com/jewkubb/">
              Facebook
            </Link>
            {' • '}
            <Link href="https://github.com/jewkub">
              Github
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
