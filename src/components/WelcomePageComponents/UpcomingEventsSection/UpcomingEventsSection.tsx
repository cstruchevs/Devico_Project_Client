import { Link, Stack, Button } from '@mui/material'
import { FC, memo, useMemo } from 'react'
import Carousel from '../../Carousel/Carousel'
import { SectionHeaderStyled, SectionWrappperStyled } from './UpcomingEventsSectionStyles'
import { FakeUpcomingEvents } from '../../../FakeUpcomingEvents'
import UpcomingEventCard from '../../UpcomingEventCard/UpcomingEventCard'

interface IUpcomingEventsSection {}
const UpcomingEventsSection: FC<IUpcomingEventsSection> = () => {

  const ButtonReg = useMemo(
    () => (
      <Button
        sx={{ width: '130px', paddingBlock: '5px' }}
        variant="contained"
      >
        Register
      </Button>
    ),
    [],
  )

  const upcomingCard = useMemo(
    () => FakeUpcomingEvents.map(item => <UpcomingEventCard {...item} button={ButtonReg}/>),
    [ButtonReg],
  )

  return (
    <SectionWrappperStyled component={'section'} id="upcoming">
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        alignItems={'baseline'}
      >
        <SectionHeaderStyled variant="h4">Upcoming events</SectionHeaderStyled>
        <Link href={'#'}>View all</Link>
      </Stack>
      <Carousel items={upcomingCard} />
    </SectionWrappperStyled>
  )
}

export default memo(UpcomingEventsSection)
