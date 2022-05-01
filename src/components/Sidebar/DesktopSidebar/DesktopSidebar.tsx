import { SidebarBoxStyled } from './DesktopSidebarStyles'
import { FC, memo } from 'react'

interface IDesktopSidebar {
  children: JSX.Element | JSX.Element[]
}

const DesktopSidebarWrapper: FC<IDesktopSidebar> = ({ children }) => {
  return <SidebarBoxStyled>{children}</SidebarBoxStyled>
}

export default memo(DesktopSidebarWrapper)
