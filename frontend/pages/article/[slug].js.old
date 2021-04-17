import Link from 'next/link'
import { fetchAPI } from "../../lib/api";

export default function Article({ article }) {
  return (
    <>
      <h1>{article.title}</h1>
      <h2>{article.content}</h2>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles?status=published");
  return {
    paths: articles.map(e => ({
      params: { slug: e.slug }
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const article = (await fetchAPI(`/articles?slug=${context.params.slug}`))[0];
  return {
    props: { article, },
  };
}
