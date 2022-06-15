import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import AllEventsSection from '../../components/WelcomePageComponents/AllEventsSection/AllEventsSection'
import CalendarSection from '../../components/WelcomePageComponents/CalendarSection/CalendarSection'
import NewsSection from '../../components/WelcomePageComponents/NewsSection/NewsSection'
import PatrnersSection from '../../components/WelcomePageComponents/PartnersSection/PatrnersSection'
import UpcomingEventsSection from '../../components/WelcomePageComponents/UpcomingEventsSection/UpcomingEventsSection'
import WelcomeSection from '../../components/WelcomePageComponents/WelcomeSection/WelcomeSection'
import YearEventsSection from '../../components/WelcomePageComponents/YearEventsSection/YearEventsSection'
import { RootState } from '../../store'
import { ICalendarEvent } from '../../store/events'
import { sagaActions } from '../../store/sagaActions'

export interface IEvent {
  id: string
  name: string
  date: string
  place: string
  discipline: string
  status: string
  series: string
  imageKey: string
  costOfParticipation: string
  eventInfo: string
  statusProgress: string
  createdAt: string
  updatedAt: string
}

export interface IEvents {
  event: IEvent
  url: string
}

const WelcomePage = () => {
  const dispatch = useDispatch()
  const upcomingEvents: IEvents[] = useSelector((state: RootState) => state.events.upcomingEvents)
  const yearsEvents: IEvents[] = useSelector((state: RootState) => state.events.yearsEvents)
  const calendarEvents: ICalendarEvent[] = useSelector(
    (state: RootState) => state.events.calendarEvents,
  )

  useEffect(() => {
    dispatch({ type: sagaActions.GET_UPCOMING_EVENTS })
    dispatch({ type: sagaActions.GET_YEARS_EVENTS })
    dispatch({ type: sagaActions.GET_CALENDAR_EVENTS })
  }, [dispatch])

  return (
    <>
      {upcomingEvents.length !== 0 && <WelcomeSection event={upcomingEvents[0]} />}
      {upcomingEvents.length !== 0 && <UpcomingEventsSection events={upcomingEvents} />}
      <CalendarSection events={calendarEvents} />
      <AllEventsSection events={upcomingEvents} />
      <NewsSection />
      <PatrnersSection />
      {yearsEvents.length !== 0 && <YearEventsSection events={yearsEvents} />}
    </>
  )
}

export default WelcomePage
