import { memo } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Box } from '@mui/system'
import { SectionWrappperStyled } from './CalendarSectionStyles'
import './CalnedarStylesOverride.css'

const events = [
  { title: "today's event dqwdqwd qwfqwf wqf", date: new Date() },
  { title: "today's event", date: new Date() },
  { title: "today's event", date: new Date() },
  { title: "today's event", date: new Date() },
  { title: "today's event", date: new Date() },
  { title: "today's event", date: new Date() },
]

const CalendarSection = () => {
  return (
    <SectionWrappperStyled component="section" id="calendar">
      <Box width='100%'>
        <FullCalendar
          height={660}
          headerToolbar={{
            left: 'title',
            right: 'prev,next',
          }}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          displayEventTime={false}
          dayMaxEvents={2}
          eventDisplay={"block"}
        />
      </Box>
    </SectionWrappperStyled>
  )
}

export default memo(CalendarSection)
