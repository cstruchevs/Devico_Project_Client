import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Box } from '@mui/system'
import { SectionWrappperStyled } from './CalendarSectionStyles'
import './CalnedarStylesOverride.css'

const CalendarSection = () => {
  return (
    <SectionWrappperStyled component="section" id="calendar">
      <Box width={'100%'}>
        <FullCalendar
          height={660}
          headerToolbar={{
            left: 'title',
            right: 'prev,next',
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
        />
      </Box>
    </SectionWrappperStyled>
  )
}

export default CalendarSection
