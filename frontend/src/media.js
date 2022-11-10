import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  media = media.data.attributes;
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return imageUrl;
}
