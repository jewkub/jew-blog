import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../src/api";
import { DateTime } from 'luxon';
import { getStrapiMedia } from "../../src/media";
import Container from '@material-ui/core/Container';
import Divider from '../../components/divider';
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../../src/link';
import Copyright from '../../components/footer';
import Button from '@material-ui/core/Button';
import MuiLink from '@material-ui/core/Link';
// import { getStrapiMedia } from "../../src/media";
import { useTheme } from '@material-ui/core/styles';
import rehypeRaw from 'rehype-raw';
import { Avatar, Stack } from "@material-ui/core";

export default function Article({ article }) {
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
        <h1 style={{fontSize: '3em', marginBottom: '10px'}}>{article.title}</h1>
        <Grid container spacing={1} mb={5}>
          <Grid item xs='auto'>
            <Avatar
              aria-label='avatar'
              alt={ article.author.picture }
              src={ getStrapiMedia(article.author.picture) }/>
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
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            a: MuiLink
          }}
          children={article.content} />
        <Divider/>
        <Grid container spacing={1}>
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
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  // const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0] },
  };
}
