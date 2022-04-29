import { Stack } from '@mui/material'
import { FC, useCallback, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { upSidebarLinks, downSidebarLinks } from '../SidebarLinks'
import { scrollConfig } from '../ScrollConfig'
import { BottomMenuStackStyled, WrapperStyled, DrawerStyled, LogoBoxStyled, MenuButtonStyled, MenuCloseButtonStyled, SidebarBoxStyled, SidebarButtonStyled, SidebarLinkStyled, ToolbarStyled, TopMenuStackStyled } from './MobileSidebarStyles'
import CloseIcon from '@mui/icons-material/Close'

interface IMobileSidebar {}

const MobileSidebar: FC<IMobileSidebar> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const toggleDrawerHandler = useCallback(() => {
    setIsDrawerOpen(prevState => !prevState)
  }, [])

  return (
    <WrapperStyled>
      <MenuButtonStyled onClick={toggleDrawerHandler} size="large">
        <MenuIcon />
      </MenuButtonStyled>

      <DrawerStyled anchor="left" open={isDrawerOpen} onClose={toggleDrawerHandler}>
        <Stack>
          <MenuCloseButtonStyled onClick={toggleDrawerHandler} size="large">
            <CloseIcon />
          </MenuCloseButtonStyled>
        </Stack>
        <SidebarBoxStyled p={2} role="presentation">
          <LogoBoxStyled>
            <h3>LOGO</h3>
          </LogoBoxStyled>
          <ToolbarStyled>
            <TopMenuStackStyled>
              {upSidebarLinks.map(item => {
                return (
                  <SidebarButtonStyled {...scrollConfig} to={item.link}>
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
      </DrawerStyled>
    </WrapperStyled>
  )
}

export default MobileSidebar
