import { Fragment, Suspense } from 'react'
import SignInModal from './Auth/SignInModal'
import CongratModule from './CongratModule.tsx/CongratModule'
import SignUpModal from './Auth/SignUpModal'
import RecoverPassModule from './RecoverPassModule/RecoverPassModule'

import MainNavigation from './MainNavigation/MainNavigation'

interface ILayout {
  children: JSX.Element
}

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <CongratModule />
      <RecoverPassModule />
      <SignInModal />
      <SignUpModal />
      <main>{children}</main>
    </Fragment>
  )
}

export default Layout
