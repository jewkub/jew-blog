export function getStrapiURL(path = "") {
  let url = new URL(`${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
  }${path}`);
  let params = new URLSearchParams(url.search);
  url.search = '';
  params.set('populate', '*'); // TODO: shit
  return `${url.href}?${params.toString().replace('*', '%2A')}`; // TODO: shit
}

const extract = data => {
  if (data.data === undefined) return ;
  data = data.data?.attributes;
  if (data?.constructor === Array) data = data.map(e => extract(e));
  data = extract(data);
  return data;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = extract(await response.json());
  console.log(data);
  return data;
}
