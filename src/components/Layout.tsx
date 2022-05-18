import { CssBaseline } from '@mui/material'

import Sidebar from './Sidebar/Sidebar'
import SignInModal from './Auth/SignInModal'
import CongratModule from './CongratModule.tsx/CongratModule'
import SignUpModal from './Auth/SignUpModal'
import RecoverPassModule from './RecoverPass/RecoverPassModule'
import MainNavigation from './MainNavigation/MainNavigation'

interface ILayout {
  children?: JSX.Element | JSX.Element[]
}

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Sidebar />
      <MainNavigation />
      <CongratModule />
      <RecoverPassModule />
      <SignInModal />
      <SignUpModal />
      <main>{children}</main>
    </>
  )
}

export default Layout
