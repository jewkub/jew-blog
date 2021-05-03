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
      background: theme.palette.action.hover,
    },
  },
}));

export default function Article({ article }) {
  const classes = useStyles();
  return (
    <Link as={`/article/${article.slug}`} href="/article/[slug]">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h1" children={ article.title }/>
        </CardContent>
      </Card>
    </Link>
  );
};
