import { CssBaseline } from '@mui/material'

import MainNavigation from './MainNavigation/MainNavigation'
import Sidebar from './Sidebar/Sidebar'

interface ILayout {
  children?: JSX.Element | JSX.Element[]
}

const Layout: React.FunctionComponent<ILayout> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Sidebar />
      <MainNavigation />
      <main>{children}</main>
    </>
  )
}

export default Layout
