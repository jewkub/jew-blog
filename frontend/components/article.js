import React from "react";
import Link from "next/link";
import Image from "./image";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    '&:hover': {
      background: '#f00',
    },
  },
}));

const Article = ({ article }) => {
  const classes = useStyles();
  return (
    <Link as={`/article/${article.slug}`} href="/article/[slug]">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5">
            { article.title }
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Article;
