import { FC } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import DesktopSidebar from './DesktopSidebar/DesktopSidebar'
import MobileSidebar from './MobileSidebar/MobileSidebar'

interface ISidebar {}

const Sidebar: FC<ISidebar> = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <>
      {matches && <DesktopSidebar />}
      {!matches && <MobileSidebar />}
    </>
  )
}

export default Sidebar
