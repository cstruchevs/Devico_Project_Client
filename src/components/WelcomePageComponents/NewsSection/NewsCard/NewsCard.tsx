import { CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { FC, memo } from 'react'
import { CardWrappperStyled } from './NewsCardStyles'
import BitMap from '../../../../assets/imgs/Bitmap.png'
import { Box } from '@mui/system'

interface INewsCard {
  news: {
    id: string
    title: string
    date: string
    description: string
  }
  url: string
}

const NewsCard: FC<INewsCard> = ({ news, url }) => {
  return (
    <CardWrappperStyled>
      <CardMedia component="img" alt="news image" height="220" image={url ? url : BitMap} />
      <CardContent
        sx={{ display: 'flex', flexFlow: 'column', justifyContent: 'space-between', flexGrow: 1 }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {news.title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {`${new Date(news.date).toISOString().split('T')[0]}`}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {news.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`${news.id}`}>Read more</Link>
      </CardActions>
    </CardWrappperStyled>
  )
}

export default memo(NewsCard)
