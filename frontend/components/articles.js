import React from "react";
import Article from "./article";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
// import Card from '@material-ui/core/Card';

const Articles = ({ articles }) => {
  // const classes = useStyles();
  // console.log(classes);

  /* const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length); */

  return (
    <Grid container spacing={3}>
      {
        articles.map((article, i) => (
          <Grid item xs={12} md={6} key={ article.slug }>
            <Article article={article}/>
          </Grid>
        ))
      }
    </Grid>
  );
};

export default Articles;
