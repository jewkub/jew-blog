import React from "react";
import Link from "next/link";
import Image from "./image";
import { DateTime } from 'luxon';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { getStrapiMedia } from "../src/media";
import { Avatar, CardHeader, IconButton } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Article({ article }) {
  return (
    <Link as={`/article/${article.slug}`} href="/article/[slug]">
      <Card sx={{
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
              alt={ article.author.picture }
              src={ getStrapiMedia(article.author.picture) }/>
          }
          title={ article.author.name }
          subheader={ DateTime.fromISO(article.publishedAt).toFormat('DDD') }
        />
        
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
