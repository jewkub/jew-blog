import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { Blurhash } from 'react-blurhash';

// https://stackoverflow.com/a/5058336
function load(src) {
  return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = src;
      // if (image.complete) return resolve('cached'); // https://stackoverflow.com/a/15352841
      image.addEventListener('load', resolve);
      image.addEventListener('error', reject);
  });
};

export default function Cover() {
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [showBlurHash, setShowBlurHash] = useState(true);

  useEffect(() => {
    const image = '/cover.jpg';
    load(image).then(() => {
      setIsBgLoaded(true);
      setTimeout(() => setShowBlurHash(false), 5000);
    });
  });

  return (
    <div style={{
      height: 'calc(100vh - 6rem)',
      maxHeight: '100vw',
      position: 'relative',
    }}>

      {showBlurHash ? 
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        opacity: isBgLoaded ? 0 : 1,
        transition: 'opacity 0.15s linear',
      }}>
        <Blurhash
          hash={'WBBXsFRN00a1pGo|f~obV[V@kBkW00t8~pbIx]WBV@WZkBozRjn$'}
          width='100%'
          height='100%'
        />
      </div> : null}

      <div style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...(isBgLoaded ? {
          backgroundImage: 'url("/cover.jpg")',
        } : null),
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Typography
          variant={'h1'}
          color={'rgba(0, 0, 0, 0.87)'}
          sx={{
            position: 'relative',
            zIndex: 3,
          }}
        >Jew</Typography>
      </div>
    </div>
  );
};
