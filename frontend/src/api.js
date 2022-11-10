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
  // console.log(data);
  if (data?.data !== undefined) {
    data = data.data;
    if (data === null || data == undefined) return data;
    if (data.constructor === Array) return data.map(e => extract(e.attributes));
    data = data.attributes;
  }
  if (data?.constructor === Object) {
    Object.keys(data).forEach((key, i) => {
      data[key] = extract(data[key]);
    })
  }
  return data;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  // console.log(path);
  const data = extract(await response.json());
  // console.log(data);
  return data;
}
