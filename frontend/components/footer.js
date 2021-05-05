import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Stack } from '@material-ui/core';

export default function Footer() {
  const theme = useTheme();
  return (
    <Box py={4} mt={2} sx={{background: theme.palette.appbar,}}>
      <Container>
        <Stack direction='row'>
          <Typography variant="body2" color="textSecondary">
            { `© Jew • ${new Date().getFullYear()}` }
          </Typography>
          <Typography variant="body2" color="textSecondary" ml={'auto'}>
            { `Facebook • Github` }
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
