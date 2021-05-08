import React, { lazy, Suspense } from "react";
import Article from "./article";
import Grid from '@material-ui/core/Grid';

export default function Articles({ articles }) {

  return (
    <Grid container spacing={3} mt={0} mb={3}>
      {
        /* i%2 != 0 ?
        <Grid item xs={12} key={ article.slug + '-divider' }>
          <Divider variant={'middle'}/>
        </Grid> :
        <>
          <Hidden mdUp><Grid item xs={12} key={ article.slug + '-dividerhorizontal' }>
            <Divider variant={'middle'}/>
          </Grid></Hidden>
          <Hidden mdDown><Grid item xs={0.2} key={ article.slug + '-dividervertical' }>
            <Divider orientation="vertical" variant={'middle'}/>
          </Grid></Hidden>
        </> */
        articles.map(article => 
          <Grid item xs={12} md={6} key={ article.slug }>
            <Article article={article}/>
          </Grid>
        )
      }
    </Grid>
  );
};
