import { useRouter } from 'next/router'
import { fetchAPI } from "../../src/api";
import { DateTime } from 'luxon';
import { getStrapiMedia } from "../../src/media";
import Container from '@material-ui/core/Container';
import Divider from '../../components/divider';
import Image from "../../components/image";
import Seo from "../../components/seo";
import Markdown from '../../components/markdown';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Link from '../../src/link';
// import MuiLink from '@material-ui/core/Link';
import { useTheme } from '@material-ui/core/styles';
import { Avatar, Stack } from "@material-ui/core";

export default function Article({ article }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!article) {
    router.push('/404');
    return <></>;
  }

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };
  const theme = useTheme();

  return (
    <>
      <Seo seo={seo} />
      <Container pt={4}>
        <h1 style={{fontSize: '3rem', marginBottom: '10px'}}>{article.title}</h1>
        <Grid container spacing={1} mb={5}>
          <Grid item xs='auto'>
            <Avatar
              aria-label='avatar'
              alt={ article.author.name }
              src={ getStrapiMedia(article.author.picture) }/>
          </Grid>
          <Grid item>
            <Stack spacing={0}>
              <span>{article.author.name}</span>
              <span style={{
                color: theme.palette.text.secondary,
                fontSize: 'smaller',
              }} children={DateTime.fromISO(article.publishedAt).toFormat('DDD')}/>
            </Stack>
          </Grid>
        </Grid>

        <Markdown content={article.content} />

        <Divider/>
        <Grid container spacing={1} mb={2}>
          <Grid item xs='auto'>
            <Image
              image={article.author.picture}
              style={{
                height: 40,
                width: 40,
                borderRadius: "50%"
              }}
            />
          </Grid>
          <Grid item>
            <Stack spacing={0}>
              <span>By {article.author.name}</span>
              <span style={{
                color: theme.palette.text.secondary,
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
  const articles = await fetchAPI("/articles");

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
    `/articles?slug=${params.slug}&status=published`
  );
  // const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0] || null },
    revalidate: 5,
  };
}
