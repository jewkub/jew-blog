import React from 'react';
import { Stack, Container, Box, Typography } from '@mui/material';
import Link from '../src/link';

export default function Footer() {
  return (
    <Box py={4} mt={'auto'} sx={{
      background: theme => theme.palette.appbar,
      transition: 'background-color 0.2s, color 0.2s',
    }}>
      <Container>
        <Stack direction='row'>
          <Typography variant='body2' color='textSecondary'>
            { `© Jew • ${new Date().getFullYear()}` }
          </Typography>
          <Typography variant='body2' color='textSecondary' ml={'auto'}>
            <Link href='https://www.facebook.com/jewkubb/'>
              Facebook
            </Link>
            { ' • ' }
            <Link href='https://github.com/jewkub'>
              Github
            </Link>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
