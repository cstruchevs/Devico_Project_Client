import { FC, memo, useCallback, useMemo, useState } from 'react'
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

interface ISidebar {}

const Sidebar: FC<ISidebar> = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const toggleDrawerHandler = useCallback(() => {
    setIsDrawerOpen(prevState => !prevState)
  }, [])

  const sidebar = useMemo(() => {
    return (
      <>
        <LogoBoxStyled>
          <Typography variant="h6">LOGO</Typography>
        </LogoBoxStyled>
        <ToolbarStyled>
          <TopMenuStackStyled>
            {upSidebarLinks.map(item => (
              <SidebarButtonStyled key={item.title}>
                <SidebarNavStyled {...scrollConfig} to={item.link} onClick={toggleDrawerHandler}>
                  <item.icon />
                  {item.title}
                </SidebarNavStyled>
              </SidebarButtonStyled>
            ))}
          </TopMenuStackStyled>
          <BottomMenuStackStyled>
            {downSidebarLinks.map(item => (
              <SidebarButtonStyled key={item.title}>
                <SidebarLinkStyled to={item.link}>
                  <item.icon />
                  {item.title}
                </SidebarLinkStyled>
              </SidebarButtonStyled>
            ))}
          </BottomMenuStackStyled>
        </ToolbarStyled>
      </>
    )
  }, [toggleDrawerHandler])

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
