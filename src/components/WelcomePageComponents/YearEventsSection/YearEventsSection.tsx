import { SectionWrappperStyled } from './YearEventsSectionStyles'
import { Link, Stack, Typography } from '@mui/material'
import { FC, memo, useMemo } from 'react'
import Carousel from '../../Carousel/Carousel'
import { FakeUpcomingEvents } from '../../../FakeUpcomingEvents'
import UpcomingEventCard from '../../UpcomingEventCard/UpcomingEventCard'

interface IYearEventsSection {}

const YearEventsSection: FC<IYearEventsSection> = () => {
  const upcomingCard = useMemo(
    () => FakeUpcomingEvents.map(item => <UpcomingEventCard {...item} />),
    [],
  )

  return (
    <SectionWrappperStyled component={'section'}>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        alignItems={'baseline'}
      >
        <Typography variant="h4">Events for the lst year</Typography>
        <Link href={'#'}>View all</Link>
      </Stack>
      <Carousel items={upcomingCard} />
    </SectionWrappperStyled>
  )
}

export default memo(YearEventsSection)
