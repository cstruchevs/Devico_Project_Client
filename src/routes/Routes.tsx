import React, { FC, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import AllEventsPage from '../pages/AllEventsPage/AllEventsPage'
import LicensePage from '../pages/LicensePage/LicensePage'
import RecoverPasswordPage from '../pages/RecoverPasswordPage/RecoverPasswordPage'
import SingleEventPage from '../pages/SingleEventPage/SingleEventPage'
import YearsEventsPage from '../pages/YearsEvents/YearsEvents'

import checkLocalStorage from '../services/checkLocalStorage'
import { RootState } from '../store'
import { IUserInterface } from '../store/auth'

interface IPageRoutes {}

const WelcomePage = React.lazy(() => import('../pages/WelcomePage/WelcomePage'))
const ProfilePage = React.lazy(() => import('../pages/ProfilePage/ProfilePage'))
const NoPage = React.lazy(() => import('../pages/NoPage/NoPage'))

const PageRoutes: FC<IPageRoutes> = () => {
  const user = useSelector<RootState, IUserInterface | null>(state => state.auth.user)
  
  const userLocalStorage = checkLocalStorage()
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/upcoming-events" element={<AllEventsPage/>}/> 
        <Route path="/years-events" element={<YearsEventsPage/>}/> 
        <Route path="/event/:event_id" element={<SingleEventPage/>}/> 
        <Route path="/profile" element={(user || userLocalStorage) ? <ProfilePage/> : <Navigate to="/" />}/> 
        <Route path="/profile/license" element={(user || userLocalStorage) ? <LicensePage/> : <Navigate to="/" />}/>
        <Route path="/recover-password/:id/:token" element={<RecoverPasswordPage />}/> 
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Suspense>
  )
}

export default PageRoutes
