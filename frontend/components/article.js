import React from 'react';
import Link from 'next/link';
// import Image from './image';
// import Link from '../src/link';
import { DateTime } from 'luxon';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { getStrapiMedia } from '../src/media';
import { Avatar, CardHeader, CardMedia } from '@mui/material';

// import { Blurhash } from "react-blurhash";

export default function Article({ article }) {
  return (
    <Link as={`/article/${article.slug}`} href='/article/[slug]'>
      <Card sx={{
        height: '100%',
        boxShadow: 'none',
        transition: 'transform 0.2s, color 0.2s, background-color 0.2s',
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
            subheaderTypographyProps={{
              sx: {
                transition: 'color 0.2s, background-color 0.2s',
              }
            }}
          />

          {/* TODO: use Blurhash as placeholder */}
          <CardMedia
            sx={{
              height: 0,
              paddingTop: '56.25%', // 16:9
            }}
            image={getStrapiMedia(article.cover)}
            title={article.title}
          />

          <CardContent>
            <Typography variant="h5" component="h1" children={ article.title }/>
            <Typography
              color="text.secondary"
              sx={{
                textOverflow: 'ellipsis',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                display: '-webkit-box',
                height: '3em',
                transition: 'color 0.2s, background-color 0.2s',
              }}
              children={article.description}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
