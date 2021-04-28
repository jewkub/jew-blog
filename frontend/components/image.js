import { getStrapiMedia } from "../lib/media";
import NextImage from 'next/image';

function Image({ image, style }) {
  const imageUrl = getStrapiMedia(image);
  // TODO: waiting for this issue to embed styles in Image
  // https://github.com/vercel/next.js/discussions/18312?sort=new
  /* return (
    <>
      <NextImage
        src={imageUrl}
        alt={image.alternativeText || image.name}
        // className={image.hash}
        width={style?.width || image.width}
        height={style?.height || image.height}
      />
    </>
  ); */
  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  )
};

export default Image;
