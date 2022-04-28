import { Button, IconButton, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {
  BottomMenuStackStyled,
  LogoBoxStyled,
  SidebarBoxStyled,
  SidebarButtonStyled,
  SidebarIconTextStyled,
  SidebarLinkStyled,
  ToolbarStyled,
  TopMenuStackStyled,
} from './SidebarStyles'
import { Link, useLocation } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import { upSidebarLinks, downSidebarLinks } from './SidebarLinks'

const Sidebar = () => {
  const location = useLocation()

  const scrollProps = {
    activeClass: 'ActiveLink',
    spy: true,
    smooth: true,
    hashSpy: true,
    offset: 0,
    duration: 200,
    isDynamic: true,
    ignoreCancelEvents: false,
    exact: 'true',
  }

  return (
    <SidebarBoxStyled>
      <LogoBoxStyled>
        <h3>LOGO</h3>
      </LogoBoxStyled>
      <ToolbarStyled>
        <TopMenuStackStyled>
          {upSidebarLinks.map(item => {
            return (
              <SidebarButtonStyled {...scrollProps} to={item.link}>
                {item.icon}
                {item.title}
              </SidebarButtonStyled>
            )
          })}
        </TopMenuStackStyled>
        <BottomMenuStackStyled>
          {downSidebarLinks.map(item => {
            return (
              <SidebarLinkStyled to={item.link}>
                {item.icon}
                {item.title}
              </SidebarLinkStyled>
            )
          })}
        </BottomMenuStackStyled>
      </ToolbarStyled>
    </SidebarBoxStyled>
  )
}

export default Sidebar
