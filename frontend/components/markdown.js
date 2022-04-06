import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw';
import Gist from './gist';
import Link from '../src/link';
import { useTheme } from '@mui/material/styles';
import { Box } from "@mui/material";

export default function Markdown(props) {
  const theme = useTheme();

  return <Box
    sx={{
      minHeight: '10vh',
      fontSize: '1.5em',
    }}
  >
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        a: Link,
        gist: Gist,
        p: ({ children }) => <p style={{lineHeight: '1.5'}} children={children} />,
        li: ({ children }) => <li style={{lineHeight: '1.5'}} children={children} />,
        pre: ({ children }) => <pre style={{
          background: theme.palette.code,
          borderRadius: '8px',
          padding: '8px',
          overflow: 'hidden', // just for sure viewport will not break
        }} children={children} />,
        code: ({ children}) => <code style={{
          background: theme.palette.code,
          borderRadius: '4px',
          padding: '2px 4px',
          whiteSpace: 'pre-wrap',
        }} children={children} />,
        img: ({ src, children }) => <img src={src} style={{
          maxWidth: '80%',
          display: 'block',
          margin: '24px auto',
        }} children={children} />,
        blockquote: ({ children }) => <blockquote style={{
          'box-shadow': 'gray 5px 0px 0px 0px inset',
          padding: '5px 0px 5px 30px',
          'margin-left': '-5px',
          'font-style': 'italic',
        }} children={children} />,
      }}
      linkTarget='_blank'
      children={props.content} />
  </Box>
}
