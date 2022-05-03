import React from 'react'
import PatrnersSection from '../../components/PartnersSection/PatrnersSection'
import UpcomingEventsSection from '../../components/UpcomingEventsSection/UpcomingEventsSection'
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import YearEventsSection from '../../components/YearEventsSection/YearEventsSection'

const WelcomePage = () => {

  return (
    <>
      <WelcomeSection />
      <UpcomingEventsSection />
      <section id="calendar">Events calendar</section>
      <section id="news">News</section>
      <PatrnersSection />
      <YearEventsSection />
    </>
  )
}

export default WelcomePage
