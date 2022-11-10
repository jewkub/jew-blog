import React, { Suspense } from 'react';
import { useRouter } from 'next/router'
import { fetchAPI } from '../../src/api';
import { DateTime } from 'luxon';
import { getStrapiMedia } from '../../src/media';
import Divider from '../../components/divider';
import Image from '../../components/image';
import Seo from '../../components/seo';
import { Box } from '@mui/material';

// import Link from '../../src/link';
// import MuiLink from '@mui/material/Link';
import { Avatar, Stack, Container, Grid, CircularProgress } from '@mui/material';

const markdownPromise = import('../../components/markdown');
const Markdown = React.lazy(() => markdownPromise);

export default function Article({ article }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <CircularProgress/>;
  }

  if (!article) {
    // router.push('/404'); TODO: https://nextjs.org/docs/messages/no-router-instance
    return <></>;
  }

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <>
      <Seo seo={seo} />
      <Container sx={{
        // TODO: use global context for nav height
        paddingTop: '6rem',
      }}>
        <h1 style={{fontSize: '3rem', marginBottom: '10px'}}>{article.title}</h1>
        <Grid container spacing={1} mb={5}>
          <Grid item xs='auto'>
            <Avatar
              aria-label='avatar'
              alt={ article.writer.name }
              src={ getStrapiMedia(article.writer.avatar) }/>
          </Grid>
          <Grid item>
            <Stack spacing={0}>
              <span>{article.writer.name}</span>
              <Box sx={{
                color: theme => theme.palette.text.secondary,
                transition: 'color 0.2s',
                fontSize: 'smaller',
              }} children={DateTime.fromISO(article.publishedAt).toFormat('DDD')}/>
            </Stack>
          </Grid>
        </Grid>

        <Suspense fallback={<CircularProgress/>}>
          <Markdown content={article.content} />
        </Suspense>

        <Divider/>
        <Grid container spacing={1} mb={2}>
          <Grid item xs='auto'>
            <Image
              image={article.writer.avatar}
              style={{
                height: 40,
                width: 40,
                borderRadius: '50%'
              }}
            />
          </Grid>
          <Grid item>
            <Stack spacing={0}>
              <span>By {article.writer.name}</span>
              <Box sx={{
                color: theme => theme.palette.text.secondary,
                transition: 'color 0.2s',
                fontSize: 'smaller',
              }} children={DateTime.fromISO(article.publishedAt).toFormat('DDD')}/>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI('/articles');

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?filters[slug][$eq]=${params.slug}&status=published&_sort=publishedAt:desc&populate[1]=writer.avatar&populate[0]=cover`
  );
  // const categories = await fetchAPI('/categories');

  return {
    props: { article: articles[0] || null },
    revalidate: 5,
  };
}
