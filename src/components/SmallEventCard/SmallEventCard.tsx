import { Stack } from '@mui/material'
import { FC, memo } from 'react'
import BgImage from '../../assets/imgs/Bitmap.png'
import {
  ActionStackStyled,
  AdressStyled,
  CardContentStyled,
  DateAdreesStackStyled,
  DateStyled,
  EventLabelStyled,
  InfoStyled,
  LinkStyled,
  NextEventPaperStyled,
  PendingStatusStyled,
  TitleStyled,
  UpcomingEventCardStyled,
} from './SmallEventCardStyles'

interface ISmallEventCard {
  eventLabel: string
  title: string
  date: string
  address: string
  backgroundImage?: string
  discipline: string
  status: string
  series: string
  eventId?: number
  button?: JSX.Element
  mark?: string
  markColor?: string
}

const SmallEventCard: FC<ISmallEventCard> = ({
  eventLabel,
  title,
  date,
  address,
  backgroundImage,
  discipline,
  status,
  series,
  eventId,
  button,
  markColor,
  mark,
}) => {
  return (
    <UpcomingEventCardStyled
      sx={{
        backgroundImage: `url(${backgroundImage ? backgroundImage : BgImage})`,
      }}
    >
      <CardContentStyled>
        <Stack direction="column">
          <NextEventPaperStyled elevation={0}>
            <EventLabelStyled variant="h6">{eventLabel}</EventLabelStyled>
          </NextEventPaperStyled>
          <TitleStyled variant="h4">{title}</TitleStyled>
          <DateAdreesStackStyled>
            <DateStyled>{date}</DateStyled>
            <AdressStyled>{address}</AdressStyled>
          </DateAdreesStackStyled>
        </Stack>
        <Stack mt={{ xs: 10, lg: 15 }} direction="column">
          <InfoStyled variant="body1">Dicscipline: {discipline}</InfoStyled>
          <InfoStyled variant="body1">Status: {status}</InfoStyled>
          <InfoStyled variant="body1">Series: {series}</InfoStyled>
        </Stack>
      </CardContentStyled>

      <ActionStackStyled>
        <LinkStyled href={`${eventId}`} underline="hover" rel="noreferrer">
          View details
        </LinkStyled>
        {button}
      </ActionStackStyled>
      {mark && (
        <PendingStatusStyled sx={{ backgroundColor: markColor }}>{mark}</PendingStatusStyled>
      )}
    </UpcomingEventCardStyled>
  )
}

export default memo(SmallEventCard)
