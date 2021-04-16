export default function Custom404() {
  return <p>404 - Page Not Found</p>
}

export async function getStaticProps(context) {
  return {props: {}};
}
