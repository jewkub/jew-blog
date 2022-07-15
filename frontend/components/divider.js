import Divider from '@mui/material/Divider';

export default function ArticleDivider() {
  return (
    <Divider variant='middle' sx={{
      '&::before, &::after': {
        borderTop: theme => `2px solid ${theme.palette.divider}`,
        top: '-1px',
      },
      '& span': {
        color: 'text.secondary',
        fontSize: 'x-large',
      },
    }}>
      <span>/ / /</span>
    </Divider>
  );
}
