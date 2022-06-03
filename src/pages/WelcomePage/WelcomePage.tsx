import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import AllEventsSection from '../../components/WelcomePageComponents/AllEventsSection/AllEventsSection'
import CalendarSection from '../../components/WelcomePageComponents/CalendarSection/CalendarSection'
import NewsSection from '../../components/WelcomePageComponents/NewsSection/NewsSection'
import PatrnersSection from '../../components/WelcomePageComponents/PartnersSection/PatrnersSection'
import UpcomingEventsSection from '../../components/WelcomePageComponents/UpcomingEventsSection/UpcomingEventsSection'
import WelcomeSection from '../../components/WelcomePageComponents/WelcomeSection/WelcomeSection'
import YearEventsSection from '../../components/WelcomePageComponents/YearEventsSection/YearEventsSection'

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
  users: string[]
}

export interface IEvents {
  event: IEvent
  url: string
}

const WelcomePage = () => {
  const [events, setEvents] = useState<IEvents[]>([])
  const [nextEvent, setNextEvent] = useState<IEvents>()
  const [upcomingEvents, setUpcomingEvents] = useState<IEvents[]>([])
  const [eventsForYear, setEventsForYear] = useState<IEvents[]>([])

  const getEventsHandler = useCallback(async () => {
    const reqData = await axios.get('http://localhost:5000/events/')
    const sortedEvents = reqData.data.sort((a: IEvents, b: IEvents) => {
      return new Date(a.event.date).getTime() - new Date(b.event.date).getTime()
    })
    setEvents(sortedEvents)

    const today = new Date()
    const tmpUpcoming: IEvents[] = []
    for (let i = 0; i < sortedEvents.length; i++) {
      if (new Date(sortedEvents[i].event.date) >= today) {
        tmpUpcoming.push(sortedEvents[i])
      }
    }
    const tmpYears: IEvents[] = []
    for (let i = 0; i < sortedEvents.length; i++) {
      if (new Date(sortedEvents[i].event.date).getFullYear() === today.getFullYear()) {
        tmpYears.push(sortedEvents[i])
      }
    }
    setNextEvent(tmpUpcoming[0])
    setUpcomingEvents(tmpUpcoming)
    setEventsForYear(tmpYears)
  }, [])

  useEffect(() => {
    getEventsHandler()
  }, [getEventsHandler])

  return (
    <>
      {nextEvent && <WelcomeSection event={nextEvent} />}
      <UpcomingEventsSection events={upcomingEvents}/>
      <CalendarSection events={events} />
      <AllEventsSection events={upcomingEvents} />
      <NewsSection />
      <PatrnersSection />
      <YearEventsSection events={eventsForYear} />
    </>
  )
}

export default WelcomePage
