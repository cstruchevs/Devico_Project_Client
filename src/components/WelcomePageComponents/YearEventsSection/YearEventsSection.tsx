import { SectionWrappperStyled } from './YearEventsSectionStyles'
import { Button, Link, Stack, Typography } from '@mui/material'
import { FC, memo, useEffect, useMemo, useState } from 'react'
import Carousel from '../../Carousel/Carousel'
import { FakeUpcomingEvents } from '../../../FakeUpcomingEvents'
import UpcomingEventCard from '../../UpcomingEventCard/UpcomingEventCard'
import { IEvents } from '../../../pages/WelcomePage/WelcomePage'

interface IYearEventsSection {
  events: IEvents[]
}

const YearEventsSection: FC<IYearEventsSection> = ({ events }) => {
  const [yearsCards, setYearsCards] = useState<JSX.Element[]>([])

  const ButtonReg = (eventId: string) => (
    <Button sx={{ width: '130px', paddingBlock: '5px' }} variant="contained" href={`/event/${eventId}`}>
      Register
    </Button>
  )

  const ButtonFinished = useMemo(
    () => (
      <Button
        sx={{ width: '130px', paddingBlock: '5px', '&:hover': { cursor: 'not-allowed' } }}
        variant="contained"
      >
        Finished
      </Button>
    ),
    [],
  )

  useEffect(() => {
    setYearsCards(
      events.map((event: IEvents) => {
        const date = new Date(event.event.date)
        const today = new Date()
        let eventLabel: string = ''
        if (date < today) {
          eventLabel = 'Finished event'
        } else {
          eventLabel = 'Next event'
        }

        return (
          <UpcomingEventCard
            eventLabel={eventLabel}
            title={event.event.name}
            date={`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}
            address={event.event.place}
            backgroundImage={event.url}
            discipline={event.event.discipline}
            status={event.event.status}
            series={event.event.series}
            eventId={event.event.id}
            button={eventLabel === 'Next event' ? ButtonReg(event.event.id) : ButtonFinished}
            linkShow={true}
          />
        )
      }),
    )
  }, [events, ButtonFinished])

  return (
    <SectionWrappperStyled component={'section'}>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        width={'100%'}
        alignItems={'baseline'}
      >
        <Typography variant="h4">Events for the last year</Typography>
        <Link href={'#'}>View all</Link>
      </Stack>
      <Carousel items={yearsCards} />
    </SectionWrappperStyled>
  )
}

export default memo(YearEventsSection)
