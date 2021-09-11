import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

export default function ArticleDivider() {
  const theme = useTheme();
  return (
    <Divider variant="middle"sx={{'&::before, &::after': {
      borderTop: `2px solid ${theme.palette.divider}`,
      top: '-1px'
    }}}>
      <span style={{color: theme.palette.text.secondary, fontSize: 'x-large'}}>/ / /</span>
    </Divider>
  );
}
