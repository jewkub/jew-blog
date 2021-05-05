import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';

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
