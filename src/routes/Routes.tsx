import React, { FC, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

interface IPageRoutes {}

const WelcomePage = React.lazy(() => import('../pages/WelcomePage/WelcomePage'))
const NoPage = React.lazy(() => import('../pages/NoPage/NoPage'))

const PageRoutes: FC<IPageRoutes> = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Suspense>
  )
}

export default PageRoutes
