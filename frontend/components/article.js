import React, { useState } from 'react';
import Link from "next/link";
import Image from './image';
// import Link from '../src/link';
import { DateTime } from 'luxon';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { getStrapiMedia } from "../src/media";
import { Avatar, CardHeader, IconButton } from "@mui/material";

import { Blurhash } from "react-blurhash";

export default function Article({ article }) {
  const [hideHash, setHideHash] = useState(false);

  return (
    <Link as={`/article/${article.slug}`} href="/article/[slug]">
      <Card sx={{
        height: '100%',
        boxShadow: 0,
        transition: 'transform .2s',
        '&:hover': {
          transform: 'scale(1.01)'
        }
      }}>
        <CardActionArea>
          <CardHeader
            avatar={
              <Avatar
                aria-label='avatar'
                alt={ article.author.name }
                src={ getStrapiMedia(article.author.picture) }/>
            }
            title={ article.author.name }
            subheader={ DateTime.fromISO(article.publishedAt).toFormat('DDD') }
          />
        
          {/* <CardMedia
            sx={{
              height: 0,
              paddingTop: '56.25%', // 16:9
            }}
            image={getStrapiMedia(article.cover)}
            title={article.title}
          /> */}
          <div style={{
            height: 0,
            width: '100%',
            paddingTop: '56.25%', // 16:9
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              zIndex: 1,
              visibility: hideHash ? 'hidden' : 'visible',
              opacity: hideHash ? 0 : 1,
              transition: 'visibility 0.5s, opacity 0.5s linear',
            }}>
              <Blurhash hash={article.blurhash || 'LGF5]+Yk^6#M@-5c,1J5@[or[Q6.'}
                width="100%"
                height="100%"
              />
              
            </div>
            <img src={getStrapiMedia(article.cover)} alt={article.title} style={{
                position: 'absolute',
                top: 0,
                loading: 'lazy',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              onLoad={() => setHideHash(true)}
            />
          </div>
          <CardContent>
            <Typography variant="h5" component="h1" children={ article.title }/>
            <Typography
              color="text.secondary"
              sx={{
                textOverflow: 'ellipsis',
                'WebkitLineClamp': 2,
                'WebkitBoxOrient': 'vertical',
                overflow: 'hidden',
                display: '-webkit-box',
                height: '3em',
              }}
              children={article.description}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
