import { getStrapiMedia } from "../src/media";
import NextImage from 'next/image';

export default function Image({ image, style, useNext = false }) {
  const imageUrl = getStrapiMedia(image);
  // TODO: waiting for this issue to embed styles in Image
  // https://github.com/vercel/next.js/discussions/18312?sort=new
  if (useNext) return (
    <NextImage
      src={imageUrl}
      alt={image.alternativeText || image.name}
      // placeholder="blur"
      // className={image.hash}
    />
  );
  return (
    <img
      loading="lazy"
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  )
};
