import {
  BottomMenuStackStyled,
  LogoBoxStyled,
  SidebarBoxStyled,
  SidebarButtonStyled,
  SidebarLinkStyled,
  ToolbarStyled,
  TopMenuStackStyled,
} from './DesktopSidebarStyles'
import { upSidebarLinks, downSidebarLinks } from '../SidebarLinks'
import { scrollConfig } from '../ScrollConfig'

const DesktopSidebar = () => {
  return (
    <SidebarBoxStyled>
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
  )
}

export default DesktopSidebar
