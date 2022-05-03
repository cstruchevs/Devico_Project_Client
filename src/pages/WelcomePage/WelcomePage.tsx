import React from 'react'
import AllEventsSection from '../../components/WelcomePageComponents/AllEventsSection/AllEventsSection'
import NewsSection from '../../components/WelcomePageComponents/NewsSection/NewsSection'
import PatrnersSection from '../../components/WelcomePageComponents/PartnersSection/PatrnersSection'
import UpcomingEventsSection from '../../components/WelcomePageComponents/UpcomingEventsSection/UpcomingEventsSection'
import WelcomeSection from '../../components/WelcomePageComponents/WelcomeSection/WelcomeSection'
import YearEventsSection from '../../components/WelcomePageComponents/YearEventsSection/YearEventsSection'

const WelcomePage = () => {

  return (
    <>
      <WelcomeSection />
      <UpcomingEventsSection />
      <section id="calendar">Events calendar</section>
      <AllEventsSection />
      <NewsSection />
      <PatrnersSection />
      <YearEventsSection />
    </>
  )
}

export default WelcomePage
