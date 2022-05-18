import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AllEventsSection from '../../components/WelcomePageComponents/AllEventsSection/AllEventsSection'
import CalendarSection from '../../components/WelcomePageComponents/CalendarSection/CalendarSection'
import NewsSection from '../../components/WelcomePageComponents/NewsSection/NewsSection'
import PatrnersSection from '../../components/WelcomePageComponents/PartnersSection/PatrnersSection'
import UpcomingEventsSection from '../../components/WelcomePageComponents/UpcomingEventsSection/UpcomingEventsSection'
import WelcomeSection from '../../components/WelcomePageComponents/WelcomeSection/WelcomeSection'
import YearEventsSection from '../../components/WelcomePageComponents/YearEventsSection/YearEventsSection'

export interface IEvents {
  id: string
  name: string
  date: string
  place: string
  discipline: string
  status: string
  series: string
  image: string
  costOfParticipation: string
  eventInfo: string
  statusProgress: string
  createdAt: string
  updatedAt: string
  users: string[]
}

const WelcomePage = () => {
  const [events, setEvents] = useState<IEvents[]>([])

  const getEventsHandler = async () => {
    const reqData = await axios.get('http://localhost:5000/events/')
    const sortedEvents = reqData.data.sort((a: IEvents, b:IEvents) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    setEvents(sortedEvents)
  }

  useEffect(() => {
    getEventsHandler()
    console.log("mem")
  }, [])

  return (
    <>
      <WelcomeSection events={events} />
      <UpcomingEventsSection />
      <CalendarSection />
      <AllEventsSection />
      <NewsSection />
      <PatrnersSection />
      <YearEventsSection />
    </>
  )
}

export default WelcomePage
