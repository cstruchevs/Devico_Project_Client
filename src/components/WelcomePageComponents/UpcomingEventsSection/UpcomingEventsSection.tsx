import { Link, Stack, Button } from '@mui/material'
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import Carousel from '../../Carousel/Carousel'
import { SectionHeaderStyled, SectionWrappperStyled } from './UpcomingEventsSectionStyles'
import { FakeUpcomingEvents } from '../../../FakeUpcomingEvents'
import UpcomingEventCard, { IUpcomingEventCard } from '../../UpcomingEventCard/UpcomingEventCard'
import { IEvent, IEvents } from '../../../pages/WelcomePage/WelcomePage'
import axios from 'axios'

interface IUpcomingEventsSection {
  events: IEvents[]
}

const UpcomingEventsSection: FC<IUpcomingEventsSection> = ({ events }) => {
  const [upcomingCard, setUpcomingCard] = useState<JSX.Element[]>([])

  const ButtonReg = (eventId: string) => (
    <Button sx={{ width: '130px', paddingBlock: '5px' }} variant="contained" href={`/event/${eventId}`}>
      Register
    </Button>
  )

  useEffect(() => {
    setUpcomingCard(
      events.map((event: IEvents) => {
        const date = new Date(event.event.date)
        return (
          <UpcomingEventCard
            eventLabel="Next Event"
            title={event.event.name}
            date={`${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getUTCFullYear()}`}
            address={event.event.place}
            backgroundImage={event.url}
            discipline={event.event.discipline}
            status={event.event.status}
            series={event.event.series}
            eventId={event.event.id}
            button={ButtonReg(event.event.id)}
            linkShow={true}
          />
        )
      }),
    )
  }, [events])

  return (
    <SectionWrappperStyled component={'section'} id="upcoming">
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        alignItems={'baseline'}
      >
        <SectionHeaderStyled variant="h4">Upcoming events</SectionHeaderStyled>
        <Link href={'/events'}>View all</Link>
      </Stack>
      <Carousel items={upcomingCard} />
    </SectionWrappperStyled>
  )
}

export default memo(UpcomingEventsSection)
