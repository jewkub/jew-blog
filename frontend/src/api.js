export function getStrapiURL(path = "") {
  let url = new URL(`${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"
  }${path}`);
  let params = new URLSearchParams(url.search);
  url.search = '';
  params.set('populate', '*'); // TODO: shit
  return `${url.href}?${params.toString().replace('*', '%2A')}`; // TODO: shit
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = (await response.json()).data;
  return data;
}
