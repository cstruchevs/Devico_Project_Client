import React, { FC, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

interface IPageRoutes {}

const WelcomePage = React.lazy(() => import('../pages/WelcomePage/WelcomePage'))

const PageRoutes: FC<IPageRoutes> = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  )
}

export default PageRoutes
