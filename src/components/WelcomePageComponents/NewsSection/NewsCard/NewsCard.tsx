import { CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { FC, memo } from 'react'
import { CardWrappperStyled } from './NewsCardStyles'

interface INewsCard {
  image?: string
  title?: string
  date?: string
  description?: string
  link?: string
}

const NewsCard: FC<INewsCard> = ({ image, title, date, description, link }) => {
  return (
    <CardWrappperStyled>
      <CardMedia component="img" alt="news image" height="220" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {date}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={link}>
          Read more
        </Link>
      </CardActions>
    </CardWrappperStyled>
  )
}

export default memo(NewsCard)
