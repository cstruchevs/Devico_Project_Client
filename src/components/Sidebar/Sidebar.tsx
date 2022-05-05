import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import DesktopSidebar from './DesktopSidebar/DesktopSidebar'
import MobileSidebar from './MobileSidebar/MobileSidebar'
import {
  BottomMenuStackStyled,
  LogoBoxStyled,
  SidebarButtonStyled,
  SidebarLinkStyled,
  ToolbarStyled,
  TopMenuStackStyled,
  SidebarNavStyled,
} from './SidebarStyles'
import { upSidebarLinks, downSidebarLinks } from './SidebarLinks'
import { scrollConfig } from './ScrollConfig'
import { useNavigate, useLocation } from 'react-router-dom'

interface ISidebar {}

const Sidebar: FC<ISidebar> = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const toggleDrawerHandler = useCallback(() => {
    setIsDrawerOpen(prevState => !prevState)
  }, [])

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth'})
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [location])

  const sidebar = useMemo(() => {
    return (
      <>
        <LogoBoxStyled onClick={() => navigate('/')}>
          <Typography variant="h6">LOGO</Typography>
        </LogoBoxStyled>
        <ToolbarStyled>
          <TopMenuStackStyled>
            {upSidebarLinks.map(item => (
              <SidebarButtonStyled key={item.title}>
                <SidebarNavStyled
                  to={item.link}
                  onClick={toggleDrawerHandler}
                  className={
                    location.pathname + location.hash === item.link ? 'ActiveLink' : undefined
                  }
                >
                  <item.icon />
                  {item.title}
                </SidebarNavStyled>
              </SidebarButtonStyled>
            ))}
          </TopMenuStackStyled>
          <BottomMenuStackStyled>
            {downSidebarLinks.map(item => (
              <SidebarButtonStyled key={item.title}>
                <SidebarNavStyled
                  to={item.link}
                  className={
                    location.pathname === item.link ? 'ActiveLink' : undefined
                  }
                >
                  <item.icon />
                  {item.title}
                </SidebarNavStyled>
              </SidebarButtonStyled>
            ))}
          </BottomMenuStackStyled>
        </ToolbarStyled>
      </>
    )
  }, [navigate, location, toggleDrawerHandler])

  return (
    <>
      {matches && <DesktopSidebar>{sidebar}</DesktopSidebar>}
      {!matches && (
        <MobileSidebar isDrawerOpen={isDrawerOpen} onToggleDrawer={toggleDrawerHandler}>
          {sidebar}
        </MobileSidebar>
      )}
    </>
  )
}

export default memo(Sidebar)
