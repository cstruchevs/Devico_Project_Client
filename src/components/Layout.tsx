import { CssBaseline } from '@mui/material'

import Sidebar from './Sidebar/Sidebar'
import SignInModal from './Auth/SignInModal'
import CongratModule from './CongratModule.tsx/CongratModule'
import SignUpModal from './Auth/SignUpModal'
import RecoverPassModule from './RecoverPass/RecoverPassModule'
import MainNavigation from './MainNavigation/MainNavigation'
import ErrorModal from './ErrorModal/ErrorModal'
import RegToEvent from './SingleEventPage/RegToEvent/RegToEvent'
import CancelEvent from './CancelEvent/CancelEvent'

interface ILayout {
  children?: JSX.Element | JSX.Element[]
}

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <RegToEvent />
      <ErrorModal />
      <Sidebar />
      <MainNavigation />
      <CongratModule />
      <RecoverPassModule />
      <SignInModal />
      <SignUpModal />
      <CancelEvent />
      <main>{children}</main>
    </>
  )
}

export default Layout
