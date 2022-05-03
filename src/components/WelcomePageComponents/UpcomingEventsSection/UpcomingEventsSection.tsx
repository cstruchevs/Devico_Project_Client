import { Link, Stack, Typography } from '@mui/material'
import { FC, useMemo } from 'react'
import Carousel from '../../Carousel/Carousel'
import { SectionWrappperStyled } from './UpcomingEventsSectionStyles'
import { FakeUpcomingEvents } from '../../../FakeUpcomingEvents'
import UpcomingEventCard from '../../UpcomingEventCard/UpcomingEventCard'

interface IUpcomingEventsSection {}
const UpcomingEventsSection: FC<IUpcomingEventsSection> = () => {
  const upcomingCard = useMemo(
    () => FakeUpcomingEvents.map(item => <UpcomingEventCard {...item} />),
    [],
  )

  return (
    <SectionWrappperStyled component={'section'} id="upcoming">
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        alignItems={'baseline'}
      >
        <Typography variant="h4">Upcoming events</Typography>
        <Link href={'#'}>View all</Link>
      </Stack>
      <Carousel items={upcomingCard} />
    </SectionWrappperStyled>
  )
}

export default UpcomingEventsSection
