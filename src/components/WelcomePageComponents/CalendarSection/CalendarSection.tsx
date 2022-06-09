import { FC, memo, useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Box } from '@mui/system'
import { SectionWrappperStyled } from './CalendarSectionStyles'
import './CalnedarStylesOverride.css'
import { ICalendarEvent } from '../../../store/events'

interface ICalendarSection {
  events: ICalendarEvent[]
}

const CalendarSection: FC<ICalendarSection> = ({ events }) => {
  const [allEvents, setAllEvents] = useState<{ title: string; date: Date }[]>([])

  document.querySelector('.fc-prev-button')?.addEventListener('click', () => {
    console.log('Prev')
  })

  useEffect(() => {
    setAllEvents(
      events.map((event: ICalendarEvent) => ({
        title: event.name,
        date: new Date(event.date),
      })),
    )
  }, [events])

  return (
    <SectionWrappperStyled component="section" id="calendar">
      <Box width="100%">
        <FullCalendar
          height={660}
          headerToolbar={{
            left: 'title',
            right: 'prev,next',
          }}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={allEvents}
          displayEventTime={false}
          dayMaxEvents={2}
          eventDisplay={'block'}
        />
      </Box>
    </SectionWrappperStyled>
  )
}

export default memo(CalendarSection)
