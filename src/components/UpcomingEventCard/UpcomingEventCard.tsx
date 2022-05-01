import { Button, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import BgImage from '../../assets/imgs/Bitmap.png'
import {
  ActionStackStyled,
  AdressStyled,
  CardContentStyled,
  DateStyled,
  InfoStyled,
  LinkStyled,
  NextEventPaper,
  TitleStyled,
  UpcomingEventCardStyled,
} from './UpcomingEventCardStyles'

interface UpcomingEventCardProps {
  eventLabel?: string
  title?: string
  date?: string
  address?: string
  backgroundImage?: string
  discipline?: string
  status?: string
  series?: string
  eventId?: number
}

const UpcomingEventCard: FC<UpcomingEventCardProps> = ({
  eventLabel,
  title,
  date,
  address,
  backgroundImage,
  discipline,
  status,
  series,
  eventId,
}) => {
  const registerToEventHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
  }

  return (
    <UpcomingEventCardStyled
      sx={{
        backgroundImage: `url(${backgroundImage ? backgroundImage : BgImage})`,
      }}
    >
      <CardContentStyled>
        <Stack direction="column">
          <NextEventPaper elevation={0}>
            <Typography variant="h6">{eventLabel}</Typography>
          </NextEventPaper>
          <TitleStyled variant="h4">{title}</TitleStyled>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="baseline">
            <DateStyled>{date}</DateStyled>
            <AdressStyled>{address}</AdressStyled>
          </Stack>
        </Stack>
        <Stack direction="column">
          <InfoStyled variant="body1">Dicscipline: {discipline}</InfoStyled>
          <InfoStyled variant="body1">Status: {status}</InfoStyled>
          <InfoStyled variant="body1">Series: {series}</InfoStyled>
        </Stack>
      </CardContentStyled>

      <ActionStackStyled>
        <LinkStyled
          href={`${eventId}`}
          underline="hover"
          sx={{ paddingBottom: '10px', paddingTop: '10px' }}
          rel="noreferrer"
        >
          View details
        </LinkStyled>
        <Button
          sx={{ width: '160px', paddingBlock: '5px' }}
          variant="contained"
          onClick={registerToEventHandler}
        >
          Register
        </Button>
      </ActionStackStyled>
    </UpcomingEventCardStyled>
  )
}

export default UpcomingEventCard
