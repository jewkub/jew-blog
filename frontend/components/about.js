import { Container, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function About() {
  const theme = useTheme();
  return (
    <Paper style={{
      height: '50vh',
      maxHeight: '100vw',
      display: 'flex',
      transition: 'color 0.2s, background-color 0.2s',
      backgroundColor: theme.palette.about,
    }} elevation={3} square color={ theme.palette.code }>
      <Container sx={{
        my: 3
      }}>
        <Typography
          variant={'h2'}
          align={'center'}
        >
          My name is Jew
        </Typography>
        <Typography
          variant={'h4'}
        >
          I am Jew.
        </Typography>
      </Container>
    </Paper>
  );
}
